(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e25abb"],{3069:function(t,a,e){},"386d":function(t,a,e){"use strict";var s=e("cb7c"),r=e("83a1"),i=e("5f1b");e("214f")("search",1,function(t,a,e,n){return[function(e){var s=t(this),r=void 0==e?void 0:e[a];return void 0!==r?r.call(e,s):new RegExp(e)[a](String(s))},function(t){var a=n(e,t,this);if(a.done)return a.value;var c=s(t),o=String(this),l=c.lastIndex;r(l,0)||(c.lastIndex=0);var d=i(c,o);return r(c.lastIndex,l)||(c.lastIndex=l),null===d?-1:d.index}]})},"5acc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container app-order-list"},[e("search-bar",{ref:"refSearch",attrs:{"search-data":t.searchData,"auto-load":!0},on:{search:t.query}},[e("template",{slot:"left"},[0===t.searchParams.dateType?e("div",{staticClass:"search-item dib"},[e("el-date-picker",{attrs:{type:"month",size:"small",placeholder:"选择月",clearable:!1},on:{change:t.search},model:{value:t.dateTime,callback:function(a){t.dateTime=a},expression:"dateTime"}})],1):e("div",{staticClass:"search-item dib"},[e("el-date-picker",{attrs:{type:"year",size:"small",placeholder:"选择年",clearable:!1},on:{change:t.search},model:{value:t.dateTime,callback:function(a){t.dateTime=a},expression:"dateTime"}})],1)]),t._v(" "),e("template",{slot:"right"},[e("el-radio-group",{attrs:{size:"small"},on:{change:t.search},model:{value:t.searchParams.dateType,callback:function(a){t.$set(t.searchParams,"dateType",a)},expression:"searchParams.dateType"}},[e("el-radio-button",{attrs:{label:0}},[t._v("月度任务")]),t._v(" "),e("el-radio-button",{attrs:{label:1}},[t._v("年度任务")])],1)],1)],2),t._v(" "),e("div",{staticClass:"app-table"},[e("div",{staticClass:"count-box"},[e("ul",[e("li",[e("i",{staticClass:"count-icon c-1"},[e("svg-icon",{attrs:{"icon-class":"adjust-accounts"}})],1),t._v(" "),e("div",{staticClass:"h2",domProps:{textContent:t._s(t.totalData.radio)}}),t._v(" "),e("p",[t._v("任务金额")])]),t._v(" "),e("li",[e("i",{staticClass:"count-icon c-2"},[e("svg-icon",{attrs:{"icon-class":"adjust-accounts"}})],1),t._v(" "),e("div",{staticClass:"h2",domProps:{textContent:t._s(t.totalData.radio)}}),t._v(" "),e("p",[t._v("核算后金额")])]),t._v(" "),e("li",[e("i",{staticClass:"count-icon c-3"},[e("svg-icon",{attrs:{"icon-class":"adjust-accounts"}})],1),t._v(" "),e("div",{staticClass:"h2",domProps:{textContent:t._s(t.totalData.radio)}}),t._v(" "),e("p",[t._v("完成率")])])])]),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.tableData,height:t.height,stripe:""}},[e("el-table-column",{attrs:{prop:"taskTimeDesc",label:"任务时间",width:"180",align:"center",fixed:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"countSales",label:"任务金额(元)","min-width":"150",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"currentSales",label:"核算后金额(元)","min-width":"100",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"salesRate",label:"完成率","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v("\n                    "+t._s(a.row.salesRate)+"%\n                ")]}}])}),t._v(" "),t.isProvinceOrArea?e("el-table-column",{attrs:{prop:"districtManagerName",label:"团队成员","min-width":"100",align:"center"}}):t._e()],1)],1),t._v(" "),e("div",{staticClass:"app-pagination"},[e("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":t.searchData.page.current,"page-size":t.searchData.page.size,total:t.page.total},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)],1)},r=[],i=(e("386d"),e("db72")),n=e("b775"),c=e("700d");function o(t){return Object(n["a"])({baseURL:c["a"],url:"/bi/api/statistics/sale/page",method:"post",data:t})}var l=e("5880"),d=e("b932"),u=e("c1df"),h=e.n(u),p={name:"PageBiProductSaletask",components:{searchBar:d["a"]},data:function(){return{ossURL:this.$store.getters.oss_url+"/",searchData:{quickList:[{label:"团队成员",value:"userName"}],searchList:[],page:{size:20,current:1}},searchParams:{dateType:0},dateTime:h()(),tableData:[],totalData:{},tableLoading:!1,page:{total:0}}},computed:Object(i["a"])({},Object(l["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-315},isProvinceOrArea:function(){return 1===this.$store.getters.userInfo.isProvince||1===this.$store.getters.userInfo.isRegion}}),mounted:function(){this.isProvinceOrArea||this.searchData.quickList.splice(0,1)},methods:{query:function(t){var a=this;this.tableLoading=!0;var e=Object.assign({},this.searchParams);0===e.dateType?(e.startTime=h()(this.dateTime).startOf("month").format("YYYY-MM-DD"),e.endTime=h()(this.dateTime).endOf("month").format("YYYY-MM-DD")):(e.startTime=h()(this.dateTime).startOf("year").format("YYYY-MM-DD"),e.endTime=h()(this.dateTime).endOf("year").format("YYYY-MM-DD")),o(Object.assign({},t,e)).then(function(t){a.tableData=t.data.data.records||[],a.totalData=t.data.totalData||{},a.page.total=t.data.data.total,a.tableLoading=!1})},search:function(){this.$refs["refSearch"].search()},sizeChange:function(t){this.$refs["refSearch"].search({size:t})},pageChange:function(t){this.$refs["refSearch"].search({current:t})}}},v=p,m=(e("ccc9"),e("2877")),f=Object(m["a"])(v,s,r,!1,null,"db4057d4",null);a["default"]=f.exports},"74f0":function(t,a,e){var s={"./en-gb":"39a6","./zh-cn":"5c3a"};function r(t){var a=i(t);return e(a)}function i(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="74f0"},"83a1":function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t===1/a:t!=t&&a!=a}},ccc9:function(t,a,e){"use strict";var s=e("3069"),r=e.n(s);r.a}}]);