# xjnac

#### 介绍
xjnac,星杰网络存取控制,主要功能有:
1. 服务注册
2. 配置管理
3. 路由管理

#### 软件架构
1. 本软件采用go语言编写
2. etcd用来保存服务注册信息
3. mysql用来保存配置文件和路由规则


#### 安装教程
0.  安装好mysql数据，并启动etcd
1.  下载: git clone https://gitee.com/xjieinfo/xjnac.git
2.  cd xjnac
3.  go build
4.  windows下运行 ./xjnac.exe ；linux下运行 ./xjnac

#### 使用说明

1.  配置文件采用.yml格式。
2.  服务注册到etcd后，依赖etcd的watch功能保持服务在线。
3.  配置好路由规则后，访问本系统可转发至相应服务，默认端口号为8849。


