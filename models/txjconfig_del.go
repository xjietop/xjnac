package models

import (
	"time"
)

type TxjconfigDel struct {
	Id           int64     `xorm:"pk autoincr comment('id,自动编号') BIGINT(20)"`
	DataId       string    `xorm:"comment('配置ID') VARCHAR(255)"`
	CDesc        string    `xorm:"comment('描述') VARCHAR(256)"`
	Content      string    `xorm:"not null comment('内容') LONGTEXT"`
	Md5          string    `xorm:"comment('MD5校验码') VARCHAR(32)"`
	UserCreate   string    `xorm:"not null default '' comment('创建人') VARCHAR(20)"`
	GmtCreate    time.Time `xorm:"not null default '2010-05-05 00:00:00' comment('创建时间') DATETIME"`
	UserModified string    `xorm:"default '' comment('修改人') VARCHAR(20)"`
	GmtModified  time.Time `xorm:"comment('修改时间') DATETIME"`
	UserDeleted  string    `xorm:"default '' comment('删除人') VARCHAR(20)"`
	GmtDeleted   time.Time `xorm:"comment('删除时间') DATETIME"`
}
