(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b9bcb91"],{"32c1":function(t,e,a){"use strict";var r=a("4bb5"),i=a.n(r);i.a},"386d":function(t,e,a){"use strict";var r=a("cb7c"),i=a("83a1"),n=a("5f1b");a("214f")("search",1,function(t,e,a,l){return[function(a){var r=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,r):new RegExp(a)[e](String(r))},function(t){var e=l(a,t,this);if(e.done)return e.value;var o=r(t),s=String(this),c=o.lastIndex;i(c,0)||(o.lastIndex=0);var u=n(o,s);return i(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]})},"4bb5":function(t,e,a){},"5e23":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container app-finance-audit-list"},[a("search-bar",{ref:"refSearch",attrs:{"search-data":t.searchData,"auto-load":!0},on:{reset:t.reset,search:t.query}}),t._v(" "),a("div",{staticClass:"app-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"refTable",attrs:{data:t.tableData,height:t.height,"tooltip-effect":"light",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"productCode",label:"商品ID","min-width":"120",align:"left",fixed:""}}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称","min-width":"150",align:"left",fixed:"","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link",on:{click:function(a){return t.viewDetail(e.row)}}},[t._v(t._s(e.row.commodityName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品品种","min-width":"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(1===e.row.huddle?"抱团":"尚划算")+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"spec",label:"商品规格","min-width":"150",align:"left","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"manufacturer",label:"生产厂家","min-width":"120",align:"left","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"抱团价","min-width":"80",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"retailPrice",label:"零售价","min-width":"80",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditStatusDesc",label:"状态","min-width":"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicant",label:"申请人","min-width":"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"recentAuditor",label:"最近审核人","min-width":"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"reason",label:"不通过原因","min-width":"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right","min-width":"250",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{disabled:0!==e.row.auditStatus,type:"text"},on:{click:function(a){return t.audit(e.row)}}},[t._v("审核")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"app-pagination"},[a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","prev-text":"上一页","next-text":"下一页","page-sizes":[20,50,100,200],"current-page":t.searchData.page.current,"page-size":t.searchData.page.size,total:t.page.total},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1),t._v(" "),a("win-audit",{ref:"refAudit"})],1)},i=[],n=(a("386d"),a("db72")),l=a("b775"),o=a("700d");function s(t){return Object(l["a"])({baseURL:o["a"],url:"/product/admin/product/price/audit/page",method:"get",params:t})}function c(t){return Object(l["a"])({baseURL:o["a"],url:"/product/admin/product/price/audit",method:"put",data:t})}var u=a("2f62"),d=a("b932"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"el-win-finance-review-price-audit",attrs:{title:"审核",visible:t.show,"close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e}}},[a("el-form",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,size:"medium","label-width":"0px"}},[a("el-form-item",{attrs:{prop:"auditStatus"}},[a("el-radio",{attrs:{label:1},model:{value:t.form.auditStatus,callback:function(e){t.$set(t.form,"auditStatus",e)},expression:"form.auditStatus"}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:2},model:{value:t.form.auditStatus,callback:function(e){t.$set(t.form,"auditStatus",e)},expression:"form.auditStatus"}},[t._v("不通过")])],1),t._v(" "),2===t.form.auditStatus?a("el-form-item",[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入不通过原因"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.show=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.save}},[t._v("确 定")])],1)],1)},p=[],h={name:"WinMarketPromotionAudit",data:function(){return{edit:!1,loading:!1,form:{auditStatus:1,reason:""},rules:{flag:[]},show:!1}},watch:{},created:function(){},methods:{update:function(t,e){var a=this;this.edit=!0,this.loading=!1,this.callback=e,this.show=!0,this.$nextTick(function(){a.$refs["ruleForm"].resetFields(),a.form.flag=1,a.form.sid=t.sid})},save:function(){var t=this;this.$refs["ruleForm"].validate(function(e){if(!e)return!1;t.loading=!0;var a=Object.assign({},t.form);t.callback(a)})},close:function(){this.show=!1}}},m=h,b=(a("32c1"),a("2877")),v=Object(b["a"])(m,f,p,!1,null,null,null),g=v.exports,w={name:"PageOrderList",components:{searchBar:d["a"],winAudit:g},data:function(){return{ossURL:this.$store.getters.oss_url+"/",searchData:{quickList:[{label:"商品编号",value:"productCode"},{label:"商品名称",value:"commodityName"}],searchList:[{prop:"auditStatus",placeholder:"状态",type:"select",clearable:!0,list:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"审核拒绝",value:2}]}],page:{size:20,current:1}},tableData:[],tableLoading:!1,page:{total:0}}},computed:Object(n["a"])({},Object(u["b"])(["permissions"]),{height:function(){return this.$store.getters.winHeight-205}}),created:function(){},methods:{handleCommand:function(t){switch(this.$refs["refTable"].setCurrentRow(t.row),t.id){case 1:this.checkPaymentStatus(t.row);break;case 2:this.supplement(t.row);break}},query:function(t){var e=this;this.tableLoading=!0,s(Object.assign({},t)).then(function(t){e.tableData=t.data.data.records,e.page.total=t.data.data.total,e.tableLoading=!1})},search:function(){this.$refs["refSearch"].search()},reset:function(){this.dateTime=[]},sizeChange:function(t){this.$refs["refSearch"].search({size:t})},pageChange:function(t){this.$refs["refSearch"].search({current:t})},audit:function(t){var e=this;this.$refs["refAudit"].update(t,function(t){c(t).then(function(){e.$refs["refAudit"].loading=!1,e.$refs["refAudit"].close(),e.$refs["refSearch"].search({current:e.searchData.page.current}),e.$notify({title:"成功",message:"审核成功",type:"success",duration:2e3})}).catch(function(){e.$refs["refAudit"].loading=!1})})}}},_=w,x=(a("757a"),Object(b["a"])(_,r,i,!1,null,null,null));e["default"]=x.exports},"757a":function(t,e,a){"use strict";var r=a("8e83"),i=a.n(r);i.a},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8e83":function(t,e,a){}}]);