(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-959489d8"],{"424a":function(e,t,a){},5552:function(e,t,a){"use strict";var n=a("424a"),i=a.n(n);i.a},6159:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"app-search-bar clearfix"},[a("div",{staticClass:"app-search-left dib-wrap"},[a("div",{staticClass:"search-item dib"},[a("el-input",{attrs:{placeholder:"用户名,说明",clearable:""},on:{clear:function(t){return e.query()}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query()}},model:{value:e.searchParams.where,callback:function(t){e.$set(e.searchParams,"where",t)},expression:"searchParams.where"}})],1),e._v(" "),a("div",{staticClass:"search-item dib"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.query()}}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{size:"small"}},[e._v("新增")])],1)])]),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:e.height}},[a("el-table-column",{attrs:{prop:"fid",label:"ID","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Fname",label:"用户名","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"fdescription",label:"说明","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Fdisable",label:"禁用","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.remove(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.userDetail(t.row)}}},[e._v("查看")]),e._v(" "),0==t.row.Fdisable?a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.disable(t.row)}}},[e._v("禁用")]):e._e(),e._v(" "),1==t.row.Fdisable?a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.enable(t.row)}}},[e._v("启用")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.remove(t.row)}}},[e._v("设权限")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.remove(t.row)}}},[e._v("查权限")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[10,20,50,100,200],"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-role",{ref:"refRole"}),e._v(" "),a("win-permession",{ref:"refPermession"}),e._v(" "),a("WinUserDetail",{ref:"refUserDetail"})],1)},i=[],r=a("c24f"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-special-detail",attrs:{title:e.title,visible:e.show,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.show=t}}},[a("div",{staticClass:"app-table"},[a("div",{staticClass:"app-search-bar search-bar clearfix"},[a("div",{staticClass:"app-search-left dib-wrap"},[a("div",{staticClass:"search-item dib"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small"},on:{change:e.query,clear:e.query},model:{value:e.searchParams.date,callback:function(t){e.$set(e.searchParams,"date",t)},expression:"searchParams.date"}})],1),e._v(" "),a("div",{staticClass:"search-item dib"},[a("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"primary"},on:{click:e.query}},[e._v("搜索")])],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"table",attrs:{data:e.tableData,height:450},on:{select:e.handleSelect}},[a("el-table-column",{attrs:{prop:"productCode",label:"时间","min-width":"120",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"commodityName",label:"订单编号","min-width":"150",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"spec",label:"事件","min-width":"150",align:"left"}}),e._v(" "),a("el-table-column",{attrs:{prop:"manufacturer",label:"金额","min-width":"120",align:"left","show-overflow-tooltip":""}})],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",small:"","current-page":e.page.current,"page-size":e.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1)],1)])},s=[],c=(a("7f7f"),a("c1df")),o=a.n(c),u={name:"WinSpecialDetail",components:{},data:function(){return{edit:!1,title:"查看用户详情",loading:!1,searchParams:{userInfoSid:"",accountSpecialSid:"",accountType:2,date:[],current:1,size:10},tableData:[],tableLoading:!1,page:{total:0},show:!1}},watch:{},created:function(){},methods:{open:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.title=e.name+"用户详情",this.searchParams.userInfoSid=e.userInfoSid,this.searchParams.accountSpecialSid=e.sepecalSid,this.show=!0,this.$nextTick(function(){a.query()})},close:function(){this.show=!1},query:function(){var e=this;this.tableLoading=!0;var t=Object.assign({},this.searchParams);t.date&&(t.startTime=o()(t.date[0]).format("YYYY-MM-DD")),t.date&&(t.endTime=o()(t.date[1]).format("YYYY-MM-DD")),delete t.date,Object(r["getUserAccountDetail"])(t).then(function(t){e.tableData=t.data.data.records||[],e.page.total=t.data.data.total,e.tableLoading=!1})},sizeChange:function(e){},pageChange:function(e){this.searchData.page.current=e}}},d=u,p=(a("5552"),a("2877")),h=Object(p["a"])(d,l,s,!1,null,null,null),f=h.exports,g={name:"PageSystemUserList",components:{WinUserDetail:f},data:function(){return{searchParams:{type:null,where:""},tableData:[],tableLoading:!1,page:{total:0,currentPage:1,pageSize:20}}},computed:{height:function(){return this.$store.getters.winHeight-205}},created:function(){this.query()},methods:{query:function(){var e=this;this.tableLoading=!0,Object(r["d"])(Object.assign({descs:"create_time",current:this.page.currentPage,size:this.page.pageSize,where:this.where},this.searchParams)).then(function(t){e.tableData=t.data.data.records,e.page.total=t.data.data.total,e.tableLoading=!1,null==e.tableData&&(e.page.currentPage=1)})},sizeChange:function(e){this.page.pageSize=e,this.query()},pageChange:function(e){this.page.currentPage=e,this.query()},disable:function(e){var t=this;this.$confirm('是否确认禁用ID为"'+e.Fid+'"的用户?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["a"])(e.Fid).then(function(){t.query(),t.$message("禁用成功")})}).catch(function(){})},enable:function(e){var t=this;this.$confirm('是否确认启用ID为"'+e.Fid+'"的用户?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["b"])(e.Fid).then(function(){t.query(),t.$message("启用成功")})}).catch(function(){})},remove:function(e){var t=this;this.$confirm('是否确认删除ID为"'+e.id+'"的日志?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).then(function(e){t.query(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})},userDetail:function(e){this.$refs["refUserDetail"].open(e,function(e){})}}},m=g,b=Object(p["a"])(m,n,i,!1,null,"c566902c",null);t["default"]=b.exports},"74f0":function(e,t,a){var n={"./en-gb":"39a6","./zh-cn":"5c3a"};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="74f0"}}]);