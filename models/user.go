package models

import (
	"fmt"

	"gitee.com/xjieinfo/xjnac/util"
)

type XjUser struct {
	Fid          int    `json:"fid"`
	Fname        string `json:fname`
	Fdescription string `json:"fdescription"`
	Fdisable     int

	Access_token     string `json:"access_token"`
	Token_type       string `json:"token_type"`
	Refresh_token    string `json:"refresh_token"`
	Expires_in       int    `json:"expires_in"`
	Scope            string `json:"scope"`
	Is_saler         int    `json:"is_saler"`
	Is_province      int    `json:"is_province"`
	User_id          int    `json:"user_id"`
	Is_area          int    `json:"is_area"`
	OssServerAddress string `json:"oss_server_address"`
	Is_region        int    `json:"is_region"`
	Admin_club       []int  `json:"admin_club"`
	Dept_id          int    `json:"dept_id"`
	Username         string `json:"username"`
}

func GetUser(username, password string) (bool, XjUser) {
	sql := `select fid,fname,fdescription,fmd5 from txjuser
		where fisgroup=0 and fname=?
		and fmd5=md5(?)
		limit 1 `
	var xjuser XjUser
	has, err := util.Db.SQL(sql, username, password).Get(&xjuser)
	if err != nil {
		util.LogError(err.Error())
		return has, xjuser
	}
	return has, xjuser
}
func GetUserPowerList(userid int) []string {
	sql := `select concat(fpower,'-',fdetail) from txjpower
		where fhave=1 and fuserid=?
		or fuserid in(select fgroupid from txjusergroup where fuserid=?)
		group by concat(fpower,'-',fdetail) `
	var powerlist []string
	err := util.Db.SQL(sql, userid, userid).Find(&powerlist)
	if err != nil {
		util.LogError(err.Error())
		return powerlist
	}
	return powerlist
}

func GetUserApiPowerList(userid int) []string {
	sql := `select a.furl from txjapipower p left join txjapi a on p.fapiid=a.fid
		where p.fuserid=? 
		or p.fuserid in(select fgroupid from txjusergroup where fuserid=?) `
	var powerlist []string
	err := util.Db.SQL(sql, userid, userid).Find(&powerlist)
	if err != nil {
		util.LogError(err.Error())
		return powerlist
	}
	return powerlist
}

func GetUserList(where string, page, size int) []XjUser {
	start := (page - 1) * size
	sql := `select fid,fname,fdescription,fdisable,fmd5 from txjuser where fisgroup=0 `
	if where != "" {
		sql += " and (fname like '%" + where + "%' or fdescription like '%" + where + "%')"
	}
	sql += " limit ?,?"
	var xjuser []XjUser
	err := util.Db.SQL(sql, start, size).Find(&xjuser)
	if err != nil {
		util.LogError(err.Error())
		return xjuser
	}
	return xjuser
}
func GetUserCount(where string) int {
	sql := `select count(1)	from txjuser where fisgroup=0 `
	if where != "" {
		sql += " and (fname like '%" + where + "%' or fdescription like '%" + where + "%')"
	}
	var count int
	_, err := util.Db.SQL(sql).Get(&count)
	if err != nil {
		util.LogError(err.Error())
		return 0
	}
	return count
}
func GetUserGroupList(where string, page, size int) []XjUser {
	start := (page - 1) * size
	sql := `select fid,fname,fdescription,fdisable,fmd5 from txjuser where fisgroup=1 `
	if where != "" {
		sql += " and (fname like '%" + where + "%' or fdescription like '%" + where + "%')"
	}
	sql += " limit ?,?"
	var xjuser []XjUser
	err := util.Db.SQL(sql, start, size).Find(&xjuser)
	if err != nil {
		util.LogError(err.Error())
		return xjuser
	}
	return xjuser
}
func GetUserGroupCount(where string) int {
	sql := `select count(1)	from txjuser where fisgroup=1 `
	if where != "" {
		sql += " and (fname like '%" + where + "%' or fdescription like '%" + where + "%')"
	}
	var count int
	_, err := util.Db.SQL(sql).Get(&count)
	if err != nil {
		util.LogError(err.Error())
		return 0
	}
	return count
}

func DisableUser(Fid int) (int64, error) {
	sql := "update txjuser set fdisable=1 where fid=?"
	result, err := util.Db.Exec(sql, Fid)
	if err != nil {
		fmt.Println(err)
		return 0, err
	}
	return result.RowsAffected()
}
func EnableUser(Fid int) (int64, error) {
	sql := "update txjuser set fdisable=0 where fid=?"
	result, err := util.Db.Exec(sql, Fid)
	if err != nil {
		fmt.Println(err)
		return 0, err
	}
	return result.RowsAffected()
}
