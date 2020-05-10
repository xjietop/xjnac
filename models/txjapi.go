package models

type Txjapi struct {
	Fid   int    `xorm:"not null pk autoincr INT(11)"`
	Furl  string `xorm:"default '' VARCHAR(100)"`
	Fname string `xorm:"default '' VARCHAR(50)"`
}
