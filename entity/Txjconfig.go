package entity

import "time"

// Txjconfig 配置信息
type Txjconfig struct {
	Id           int64     `gorm:"primary_key;column:id;type:bigint(20);not null"` // id,自动编号
	DataId       string    `gorm:"unique;column:data_id;type:varchar(255)"`        // 配置ID
	CDesc        string    `gorm:"column:c_desc;type:varchar(256)"`                // 描述
	Content      string    `gorm:"column:content;type:longtext;not null"`          // 内容
	Md5          string    `gorm:"column:md5;type:varchar(32)"`                    // MD5校验码
	UserCreate   string    `gorm:"column:user_create;type:varchar(20);not null"`   // 创建人
	GmtCreate    time.Time `gorm:"column:gmt_create;type:datetime;not null"`       // 创建时间
	UserModified string    `gorm:"column:user_modified;type:varchar(20)"`          // 修改人
	GmtModified  time.Time `gorm:"column:gmt_modified;type:datetime"`              // 修改时间
}
