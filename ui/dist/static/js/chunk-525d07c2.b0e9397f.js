(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-525d07c2"],{"21b5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container app-other-banner"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}},[a("template",{slot:"right"},[a("div",{staticClass:"app-search-right"},[a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.create}},[e._v("添加")])],1)])],2),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:e.height,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"200",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"封面","min-width":"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{directives:[{name:"viewer",rawName:"v-viewer"}],attrs:{src:e.ossURL+t.row.thumbnails,fit:"contain"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"clubName",label:"展示俱乐部","min-width":"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"资讯类型","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.typeData.filter(function(e){return e.value===t.row.type})[0].label)+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createUser",label:"创建人","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"statusName",label:"发布状态","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"issuerUser",label:"发布人","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"issuerTime",label:"发布时间","min-width":"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.update(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",disabled:"NOMAL"===t.row.status},on:{click:function(a){return e.publish(t.row)}}},[e._v("发布")]),e._v(" "),a("el-button",{attrs:{type:"text",disabled:"CLOSE"===t.row.status},on:{click:function(a){return e.cancel(t.row)}}},[e._v("作废")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-news",{ref:"refNews"})],1)},r=[],s=(a("386d"),a("db72")),l=a("b775"),i=a("700d");function c(e){return Object(l["a"])({baseURL:i["a"],url:"/cms/admin/news/page",method:"get",params:e})}function o(e){return Object(l["a"])({baseURL:i["a"],url:"/cms/admin/news/",method:"post",data:e})}function u(e){return Object(l["a"])({baseURL:i["a"],url:"/cms/admin/news/".concat(e.sid),method:"delete"})}function f(e){return Object(l["a"])({baseURL:i["a"],url:"/cms/admin/news",method:"put",data:e})}var h=a("2f62"),m=a("b932"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-news-list",attrs:{title:e.edit?"编 辑":"新 增",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"80px"}},[a("el-form-item",{attrs:{prop:"title",label:"资讯标题"}},[a("el-input",{attrs:{placeholder:"请输入资讯标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"type",label:"资讯类型"}},[a("el-select",{attrs:{placeholder:"请选资讯类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeData,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"thumbnails",label:"封面图片"}},[a("image-upload",{attrs:{multiple:!1},model:{value:e.form.thumbnails,callback:function(t){e.$set(e.form,"thumbnails",t)},expression:"form.thumbnails"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"club",label:"展示范围"}},[a("el-checkbox-group",{model:{value:e.form.club,callback:function(t){e.$set(e.form,"club",t)},expression:"form.club"}},[a("el-checkbox",{attrs:{label:0,name:"club"}},[e._v("乐赛仙")]),e._v(" "),a("el-checkbox",{attrs:{label:1,name:"club"}},[e._v("佐安堂")]),e._v(" "),a("el-checkbox",{attrs:{label:2,name:"club"}},[e._v("初心")]),e._v(" "),a("el-checkbox",{attrs:{label:3,name:"club"}},[e._v("尚划算")])],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"content",label:"资讯内容"}},[a("tinymce",{ref:"tinymce",attrs:{id:"tinymce",height:300},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},d=[],p=a("8256"),g=a("4a9d"),v={name:"WinNews",components:{Tinymce:p["a"],imageUpload:g["a"]},data:function(){return{edit:!1,loading:!1,form:{title:"",type:"",thumbnails:"",club:[],content:""},rules:{title:[{required:!0,message:"请输入资讯标题",trigger:"blur"}],type:[{required:!0,message:"请选择资讯类型",trigger:"change"}],thumbnails:[{required:!1,message:"请上传封面图片",trigger:"change"}],club:[{type:"array",required:!0,message:"请选择展示范围",trigger:"change"}],content:[{required:!0,message:"请输入资讯内容",trigger:"change"}]},typeData:[{label:"公告",value:1},{label:"新闻",value:2},{label:"活动",value:3},{label:"其它",value:4}],show:!1}},watch:{},created:function(){},methods:{add:function(e){var t=this;this.edit=!1,this.loading=!1,this.callback=e,this.show=!0,this.$nextTick(function(){t.form.thumbnails="",t.$refs["ruleForm"].resetFields(),t.$refs["tinymce"].setContent(" ")})},update:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){for(var t in a.$refs["ruleForm"].resetFields(),a.form)switch(t){default:a.form[t]=e[t];break;case"club":"1"===e.club.substring(0,1)&&a.form.club.push(0),"1"===e.club.substring(1,2)&&a.form.club.push(1),"1"===e.club.substring(2,3)&&a.form.club.push(2),"1"===e.club.substring(3,4)&&a.form.club.push(3);break;case"content":a.form[t]=e[t],a.$refs["tinymce"].setContent(e.content);break}a.form.sid=e.sid})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;for(var a=Object.assign({},e.form),n=[0,0,0,0],r=0;r<e.form.club.length;r++)n[e.form.club[r]]=1;a.club=n.join(""),e.callback(a)})},close:function(){this.show=!1}}},w=v,y=(a("dc65"),a("2877")),_=Object(y["a"])(w,b,d,!1,null,null,null),x=_.exports,$={name:"PageNewsList",components:{WinNews:x,searchBar:m["a"]},data:function(){return{ossURL:this.$store.getters.oss_url+"/",searchData:{quickList:[{label:"按资讯标题",value:"title"}],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0},typeData:[{label:"公告",value:1},{label:"新闻",value:2},{label:"活动",value:3},{label:"其它",value:4}]}},computed:Object(s["a"])({},Object(h["b"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),methods:{query:function(e){var t=this;this.tableLoading=!0,c(Object.assign({},e)).then(function(e){t.tableData=e.data.data.records,t.page.total=e.data.data.total,t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},create:function(){var e=this;this.$refs["refNews"].add(function(t){o(t).then(function(){e.$refs["refNews"].loading=!1,e.$refs["refNews"].close(),e.$refs["refSearch"].search(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}).catch(function(){e.$refs["refNews"].loading=!1})})},remove:function(e){var t=this;this.$confirm('是否确认删除标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return u(e)}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"删除成功",type:"success"})}).catch(function(){})},publish:function(e){var t=this;this.$confirm('是否确认发布标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return f({sid:e.sid,status:0})}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"发布成功",type:"success"})}).catch(function(){})},cancel:function(e){var t=this;this.$confirm('是否确认作废标题为"'+e.title+'"的资讯?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return f({sid:e.sid,status:1})}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"作废成功",type:"success"})}).catch(function(){})},update:function(e){var t=this;this.$refs["refNews"].update(e,function(e){f(e).then(function(){t.$refs["refSearch"].search(),t.$refs["refNews"].loading=!1,t.$refs["refNews"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refNews"].loading=!1})})}}},k=$,C=(a("ad63"),Object(y["a"])(k,n,r,!1,null,"1d026a92",null));t["default"]=C.exports},"386d":function(e,t,a){"use strict";var n=a("cb7c"),r=a("83a1"),s=a("5f1b");a("214f")("search",1,function(e,t,a,l){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=l(a,e,this);if(t.done)return t.value;var i=n(e),c=String(this),o=i.lastIndex;r(o,0)||(i.lastIndex=0);var u=s(i,c);return r(i.lastIndex,o)||(i.lastIndex=o),null===u?-1:u.index}]})},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},ad63:function(e,t,a){"use strict";var n=a("f0cd"),r=a.n(n);r.a},b8af:function(e,t,a){},dc65:function(e,t,a){"use strict";var n=a("b8af"),r=a.n(n);r.a},f0cd:function(e,t,a){}}]);