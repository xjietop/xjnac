(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cbc7e5c"],{"112c":function(e,t,a){"use strict";var r=a("4984"),n=a.n(r);n.a},"386d":function(e,t,a){"use strict";var r=a("cb7c"),n=a("83a1"),s=a("5f1b");a("214f")("search",1,function(e,t,a,i){return[function(a){var r=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=i(a,e,this);if(t.done)return t.value;var l=r(e),o=String(this),c=l.lastIndex;n(c,0)||(l.lastIndex=0);var u=s(l,o);return n(l.lastIndex,c)||(l.lastIndex=c),null===u?-1:u.index}]})},4984:function(e,t,a){},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},bce9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container app-member-list"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":e.searchData,"auto-load":!0},on:{search:e.query}}),e._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"refTable",attrs:{data:e.tableData,height:e.height,stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"supplier_sid",label:"组织","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"product_code",label:"商品编号","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"commodity_name",label:"商品名称","min-width":"280",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"reserved_stock",label:"预留库存","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"batch_code",label:"批号","min-width":"100",align:"center","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"expire_date",label:"效期优于","min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.formatDate(t.row.expire_date))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"抱团价","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"retail_price",label:"零售价","min-width":"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remove",label:"删除","min-width":"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"更新时间","min-width":"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.formatTime(t.row.update_time))+"\n                ")]}}])})],1)],1),e._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":e.searchData.page.current,"page-size":e.searchData.page.size,total:e.page.total},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1),e._v(" "),a("win-relation",{ref:"refRelation"}),e._v(" "),a("win-password",{ref:"refPassword"}),e._v(" "),a("win-control-product",{ref:"refControl"}),e._v(" "),a("win-set-club",{ref:"refClub"}),e._v(" "),a("win-set-general",{ref:"refGeneral"})],1)},n=[],s=(a("a481"),a("386d"),a("db72")),i=a("b775"),l=a("700d");function o(e){return Object(i["a"])({baseURL:l["a"],url:"/b2b/product/productskulist",method:"get",params:e})}var c=a("5880"),u=a("b932"),f={name:"PageB2bProductSkuList",components:{searchBar:u["a"]},data:function(){return{searchData:{quickList:[{label:"编号/名称",value:"where"}],searchList:[{prop:"club",placeholder:"展示俱乐部",type:"select",clearable:!0,list:[{label:"乐赛仙",value:"1"},{label:"佐安堂",value:"2"},{label:"初心",value:"3"},{label:"尚划算",value:"4"}]},{prop:"status",placeholder:"关联账户状态",type:"select",clearable:!0,list:[{label:"已关联",value:"1"},{label:"未关联",value:"2"}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0}}},computed:Object(s["a"])({},Object(c["mapGetters"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),activated:function(){this.$refs["refTable"].doLayout()},methods:{query:function(e){var t=this;this.tableLoading=!0,o(e).then(function(e){t.tableData=e.data.data.records||[],t.page.total=e.data.data.total,t.tableLoading=!1}).catch(function(){t.tableLoading=!1})},sizeChange:function(e){this.$refs["refSearch"].search({size:e})},pageChange:function(e){this.$refs["refSearch"].search({current:e})},formatDate:function(e){return e.substring(0,10)},formatTime:function(e){return e.substring(0,16).replace("T"," ")},handleCommand:function(e){switch(this.$refs["refTable"].setCurrentRow(e.row),e.id){case 1:this.resetPassword(e.row);break;case 2:this.setClub(e.row);break;case 3:e.row.clubs.length>0?this.controlProduct(e.row):this.$message({message:"该会员没有设置俱乐部，请先设置俱乐部",type:"warning"});break;case 4:this.setGeneral(e.row);break}},detail:function(e){this.$router.push({path:"/member/detail",query:{id:e.sid}})},resetPassword:function(e){var t=this;this.$refs["refPassword"].update(e,function(e){reSetPwd(e).then(function(){t.$refs["refPassword"].loading=!1,t.$refs["refPassword"].close(),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refPassword"].loading=!1})})},relation:function(e){var t=this;this.$refs["refRelation"].update(e,function(a){a.sid=e.sid,bindUser(a).then(function(){t.$refs["refSearch"].search(),t.$refs["refRelation"].loading=!1,t.$refs["refRelation"].close(),t.$notify({title:"成功",message:"关联成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refRelation"].loading=!1})})},controlProduct:function(e){this.$refs["refControl"].open(e,function(e){})},setClub:function(e){var t=this;this.$refs["refClub"].update(e,function(e){setClubs({userSid:e.sid,clubs:e.clubs.join(",")}).then(function(e){t.$refs["refSearch"].search(),t.$refs["refClub"].loading=!1,t.$refs["refClub"].close(),t.$notify({title:"成功",message:"俱乐部成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refClub"].loading=!1})})},setGeneral:function(e){var t=this;this.$refs["refGeneral"].update(e,function(e){setBillType(e).then(function(e){t.$refs["refSearch"].search(),t.$refs["refGeneral"].loading=!1,t.$refs["refGeneral"].close(),t.$notify({title:"成功",message:"设置成功",type:"success",duration:2e3})}).catch(function(){t.$refs["refGeneral"].loading=!1})})}}},d=f,p=(a("112c"),a("2877")),h=Object(p["a"])(d,r,n,!1,null,"00fa3b32",null);t["default"]=h.exports}}]);