package entity

// Txjusergroup [...]
type Txjusergroup struct {
	FUserID  int `gorm:"column:FUserID;type:int(11);not null"`
	FGroupID int `gorm:"column:FGroupID;type:int(11);not null"`
}
