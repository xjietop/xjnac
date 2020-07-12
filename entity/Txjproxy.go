package entity

// Txjproxy 网关代理
type Txjproxy struct {
	Fid   int    `gorm:"primary_key;column:fid;type:int(11);not null"`
	Path  string `gorm:"column:path;type:varchar(50);not null"`
	Proxy string `gorm:"column:proxy;type:varchar(50);not null"`
}
