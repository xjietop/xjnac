(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc6ac94"],{"386d":function(e,t,a){"use strict";var r=a("cb7c"),n=a("83a1"),o=a("5f1b");a("214f")("search",1,function(e,t,a,i){return[function(a){var r=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=i(a,e,this);if(t.done)return t.value;var s=r(e),l=String(this),c=s.lastIndex;n(c,0)||(s.lastIndex=0);var d=o(s,l);return n(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]})},"4a15":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container app-member-list"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}}),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"refTable",attrs:{data:e.tableData,height:e.height,stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"supplier_id",label:"组织","min-width":"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_id",label:"订单编号","min-width":"170",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_code",label:"单位编号","min-width":"120",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"单位名称","min-width":"200",align:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"total_amount",label:"总金额","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rebate_amount",label:"用返利","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"special_amount",label:"用专项","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"received_amount",label:"用余额","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payment_amount",label:"应支付","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"k3cloud_save",label:"K3","min-width":"40",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"o_status",label:"订单状态","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"making_status",label:"审核状态","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sales_executive",label:"商务专员","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payment_name",label:"支付方式","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payment_time",label:"支付时间","min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.formatTime(t.row.payment_time))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"erp_receive_code",label:"收款单号","min-width":"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{type:"text"}},[e._v("更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{row:t.row,id:1}}},[e._v("ES增加")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:2}}},[e._v("ES更新")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:3}}},[e._v("订单不能下推")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:4}}},[e._v("订单下推")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:5}}},[e._v("收款单下推")])],1)],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-relation",{ref:"refRelation"}),e._v(" "),a("win-password",{ref:"refPassword"}),e._v(" "),a("win-control-product",{ref:"refControl"}),e._v(" "),a("win-set-club",{ref:"refClub"}),e._v(" "),a("win-set-general",{ref:"refGeneral"}),e._v(" "),a("el-dialog",{attrs:{title:"订单不能下推金蝶原因",visible:e.causeVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.causeVisible=t}}},[a("span",{domProps:{innerHTML:e._s(e.causeInfo)}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.causeVisible=!1}}},[e._v("确 定")])],1)])],1)},n=[],o=(a("a481"),a("386d"),a("db72")),i=a("b775"),s=a("700d");function l(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/orderlist",method:"get",params:e})}function c(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/addEsOrder?orderid=".concat(e.order_id),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"get"})}function d(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/updateEsOrder?orderid=".concat(e.order_id),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"get"})}function u(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/orderNotPushCause",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",params:e})}function f(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/orderPushK3?orderid=".concat(e.order_id),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"get"})}function p(e){return Object(i["a"])({baseURL:s["a"],url:"/b2b/order/receivebillPushK3?orderid=".concat(e.order_id),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"get"})}function b(e){return Object(i["a"])({baseURL:s["a"],url:"/member/admin/userInfo/bindUser/".concat(e.sid),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"put",params:e})}function m(e){return Object(i["a"])({baseURL:s["a"],headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/member/admin/userInfo/reSetPwd/".concat(e.sid),method:"put",params:e})}function h(e){return Object(i["a"])({baseURL:s["a"],url:"/member/admin/userInfo/openStatus/".concat(e.userSid),method:"put",params:e})}function w(e){return Object(i["a"])({baseURL:s["a"],url:"/member/admin/userInfo/setBillType/".concat(e.sid,"/").concat(e.billType),method:"PUT",data:e})}var g=a("5880"),v=a("b932"),_={name:"PageB2bOrderOrderlist",components:{searchBar:v["a"]},data:function(){return{searchData:{quickList:[{label:"单号/客户",value:"where"}],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]},{prop:"status",placeholder:"订单状态",type:"select",clearable:!0,list:[{label:"订单未传K3",value:"1"},{label:"收款单未传K3",value:"2"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0},causeVisible:!1,causeInfo:""}},computed:Object(o["a"])({},Object(g["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),activated:function(){this.$refs["refTable"].doLayout()},methods:{query:function(e){var t=this;this.tableLoading=!0,l(e).then(function(e){t.tableData=e.data.data.records||[],t.page.total=e.data.data.total,t.tableLoading=!1}).catch(function(){t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},formatTime:function(e){return e.substring(0,16).replace("T"," ")},handleCommand:function(e){var t=this;switch(this.$refs["refTable"].setCurrentRow(e.row),e.id){case 1:c(e.row).then(function(){t.$notify({title:"es增加成功",message:"es增加成功",type:"success",duration:2e3})});break;case 2:d(e.row).then(function(){t.$notify({title:"es更新成功",message:"es更新成功",type:"success",duration:2e3})});break;case 3:u(e.row).then(function(e){t.causeInfo=e.data.data,t.causeVisible=!0}).catch(function(){});break;case 4:f(e.row).then(function(e){0==e.data.code?t.$notify({title:"订单下推金蝶",message:"订单下推金蝶成功",type:"success",duration:2e3}):t.$notify({title:"订单下推金蝶",message:e.data.msg,type:"warning",duration:2e3})});break;case 5:p(e.row).then(function(e){0==e.data.code?t.$notify({title:"收款单下推金蝶",message:"收款单下推金蝶成功",type:"success",duration:2e3}):t.$notify({title:"收款单下推金蝶",message:e.data.msg,type:"warning",duration:2e3})});break}},detail:function(e){this.$router.push({path:"/member/detail",query:{id:e.sid}})},resetPassword:function(e){var t=this;this.$refs["refPassword"].update(e,function(e){m(e).then(function(){t.$refs["refPassword"].loading=!1,t.$refs["refPassword"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refPassword"].loading=!1})})},esadd:function(e){c(e).then(function(){}).catch(function(){})},relation:function(e){var t=this;this.$refs["refRelation"].update(e,function(a){a.sid=e.sid,b(a).then(function(){t.$refs["refSearch"].search(),t.$refs["refRelation"].loading=!1,t.$refs["refRelation"].close(),t.$notify({title:"成功",message:"关联成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refRelation"].loading=!1})})},controlProduct:function(e){this.$refs["refControl"].open(e,function(e){})},setClub:function(e){var t=this;this.$refs["refClub"].update(e,function(e){h({userSid:e.sid,clubs:e.clubs.join(",")}).then(function(e){t.$refs["refSearch"].search(),t.$refs["refClub"].loading=!1,t.$refs["refClub"].close(),t.$notify({title:"成功",message:"俱乐部成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refClub"].loading=!1})})},setGeneral:function(e){var t=this;this.$refs["refGeneral"].update(e,function(e){w(e).then(function(e){t.$refs["refSearch"].search(),t.$refs["refGeneral"].loading=!1,t.$refs["refGeneral"].close(),t.$notify({title:"成功",message:"设置成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refGeneral"].loading=!1})})}}},y=_,$=(a("5c92"),a("2877")),C=Object($["a"])(y,r,n,!1,null,"35bb416c",null);t["default"]=C.exports},"5c92":function(e,t,a){"use strict";var r=a("de7c"),n=a.n(r);n.a},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},de7c:function(e,t,a){}}]);