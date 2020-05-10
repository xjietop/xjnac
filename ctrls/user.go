package ctrls

import (
	"encoding/json"

	"gitee.com/xjieinfo/xjnac/dto"
	"gitee.com/xjieinfo/xjnac/models"
	"github.com/dchest/captcha"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	uuid "github.com/satori/go.uuid"
)

func XjieLogin(ctx *gin.Context) {
	username := ctx.DefaultQuery("username", "")
	password := ctx.DefaultQuery("password", "")
	code := ctx.DefaultQuery("code", "")
	captchaid := ctx.DefaultQuery("captchaid", "")
	println(username + " " + password + " " + code + " " + captchaid)
	if !captcha.VerifyString(captchaid, code) {
		ctx.JSON(200, new(models.R).Fail("验证码不正确"))
		return
	}
	if username == "" || password == "" {
		ctx.JSON(200, new(models.R).Fail("用户名和密码必须输入"))
		return
	}
	has, xjUser := models.GetUser(username, password)
	if !has {
		ctx.JSON(200, new(models.R).Fail("用户名或密码不正确"))
		return
	}
	u1 := uuid.NewV4()
	uid := u1.String()
	xjUser.Access_token = uid

	session := sessions.Default(ctx)
	session.Set("token", uid)
	session.Set("userid", xjUser.Fid)
	session.Set("username", xjUser.Fname)
	session.Set("userdescription", xjUser.Fdescription)
	powers := models.GetUserApiPowerList(xjUser.Fid)
	session.Set("powers", powers)
	session.Save()

	xjUser.Token_type = "bearer"
	xjUser.Refresh_token = "51cd4b19-3410-42e5-a997-00e68c0cf382"
	xjUser.Expires_in = 43199
	xjUser.Scope = "server"
	xjUser.Is_saler = 0
	xjUser.Is_province = 0
	xjUser.User_id = 11
	xjUser.Is_area = 0
	xjUser.OssServerAddress = "https://imga.hnhcyy.com/"
	xjUser.Is_region = 0
	xjUser.Admin_club = []int{1, 2, 3}
	xjUser.Dept_id = 27
	xjUser.Username = "ZIY00000907"
	ctx.JSON(200, new(models.R).Success(xjUser))
}

