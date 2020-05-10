package models

import (
	"sort"
)

type Srv struct{
	Name string
	Url string
	StartTime string
}

type SrvWrapper struct {
	srv [] Srv
	by func(p, q * Srv) bool
}

type SortBy func(p, q *Srv) bool

func (pw SrvWrapper) Len() int {    // 重写 Len() 方法
	return len(pw.srv)
}
func (pw SrvWrapper) Swap(i, j int){     // 重写 Swap() 方法
	pw.srv[i], pw.srv[j] = pw.srv[j], pw.srv[i]
}
func (pw SrvWrapper) Less(i, j int) bool {    // 重写 Less() 方法
	return pw.by(&pw.srv[i], &pw.srv[j])
}

func SortSrv(people [] Srv, by SortBy){    // SortPerson 方法
	sort.Sort(SrvWrapper{people, by})
}
