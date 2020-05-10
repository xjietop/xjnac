package routers

import (
	"net/http"

	"gitee.com/xjieinfo/xjnac/ctrls"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var Router *gin.Engine

func init() {
	Router = gin.Default()
	store := cookie.NewStore([]byte("secret"))
	Router.Use(sessions.Sessions("mysession", store))
}

func SetupRouter() *gin.Engine {

	//静态目录配置
	//public := utils.Config.Section("router").Key("public").String()
	Router.Static("/web", "ui/dist")

	//模板
	//view_path := utils.Config.Section("router").Key("view_path").String()
	//Router.LoadHTMLGlob(view_path)

	//Router.NoRoute(func(ctx *gin.Context) {
	//	ctx.HTML(http.StatusNotFound, "404.html", "")
	//})

	Router.GET("/", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/web")
	})
	Router.GET("/code", ctrls.GetCheckCode)
	Router.GET("/proxy_error", ctrls.ProxyError)
	Router.GET("/ServicesList", ctrls.ServicesList)

	Router.GET("/config/list", ctrls.ConfigList)
	Router.GET("/config/add", ctrls.ConfigAdd)
	Router.GET("/config/view", ctrls.ConfigView)
	Router.GET("/config/update", ctrls.ConfigUpdate)
	Router.GET("/config/delete", ctrls.ConfigDelete)
	Router.GET("/config/get", ctrls.GetConfig)
	//Router.GET("/health", utils.Health)
	//Router.GET("/refresh", utils.Refresh)
	//
	//Router.GET("/productlist", ctrls.GetProductList)
	//Router.GET("/product/:sid", ctrls.GetProduct)
	//Router.GET("/xjie/user/login", c_xjie.XjieLogin)
	////金蝶的余额
	////客户余额
	//Router.GET("/k3/PAEZ_CustomerCredit/:billno", c_k3.PAEZ_CustomerCredit_Query)
	////专项余额
	//Router.GET("/k3/hly_ZXDA/:billno", c_k3.Hly_ZXDA_Query)
	////返利余额
	//Router.GET("/k3/hly_CustomerRebateInfo/:billno", c_k3.Hly_CustomerRebateInfo_Query)
	//
	////授权拦截
	//Router.Use(Authorize())
	//
	user := Router.Group("/user")
	{
		user.GET("/login", ctrls.XjieLogin)
		user.GET("/info", ctrls.XjieUserInfo)
		user.DELETE("/logout", ctrls.XjieLogout) //退出登陆
		//xjie.GET("/user/userlist", c_xjie.XjieUserList)//用户列表
		//xjie.GET("/user/usergrouplist", c_xjie.XjieUserGroupList)//用户组列表
		//xjie.GET("/user/disable", c_xjie.XjieUserDisable)//禁用用户
		//xjie.GET("/user/enable", c_xjie.XjieUserEnable)//启用用户
	}
	//b2b_member := Router.Group("/b2b/member")
	//{
	//	b2b_member.GET("/userlist", c_b2b_member.GetUserList)
	//	b2b_member.GET("/userinfo", c_b2b_member.GetUserInfo)
	//	b2b_member.GET("/UserQualificationList", c_b2b_member.GetUserQualificationList)//B2B客户资质
	//	b2b_member.GET("/custBalCheck/ptye", c_b2b_member.GetCustBalCheckPtye)
	//	b2b_member.GET("/custBalCheck/flye", c_b2b_member.GetCustBalCheckFlye)
	//	b2b_member.GET("/custBalCheck/zxye", c_b2b_member.GetCustBalCheckZxye)
	//	b2b_member.GET("/AllCustBalCheck", c_b2b_member.AllCustBalCheck)//所有客户余额核对
	//	b2b_member.GET("/logs", c_b2b_member.GetLogsList)
	//	b2b_member.GET("/custBalAnalysis", c_b2b_member.GetCustBalAnalysis)//余额分析
	//	b2b_member.GET("/custBal", c_b2b_member.GetCustBal)
	//	b2b_member.GET("/custBalDetail", c_b2b_member.GetCustBalDetail)
	//	b2b_member.GET("/addCustAccount", c_b2b_member.AddCustAccount)//增加余额账户
	//	b2b_member.GET("/custAccountGrant", c_b2b_member.CustAccountGrant)//余额账户授信
	//	b2b_member.GET("/custAccountAdjust", c_b2b_member.CustAccountAdjust)//余额账户调整
	//	b2b_member.GET("/getCustAccountFreeze", c_b2b_member.GetCustAccountFreeze)//获取冻结金额
	//	b2b_member.GET("/adjustCustAccountFreeze", c_b2b_member.AdjustCustAccountFreeze)//调整冻结金额
	//	b2b_member.GET("/userAddressList", c_b2b_member.GetUserAddressList)//客户联系人列表
	//	b2b_member.GET("/userAddressItem", c_b2b_member.GetUserAddressItem)//客户联联系人信息
	//}
	//b2b_order := Router.Group("/b2b/order")
	//{
	//	b2b_order.GET("/orderlist", c_b2b_order.GetOrderList)
	//	b2b_order.GET("/addEsOrder", c_b2b_order.AddEsOrder)
	//	b2b_order.GET("/updateEsOrder", c_b2b_order.UpdateEsOrder)
	//	b2b_order.GET("/orderNotPushCause", c_b2b_order.OrderNotPushCause)//订单不能下推金蝶K3原因
	//	b2b_order.GET("/orderPushK3", c_b2b_order.OrderPushK3)//订单下推金蝶K3
	//	b2b_order.GET("/receivebillPushK3", c_b2b_order.ReceivebillPushK3)//收款单下推金蝶K3
	//
	//	b2b_order.GET("/dailylist", c_b2b_order.GetOrderDailyList)
	//	b2b_order.GET("/monthlylist", c_b2b_order.GetOrderMonthlyList)
	//}
	//b2b_product := Router.Group("/b2b/product")
	//{
	//	b2b_product.GET("/productlist", c_b2b_product.GetProductList)
	//	b2b_product.GET("/productskulist", c_b2b_product.GetProductSkuList)//商品批号库存列表
	//}
	//b2b_sys := Router.Group("/b2b/sys")
	//{
	//	b2b_sys.GET("/arealist", c_b2b_sys.GetAreaList)   //行政区域列表
	//	b2b_sys.GET("/managerlist", c_b2b_sys.GetManagerList)  //地总商务专员列表
	//}
	//k3 := Router.Group("/k3")
	//{
	//	k3.GET("/customer/customerlist", c_k3.GetCustomerList)
	//	k3.GET("/product/productlist", c_k3.GetProductList)
	//	k3.GET("/product/GetExpectQtyList", c_k3.GetExpectQtyList)//金蝶商品可发量
	//	k3.GET("/order/orderlist", c_k3.GetOrderList)
	//	k3.GET("/order/orderdetail", c_k3.GetOrderDetail)
	//	k3.GET("/outstock/dailylist", c_k3.GetOutstockDailyList)
	//	k3.GET("/outstock/monthlylist", c_k3.GetOutstockMonthlyList)
	//	k3.GET("/area/arealist", c_k3.GetAreaList)//区域列表
	//	k3.GET("/GSP/FirAppOfCustList", c_k3.GetGSPFirAppOfCustList)//K3首营客户资质列表
	//	k3.GET("/hcyy/managerlist", c_k3.GetManagerList)  //K3地总商务专员列表
	//}
	return Router
}

