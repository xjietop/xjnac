(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ed6f5b5"],{2017:function(e,t,r){"use strict";var o=r("3b76"),s=r.n(o);s.a},"3b76":function(e,t,r){},"9ed6":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-box",style:{"min-height":e.height-120+"px"}},[r("div",{staticClass:"login-inner clearfix"},[r("div",{staticClass:"top-bar clearfix"},[r("router-link",{staticClass:"logo",style:{"min-height":(e.height-480)/2+"px"},attrs:{to:"/"}})],1),e._v(" "),r("div",{staticClass:"login-main clearfix"},[r("div",{staticClass:"image-box"}),e._v(" "),r("div",{staticClass:"login-form"},[r("div",{staticClass:"title"},[e._v("用户登录")]),e._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{ref:"username",attrs:{placeholder:"请输入用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"password",attrs:{type:"password",placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"code"}},[r("el-input",{ref:"code",attrs:{maxlength:e.code.len,type:"text",placeholder:"请输入图片验证码",tabindex:"3"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}},[r("template",{slot:"append"},["text"==e.code.type?r("span",{staticClass:"login-code-img",on:{click:e.refreshCode}},[e._v(e._s(e.code.value))]):r("img",{staticClass:"login-code-img",attrs:{src:e.imageSrc},on:{click:e.refreshCode}})])],2)],1),e._v(" "),r("el-form-item",{staticClass:"checkbox-row"},[r("el-checkbox",{attrs:{label:"记住密码",name:"type"},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}}),e._v(" "),r("router-link",{staticClass:"link-forgot",attrs:{to:"/account/forget"}},[e._v("忘记密码？")])],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"btn-login",attrs:{type:"primary",disabled:e.loading,loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)],1)])])]),e._v(" "),e._m(0)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"copyright"},[r("p",[e._v("xjie-nac © 版权所有 ")])])}],i=(r("7f7f"),r("ac6a"),r("6b54"),function(e,t){var r="";return r=Math.ceil(1e14*Math.random()).toString().substr(0,e||4),t&&(r+=Date.now()),r}),a=function(e){for(var t=String.fromCharCode(e.charCodeAt(0)+e.length),r=1;r<e.length;r++)t+=String.fromCharCode(e.charCodeAt(r)+e.charCodeAt(r-1));return escape(t)},n=function(e){e=unescape(e);for(var t=String.fromCharCode(e.charCodeAt(0)-e.length),r=1;r<e.length;r++)t+=String.fromCharCode(e.charCodeAt(r)-t.charCodeAt(r-1));return t},c=r("700d"),d=r("bc3a"),l=r.n(d),m={name:"Login",data:function(){return{loading:!1,form:{username:"",password:"",redirect:void 0,type:2,code:"",randomStr:"",captchaid:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入图片验证码",trigger:"blur"}]},remember:!0,codeUrl:c["a"]+"/code",code:{src:"",value:"",len:4,type:"image"},imageSrc:""}},computed:{height:function(){return this.$store.getters.winHeight<600?600:this.$store.getters.winHeight}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect,this.refreshCode(),this.init()},immediate:!0}},mounted:function(){""===this.form.username?this.$refs.username.focus():""===this.form.password?this.$refs.password.focus():""===this.form.imageCode&&this.$refs.imageCode.focus(),this.$store.dispatch("app/setWindowHeight",document.body.clientHeight),window.addEventListener("resize",this.setHeight)},destroyed:function(){window.removeEventListener?window.removeEventListener("resize",this.setHeight):window.detachEvent&&window.detachEvent("resize",this.setHeight)},methods:{init:function(){var e=localStorage.getItem("accountInfo");e?(e=JSON.parse(e),this.form.username=e.name,this.form.password=n(e.pass),this.remember=!0):(this.form.username="",this.form.password="")},refreshCode:function(){var e=this;this.form.code="",this.form.randomStr=i(this.code.len,!0),"text"===this.code.type?this.code.value=i(this.code.len):this.code.src="".concat(this.codeUrl,"?randomStr=").concat(this.form.randomStr),l.a.get(this.code.src,{responseType:"blob"}).then(function(t){var r=t.data;e.form.captchaid=t.headers.captchaid,e.imageSrc=window.URL.createObjectURL(r)})},setHeight:function(){this.$store.dispatch("app/setWindowHeight",document.body.clientHeight)},handleLogin:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/login",e.form).then(function(){if(e.remember){var t={name:e.form.username,pass:a(e.form.password)};localStorage.setItem("accountInfo",JSON.stringify(t))}else localStorage.removeItem("accountInfo");e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.refreshCode(),e.loading=!1})})},handleLoad:function(e){console.log(e)}}},h=m,u=(r("2017"),r("2877")),f=Object(u["a"])(h,o,s,!1,null,null,null);t["default"]=f.exports}}]);