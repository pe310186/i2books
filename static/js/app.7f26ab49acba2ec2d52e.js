webpackJsonp([1],{"3/0l":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("fZjL"),o=r.n(n),s=r("7+uW"),a=r("3EgV"),l=r.n(a),c={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var i=r("VU/8")({name:"App"},c,!1,function(t){r("3/0l")},null,null).exports,d=r("/ocq"),v={methods:{changeRoute:function(){this.$router.push("/Agreement"),document.body.scrollTop=0,document.documentElement.scrollTop=0}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"align-content-center":"","justify-center":""}},[r("v-flex",{attrs:{"offset-xs5":""}},[r("v-card-text",[r("b",{attrs:{align:"center"}},[r("font",{attrs:{size:"7"}},[t._v("公告")])],1)])],1),t._v(" "),r("v-flex",[r("v-card",{attrs:{height:"300"}},[t._v("施工中圖片")])],1),t._v(" "),r("br"),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{height:"600"}},[r("font",{attrs:{size:"5"}},[r("b",[t._v("公告文字")])])],1)],1),t._v(" "),r("br"),t._v(" "),r("v-flex",{attrs:{xs2:"","offset-xs5":""}},[r("v-btn",{attrs:{large:""},on:{click:t.changeRoute}},[r("font",{attrs:{size:"5",color:"red"}},[r("b",[t._v("加入會員")])])],1)],1)],1)},staticRenderFns:[]},b=r("VU/8")(v,u,!1,null,null,null).exports,f=r("BO1k"),m=r.n(f),h={data:function(){return{name:"",sex:"",birthday:"",card_number:"",phone:"",address:"",email:"",line:"",password:"",password2:""}},methods:{changeRoute:function(){if(""===this.$data.name||""===this.$data.card_number||""===this.$data.phone||""===this.$data.email||""===this.$data.password||""===this.$data.password||""===this.$data.password2)document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("有必填選項未填");else if(10!==this.$data.birthday.length||"/"!==this.$data.birthday[4]||"/"!==this.$data.birthday[7])document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("出生年月日輸入格式錯誤");else if(10!==this.$data.card_number.length)document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("身分證字號錯誤");else if(10!==this.$data.phone.length)document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("手機號碼長度錯誤");else if(this.$data.password.length<6||this.$data.password.length>20)document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("密碼長度錯誤");else if(/^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.$data.email))if(this.$data.password!==this.$data.password2)document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("密碼不相同");else{var t=!0,e=!1,r=void 0;try{for(var n,o=m()(["name","sex","birthday","card_number","phone","email","line","password","password2"]);!(t=(n=o.next()).done);t=!0){var s=n.value;localStorage.setItem(s,this[s])}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}this.$router.push("/Confirm"),document.body.scrollTop=0,document.documentElement.scrollTop=0}else document.body.scrollTop=0,document.documentElement.scrollTop=0,alert("電子郵件格式不符")}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{attrs:{"offset-xs4":""}},[r("v-card-text",[r("b",{attrs:{align:"center"}},[r("font",{attrs:{size:"7"}},[t._v("會員資料填寫")])],1),r("font",{attrs:{size:"4",color:"red"}},[t._v("*為必填")])],1)],1),t._v(" "),r("br"),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{color:"blue lighten-5",height:"1000px"}},[r("br"),r("br"),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*姓名")])],1),r("v-text-field",{attrs:{"background-color":"white",color:"black","persistent-hint":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("性別")])],1),r("v-text-field",{attrs:{"background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*出生年月日")])],1),r("v-text-field",{attrs:{"background-color":"white",counter:"10",color:"black","persistent-hint":""},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}}),t._v(" "),r("font",{attrs:{size:"4"}},[t._v("(輸入範例:1980/02/29)")]),r("br"),r("br")],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*身分證字號")])],1),r("v-text-field",{attrs:{counter:"10","background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.card_number,callback:function(e){t.card_number=e},expression:"card_number"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*手機")])],1),r("v-text-field",{attrs:{counter:"10","background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("通訊地址")])],1),r("v-text-field",{attrs:{"background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*電子郵件")])],1),r("v-text-field",{attrs:{"background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*Line")])],1),r("v-text-field",{attrs:{"background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.line,callback:function(e){t.line=e},expression:"line"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("b",[r("font",{attrs:{size:"4"}},[t._v("*密碼")])],1),r("v-text-field",{attrs:{counter:"20",hint:"密碼6~20個字(小寫英文字母或數字)","background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-flex",{attrs:{xs4:"","offset-xs4":""}},[r("br"),t._v(" "),r("b",[r("font",{attrs:{size:"4"}},[t._v("*密碼再確認")])],1),r("v-text-field",{attrs:{"background-color":"white",label:"",color:"black","persistent-hint":""},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1),t._v(" "),r("br"),t._v(" "),r("v-flex",{attrs:{"offset-xs5":""}},[r("v-btn",{attrs:{color:"white",large:""},on:{click:t.changeRoute}},[r("b",[t._v("確認送出")])])],1)],1)],1)],1)},staticRenderFns:[]},p=r("VU/8")(h,_,!1,null,null,null).exports,x={methods:{changeRouteJoin:function(){this.$router.push("/Join"),document.body.scrollTop=0,document.documentElement.scrollTop=0},changeRouteHome:function(){this.$router.push("/"),document.body.scrollTop=0,document.documentElement.scrollTop=0}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{attrs:{"offset-xs2":"",xs10:""}},[r("v-card-text",[r("b",{attrs:{align:"center"}},[r("font",{attrs:{size:"7"}},[t._v("個人資料授權/取得使用同意書")])],1)])],1),t._v(" "),r("v-flex",[r("v-card",{attrs:{xs12:"",raised:""}},[r("font",{attrs:{size:"5"}},[r("br"),t._v("\n                本人為申請參加杏文勤閱國際有限公司實體店面(一手茶飲/二手書供需流通)會員及/或加入網路會員，同意提供貴單位蒐集保存、電腦處理、利用本人之個人資料進行單向/雙向互動，並同意以下各條款:"),r("br"),r("br"),t._v("\n                1.貴單位取得本人之個人資料，目的在於個人資料保護法及相關法令之規定下，為提供良好服務及業務之必要範圍內，蒐集、處理及利用本人之個人資料。"),r("br"),r("br"),t._v("\n                2.本人可依需要提供以下資料:姓名、生日、聯絡地址、電話、電子信箱、身分證字號等相關資料或其他得以直接或間接辨別本人個人之資料。"),r("br"),r("br"),t._v("\n                3.本人同意貴單位以本人所提供的個人資料確認身份、進行聯絡、提供相關服務及資訊，包括各種活動舉辦通知、電子報、Line生活圈、或EDM發送、特別活動、獎項兌換等用途，以及其他隱私權保護政策規範之使用方式。"),r("br"),r("br"),t._v("\n                4.本人同意如後「附件」本人申請會員填用之表格資料。"),r("br"),r("br"),t._v("\n                5.本人可依個人資料保護法，就本人資料向貴單位(1)請求查詢或閱覽、(2)請求製給複製本、(3)請求補充或更正、(4)請求停止蒐集、處理及利用、(5)請求刪除"),r("br"),r("br"),t._v("\n                6.同意貴單位利用處理本人的個人資料之期間為加入會員起，至本人主動告知刪除個人資料止；利用本人資料的地區僅限於國境內。"),r("br"),r("br"),t._v("\n                此致"),r("br"),r("br"),t._v("\n                杏文勤閱國際有限公司(及如下關係企業)"),r("br"),t._v("\n                昶特有限公司(www.5118.com.tw)"),r("br"),t._v("\n                亞帝國際有限公司(www.5117.com.tw)"),r("br")])],1)],1),t._v(" "),r("br"),t._v(" "),r("v-flex",{attrs:{xs6:"","offset-xs4":""}},[r("v-btn",{attrs:{large:""},on:{click:t.changeRouteJoin}},[r("font",{attrs:{size:"5"}},[t._v("我同意")])],1),r("v-btn",{attrs:{large:""},on:{click:t.changeRouteHome}},[r("font",{attrs:{size:"5"}},[t._v("我不同意")])],1)],1)],1)},staticRenderFns:[]},g=r("VU/8")(x,w,!1,null,null,null).exports,k={data:function(){return{name:"",sex:"",birthday:"",card_number:"",phone:"",email:"",line:"",password:"",password2:""}},methods:{changeRoute:function(){alert("恭喜加入會員"),this.$router.push("/"),console.log(this.$router.$params)}},beforeMount:function(){var t=!0,e=!1,r=void 0;try{for(var n,o=m()(["name","sex","birthday","card_number","phone","email","line","password","password2"]);!(t=(n=o.next()).done);t=!0){var s=n.value;this[s]=localStorage.getItem(s)}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}}},y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-flex",{attrs:{xs6:"","offset-xs4":""}},[r("v-card-text",[r("b",[r("font",{attrs:{size:"7"}},[t._v("會員資料確認")])],1)])],1),t._v(" "),r("v-flex",[r("v-card",{attrs:{color:"blue lighten-5",height:"300px"}},[r("font",{attrs:{size:"5"}},[r("b",[t._v("\n            姓名:"+t._s(t.name)),r("br"),t._v("\n            性別:"+t._s(t.sex)),r("br"),t._v("\n            出生年月日:"+t._s(t.birthday)),r("br"),t._v("\n            身分證字號:"+t._s(t.card_number)),r("br"),t._v("\n            手機:"+t._s(t.phone)),r("br"),t._v("\n            電子郵件:"+t._s(t.email)),r("br"),t._v("\n            密碼:"+t._s(t.password)),r("br"),t._v("\n            line:"+t._s(t.line)),r("br")])])],1)],1),t._v(" "),r("v-flex",{attrs:{"offset-xs2":"",xs10:""}},[r("v-card-text",[r("b",{attrs:{align:"center"}},[r("font",{attrs:{size:"7"}},[t._v("個人資料授權/取得使用同意書")])],1)])],1),t._v(" "),r("v-flex",[r("v-card",{attrs:{xs12:"",raised:""}},[r("font",{attrs:{size:"5"}},[r("br"),t._v("\n                本人申請參加杏文勤閱國際有限公司實體店面(一手茶飲/二手書流通供需)會員或加入網路會員，同意提供貴單位蒐集保存、電腦處理、利用本人之個人資料，並同意以下各條款:"),r("br"),r("br"),t._v("\n                1.貴單位取得本人之個人資料，目的在於個人資料保護法及相關法令之規定下，為提供良好服務及業務之必要範圍內，蒐集、處理及利用本人之個人資料。"),r("br"),r("br"),t._v("\n                2.本人可依需要提供以下資料:姓名、生日、聯絡地址、電話、電子信箱、身分證字號等相關資料或其他得以直接或間接辨別本人個人之資料。"),r("br"),r("br"),t._v("\n                3.本人同意貴單位以本人所提供的個人資料確認身份、進行聯絡、提供相關服務及資訊，包括各種活動舉辦通知、電子報、或EDM發送、數據統計及分析、會員服務訊息、特別活動、獎項兌換等用途，以及其他隱私權保護政策規範之使用方式。"),r("br"),r("br"),t._v("\n                4.本人同意如後「附件」本人申請會員填用之表格資料。"),r("br"),r("br"),t._v("\n                5.本人可依個人資料保護法，就本人資料向貴單位(1)請求查詢或閱覽、(2)請求製給複製本、(3)請求補充或更正、(4)請求停止蒐集、處理及利用、(5)請求刪除"),r("br"),r("br"),t._v("\n                6.同意貴單位利用處理本人的個人資料之期間為加入會員起，至本人主動告知刪除個人資料止；利用本人資料的地區僅限於國境內。"),r("br"),r("br"),t._v("\n                此致"),r("br"),r("br"),t._v("\n                杏文勤閱國際有限公司(及如下關係企業)"),r("br"),t._v("\n                昶特有限公司(www.5118.com.tw)"),r("br"),t._v("\n                亞帝國際有限公司(www.5117.com.tw)"),r("br")])],1),t._v(" "),r("br")],1),t._v(" "),r("v-flex",{attrs:{"offset-xs5":""}},[r("v-btn",{attrs:{color:"white",large:""},on:{click:t.changeRoute}},[r("b",[t._v("確認送出")])])],1)],1)},staticRenderFns:[]},$=r("VU/8")(k,y,!1,null,null,null).exports;s.default.use(d.a);var z=new d.a({routes:[{path:"/",name:"Startpage",component:b},{path:"/Join",name:"Join",component:p},{path:"/Agreement",name:"Agreement",component:g},{path:"/Confirm",name:"Confirm",component:$}]}),T={StartPage:b,Join:p,Agreement:g,Confirm:$};s.default.config.productionTip=!1,s.default.use(l.a),o()(T).forEach(function(t){s.default.component(t,T[t])}),new s.default({el:"#app",router:z,components:{App:i},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.7f26ab49acba2ec2d52e.js.map