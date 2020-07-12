package entity

// Txjuser [...]
type Txjuser struct {
	FID          int     `gorm:"primary_key;column:FID;type:int(11);not null"`
	FName        string  `gorm:"unique;column:FName;type:varchar(50);not null"`
	FDescription string  `gorm:"column:FDescription;type:varchar(100)"`
	FIsGroup     []uint8 `gorm:"column:FIsGroup;type:bit(1)"`
	FKey         string  `gorm:"column:FKey;type:varchar(50)"`
	FEmpID       int     `gorm:"column:FEmpID;type:int(11)"`
	FDisable     int     `gorm:"column:FDisable;type:int(11)"`
	FUsed        []uint8 `gorm:"column:FUsed;type:bit(1)"`
	FCashKm      string  `gorm:"column:FCashKm;type:varchar(50)"` // 资金科目
	FMd5         string  `gorm:"column:FMd5;type:char(32)"`
}
