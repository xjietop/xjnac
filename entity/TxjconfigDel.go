package entity

import "time"

// TxjconfigDel 删除的配置信息
type TxjconfigDel struct {
	ID           int64     `gorm:"primary_key;column:id;type:bigint(20);not null"` // id,自动编号
	DataID       string    `gorm:"column:data_id;type:varchar(255)"`               // 配置ID
	CDesc        string    `gorm:"column:c_desc;type:varchar(256)"`                // 描述
	Content      string    `gorm:"column:content;type:longtext;not null"`          // 内容
	Md5          string    `gorm:"column:md5;type:varchar(32)"`                    // MD5校验码
	UserCreate   string    `gorm:"column:user_create;type:varchar(20);not null"`   // 创建人
	GmtCreate    time.Time `gorm:"column:gmt_create;type:datetime;not null"`       // 创建时间
	UserModified string    `gorm:"column:user_modified;type:varchar(20)"`          // 修改人
	GmtModified  time.Time `gorm:"column:gmt_modified;type:datetime"`              // 修改时间
	UserDeleted  string    `gorm:"column:user_deleted;type:varchar(20)"`           // 删除人
	GmtDeleted   time.Time `gorm:"column:gmt_deleted;type:datetime"`               // 删除时间
}
