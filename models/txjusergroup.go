package models

type Txjusergroup struct {
	Fuserid  int `xorm:"not null INT(11)"`
	Fgroupid int `xorm:"not null INT(11)"`
}