/*
func Authorize() gin.HandlerFunc{
	return func(c *gin.Context){
		//fmt.Println(c.Request.URL.Path)
		auth := c.GetHeader("Authorization")
		session := sessions.Default(c)
		token := ""
		if session.Get("token")!=nil{
			token = session.Get("token").(string)
		}
		token = "Bearer "+token
		if auth==token {
			var powers []string
			if session.Get("powers")!=nil{
				powers = session.Get("powers").([]string)
			}
			urlpath := c.Request.URL.Path
			for _,item := range powers{
				if(item==urlpath){
					// 验证通过，会继续访问下一个中间件
					c.Next()
					return
				}
			}
			// 验证不通过，不再调用后续的函数处理
			c.Abort()
			//c.JSON(http.StatusUnauthorized,gin.H{"message":"访问未授权"})
			fmt.Println("访问未授权:"+c.Request.URL.Path)
			c.JSON(http.StatusUnauthorized, new(m_pub.R).Fail("访问未授权"))
			// return可省略, 只要前面执行Abort()就可以让后面的handler函数不再执行
			return
		} else {
			// 验证不通过，不再调用后续的函数处理
			c.Abort()
			//c.JSON(http.StatusUnauthorized,gin.H{"message":"访问未授权"})
			fmt.Println("访问未授权:"+c.Request.URL.Path)
			c.JSON(http.StatusUnauthorized, new(m_pub.R).Fail("访问未授权"))
			// return可省略, 只要前面执行Abort()就可以让后面的handler函数不再执行
			return
		}
	}
}
*/
