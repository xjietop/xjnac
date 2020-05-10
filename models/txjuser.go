package models

type Txjuser struct {
	Fid          int    `xorm:"not null pk INT(11)"`
	Fname        string `xorm:"not null unique VARCHAR(50)"`
	Fdescription string `xorm:"VARCHAR(100)"`
	Fisgroup     int    `xorm:"BIT(1)"`
	Fkey         string `xorm:"VARCHAR(50)"`
	Fempid       int    `xorm:"INT(11)"`
	Fdisable     int    `xorm:"INT(11)"`
	Fused        int    `xorm:"BIT(1)"`
	Fcashkm      string `xorm:"default '' comment('资金科目') VARCHAR(50)"`
	Fmd5         string `xorm:"default '' CHAR(32)"`
}
