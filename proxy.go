package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"gitee.com/xjieinfo/xjnac/util"
)

var cli *util.ClientDis
var ServerList map[string][]*url.URL

func MultipleHostsReverseProxy() *httputil.ReverseProxy {
	director := func(req *http.Request) {
		fmt.Println("Path: http://" + req.Host + req.URL.Path)
		if req.URL.Path == "/health" || req.URL.Path == "/list" || req.URL.Path == "/code" {
			req.URL.Scheme = "http"
			req.URL.Host = util.Conf.App.Url + ":" + util.Conf.App.Port
		} else {
			prefix := GetPrefix(req.URL.Path)
			targets := GetTargets(prefix)
			if prefix == "" || targets == nil {
				req.URL.Scheme = "http"
				req.URL.Host = util.Conf.App.Url + ":" + util.Conf.App.Port
				req.URL.Path = "/proxy_error"
			} else {
				target := targets[rand.Int()%len(targets)]
				req.URL.Scheme = target.Scheme
				req.URL.Host = target.Host
				len := strings.Count(prefix, "") - 1 + 1
				path2 := req.URL.Path[len:]
				req.URL.Path = path2
			}
		}
		fmt.Println("Proxy to: " + req.URL.Scheme + "://" + req.URL.Host + req.URL.Path)
	}
	return &httputil.ReverseProxy{Director: director}
}

func GetPrefix(path string) (prefix string) {
	count := strings.Count(path, "/")
	if count < 2 {
		return ""
	}
	path1 := path[1:]
	index2 := strings.Index(path1, "/")
	prefix = path1[:index2]
	return prefix
}

func GetTargets(prefix string) []*url.URL {
	ServerList = cli.GetServerList()
	return ServerList[prefix]
}
