package dto

type SysUser struct{
	Userid int `json:"userId"`
	Username string `json:"username"`
}

type UserInfoDto struct{
	SysUser SysUser `json:"sysUser"`
	Roles []int `json:"roles"`
	Permissions []string `json:"permissions"`
}
