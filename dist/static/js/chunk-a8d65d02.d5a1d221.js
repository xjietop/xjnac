(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8d65d02"],{1900:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-list-relation",attrs:{title:"关联账户",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"userCode",label:"会员编号"}},[a("el-input",{attrs:{type:"text",disabled:"",placeholder:"请输入会员编号"},model:{value:e.form.userCode,callback:function(t){e.$set(e.form,"userCode",t)},expression:"form.userCode"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"name",label:"会员名称"}},[a("el-input",{attrs:{type:"text",disabled:"",placeholder:"请输入会员名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"phone",label:"会员电话"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"email",label:"会员邮箱"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"account",label:"会员区分码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员区分码"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account","string"===typeof t?t.trim():t)},expression:"form.account"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"businessType",label:"会员类型"}},[a("el-radio",{attrs:{label:2},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},[e._v("诊所")]),e._v(" "),a("el-radio",{attrs:{label:1},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},[e._v("药店")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},r=[],n={name:"WinMemberListRelation",data:function(){return{edit:!1,loading:!1,form:{userCode:"",name:"",phone:"",email:"",account:"",businessType:1},rules:{phone:[{required:!0,message:"请输入会员电话",trigger:"blur"}],email:[],account:[],businessType:[{required:!0,message:"请选择会员类型",trigger:"change"}]},show:!1}},watch:{},created:function(){},methods:{update:function(e,t){var a=this;this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){for(var t in a.$refs["ruleForm"].resetFields(),a.form)a.form[t]=e[t]})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},i=n,c=(a("faa9"),a("2877")),l=Object(c["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports},"2f51":function(e,t,a){},"386d":function(e,t,a){"use strict";var s=a("cb7c"),r=a("83a1"),n=a("5f1b");a("214f")("search",1,function(e,t,a,i){return[function(a){var s=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s):new RegExp(a)[t](String(s))},function(e){var t=i(a,e,this);if(t.done)return t.value;var c=s(e),l=String(this),o=c.lastIndex;r(o,0)||(c.lastIndex=0);var u=n(c,l);return r(c.lastIndex,o)||(c.lastIndex=o),null===u?-1:u.index}]})},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"8d2c":function(e,t,a){},a758:function(e,t,a){"use strict";var s=a("2f51"),r=a.n(s);r.a},b932:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-search-bar clearfix"},[a("div",{staticClass:"app-search-left dib-wrap"},[e.searchData.quickList.length>0?a("div",{staticClass:"search-item dib"},[a("el-input",{attrs:{size:"small",placeholder:"请输入关键字",clearable:""},on:{clear:e.search},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchQuick.searchValue,callback:function(t){e.$set(e.searchQuick,"searchValue",t)},expression:"searchQuick.searchValue"}},[a("el-select",{attrs:{slot:"prepend",size:"small"},slot:"prepend",model:{value:e.searchQuick.searchType,callback:function(t){e.$set(e.searchQuick,"searchType",t)},expression:"searchQuick.searchType"}},e._l(e.searchData.quickList,function(t,s){return a("el-option",e._b({key:s},"el-option",t,!1))}),1)],1)],1):e._e(),e._v(" "),e._l(e.searchData.searchList,function(t,s){return a("div",{key:s,staticClass:"search-item dib"},["select"===t.type?[a("el-select",{attrs:{clearable:t.clearable,placeholder:t.placeholder,disabled:t.disabled,size:"small"},on:{change:function(t){return e.search()}},model:{value:e.searchParams[t.prop],callback:function(a){e.$set(e.searchParams,t.prop,a)},expression:"searchParams[searchItem.prop]"}},e._l(t.list,function(t){return a("el-option",e._b({key:t.value},"el-option",t,!1))}),1)]:e._e()],2)}),e._v(" "),e._t("left"),e._v(" "),a("div",{staticClass:"search-item dib"},[a("el-button",{attrs:{size:"small",icon:"el-icon-search",type:"primary"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-delete"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),e._t("leftBtn")],2)],2),e._v(" "),a("div",{staticClass:"app-search-right dib-wrap"},[e._t("right")],2)])},r=[],n=(a("ac6a"),a("386d"),{name:"SearchBar",props:{searchData:{type:Object,default:function(){return{quickList:[],searchList:[],page:{size:20,current:1}}}},autoLoad:{type:Boolean,default:!0}},data:function(){return{searchQuick:{searchType:"",searchValue:""},searchParams:{size:20,current:1}}},watch:{searchData:{deep:!0,handler:function(e,t){this.initParams()}}},created:function(){var e=this;this.initParams(function(){e.search()})},methods:{initParams:function(e){var t=this;this.searchData.searchList.forEach(function(e){t.$set(t.searchParams,e.prop,e.defaultValue||"")}),this.searchData.quickList.length>0&&(this.searchQuick.searchType=this.searchData.quickList[0].value),this.searchParams.size=this.searchData.page.size,this.searchParams.current=this.searchData.page.current,e&&this.autoLoad&&e()},getParams:function(){var e=Object.assign({},this.searchParams);return this.searchData.quickList.length>0&&(e[this.searchQuick.searchType]=this.searchQuick.searchValue),e},search:function(e){this.searchParams.current=1;var t=this.getParams();e&&(t=Object.assign({},t,e||{})),this.$emit("search",t)},reset:function(){this.searchQuick.searchValue="",this.$emit("reset"),this.initParams(),this.search()},resetSearch:function(){this.searchQuick.searchValue="",this.$emit("reset"),this.initParams()}}}),i=n,c=a("2877"),l=Object(c["a"])(i,s,r,!1,null,null,null);t["a"]=l.exports},d60b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container app-other-banner"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}},[a("template",{slot:"right"},[a("div",{staticClass:"app-search-right"},[a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.create}},[e._v("添加")])],1)])],2),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:e.height,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"200",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"封面","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],attrs:{src:e.ossURL+t.row.thumbnails,fit:"contain"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"clubName",label:"展示俱乐部","min-width":"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"资讯类型","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.typeData.filter(function(e){return e.value===t.row.type})[0].label)+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createUser",label:"创建人","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"statusName",label:"发布状态","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"issuerUser",label:"发布人","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"issuerTime",label:"发布时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.update(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",disabled:"NOMAL"===t.row.status},on:{click:function(a){return e.publish(t.row)}}},[e._v("发布")]),e._v(" "),a("el-button",{attrs:{type:"text",disabled:"CLOSE"===t.row.status},on:{click:function(a){return e.cancel(t.row)}}},[e._v("作废")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-news",{ref:"refNews"})],1)},r=[],n=(a("386d"),a("db72")),i=a("b775"),c=a("700d");function l(e){return Object(i["a"])({baseURL:c["a"],url:"/cms/admin/news/page",method:"get",params:e})}function o(e){return Object(i["a"])({baseURL:c["a"],url:"/cms/admin/news/",method:"post",data:e})}function u(e){return Object(i["a"])({baseURL:c["a"],url:"/cms/admin/news/".concat(e.sid),method:"delete"})}function h(e){return Object(i["a"])({baseURL:c["a"],url:"/cms/admin/news",method:"put",data:e})}var f=a("5880"),p=a("b932"),m=a("1900"),d={name:"PageNewsList",components:{WinNews:m["a"],searchBar:p["a"]},data:function(){return{ossURL:this.$store.getters.oss_url+"/",searchData:{quickList:[{label:"按资讯标题",value:"title"}],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0},typeData:[{label:"公告",value:1},{label:"新闻",value:2},{label:"活动",value:3},{label:"其它",value:4}]}},computed:Object(n["a"])({},Object(f["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),methods:{query:function(e){var t=this;this.tableLoading=!0,l(Object.assign({},e)).then(function(e){t.tableData=e.data.data.records,t.page.total=e.data.data.total,t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},create:function(){var e=this;this.$refs["refNews"].add(function(t){o(t).then(function(){e.$refs["refNews"].loading=!1,e.$refs["refNews"].close(),e.$refs["refSearch"].search(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(){e.$refs["refNews"].loading=!1})})},remove:function(e){var t=this;this.$confirm('是否确认删除标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return u(e)}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})},publish:function(e){var t=this;this.$confirm('是否确认发布标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return h({sid:e.sid,status:0})}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"发布成功",type:"success"})}).catch(function(){})},cancel:function(e){var t=this;this.$confirm('是否确认作废标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return h({sid:e.sid,status:1})}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"作废成功",type:"success"})}).catch(function(){})},update:function(e){var t=this;this.$refs["refNews"].update(e,function(e){h(e).then(function(){t.$refs["refSearch"].search(),t.$refs["refNews"].loading=!1,t.$refs["refNews"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refNews"].loading=!1})})}}},b=d,v=(a("a758"),a("2877")),g=Object(v["a"])(b,s,r,!1,null,"78a1f564",null);t["default"]=g.exports},faa9:function(e,t,a){"use strict";var s=a("8d2c"),r=a.n(s);r.a}}]);