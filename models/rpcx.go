package models

import "sort"

type Rpcx struct {
	Key   string
	Value string
}

type RpcxWrapper struct {
	rpcx []Rpcx
	by   func(p, q *Rpcx) bool
}

type RpcxSortBy func(p, q *Rpcx) bool

func (pw RpcxWrapper) Len() int { // 重写 Len() 方法
	return len(pw.rpcx)
}
func (pw RpcxWrapper) Swap(i, j int) { // 重写 Swap() 方法
	pw.rpcx[i], pw.rpcx[j] = pw.rpcx[j], pw.rpcx[i]
}
func (pw RpcxWrapper) Less(i, j int) bool { // 重写 Less() 方法
	return pw.by(&pw.rpcx[i], &pw.rpcx[j])
}

func SortRpcx(rpcx []Rpcx, by RpcxSortBy) { // SortPerson 方法
	sort.Sort(RpcxWrapper{rpcx, by})
}
