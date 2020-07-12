package mapper

import (
	e "gitee.com/xjieinfo/xjnac/entity"
	"gitee.com/xjieinfo/xjnac/util"
	e_pub "gitee.com/xjieinfo/xjnac/util/entity"
	"log"
)

type TxjconfigMapper struct{}

func (this TxjconfigMapper) SelectList(wrapper e_pub.QueryWrapper) []e.Txjconfig {
	list := make([]e.Txjconfig, 0)
	err := wrapper.Set(util.Gorm).Find(&list).Error
	if err != nil {
		log.Println(err)
	}
	return list
}

func (this TxjconfigMapper) SelectListAndCount(wrapper e_pub.QueryWrapper) ([]e.Txjconfig, int64) {
	list := make([]e.Txjconfig, 0)
	var total int64
	err := wrapper.Set(util.Gorm).Find(&list).Offset(-1).Limit(-1).Count(&total).Error
	if err != nil {
		log.Println(err)
	}
	return list, total
}

func (this TxjconfigMapper) SelectPage(wrapper e_pub.QueryWrapper) (e_pub.Page, error) {
	list := make([]e.Txjconfig, 0)
	var total int64
	err := wrapper.Set(util.Gorm).Find(&list).Offset(-1).Limit(-1).Count(&total).Error
	if err != nil {
		log.Println(err)
	}
	page := new(e_pub.Page).MakePage(list, wrapper.Current, wrapper.Size, total)
	return page, err
}
