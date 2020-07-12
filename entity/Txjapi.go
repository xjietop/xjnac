package entity

// Txjapi [...]
type Txjapi struct {
	Fid   int    `gorm:"primary_key;column:fid;type:int(11);not null"`
	Furl  string `gorm:"column:furl;type:varchar(100)"`
	Fname string `gorm:"column:fname;type:varchar(50)"`
}
