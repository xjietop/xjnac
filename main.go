package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"

	"gitee.com/xjieinfo/xjnac/routers"
	"gitee.com/xjieinfo/xjnac/util"
	// "github.com/astaxie/beego"
)

var (
	profile = flag.String("profile", "", "profile: dev,test,prod")
	//ui             = flag.String("ui", "ui/dist", "The gateway ui dist dir.")
	//addrProxy      = flag.String("addrProxy", "127.0.0.1:81", "AddrProxy: http request entrypoint")
	version = flag.Bool("version", false, "Show version info")
	//conf utils.XjieConfig
)

func init() {
	flag.Parse()

	if *version {
		util.PrintVersion()
		os.Exit(0)
	}

	var err error
	err, util.Conf = util.GetNacConfig(*profile)
	if err != nil {
		fmt.Println("配置文件有误：", err)
		os.Exit(0)
	}

	util.OrmInit()

	ServerList = make(map[string][]*url.URL)
	//fmt.Println(utils.Conf.Local.Etcdurl)
	cli, _ = util.NewClientDis(util.Conf.App.Etcdurl)
	cli.GetService("")
}

func main() {
	// beego.Run()
	//注册中心,配置中心
	r := routers.SetupRouter()
	go r.Run(":" + util.Conf.App.Port)

	//网关
	proxy := MultipleHostsReverseProxy()
	log.Fatal(http.ListenAndServe(":"+util.Conf.App.Proxyport, proxy))
}