func XjieUserInfo(ctx *gin.Context) {
	data := `
{
        "sysUser":{
            "userId":11,
            "username":"马南桂",
            "password":null,
            "createTime":"2019-08-30 03:52:38",
            "updateTime":"2019-09-27 01:48:48",
            "delFlag":"0",
            "lockFlag":"0",
            "phone":"13317316278",
            "avatar":null,
            "deptId":27,
            "tenantId":1,
            "wxOpenid":null,
            "club":"1,2,3",
            "clubSet":[
                1,
                2,
                3
            ],
            "supplySid":"1",
            "supplySet":[
                1
            ],
            "qqOpenid":null,
            "userCode":"ZIY00000907",
            "isProvince":0,
            "isArea":0,
            "isSaler":0,
            "isRegion":0
        },
        "permissions":[
            "sys_banner_add",
            "job_sys_job_add",
            "admin_product_presale",
            "sys_user_reset_bill_type",
            "sys_user_edit",
            "sys_menu_del",
            "sys_product_set_index",
            "admin_other",
            "admin_windowInfo_save",
            "admin_auth_user",
            "sys_set_label",
            "admin_message_manage",
            "sys_dept_add",
            "sys_area_set",
            "sys_dict_del",
            "admin_product_category",
            "sys_product_up_down",
            "admin_system_router",
            "sys_client_add",
            "admin_icon_edit",
            "sys_product_set_price",
            "admin_product_dic",
            "sys_menu_edit",
            "sys_user_add",
            "sys_user_operating",
            "admin_finance_payment_supplement",
            "sys_log_del",
            "sys_province_count",
            "sys_user_status",
            "admin_other_icon",
            "sys_big_count_price",
            "sys_client_edit",
            "sys_update_index",
            "admin_product_coming",
            "admin_member_list",
            "daemon_status_trace_log_del",
            "job_sys_job_start_job",
            "admin_order_refund",
            "admin_product_tag",
            "admin_other_top",
            "sys_dict_edit",
            "admin_window_del",
            "admin_finance",
            "admin_supplier_relation",
            "admin_system",
            "sys_user_reset_pwd",
            "admin_market_promotion",
            "admin_message_manage_audit",
            "job_sys_job_shutdown_job",
            "sys_product_edit",
            "admin_other_windowInfo",
            "admin_auth",
            "admin_member",
            "admin_window_save",
            "admin_system_client",
            "admin_order",
            "admin_product_attribute",
            "admin_product_new",
            "admin_auth_dept",
            "sys_product_inspection_report",
            "sys_product_fullIndex",
            "sys_edit_user",
            "admin_system_social",
            "admin_news_list",
            "admin_message",
            "admin_icon_save",
            "sys_dept_del",
            "admin_version_edit",
            "admin_other_banner",
            "admin_windowInfo_edit",
            "sys_social_details_del",
            "sys_product_relation",
            "sys_role_edit",
            "admin_message_manage_edit",
            "admin_system_log",
            "sys_product_price",
            "sys_product_add",
            "admin_market",
            "sys_token_del",
            "scheduling",
            "admin_feedback_edit",
            "sys_role_del",
            "job_sys_job_refresh_job",
            "sys_user_del",
            "sys_menu_add",
            "admin_auth_menu",
            "admin_other_feedback",
            "admin_message_template",
            "sys_employer_count",
            "sys_dept_edit",
            "admin_order_list",
            "sys_banner_edit",
            "admin_supplier_area",
            "admin_finance_payment",
            "admin_inner_order",
            "admin_auth_role",
            "admin_system_dict",
            "admin_message_manage_delete",
            "job_sys_job_del",
            "sys_product_fullEsIndex",
            "sys_client_del",
            "admin_product_list",
            "admin_news",
            "admin_supplier",
            "admin_system_token",
            "admin_supplier_list",
            "admin_finance_review_price",
            "job_sys_job_edit",
            "admin_other_version",
            "sys_low_add_edit",
            "sys_social_details_edit",
            "sys_product_top",
            "admin_news_edit",
            "admin_message_sms",
            "admin_finance_payment_pay_status",
            "sys_new_product_push",
            "admin_news_add",
            "sys_dict_add",
            "task-list",
            "sys_role_add",
            "sys_set_sy",
            "sys_user_count",
            "admin_message_manage_add",
            "sys_banner_del",
            "admin_product",
            "sys_role_perm",
            "admin_market_special",
            "sys_social_details_add",
            "admin_version_save"
        ],
        "roles":[
            1
        ]
    }
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	//ctx.JSON(200, new(m_pub.R).Success(dat))
	//return

	session := sessions.Default(ctx)
	var sysUser dto.SysUser
	sysUser.Userid = session.Get("userid").(int)
	sysUser.Username = session.Get("username").(string)
	var userInfoDto = new(dto.UserInfoDto)
	userInfoDto.SysUser = sysUser
	//userInfoDto.Access_token=session.Get("token").(string)
	//userInfoDto.Userdescription=session.Get("userdescription").(string)
	userInfoDto.Roles = []int{1}
	//userid := session.Get("userid").(int)
	//powers := m_xjie.GetUserApiPowerList(userid);
	//session.Set("powers",powers)
	//session.Save()
	var powers []string
	if session.Get("powers") != nil {
		powers = session.Get("powers").([]string)
	}
	userInfoDto.Permissions = powers
	ctx.JSON(200, new(models.R).Success(userInfoDto))
}

func XjieLogout(ctx *gin.Context) {
	session := sessions.Default(ctx)
	session.Clear()
	session.Save()
	ctx.JSON(200, new(models.R).Success(true))
}

//func XjieUserList(ctx *gin.Context){
//	spage := ctx.DefaultQuery("current", "1")
//	ssize := ctx.DefaultQuery("size", "20")
//	page, _ := strconv.Atoi(spage)
//	size, _ := strconv.Atoi(ssize)
//	where := ctx.DefaultQuery("where", "")
//	list := m_xjie.GetUserList(where,page,size)
//	Page := new(m_pub.Page)
//	Page.Records = list
//	Page.Size = size
//	Page.Total = m_xjie.GetUserCount(where)
//	Page.Current = page
//	if Page.Total%size == 0{
//		Page.Pages = Page.Total/size
//	}else{
//		Page.Pages = Page.Total/size+1
//	}
//	ctx.JSON(200, new(m_pub.R).Success(Page))
//}

//func XjieUserGroupList(ctx *gin.Context){
//	spage := ctx.DefaultQuery("current", "1")
//	ssize := ctx.DefaultQuery("size", "20")
//	page, _ := strconv.Atoi(spage)
//	size, _ := strconv.Atoi(ssize)
//	where := ctx.DefaultQuery("where", "")
//	list := m_xjie.GetUserGroupList(where,page,size)
//	Page := new(m_pub.Page)
//	Page.Records = list
//	Page.Size = size
//	Page.Total = m_xjie.GetUserGroupCount(where)
//	Page.Current = page
//	if Page.Total%size == 0{
//		Page.Pages = Page.Total/size
//	}else{
//		Page.Pages = Page.Total/size+1
//	}
//	ctx.JSON(200, new(m_pub.R).Success(Page))
//}
//func XjieUserDisable(ctx *gin.Context){
//	Fid := ctx.DefaultQuery("Fid", "")
//	fid,_ := strconv.Atoi(Fid)
//	rownums,err := m_xjie.DisableUser(fid)
//	if err!=nil{
//		ctx.JSON(200, new(m_pub.R).Fail(err.Error()))
//		return
//	}
//	if rownums>0{
//		ctx.JSON(200, new(m_pub.R).Success("用户禁用成功"))
//	}else{
//		ctx.JSON(200, new(m_pub.R).Fail("用户禁用失败"))
//	}
//}

//func XjieUserEnable(ctx *gin.Context){
//	Fid := ctx.DefaultQuery("Fid", "")
//	fid,_ := strconv.Atoi(Fid)
//	rownums,err := m_xjie.EnableUser(fid)
//	if err!=nil{
//		ctx.JSON(200, new(m_pub.R).Fail(err.Error()))
//		return
//	}
//	if rownums>0{
//		ctx.JSON(200, new(m_pub.R).Success("用户启用成功"))
//	}else{
//		ctx.JSON(200, new(m_pub.R).Fail("用户启用失败"))
//	}
//}
