package models

type Txjapipower struct {
	Fid     int `xorm:"not null pk autoincr INT(11)"`
	Fuserid int `xorm:"not null default 0 INT(11)"`
	Fapiid  int `xorm:"not null default 0 INT(11)"`
}
