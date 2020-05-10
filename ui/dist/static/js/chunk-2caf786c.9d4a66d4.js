(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2caf786c"],{2504:function(t,e,a){"use strict";a.r(e);var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container app-product-detail"},[a("el-page-header",{attrs:{content:"商品详情"},on:{back:t.goBack}}),t._v(" "),a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"1"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"info-row"},[a("dl",[a("dt",[t._v("商品编号")]),t._v(" "),a("dd",[t._v(t._s(t.detail.productCode))])]),t._v(" "),a("dl",[a("dt",[t._v("商品名称")]),t._v(" "),a("dd",[t._v(t._s(t.detail.commodityName))])]),t._v(" "),a("dl",[a("dt",[t._v("规格")]),t._v(" "),a("dd",[t._v(t._s(t.detail.spec+" ×"+t.detail.packageNum+t.detail.unit+"/件"))])]),t._v(" "),a("dl",[a("dt",[t._v("通用名")]),t._v(" "),a("dd",[t._v(t._s(t.detail.genericName))])]),t._v(" "),a("dl",[a("dt",[t._v("生产厂家")]),t._v(" "),a("dd",[t._v(t._s(t.detail.manufacturer))])]),t._v(" "),a("dl",[a("dt",[t._v("批准文号")]),t._v(" "),a("dd",[t._v(t._s(t.detail.approvalNumber))])]),t._v(" "),a("dl",[a("dt",[t._v("品牌")]),t._v(" "),a("dd",[t._v(t._s(t.detail.brand))])]),t._v(" "),a("dl",[a("dt",[t._v("产地")]),t._v(" "),a("dd",[t._v(t._s(t.detail.producingArea||"--"))])]),t._v(" "),a("dl",[a("dt",[t._v("商品属性")]),t._v(" "),a("dd",[t._v(t._s(1===t.detail.drugs?"药品":"非药品"))])]),t._v(" "),a("dl",[a("dt",[t._v("商品类型")]),t._v(" "),a("dd",[t._v(t._s(1===t.detail.huddle?"抱团":"尚划算"))])]),t._v(" "),a("dl",[a("dt",[t._v("剂型")]),t._v(" "),a("dd",[t._v(t._s(t.detail.dosageForm))])]),t._v(" "),a("dl",[a("dt",[t._v("贮藏环境")]),t._v(" "),a("dd",[t._v(t._s(t.detail.storageCondition))])]),t._v(" "),a("dl",[a("dt",{staticStyle:{height:"30px"}},[t._v("可售区域")]),t._v(" "),t.detail.areaList?a("dd",[t._l(t.detail.areaList,function(e,d){return[d<10?a("span",{key:d},[t._v(t._s(e.areaName)+" "+t._s(d===t.detail.areaList.length-1?"":" 、 "))]):t._e()]}),t._v(" "),t.detail.areaList.length>10?a("span",[t._v("等"+t._s(t.detail.areaList.length)+"个地区")]):t._e()],2):t._e()]),t._v(" "),a("dl",[a("dt",[t._v("包装尺寸")]),t._v(" "),a("dd",[t._v("长："+t._s(t.detail.itemLength)+"cm  宽："+t._s(t.detail.itemWidth)+"cm  高："+t._s(t.detail.itemHeight)+"cm")])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"销售信息",name:"2"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"info-row"},[a("dl",[a("dt",[t._v("商品编号")]),t._v(" "),a("dd",[t._v(t._s(t.detail.productCode))])]),t._v(" "),a("dl",[a("dt",[t._v("商品名称")]),t._v(" "),a("dd",[t._v(t._s(t.detail.commodityName))])]),t._v(" "),a("dl",[a("dt",[t._v("商品品种")]),t._v(" "),a("dd",[t._v(t._s(1===t.detail.huddle?"抱团品种":"尚划算品种"))])]),t._v(" "),a("dl",[a("dt",[t._v("所属供应商")]),t._v(" "),a("dd",[t._v(t._s(t.detail.supplier||"暂无"))])]),t._v(" "),a("dl",[a("dt",[t._v("所属分类")]),t._v(" "),a("dd",[t._v(t._s(t.detail.firstClass?t.detail.firstClass+" /":"")+"  "+t._s(t.detail.secondClass?t.detail.secondClass+" /":"")+"  "+t._s(t.detail.thirdClass))])]),t._v(" "),a("dl",[a("dt",[t._v("所属俱乐部")]),t._v(" "),a("dd",[1===t.detail.huddle?t._l(t.detail.businessAttrList,function(e){return a("span",{key:e.club,staticClass:"club-tag"},[t._v(t._s(1===e.club?"乐赛仙":2===e.club?"佐安堂":"初心")+"  ")])}):[t._v("\n                            尚划算\n                        ")]],2)]),t._v(" "),a("dl",[a("dt",[t._v("商品图片")]),t._v(" "),a("dd",[t.detail.imgList&&t.detail.imgList.length>0?t._l(t.detail.imgList,function(e){return a("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],key:e.sid,attrs:{src:t.ossURL+e.imgUrl}})}):[t._v("\n                            暂无\n                        ")]],2)]),t._v(" "),a("dl",[a("dt",[t._v("最小起订数(件)")]),t._v(" "),a("dd",[1===t.detail.huddle?[t._l(t.detail.businessAttrList,function(e){return[a("span",{key:e.club,staticClass:"club-tag"},[t._v(t._s(1===e.club?"乐赛仙":2===e.club?"佐安堂":"初心")+"：")]),t._v(" "),a("span",{key:e.club},[t._v(t._s(e.minNum)+t._s(t.detail.unit)+"    ")])]})]:[t._l(t.detail.businessAttrList,function(e){return[0===e.club?a("span",{key:e.club},[t._v(t._s(e.minNum)+t._s(t.detail.unit))]):t._e()]})]],2)]),t._v(" "),a("dl",[a("dt",[t._v("倍增量(件)")]),t._v(" "),a("dd",[1===t.detail.huddle?[t._l(t.detail.businessAttrList,function(e){return[a("span",{key:e.club,staticClass:"club-tag"},[t._v(t._s(1===e.club?"乐赛仙":2===e.club?"佐安堂":"初心")+"：")]),t._v(" "),a("span",{key:e.club},[t._v(t._s(e.step)+t._s(t.detail.unit)+"    ")])]})]:[t._l(t.detail.businessAttrList,function(e){return[0===e.club?a("span",{key:e.club},[t._v(t._s(e.step)+t._s(t.detail.unit))]):t._e()]})]],2)]),t._v(" "),a("dl",[a("dt",[t._v("最大购买数/人 (件)")]),t._v(" "),a("dd",[1===t.detail.huddle?[t._l(t.detail.businessAttrList,function(e){return[a("span",{key:e.club,staticClass:"club-tag"},[t._v(t._s(1===e.club?"乐赛仙":2===e.club?"佐安堂":"初心")+"：")]),t._v(" "),a("span",{key:e.club},[t._v(t._s(e.maxNum)+t._s(t.detail.unit)+"    ")])]})]:[t._l(t.detail.businessAttrList,function(e){return[0===e.club?a("span",{key:e.club},[t._v(t._s(e.maxNum)+t._s(t.detail.unit))]):t._e()]})]],2)]),t._v(" "),a("dl",[a("dt",[t._v("新品时间范围")]),t._v(" "),a("dd",[t._v(t._s(t.detail.newStartTime||"--")+" 至 "+t._s(t.detail.newEndTime||"--"))])]),t._v(" "),a("dl",[a("dt",[t._v("医保类型")]),t._v(" "),a("dd",[1===t.detail.medicalInsuranceSid?a("span",[t._v("甲类")]):t._e(),t._v(" "),2===t.detail.medicalInsuranceSid?a("span",[t._v("乙类")]):t._e(),t._v(" "),3===t.detail.medicalInsuranceSid?a("span",[t._v("省级")]):t._e(),t._v(" "),0===t.detail.medicalInsuranceSid?a("span",[t._v("无医保")]):t._e()])]),t._v(" "),a("dl",[a("dt",[t._v("医保范围")]),t._v(" "),a("dd",[t._v(t._s(t.detail.medicalInsuranceArea))])]),t._v(" "),a("dl",[a("dt",[t._v("销售语")]),t._v(" "),a("dd",[t.detail.firstSellPoint?a("div",[t._v(t._s(t.detail.firstSellPoint))]):t._e(),t._v(" "),t.detail.secondSellPoint?a("div",[t._v(t._s(t.detail.secondSellPoint))]):t._e()])])])]),t._v(" "),a("el-tab-pane",{attrs:{label:"库存信息",name:"3"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:[t.detail]}},[a("el-table-column",{attrs:{prop:"price",label:"抱团价(元)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"retailPrice",label:"零售价(元)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存数"}})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"商品描述",name:"4"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],domProps:{innerHTML:t._s(t.detail.content)}},[t._v("11")])])],1)],1)},n=[],i=(a("28a5"),a("ac6a"),a("db72")),r=a("5880"),s=a("feb7"),l={name:"PageProductDetail",components:{},data:function(){return{sid:this.$route.query.id,ossURL:this.$store.getters.oss_url,loading:!1,activeName:"1",detail:{},skuColumn:[],skuList:[]}},computed:Object(i["a"])({},Object(r["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-390}}),created:function(){this.prdouctDetail()},methods:{goBack:function(){this.$router.push("/product/list")},prdouctDetail:function(){var t=this;this.loading=!0,Object(s["e"])({sid:this.sid}).then(function(e){var a=e.data.data;t.detail=a,t.detail.skuList.forEach(function(e,a){if(e.attrValueJson){var d=JSON.parse(e.attrValueJson),n={};for(var i in d)n[i.split("###")[1]]=d[i].split("###")[1],0===a&&t.skuColumn.push(i.split("###")[1]);t.skuList.push(Object.assign({},e,{attrValue:n}))}}),t.$nextTick(function(){t.loading=!1})})}}},u=l,c=(a("940d"),a("2877")),o=Object(c["a"])(u,d,n,!1,null,null,null);e["default"]=o.exports},"940d":function(t,e,a){"use strict";var d=a("a069"),n=a.n(d);n.a},a069:function(t,e,a){},feb7:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"i",function(){return r}),a.d(e,"f",function(){return s}),a.d(e,"n",function(){return l}),a.d(e,"b",function(){return u}),a.d(e,"d",function(){return c}),a.d(e,"k",function(){return o}),a.d(e,"p",function(){return _}),a.d(e,"o",function(){return v}),a.d(e,"m",function(){return p}),a.d(e,"l",function(){return m}),a.d(e,"q",function(){return b}),a.d(e,"g",function(){return f}),a.d(e,"e",function(){return g}),a.d(e,"h",function(){return h}),a.d(e,"r",function(){return L}),a.d(e,"j",function(){return k}),a.d(e,"a",function(){return O});var d=a("b775"),n=a("700d");function i(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/page",method:"get",params:t})}function r(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/relation/list/".concat(t.productSid),method:"get",params:t})}function s(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/relation/productList/page",method:"get",params:t})}function l(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/relation",method:"put",data:t})}function u(t){return Object(d["a"])({baseURL:n["a"],url:"/admin/external/area/treeInfo",method:"get",params:t})}function c(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/area/".concat(t.sid),method:"get",params:t})}function o(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/".concat(t.sid,"/area"),method:"put",data:t.area})}function _(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/saleStatus",method:"put",data:t})}function v(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/risePrice/".concat(t.sid),method:"put",data:t.prices})}function p(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/price/audit",method:"POST",data:t})}function m(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/showIndex/".concat(t.sid),method:"put",data:t.index})}function b(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/label/relation",method:"post",data:t})}function f(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/sku/list/".concat(t.sid),method:"get",params:t})}function g(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/info/".concat(t.sid),method:"get",params:t})}function h(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/label/page",method:"get",params:t})}function L(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/headSales",method:"post",data:t})}function k(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/inspectionReport/batchUpload/".concat(t.sid),method:"post",data:t.report})}function O(t){return Object(d["a"])({baseURL:n["a"],url:"/product/admin/product/createIndexBySid/".concat(t.sid),method:"get",params:t})}}}]);