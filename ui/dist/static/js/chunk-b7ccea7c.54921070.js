(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7ccea7c"],{"34c5":function(t,e,a){},"426a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container app-order-detail"},[a("el-page-header",{attrs:{content:"订单详情"},on:{back:t.goBack}}),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("基础信息")]),t._v(" "),a("div",{staticClass:"info-row clearfix"},[a("dl",[a("dt",[t._v("退货申请：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.refundId||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("状态：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.statusDesc||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("创建时间：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.createTime||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("销售订单：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.orderId))])]),t._v(" "),a("dl",[a("dt",[t._v("申请退款金额：")]),t._v(" "),a("dd",[t._v("￥"+t._s(t.detail.applyAmount))])]),t._v(" "),a("dl",[a("dt",[t._v("实际退款：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.actualAmount?"￥"+t.detail.actualAmount:""))])]),t._v(" "),a("dl",[a("dt",[t._v("退货原因：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.reason||"暂无"))])])]),t._v(" "),a("div",{staticClass:"image-list"},t._l(t.detail.imgList,function(e,i){return a("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],key:i,attrs:{src:t.ossURL+e}})}),1),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("客户信息")]),t._v(" "),a("div",{staticClass:"info-row clearfix"},[a("dl",[a("dt",[t._v("客户名称：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.userName||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("联系电话：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.linkmanPhone||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("联系人：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.linkmanName||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("客户地址：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.userAddress||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("所属地总：")]),t._v(" "),a("dd",[t._v(t._s(t.detail.regionManagerName||"暂无"))])])]),t._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[t._v("退货商品明细")]),t._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.detail.detailList,height:400,"tooltip-effect":"light",stripe:""}},[a("el-table-column",{attrs:{prop:"productCode",label:"商品编码","min-width":"120",align:"left",fixed:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"商品名称","min-width":"150",align:"left","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"productSpec",label:"规格型号","min-width":"150",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"manufacturer",label:"生产企业","min-width":"120",align:"left","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"含税单价","min-width":"100",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品类型","min-width":"120",align:"left","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.gift?"赠品":"主品")+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"correctedPrice",label:"折后单价","min-width":"80",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"quantity",label:"数量","min-width":"150",align:"left","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalAmount",label:"价税合计","min-width":"80",align:"left"}})],1),t._v(" "),a("div",{staticClass:"total-box"},[a("p",[a("span",[t._v("退款金额：￥"+t._s(t.detail.applyAmount))])])])],1),t._v(" "),a("div",{staticClass:"footer-btn-box"},[0===t.detail.status?a("el-button",{attrs:{type:"primary"},on:{click:t.refund}},[t._v("处理完成")]):t._e(),t._v(" "),a("el-button",{on:{click:function(e){return t.$router.push("/order/refund")}}},[t._v("返回列表")])],1),t._v(" "),a("win-refund",{ref:"refRefund"})],1)},r=[],n=a("db72"),l=a("2f62"),o=a("e585"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"el-win-market-promotion-audit",attrs:{title:"处理状态",visible:t.show,"close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e}}},[a("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,size:"medium","label-width":"0px"}},[a("el-form-item",{attrs:{prop:"status"}},[a("el-radio",{attrs:{label:3},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("退款成功")]),t._v(" "),a("el-radio",{attrs:{label:4},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v("退款失败")])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.show=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.save}},[t._v("确 定")])],1)],1)},d=[],u={name:"WinMarketPromotionAudit",data:function(){return{edit:!1,loading:!1,form:{status:3},rules:{status:[]},show:!1}},watch:{},created:function(){},methods:{update:function(t,e){var a=this;this.edit=!0,this.loading=!1,this.callback=e,this.show=!0,this.$nextTick(function(){a.$refs["ruleForm"].resetFields(),a.form.status=3,a.form.sid=t.sid,a.form.orderId=t.orderId,a.form.refundId=t.refundId})},save:function(){var t=this;this.$refs["ruleForm"].validate(function(e){if(!e)return!1;t.loading=!0;var a=Object.assign({},t.form);t.callback(a)})},close:function(){this.show=!1}}},c=u,f=(a("82ba"),a("2877")),v=Object(f["a"])(c,s,d,!1,null,null,null),_=v.exports,m={name:"PageOrderRefundDetail",components:{WinRefund:_},data:function(){return{ossURL:this.$store.getters.oss_url+"/",refundId:this.$route.query.id,detail:{}}},computed:Object(n["a"])({},Object(l["b"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-390}}),created:function(){this.getOrderDetail()},methods:{goBack:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.go(-1)},getOrderDetail:function(){var t=this;Object(o["c"])({refundId:this.refundId}).then(function(e){var a=e.data.data;t.detail=a})},refund:function(){var t=this;this.$refs["refRefund"].update(this.detail,function(e){Object(o["b"])(e).then(function(e){t.getOrderDetail(),t.$notify({title:"成功",message:"处理成功",type:"success",duration:2e3}),t.$refs["refRefund"].loading=!1}).catch(function(){t.$refs["refRefund"].loading=!1})})}}},p=m,h=(a("d54e"),Object(f["a"])(p,i,r,!1,null,null,null));e["default"]=h.exports},"82ba":function(t,e,a){"use strict";var i=a("34c5"),r=a.n(i);r.a},"97de":function(t,e,a){},d54e:function(t,e,a){"use strict";var i=a("97de"),r=a.n(i);r.a},e585:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"c",function(){return l}),a.d(e,"b",function(){return o});var i=a("b775"),r=a("700d");function n(t){return Object(i["a"])({baseURL:r["a"],url:"/order/admin/order/refund/page",method:"get",params:t})}function l(t){return Object(i["a"])({baseURL:r["a"],url:"/order/admin/order/refund/detail/".concat(t.refundId),method:"get",params:t})}function o(t){return Object(i["a"])({baseURL:r["a"],url:"/order/admin/order/refund/info",method:"put",data:t})}}}]);