(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e24e6"],{"7dad":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"app-search-bar clearfix"},[a("div",{staticClass:"app-search-left dib-wrap"},[a("div",{staticClass:"search-item dib"},[a("el-select",{attrs:{placeholder:"选择类型",size:"small"},on:{change:function(t){return e.query()}},model:{value:e.searchParams.type,callback:function(t){e.$set(e.searchParams,"type",t)},expression:"searchParams.type"}},[a("el-option",{attrs:{label:"正常",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"异常",value:"9"}})],1)],1),e._v(" "),a("div",{staticClass:"search-item dib"},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("搜索")])],1)])]),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:e.height}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remoteAddr",label:"IP地址","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"method",label:"请求方式","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"serviceId",label:"客户端","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"请求时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-role",{ref:"refRole"}),e._v(" "),a("win-permession",{ref:"refPermession"})],1)},i=[],r=a("b775"),l=a("700d");function s(e){return Object(r["a"])({baseURL:l["a"],url:"/scheduling/sys-job/page",method:"get",params:e})}function c(e){return Object(r["a"])({baseURL:l["a"],url:"/admin/log/"+e,method:"delete"})}var o={name:"Log",data:function(){return{searchParams:{type:null},tableData:[],tableLoading:!1,page:{total:0,currentPage:1,pageSize:20}}},computed:{height:function(){return this.$store.getters.winHeight-205}},created:function(){this.query()},methods:{query:function(){var e=this;this.tableLoading=!0,s(Object.assign({descs:"create_time",current:this.page.currentPage,size:this.page.pageSize},this.searchParams)).then(function(t){e.tableData=t.data.data.records,e.page.total=t.data.data.total,e.tableLoading=!1})},sizeChange:function(e){this.page.pageSize=e,this.query()},pageChange:function(e){this.page.currentPage=e,this.query()},remove:function(e){var t=this;this.$confirm('是否确认删除ID为"'+e.id+'"的日志?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return c(e.id)}).then(function(e){t.query(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})}}},p=o,u=a("2877"),d=Object(u["a"])(p,n,i,!1,null,"1beb1fda",null);t["default"]=d.exports}}]);