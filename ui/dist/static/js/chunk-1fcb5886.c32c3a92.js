(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fcb5886"],{"31cf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"app-search-bar clearfix"},[a("div",{staticClass:"app-search-right"},[a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.create}},[e._v("添加")])],1)]),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{attrs:{data:e.tableData,height:e.height}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"描述","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appId",label:"appId","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appSecret",label:"appSecret","min-width":"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.update(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-social",{ref:"refSocial"})],1)},i=[],n=a("db72"),l=a("b775"),s=a("700d");function o(e){return Object(l["a"])({baseURL:s["a"],url:"/admin/social/page",method:"get",params:e})}function c(e){return Object(l["a"])({baseURL:s["a"],url:"/admin/social/",method:"post",data:e})}function p(e){return Object(l["a"])({baseURL:s["a"],url:"/admin/social/"+e,method:"delete"})}function u(e){return Object(l["a"])({baseURL:s["a"],url:"/admin/social/",method:"put",data:e})}var f=a("5880"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-system-social",attrs:{title:e.edit?"编 辑":"新 增",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"96px"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"id",label:"ID"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1)],1),e._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{prop:"type",label:"类型"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"描述",label:"描述"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{prop:"appId",label:"appId"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.appId,callback:function(t){e.$set(e.form,"appId",t)},expression:"form.appId"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"appSecret",label:"appSecret"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.appSecret,callback:function(t){e.$set(e.form,"appSecret",t)},expression:"form.appSecret"}})],1)],1),e._v(" "),a("el-col",{attrs:{offset:2,span:11}},[a("el-form-item",{attrs:{prop:"redirectUrl",label:"回调地址"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.redirectUrl,callback:function(t){e.$set(e.form,"redirectUrl",t)},expression:"form.redirectUrl"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"createTime",label:"创建时间"}},[a("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.form.createTime,callback:function(t){e.$set(e.form,"createTime",t)},expression:"form.createTime"}})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},m=[],h={name:"WinClient",data:function(){return{edit:!1,loading:!1,form:{id:"",type:"",remark:"",appId:"",appSecret:"",redirectUrl:""},rules:{},show:!1}},watch:{},created:function(){},methods:{add:function(e){var t=this;this.edit=!1,this.loading=!1,this.callback=e,this.checkedDsScope=[],this.show=!0,this.$nextTick(function(){t.$refs["ruleForm"].resetFields()})},update:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.checkedDsScope=[],this.show=!0,this.$nextTick(function(){for(var t in a.$refs["ruleForm"].resetFields(),a.form)e[t]&&(a.form[t]=e[t])})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},g=h,b=(a("b2fa"),a("2877")),v=Object(b["a"])(g,d,m,!1,null,null,null),w=v.exports,x={name:"PageSystemSocial",components:{WinSocial:w},data:function(){return{tableData:[],page:{total:0,currentPage:1,pageSize:20}}},computed:Object(n["a"])({},Object(f["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),created:function(){this.query()},methods:{query:function(){var e=this;this.listLoading=!0,o(Object.assign({current:this.page.currentPage,size:this.page.pageSize},this.searchParams)).then(function(t){e.tableData=t.data.data.records,e.page.total=t.data.data.total,e.listLoading=!1})},sizeChange:function(e){this.page.pageSize=e,this.query()},pageChange:function(e){this.page.currentPage=e,this.query()},create:function(){var e=this;this.$refs["refSocial"].add(function(t){c(t).then(function(){e.$refs["refSocial"].loading=!1,e.$refs["refSocial"].close(),e.query(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(){e.$refs["refSocial"].loading=!1})})},remove:function(e){var t=this;this.$confirm('是否确认删除ID为"'+e.clientId+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return p(e)}).then(function(){t.query(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})},update:function(e){var t=this;this.$refs["refSocial"].update(e,function(e){u(e).then(function(){t.query(),t.$refs["refSocial"].loading=!1,t.$refs["refSocial"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refSocial"].loading=!1})})}}},y=x,k=Object(b["a"])(y,r,i,!1,null,null,null);t["default"]=k.exports},"57ec":function(e,t,a){},b2fa:function(e,t,a){"use strict";var r=a("57ec"),i=a.n(r);i.a}}]);