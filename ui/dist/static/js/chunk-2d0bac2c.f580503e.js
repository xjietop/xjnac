(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac2c"],{"391a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("basic-container",[n("div",{staticClass:"filter-container"},[n("el-button-group",[e.menuManager_btn_add?n("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handlerAdd}},[e._v("添加\n                ")]):e._e(),e._v(" "),e.menuManager_btn_edit?n("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:e.handlerEdit}},[e._v("编辑\n                ")]):e._e(),e._v(" "),e.menuManager_btn_del?n("el-button",{attrs:{type:"primary",icon:"delete"},on:{click:e.handleDelete}},[e._v("删除\n                ")]):e._e()],1)],1),e._v(" "),n("el-row",[n("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:8}},[n("el-tree",{staticClass:"filter-tree",attrs:{"node-key":"id","highlight-current":"",data:e.treeData,"default-expanded-keys":e.aExpandedKeys,"filter-node-method":e.filterNode,props:e.defaultProps},on:{"node-click":e.getNodeData,"node-expand":e.nodeExpand,"node-collapse":e.nodeCollapse}})],1),e._v(" "),n("el-col",{staticStyle:{"margin-top":"15px"},attrs:{span:16}},[n("el-card",{staticClass:"box-card"},[n("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.form}},[n("el-form-item",{attrs:{label:"父级节点",prop:"parentId"}},[n("el-input",{attrs:{disabled:!0,placeholder:"请输入父级节点"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"节点ID",prop:"menuId"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入节点ID"},model:{value:e.form.menuId,callback:function(t){e.$set(e.form,"menuId",t)},expression:"form.menuId"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"标题",prop:"name"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入标题"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"权限标识",prop:"permission"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入权限标识"},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"图标",prop:"icon"}},[n("avue-crud-icon-select",{attrs:{"icon-list":e.iconList,disabled:e.formEdit,placeholder:"请输入图标"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"类型",prop:"type"}},[n("el-select",{staticClass:"filter-item",attrs:{disabled:e.formEdit,placeholder:"请输入资源请求类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeOptions,function(t){return n("el-option",{key:t,attrs:{label:e._f("typeFilter")(t),value:t}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"排序",prop:"sort"}},[n("el-input",{attrs:{type:"number",disabled:e.formEdit,placeholder:"请输入排序"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"前端组件",prop:"component"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"请输入描述"},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"前端地址",prop:"component"}},[n("el-input",{attrs:{disabled:e.formEdit,placeholder:"iframe嵌套地址"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"路由缓冲",prop:"component"}},[n("el-switch",{attrs:{disabled:e.formEdit,"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:e.form.keepAlive,callback:function(t){e.$set(e.form,"keepAlive",t)},expression:"form.keepAlive"}})],1),e._v(" "),"update"==e.formStatus?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("更新\n                            ")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e(),e._v(" "),"create"==e.formStatus?n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.create}},[e._v("保存\n                            ")]),e._v(" "),n("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1):e._e()],1)],1)],1)],1)],1)],1)},o=[],a=n("db72"),r=n("c24f"),s=n("5880"),l=[{label:"阿里云图标",list:["icon-quanxianguanli","icon-yonghuguanli","icon-jiaoseguanli","icon-web-icon-","icon-xitongguanli","icon-rizhiguanli","icon-navicon-zdgl","icon-weibiaoti46","icon-miyue","icon-shouji","icon-miyue","icon-denglvlingpai","icon-luyou","icon-msnui-supervise","icon-server","icon-wendang","icon-gtsquanjushiwufuwuGTS","icon-caidanguanli","icon-guanwang","icon-guanwangfangwen","icon-guiji"]}],d={name:"PageAuthMenu",filters:{typeFilter:function(e){var t={0:"菜单",1:"按钮"};return t[e]}},data:function(){return{iconList:l,list:null,total:null,formEdit:!0,formAdd:!0,formStatus:"",showElement:!1,typeOptions:["0","1"],methodOptions:["GET","POST","PUT","DELETE"],listQuery:{name:void 0},treeData:[],oExpandedKey:{},oTreeNodeChildren:{},aExpandedKeys:[],defaultProps:{children:"children",label:"name"},labelPosition:"right",form:{permission:void 0,name:void 0,menuId:void 0,parentId:void 0,icon:void 0,sort:void 0,component:void 0,type:void 0,path:void 0},currentId:-1,menuManager_btn_add:!1,menuManager_btn_edit:!1,menuManager_btn_del:!1}},computed:Object(a["a"])({},Object(s["mapGetters"])(["elements","permissions"])),created:function(){this.getList(),this.menuManager_btn_add=this.permissions["sys_menu_add"],this.menuManager_btn_edit=this.permissions["sys_menu_edit"],this.menuManager_btn_del=this.permissions["sys_menu_del"]},methods:{getList:function(){var e=this;Object(r["fetchMenuTree"])(this.listQuery).then(function(t){e.treeData=t.data.data})},filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},nodeExpand:function(e){var t=e.children;t.length>0&&(this.oExpandedKey[e.id]=!0,this.oTreeNodeChildren[e.id]=t),this.setExpandedKeys()},nodeCollapse:function(e){var t=this;this.oExpandedKey[e.id]=!1,this.treeRecursion(this.oTreeNodeChildren[e.id],function(e){t.oExpandedKey[e.id]=!1}),this.setExpandedKeys()},setExpandedKeys:function(){var e=this.oExpandedKey;for(var t in this.aExpandedKeys=[],e)e[t]&&this.aExpandedKeys.push(parseInt(t))},treeRecursion:function(e,t){if(e)for(var n=0;n<e.length;++n){var i=e[n];t&&t(i),this.treeRecursion(i.children,t)}},getNodeData:function(e){var t=this;this.formEdit||(this.formStatus="update"),Object(r["getObj"])(e.id).then(function(e){t.form=e.data.data}),this.currentId=e.id,this.showElement=!0},handlerEdit:function(){this.form.menuId&&(this.formEdit=!1,this.formStatus="update")},handlerAdd:function(){this.resetForm(),this.formEdit=!1,this.formStatus="create"},handleDelete:function(){var e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["delObj"])(e.currentId).then(function(){e.getList(),e.resetForm(),e.onCancel(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})})})},update:function(){var e=this;Object(r["putObj"])(this.form).then(function(){e.getList(),e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})},create:function(){var e=this;Object(r["addObj"])(this.form).then(function(){e.getList(),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})},onCancel:function(){this.formEdit=!0,this.formStatus=""},resetForm:function(){this.form={permission:void 0,name:void 0,menuId:void 0,parentId:this.currentId,icon:void 0,sort:void 0,component:void 0,type:void 0,path:void 0}}}},c=d,m=n("2877"),u=Object(m["a"])(c,i,o,!1,null,null,null);t["default"]=u.exports}}]);