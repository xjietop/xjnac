(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-caaef850"],{2617:function(e,t,r){},2934:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r("b775"),n=r("700d");function o(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/productClass/industryClass/all",method:"get",params:e})}},"386d":function(e,t,r){"use strict";var a=r("cb7c"),n=r("83a1"),o=r("5f1b");r("214f")("search",1,function(e,t,r,s){return[function(r){var a=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,a):new RegExp(r)[t](String(a))},function(e){var t=s(r,e,this);if(t.done)return t.value;var i=a(e),l=String(this),c=i.lastIndex;n(c,0)||(i.lastIndex=0);var u=o(i,l);return n(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]})},4205:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container app-other-banner"},[r("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}},[r("template",{slot:"right"},[r("div",{staticClass:"app-search-right"},[r("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.create}},[e._v("添加")])],1)])],2),e._v(" "),r("div",{staticClass:"app-table"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:e.height,stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"clubName",label:"展示俱乐部","min-width":"180",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"imgUrl",label:"图片","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.source||2===t.row.source?r("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],attrs:{src:e.ossURL+t.row.mobileImgUrl,fit:"contain"}}):e._e(),e._v(" "),1===t.row.source||2===t.row.source?r("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],attrs:{src:e.ossURL+t.row.imgUrl,fit:"contain"}}):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"statusName",label:"是否展示","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[-1===t.row.statusCode?r("el-tag",{attrs:{type:"danger",size:"mini",effect:"plain"}},[e._v("已删除")]):1===t.row.statusCode?r("el-tag",{attrs:{type:"info",size:"mini",effect:"plain"}},[e._v("不展示")]):e._e(),e._v(" "),0===t.row.statusCode?r("el-tag",{attrs:{type:"success",size:"mini",effect:"plain"}},[e._v("展示")]):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"sourceName",label:"展示终端","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.source||2===t.row.source?r("i",{staticClass:"icon-source el-icon-mobile-phone",attrs:{title:"手机端"}}):e._e(),e._v(" "),1===t.row.source||2===t.row.source?r("i",{staticClass:"icon-source el-icon-monitor",attrs:{title:"电脑端"}}):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"bannerTypeName",label:"显示位置","min-width":"150",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sort",label:"显示顺序","min-width":"150",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"startTime",label:"开始时间","min-width":"150",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"endTime",label:"结束时间","min-width":"150",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"linkUrl",label:"跳转地址","min-width":"150",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.update(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),r("div",{staticClass:"app-pagination"},[r("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),r("win-banner",{ref:"refBanner"})],1)},n=[],o=(r("386d"),r("db72")),s=r("b775"),i=r("700d");function l(e){return Object(s["a"])({baseURL:i["a"],url:"/cms/admin/banner/page",method:"get",params:e})}function c(e){return Object(s["a"])({baseURL:i["a"],url:"/cms/admin/banner",method:"post",data:e})}function u(e){return Object(s["a"])({baseURL:i["a"],url:"/cms/admin/banner/".concat(e.sid),method:"delete"})}function d(e){return Object(s["a"])({baseURL:i["a"],url:"/cms/admin/banner",method:"put",data:e})}function m(e){return Object(s["a"])({baseURL:i["a"],url:"/cms/admin/banner/pageType",method:"get",data:e})}var f=r("5880"),p=r("b932"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"el-win-other-banner",attrs:{title:e.edit?"编 辑":"新 增",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"96px"}},[r("el-form-item",{attrs:{prop:"bannerTypeId",label:"广告位置"}},[r("el-select",{model:{value:e.form.bannerTypeId,callback:function(t){e.$set(e.form,"bannerTypeId",t)},expression:"form.bannerTypeId"}},e._l(e.bannerTypeData,function(e){return r("el-option",{key:e.sid,attrs:{label:e.name,value:e.sid,name:"bannerTypeId"}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"club",label:"展示范围"}},[r("el-checkbox-group",{model:{value:e.form.club,callback:function(t){e.$set(e.form,"club",t)},expression:"form.club"}},[r("el-checkbox",{attrs:{label:0,name:"club"}},[e._v("乐赛仙")]),e._v(" "),r("el-checkbox",{attrs:{label:1,name:"club"}},[e._v("佐安堂")]),e._v(" "),r("el-checkbox",{attrs:{label:2,name:"club"}},[e._v("初心")]),e._v(" "),r("el-checkbox",{attrs:{label:3,name:"club"}},[e._v("尚划算")])],1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"source",label:"展示终端"}},[r("el-checkbox-group",{on:{change:e.sourceChange},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}},[r("el-checkbox",{attrs:{label:0,name:"source"}},[e._v("移动端")]),e._v(" "),r("el-checkbox",{attrs:{label:1,name:"source"}},[e._v("电脑端")])],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.source.filter(function(e){return 0===e}).length>0,expression:"form.source.filter((item => item === 0)).length > 0"}],attrs:{prop:"mobileImgUrl",label:"移动端图片"}},[r("image-upload",{attrs:{multiple:!1},model:{value:e.form.mobileImgUrl,callback:function(t){e.$set(e.form,"mobileImgUrl",t)},expression:"form.mobileImgUrl"}})],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.source.filter(function(e){return 1===e}).length>0,expression:"form.source.filter((item => item === 1)).length > 0"}],attrs:{prop:"imgUrl",label:"电脑端图片"}},[r("image-upload",{attrs:{multiple:!1},model:{value:e.form.imgUrl,callback:function(t){e.$set(e.form,"imgUrl",t)},expression:"form.imgUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"type",label:"跳转类型"}},[r("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-radio",{attrs:{label:1,name:"type"}},[e._v("商品详情")]),e._v(" "),r("el-radio",{attrs:{label:2,name:"type"}},[e._v("活动列表")]),e._v(" "),r("el-radio",{attrs:{label:3,name:"type"}},[e._v("链接地址")])],1)],1),e._v(" "),1===e.form.type?r("el-form-item",{attrs:{prop:"businessId",label:"关联商品"}},[r("el-input",{model:{value:e.form.businessId,callback:function(t){e.$set(e.form,"businessId",t)},expression:"form.businessId"}},[r("template",{slot:"append"},[r("el-button",{on:{click:e.choseProduct}},[e._v("选择商品")])],1)],2)],1):e._e(),e._v(" "),2===e.form.type?r("el-form-item",{attrs:{prop:"businessId",label:"活动列表"}},[r("el-input",{model:{value:e.form.businessId,callback:function(t){e.$set(e.form,"businessId",t)},expression:"form.businessId"}})],1):e._e(),e._v(" "),3===e.form.type?r("el-form-item",{attrs:{prop:"linkUrl",label:"链接地址"}},[r("el-input",{model:{value:e.form.linkUrl,callback:function(t){e.$set(e.form,"linkUrl",t)},expression:"form.linkUrl"}})],1):e._e(),e._v(" "),r("el-form-item",{attrs:{prop:"date",label:"显示时间"}},[r("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"sort",label:"显示顺序"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,"step-strictly":!0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"statusCode",label:"是否展示"}},[r("el-radio-group",{model:{value:e.form.statusCode,callback:function(t){e.$set(e.form,"statusCode",t)},expression:"form.statusCode"}},[r("el-radio",{attrs:{label:0,name:"statusCode"}},[e._v("是")]),e._v(" "),r("el-radio",{attrs:{label:1,name:"statusCode"}},[e._v("否")])],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1),e._v(" "),r("select-product",{ref:"refProduct"})],1)},h=[],g=r("4a9d"),v=r("c1df"),_=r.n(v),y=r("ef09"),w={name:"WinBanner",components:{imageUpload:g["a"],selectProduct:y["a"]},data:function(){return{edit:!1,loading:!1,form:{bannerTypeId:"",club:[],source:[],type:"",imgUrl:"",mobileImgUrl:"",date:"",sort:0,linkUrl:"",productCode:"",businessId:"",statusCode:0},rules:{bannerTypeId:[{required:!0,message:"请选择广告位置",trigger:"0"}],club:[{type:"array",required:!0,message:"请选择展示范围",trigger:"change"}],source:[{type:"array",required:!0,message:"请选择展示端",trigger:"change"}],type:[{required:!0,message:"请选择Banner类型",trigger:"change"}],imgUrl:[{required:!1,message:"请上传电脑端图片",trigger:"change"}],mobileImgUrl:[{required:!1,message:"请选择移动端图片",trigger:"change"}],date:[{required:!0,message:"请选择显示时间",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"blur"}],linkUrl:[{required:!0,message:"请输入跳转链接",trigger:"0"}],businessId:[{required:!0,message:"请设置",trigger:"0"}],statusCode:[{required:!0,message:"请选择是否展示",trigger:"0"}]},bannerTypeData:[],pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},show:!1}},watch:{},created:function(){},methods:{add:function(e){var t=this;this.edit=!1,this.loading=!1,this.callback=e,this.show=!0,this.queryBanerType(),this.$nextTick(function(){t.$refs["ruleForm"].resetFields(),t.form.imgUrl="",t.form.mobileImgUrl=""})},update:function(e,t){var r=this;this.edit=!0,this.loading=!1,this.callback=t,this.show=!0,this.queryBanerType(),this.$nextTick(function(){for(var t in r.$refs["ruleForm"].resetFields(),r.form)if(null!=e[t])switch(t){default:r.form[t]=e[t];break;case"source":2===e.source?r.form.source=[0,1]:r.form.source=[e.source];break;case"club":"1"===e.club.substring(0,1)&&r.form.club.push(0),"1"===e.club.substring(1,2)&&r.form.club.push(1),"1"===e.club.substring(2,3)&&r.form.club.push(2),"1"===e.club.substring(3,4)&&r.form.club.push(3);break}r.form.date=[e.startTime,e.endTime],r.form.sid=e.sid,r.sourceChange(r.form.source)})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;for(var r=Object.assign({},e.form),a=[0,0,0,0],n=0;n<e.form.club.length;n++)a[e.form.club[n]]=1;r.club=a.join(""),r.startTime=_()(e.form.date[0]).format("YYYY-MM-DD HH:mm:ss"),r.endTime=_()(e.form.date[1]).format("YYYY-MM-DD HH:mm:ss"),r.source=2===e.form.source.length?2:e.form.source[0],e.callback(r)})},close:function(){this.show=!1},queryBanerType:function(){var e=this;m().then(function(t){e.bannerTypeData=t.data.data.records})},sourceChange:function(e){e.filter(function(e){return 0===e}).length>0?this.rules.mobileImgUrl[0].required=!0:this.rules.mobileImgUrl[0].required=!1,e.filter(function(e){return 1===e}).length>0?this.rules.imgUrl[0].required=!0:this.rules.imgUrl[0].required=!1},choseProduct:function(){var e=this;this.$refs["refProduct"].open(function(t){e.form.businessId=t.sid})}}},k=w,U=(r("dc34"),r("2877")),x=Object(U["a"])(k,b,h,!1,null,null,null),O=x.exports,$={name:"PageOtherBanner",components:{searchBar:p["a"],WinBanner:O},data:function(){return{ossURL:this.$store.getters.oss_url+"/",searchData:{quickList:[],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]},{prop:"source",placeholder:"展示端",type:"select",clearable:!0,list:[{label:"手机端",value:"0"},{label:"电脑端",value:"1"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0}}},computed:Object(o["a"])({},Object(f["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),methods:{query:function(e){var t=this;this.tableLoading=!0,l(Object.assign({},e)).then(function(e){t.tableData=e.data.data.records,t.page.total=e.data.data.total,t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},create:function(){var e=this;this.$refs["refBanner"].add(function(t){c(t).then(function(){e.$refs["refBanner"].loading=!1,e.$refs["refBanner"].close(),e.$refs["refSearch"].search(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(){e.$refs["refBanner"].loading=!1})})},remove:function(e){var t=this;this.$confirm("是否确认删除数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return u(e)}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})},update:function(e){var t=this;this.$refs["refBanner"].update(e,function(e){d(e).then(function(){t.$refs["refSearch"].search(),t.$refs["refBanner"].loading=!1,t.$refs["refBanner"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refBanner"].loading=!1})})}}},L=$,j=(r("ff08"),Object(U["a"])(L,a,n,!1,null,"68388910",null));t["default"]=j.exports},"74f0":function(e,t,r){var a={"./en-gb":"39a6","./zh-cn":"5c3a"};function n(e){var t=o(e);return r(t)}function o(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="74f0"},"7bc9":function(e,t,r){},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},dc34:function(e,t,r){"use strict";var a=r("7bc9"),n=r.n(a);n.a},feb7:function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"i",function(){return s}),r.d(t,"f",function(){return i}),r.d(t,"n",function(){return l}),r.d(t,"b",function(){return c}),r.d(t,"d",function(){return u}),r.d(t,"k",function(){return d}),r.d(t,"p",function(){return m}),r.d(t,"o",function(){return f}),r.d(t,"m",function(){return p}),r.d(t,"l",function(){return b}),r.d(t,"q",function(){return h}),r.d(t,"g",function(){return g}),r.d(t,"e",function(){return v}),r.d(t,"h",function(){return _}),r.d(t,"r",function(){return y}),r.d(t,"j",function(){return w}),r.d(t,"a",function(){return k});var a=r("b775"),n=r("700d");function o(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/page",method:"get",params:e})}function s(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/relation/list/".concat(e.productSid),method:"get",params:e})}function i(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/relation/productList/page",method:"get",params:e})}function l(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/relation",method:"put",data:e})}function c(e){return Object(a["a"])({baseURL:n["a"],url:"/admin/external/area/treeInfo",method:"get",params:e})}function u(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/area/".concat(e.sid),method:"get",params:e})}function d(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/".concat(e.sid,"/area"),method:"put",data:e.area})}function m(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/saleStatus",method:"put",data:e})}function f(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/risePrice/".concat(e.sid),method:"put",data:e.prices})}function p(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/price/audit",method:"POST",data:e})}function b(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/showIndex/".concat(e.sid),method:"put",data:e.index})}function h(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/label/relation",method:"post",data:e})}function g(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/sku/list/".concat(e.sid),method:"get",params:e})}function v(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/info/".concat(e.sid),method:"get",params:e})}function _(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/label/page",method:"get",params:e})}function y(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/headSales",method:"post",data:e})}function w(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/inspectionReport/batchUpload/".concat(e.sid),method:"post",data:e.report})}function k(e){return Object(a["a"])({baseURL:n["a"],url:"/product/admin/product/createIndexBySid/".concat(e.sid),method:"get",params:e})}},ff08:function(e,t,r){"use strict";var a=r("2617"),n=r.n(a);n.a}}]);