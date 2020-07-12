package entity

// Txjapipower [...]
type Txjapipower struct {
	Fid     int `gorm:"primary_key;column:fid;type:int(11);not null"`
	Fuserid int `gorm:"column:fuserid;type:int(11);not null"`
	Fapiid  int `gorm:"column:fapiid;type:int(11);not null"`
}
