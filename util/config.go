package util

import (
	"gopkg.in/yaml.v2"
	"io/ioutil"
)

func GetNacConfig(profile string) (error,NacConfig){
	filename := "./conf/conf.yml"
	if profile!=""{
		filename = "./conf/conf-"+profile+".yml"
	}
	data, _ := ioutil.ReadFile(filename)
	t := NacConfig{}
	//把yaml形式的字符串解析成struct类型
	err := yaml.Unmarshal(data, &t)
	return err,t
}

type NacConfig struct{
	App struct{
		Name string
		Url string
		Port string
		Proxyport string
		Etcdurl []string
	}
	Datasource struct{
		Drivername string
		Url string
		Port string
		Username string
		Password string
		Database string
	}
}
