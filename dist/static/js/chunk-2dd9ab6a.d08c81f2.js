(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd9ab6a"],{"0b60":function(e,t,a){"use strict";t["a"]={IDcard:/^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/,cell_phone:/^(1[3-9][0-9])\d{8}$|\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,mobile:/^((13|14|15|17|18)[0-9]{1}\d{8})$/,chinese:/^[\u0391-\uFFE5]+$/,date:/^\d{4}-\d{2}-\d{2}$/,digits:/^\d+$/,email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,letters:/^[a-z]+$/i,person_name:/^(?!\d+$)[\dA-Za-z\u2E80-\uFE4F]{1,20}$/,qq:/^[1-9]\d{4,}$/,tel:/^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/,time:/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/,url:/^(https?|s?ftp):\/\/\S+$/i,zipcode:/^\d{6}$/,telPhone:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$|^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$|^0\d{2,3}-?\d{7,8}$/,longitude:/^[\-\+]?(((\d|[1-9]\d|1[0-7]\d|0)\.\d{0,10})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,10}|180)$/,latitude:/^[\-\+]?([0-8]?\d{1}\.\d{0,10}|90\.0{0,10}|[0-8]?\d{1}|90)$/,zmszhz:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,price:/^[0-9]+([.]{1}[0-9]{1,2})?$/,priceDecimal:/^[0-9]+([.]{1}[0-9]{1,4})?$/,money:/^\d+(\.\d{1,2})?$/,money2:/^[\-\+]?\d+(\.\d{1,2})?$/,money3:/^\d{1,10}(\.\d{1,2})?$/,discount:/^(\d|[1-9]\d|100)(\.\d{1,2})?$/,passWord:/^[a-zA-Z0-9\x21-\x7e]{6,20}$/}},"1cc8":function(e,t,a){"use strict";var r=a("bb01"),n=a.n(r);n.a},2934:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a("b775"),n=a("700d");function o(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/productClass/industryClass/all",method:"get",params:e})}},3515:function(e,t,a){"use strict";var r=a("aea8"),n=a.n(r);n.a},"386d":function(e,t,a){"use strict";var r=a("cb7c"),n=a("83a1"),o=a("5f1b");a("214f")("search",1,function(e,t,a,s){return[function(a){var r=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=s(a,e,this);if(t.done)return t.value;var i=r(e),l=String(this),c=i.lastIndex;n(c,0)||(i.lastIndex=0);var u=o(i,l);return n(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]})},4771:function(e,t,a){},"5fac":function(e,t,a){"use strict";var r=a("7dec"),n=a.n(r);n.a},"60d5":function(e,t,a){"use strict";var r=a("d93e"),n=a.n(r);n.a},"7dec":function(e,t,a){},"7f7e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container app-member-list"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}}),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"refTable",attrs:{data:e.tableData,height:e.height,stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FNUMBER",label:"商品编号","min-width":"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FNAME",label:"商品名称","min-width":"280",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"FSPECIFICATION",label:"规格","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FApprovalNumber",label:"批准文号","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FPieceQty",label:"件装量","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FZHONGBZ",label:"中包量","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FMINSHL",label:"起订量","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"FZBAOZSHL",label:"倍增量","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.detail(t.row)}}},[e._v("查看会员")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.relation(t.row)}}},[e._v("关联账户")]),e._v(" "),a("el-dropdown",{on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("el-button",{attrs:{type:"text"}},[e._v("更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{row:t.row,id:1}}},[e._v("重置密码")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:2}}},[e._v("设置俱乐部")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:3}}},[e._v("设置控销商品")]),e._v(" "),a("el-dropdown-item",{attrs:{command:{row:t.row,id:4}}},[e._v("设置发票类型")])],1)],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-relation",{ref:"refRelation"}),e._v(" "),a("win-password",{ref:"refPassword"}),e._v(" "),a("win-control-product",{ref:"refControl"}),e._v(" "),a("win-set-club",{ref:"refClub"}),e._v(" "),a("win-set-general",{ref:"refGeneral"})],1)},n=[],o=(a("386d"),a("db72")),s=a("b775"),i=a("700d");function l(e){return Object(s["a"])({baseURL:i["a"],url:"/k3/product/list",method:"get",params:e})}function c(e){return Object(s["a"])({baseURL:i["a"],url:"/member/admin/userInfo/bindUser/".concat(e.sid),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"put",params:e})}function u(e){return Object(s["a"])({baseURL:i["a"],headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/member/admin/userInfo/reSetPwd/".concat(e.sid),method:"put",params:e})}function d(e){return Object(s["a"])({baseURL:i["a"],url:"/member/admin/userInfo/openStatus/".concat(e.userSid),method:"put",params:e})}function f(e){return Object(s["a"])({baseURL:i["a"],url:"/member/admin/userInfo/setBillType/".concat(e.sid,"/").concat(e.billType),method:"PUT",data:e})}var p=a("2f62"),m=a("b932"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-list-relation",attrs:{title:"关联账户",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"userCode",label:"会员编号"}},[a("el-input",{attrs:{type:"text",disabled:"",placeholder:"请输入会员编号"},model:{value:e.form.userCode,callback:function(t){e.$set(e.form,"userCode",t)},expression:"form.userCode"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"name",label:"会员名称"}},[a("el-input",{attrs:{type:"text",disabled:"",placeholder:"请输入会员名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"phone",label:"会员电话"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone","string"===typeof t?t.trim():t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"email",label:"会员邮箱"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"account",label:"会员区分码"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入会员区分码"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account","string"===typeof t?t.trim():t)},expression:"form.account"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"businessType",label:"会员类型"}},[a("el-radio",{attrs:{label:2},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},[e._v("诊所")]),e._v(" "),a("el-radio",{attrs:{label:1},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},[e._v("药店")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},b=[],v={name:"WinMemberListRelation",data:function(){return{edit:!1,loading:!1,form:{userCode:"",name:"",phone:"",email:"",account:"",businessType:1},rules:{phone:[{required:!0,message:"请输入会员电话",trigger:"blur"}],email:[],account:[],businessType:[{required:!0,message:"请选择会员类型",trigger:"change"}]},show:!1}},watch:{},created:function(){},methods:{update:function(e,t){var a=this;this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){for(var t in a.$refs["ruleForm"].resetFields(),a.form)a.form[t]=e[t]})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},g=v,w=(a("aa30"),a("2877")),y=Object(w["a"])(g,h,b,!1,null,null,null),_=y.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-list-password",attrs:{title:"重置密码",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"80px"}},[a("el-form-item",{attrs:{prop:"pwd",label:"新密码"}},[a("el-input",{attrs:{type:"password",placeholder:"请输入新密码"},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"repeatPassword",label:"确认密码"}},[a("el-input",{attrs:{type:"password",placeholder:"请重新输入新密码"},model:{value:e.form.repeatPassword,callback:function(t){e.$set(e.form,"repeatPassword",t)},expression:"form.repeatPassword"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},x=[],k=a("0b60"),P={name:"WinPassword",data:function(){var e=this;return{edit:!1,loading:!1,form:{pwd:"",repeatPassword:""},rules:{pwd:[{required:!0,message:"请输入新密码",trigger:"blur"},{pattern:k["a"].passWord,message:"6至20个字符，支持数字，大小写字母和标点符号组合",trigger:"blur"}],repeatPassword:[{required:!0,message:"请重新输入新密码",trigger:"blur"},{validator:function(t,a,r){""===a?r(new Error("请再次输入密码")):a!==e.form.pwd?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]},show:!1}},watch:{},created:function(){},methods:{update:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){for(var t in a.$refs["ruleForm"].resetFields(),a.form)a.form[t]=e[t];a.form.sid=e.sid})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},C=P,S=(a("b7df"),Object(w["a"])(C,$,x,!1,null,null,null)),L=S.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-control-product",attrs:{title:"查看控销商品",visible:e.show,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.show=t}}},[a("div",{staticClass:"app-table"},[a("search-bar",{ref:"refSearch",staticClass:"search-bar",attrs:{"search-data":e.searchData,"auto-load":!1},on:{search:e.query}},[a("template",{slot:"leftBtn"},[a("el-button",{attrs:{size:"small"},on:{click:e.addProduct}},[e._v("增加商品")])],1),e._v(" "),a("template",{slot:"right"},[a("el-radio-group",{attrs:{size:"small"},on:{change:e.search},model:{value:e.searchParams.controlType,callback:function(t){e.$set(e.searchParams,"controlType",t)},expression:"searchParams.controlType"}},[a("el-radio-button",{attrs:{label:2,name:"controlType"}},[e._v("可销")]),e._v(" "),a("el-radio-button",{attrs:{label:0,name:"controlType"}},[e._v("不可销")]),e._v(" "),a("el-radio-button",{attrs:{label:1,name:"controlType"}},[e._v("只可销")])],1)],1)],2),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"table",attrs:{data:e.tableData,height:450},on:{select:e.handleSelect}},[a("el-table-column",{attrs:{prop:"erpProductCode",label:"商品ID","min-width":"250",align:"left",fixed:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return["add"===t.row.type?[a("el-select",{ref:"refSearchTypeKeyword",staticClass:"search-type-keyword",attrs:{filterable:"",remote:"","reserve-keyword":"","value-key":"sid",placeholder:"请输入商品ID、助记码、商品名称搜索","remote-method":e.fetchProduct,loading:e.fetchProductLoading,size:"small","popper-append-to-body":""},on:{change:e.changeProduct},model:{value:e.currentProduct,callback:function(t){e.currentProduct=t},expression:"currentProduct"}},e._l(e.productData,function(t){return a("el-option",{key:t.sid,attrs:{label:t.commodityName,value:t}},[a("div",{staticClass:"select-porduct-prop-li"},[a("span",{staticClass:"fl",attrs:{title:t.commodityName}},[e._v(e._s(t.commodityName))]),e._v(" "),a("span",{staticClass:"fr",attrs:{title:t.spec}},[e._v(e._s(t.spec))])])])}),1)]:[e._v("\n                        "+e._s(t.row.erpProductCode)+"\n                    ")]]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"commodityName",label:"商品名称","min-width":"200",align:"left",fixed:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"manufacturer",label:"生产厂家","min-width":"120",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return["add"===t.row.type?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.tableData.splice(t.$index,1)}}},[e._v("取消")])]:[2===e.searchParams.controlType?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,0)}}},[e._v("不可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,1)}}},[e._v("只可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.removeProduct(t.row)}}},[e._v("移除")])]:0===e.searchParams.controlType?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,2)}}},[e._v("可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,1)}}},[e._v("只可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.removeProduct(t.row)}}},[e._v("移除")])]:1===e.searchParams.controlType?[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,2)}}},[e._v("可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.updateProductStatus(t.row,0)}}},[e._v("不可销")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.removeProduct(t.row)}}},[e._v("移除")])]:e._e()]]}}])})],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper",small:"","current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1)],1),e._v(" "),a("select-product",{ref:"refProduct",attrs:{multiple:!0,"huddle-disabled":!0,"club-disabled":!0}})],1)},O=[],T=(a("ac6a"),a("ed7f")),R=a("ef09"),U={name:"WinMemberListProduct",components:{searchBar:m["a"],selectProduct:R["a"]},data:function(){return{edit:!1,loading:!1,searchData:{quickList:[{label:"按商品编号",value:"productCode"},{label:"按商品名称",value:"commodityName"},{label:"按生产厂家",value:"manufacturer"}],searchList:[{prop:"club",placeholder:"所属俱乐部",type:"select",defaultValue:"",list:[{label:"乐赛仙",value:1},{label:"佐安堂",value:2},{label:"初心",value:3}]}],page:{size:20,current:1}},searchParams:{userInfoSid:"",controlType:2},tableData:[],tableLoading:!1,page:{total:0},currentProduct:{},fetchProductLoading:!1,show:!1}},watch:{},created:function(){},methods:{open:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.searchParams.userInfoSid=e.sid,this.searchData.searchList[0].list=[],e.clubs.forEach(function(e){a.searchData.searchList[0].list.push({label:1===e?"乐赛仙":2===e?"佐安堂":"初心",value:e})}),this.searchData.searchList[0].defaultValue=e.clubs[0],this.show=!0,this.$nextTick(function(){a.$refs["refSearch"].search()})},choseItem:function(e){this.callback(e),this.show=!1},close:function(){this.show=!1},search:function(){this.$refs["refSearch"].search()},query:function(e){var t=this;this.tableLoading=!0,this.tableData=[],e=Object.assign({},e,this.searchParams),Object(T["d"])(e).then(function(e){t.tableData=e.data.data.records||[],t.page.total=e.data.data.total,t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},addProduct:function(){var e=this,t=this.$refs["refSearch"].getParams();this.$refs["refProduct"].open(function(t){var a=[];t.forEach(function(t){a.push({productSid:t.sid,club:e.$refs["refSearch"].searchParams.club,controlType:e.searchParams.controlType,userInfoSid:e.searchParams.userInfoSid})}),e.addAction(a)},{club:t.club})},addAction:function(e){var t=this;Object(T["a"])({userInfoSid:this.searchParams.userInfoSid,list:e}).then(function(e){t.$refs["refSearch"].search()})},updateProductStatus:function(e,t){var a=this,r=0===t?"不可销":1===t?"只可销":"可销";this.$confirm('是否确认将商品"'+e.commodityName+'"状态改为"'+r+'"吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(T["f"])({sid:e.sid,productSid:e.productSid,club:a.$refs["refSearch"].searchParams.club,controlType:t,userInfoSid:a.searchParams.userInfoSid})}).then(function(){a.$refs["refSearch"].search(),a.$message({showClose:!0,message:"修改成功",type:"success"})}).catch(function(){})},removeProduct:function(e){var t=this;this.$confirm('是否确认将"'+e.commodityName+'"从控销列表移除?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(T["c"])({sid:e.sid})}).then(function(){t.$refs["refSearch"].search(),t.$message({showClose:!0,message:"移除成功",type:"success"})}).catch(function(){})}}},I=U,z=(a("1cc8"),Object(w["a"])(I,j,O,!1,null,null,null)),F=z.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-club",attrs:{title:"设置俱乐部",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"0px"}},[a("el-form-item",{attrs:{prop:"clubs"}},[a("el-checkbox-group",{model:{value:e.form.clubs,callback:function(t){e.$set(e.form,"clubs",t)},expression:"form.clubs"}},[a("el-checkbox",{attrs:{label:1,name:"clubs"}},[e._v("乐赛仙")]),e._v(" "),a("el-checkbox",{attrs:{label:2,name:"clubs"}},[e._v("佐安堂")]),e._v(" "),a("el-checkbox",{attrs:{label:3,name:"clubs"}},[e._v("初心")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},E=[],N={name:"WinSetClub",components:{},data:function(){return{edit:!1,loading:!1,form:{clubs:[]},rules:{clubs:[]},show:!1}},watch:{},created:function(){},methods:{update:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){a.$refs["ruleForm"].resetFields(),a.form.clubs=e.clubs,a.form.sid=e.sid})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},q=N,B=(a("60d5"),Object(w["a"])(q,D,E,!1,null,null,null)),W=B.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"el-win-member-set-general",attrs:{title:"设置开票类型",visible:e.show,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"0px"}},[a("el-form-item",{attrs:{prop:"billType"}},[a("el-radio-group",{model:{value:e.form.billType,callback:function(t){e.$set(e.form,"billType",t)},expression:"form.billType"}},[a("el-radio",{attrs:{label:0}},[e._v("普票")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("专票")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("确 定")])],1)],1)},A=[],Z={name:"WinSetClub",components:{},data:function(){return{edit:!1,loading:!1,form:{billType:0},rules:{billType:[]},show:!1}},watch:{},created:function(){},methods:{update:function(e,t){var a=this;this.edit=!0,this.loading=!1,this.callback=t,this.show=!0,this.$nextTick(function(){a.$refs["ruleForm"].resetFields(),a.form.billType=e.isGeneral,a.form.sid=e.sid})},save:function(){var e=this;this.$refs["ruleForm"].validate(function(t){if(!t)return!1;e.loading=!0;var a=Object.assign({},e.form);e.callback(a)})},close:function(){this.show=!1}}},M=Z,H=(a("5fac"),Object(w["a"])(M,G,A,!1,null,null,null)),J=H.exports,V={name:"PageErpProductList",components:{searchBar:m["a"],WinPassword:L,WinRelation:_,WinControlProduct:F,WinSetClub:W,WinSetGeneral:J},data:function(){return{searchData:{quickList:[{label:"按助记码",value:"zjm"},{label:"按会员编号",value:"userCode"},{label:"按单位名称",value:"businessName"},{label:"按手机号码",value:"phone"}],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]},{prop:"status",placeholder:"关联账户状态",type:"select",clearable:!0,list:[{label:"已关联",value:"1"},{label:"未关联",value:"2"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0}}},computed:Object(o["a"])({},Object(p["b"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),activated:function(){this.$refs["refTable"].doLayout()},methods:{query:function(e){var t=this;this.tableLoading=!0,l(e).then(function(e){t.tableData=e.data.data.records||[],t.page.total=e.data.data.total,t.tableLoading=!1}).catch(function(){t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},handleCommand:function(e){switch(this.$refs["refTable"].setCurrentRow(e.row),e.id){case 1:this.resetPassword(e.row);break;case 2:this.setClub(e.row);break;case 3:e.row.clubs.length>0?this.controlProduct(e.row):this.$message({message:"该会员没有设置俱乐部，请先设置俱乐部",type:"warning"});break;case 4:this.setGeneral(e.row);break}},detail:function(e){this.$router.push({path:"/member/detail",query:{id:e.sid}})},resetPassword:function(e){var t=this;this.$refs["refPassword"].update(e,function(e){u(e).then(function(){t.$refs["refPassword"].loading=!1,t.$refs["refPassword"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refPassword"].loading=!1})})},relation:function(e){var t=this;this.$refs["refRelation"].update(e,function(a){a.sid=e.sid,c(a).then(function(){t.$refs["refSearch"].search(),t.$refs["refRelation"].loading=!1,t.$refs["refRelation"].close(),t.$notify({title:"成功",message:"关联成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refRelation"].loading=!1})})},controlProduct:function(e){this.$refs["refControl"].open(e,function(e){})},setClub:function(e){var t=this;this.$refs["refClub"].update(e,function(e){d({userSid:e.sid,clubs:e.clubs.join(",")}).then(function(e){t.$refs["refSearch"].search(),t.$refs["refClub"].loading=!1,t.$refs["refClub"].close(),t.$notify({title:"成功",message:"俱乐部成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refClub"].loading=!1})})},setGeneral:function(e){var t=this;this.$refs["refGeneral"].update(e,function(e){f(e).then(function(e){t.$refs["refSearch"].search(),t.$refs["refGeneral"].loading=!1,t.$refs["refGeneral"].close(),t.$notify({title:"成功",message:"设置成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refGeneral"].loading=!1})})}}},K=V,Q=(a("3515"),Object(w["a"])(K,r,n,!1,null,"c33a49a0",null));t["default"]=Q.exports},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},a705:function(e,t,a){},aa30:function(e,t,a){"use strict";var r=a("a705"),n=a.n(r);n.a},aea8:function(e,t,a){},b7df:function(e,t,a){"use strict";var r=a("4771"),n=a.n(r);n.a},bb01:function(e,t,a){},d93e:function(e,t,a){},ed7f:function(e,t,a){"use strict";a.d(t,"e",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return i}),a.d(t,"g",function(){return l}),a.d(t,"i",function(){return c}),a.d(t,"a",function(){return u}),a.d(t,"f",function(){return d}),a.d(t,"c",function(){return f}),a.d(t,"h",function(){return p});var r=a("b775"),n=a("700d");function o(e){return Object(r["a"])({baseURL:n["a"],url:"/k3/customer/list",method:"get",params:e})}function s(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/userInfo/bindUser/".concat(e.sid),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"put",params:e})}function i(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/spuControl/page/".concat(e.userInfoSid),method:"get",params:e})}function l(e){return Object(r["a"])({baseURL:n["a"],headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"/member/admin/userInfo/reSetPwd/".concat(e.sid),method:"put",params:e})}function c(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/userInfo/openStatus/".concat(e.userSid),method:"put",params:e})}function u(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/spuControl/".concat(e.userInfoSid),method:"post",data:e.list})}function d(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/spuControl/".concat(e.userInfoSid),method:"put",data:e})}function f(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/spuControl/".concat(e.sid),method:"delete"})}function p(e){return Object(r["a"])({baseURL:n["a"],url:"/member/admin/userInfo/setBillType/".concat(e.sid,"/").concat(e.billType),method:"PUT",data:e})}},feb7:function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"i",function(){return s}),a.d(t,"f",function(){return i}),a.d(t,"n",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"d",function(){return u}),a.d(t,"k",function(){return d}),a.d(t,"p",function(){return f}),a.d(t,"o",function(){return p}),a.d(t,"m",function(){return m}),a.d(t,"l",function(){return h}),a.d(t,"q",function(){return b}),a.d(t,"g",function(){return v}),a.d(t,"e",function(){return g}),a.d(t,"h",function(){return w}),a.d(t,"r",function(){return y}),a.d(t,"j",function(){return _}),a.d(t,"a",function(){return $});var r=a("b775"),n=a("700d");function o(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/page",method:"get",params:e})}function s(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/relation/list/".concat(e.productSid),method:"get",params:e})}function i(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/relation/productList/page",method:"get",params:e})}function l(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/relation",method:"put",data:e})}function c(e){return Object(r["a"])({baseURL:n["a"],url:"/admin/external/area/treeInfo",method:"get",params:e})}function u(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/area/".concat(e.sid),method:"get",params:e})}function d(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/".concat(e.sid,"/area"),method:"put",data:e.area})}function f(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/saleStatus",method:"put",data:e})}function p(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/risePrice/".concat(e.sid),method:"put",data:e.prices})}function m(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/price/audit",method:"POST",data:e})}function h(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/showIndex/".concat(e.sid),method:"put",data:e.index})}function b(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/label/relation",method:"post",data:e})}function v(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/sku/list/".concat(e.sid),method:"get",params:e})}function g(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/info/".concat(e.sid),method:"get",params:e})}function w(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/label/page",method:"get",params:e})}function y(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/headSales",method:"post",data:e})}function _(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/inspectionReport/batchUpload/".concat(e.sid),method:"post",data:e.report})}function $(e){return Object(r["a"])({baseURL:n["a"],url:"/product/admin/product/createIndexBySid/".concat(e.sid),method:"get",params:e})}}}]);