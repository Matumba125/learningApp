(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{12:function(e,t,n){e.exports={globalTitleBox:"Loginization_globalTitleBox__3STcV",listTitleBox:"Loginization_listTitleBox__1GMEp",formWrap:"Loginization_formWrap__3gqNA",buttonContainer:"Loginization_buttonContainer__2jzI8",linkWrap:"Loginization_linkWrap__3teYT",error:"Loginization_error__1NJlm",passForgot:"Loginization_passForgot__3M-rH",formText:"Loginization_formText__MyRQC",linkCardBottom:"Loginization_linkCardBottom__BYneO"}},13:function(e,t,n){e.exports={globalTitleBox:"PasswordRecovery_globalTitleBox__3ckrS",listTitleBox:"PasswordRecovery_listTitleBox__2iEjO",formWrap:"PasswordRecovery_formWrap__1Qf4Q",cardText:"PasswordRecovery_cardText__o5oek",cardTextTop:"PasswordRecovery_cardTextTop__1WfhR",buttonContainer:"PasswordRecovery_buttonContainer__QOcbX",cardTextBottom:"PasswordRecovery_cardTextBottom__14fWi",linkCardBottom:"PasswordRecovery_linkCardBottom__Ge2Hp"}},14:function(e,t,n){e.exports={input:"InputForm_input__143Ne",invalid:"InputForm_invalid__1ZBg9",inputText:"InputForm_inputText__1Z5mb",inputBox:"InputForm_inputBox__3rUwl",passwordControl:"InputForm_passwordControl__20CL3",view:"InputForm_view__1tY8Q"}},15:function(e,t,n){e.exports={globalTitleBox:"Registration_globalTitleBox__382nq",listTitleBox:"Registration_listTitleBox__2emNj",formWrap:"Registration_formWrap__3euNu",buttonsContainer:"Registration_buttonsContainer__3oPDd",buttonContainer:"Registration_buttonContainer__2t7YS",error:"Registration_error__2XiOz"}},18:function(e,t,n){e.exports={globalTitleBox:"NewPassword_globalTitleBox__7spSr",listTitleBox:"NewPassword_listTitleBox__2HQBk",formWrap:"NewPassword_formWrap__1cALo",cardText:"NewPassword_cardText__1NZQM",buttonContainer:"NewPassword_buttonContainer__iZLja"}},19:function(e,t,n){e.exports={globalTitleBox:"CheckEmail_globalTitleBox__1INBY",cardImgBlock:"CheckEmail_cardImgBlock__2sBn8",imgCard:"CheckEmail_imgCard__1N20T",rotate:"CheckEmail_rotate__4yGiG",cardText:"CheckEmail_cardText__3Gil1",listTitleBox:"CheckEmail_listTitleBox__2W8X1"}},27:function(e,t,n){e.exports={container:"CardContainer_container__24Ron",boxForm:"CardContainer_boxForm__15yre",rotate:"CardContainer_rotate__1d_rG"}},29:function(e,t,n){e.exports={buttonContainerCancel:"ButtonFormCancel_buttonContainerCancel__25rzs",buttonCancel:"ButtonFormCancel_buttonCancel__3s0EY"}},38:function(e,t,n){e.exports={globalTitle:"GlobalTitle_globalTitle__7KIP_"}},39:function(e,t,n){e.exports={listTitle:"ListTitle_listTitle__2YuOa"}},40:function(e,t,n){e.exports={buttonSubmitColor:"ButtonFormColor_buttonSubmitColor__3w8my"}},49:function(e,t,n){},50:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),i=n.n(o),c=(n(48),n(49),n(50),n(16)),s=n(2),l=n(8),d=n(12),j=n.n(d),b=n(27),u=n.n(b),x=n(0),O=function(e){return Object(x.jsx)("div",{className:u.a.container,children:Object(x.jsx)("div",{className:u.a.boxForm,children:e.children})})},p=n(38),m=n.n(p),h=function(){return Object(x.jsx)("h1",{className:m.a.globalTitle,children:"It-incubator"})},g=n(39),T=n.n(g),_=function(e){return Object(x.jsx)("h2",{className:T.a.listTitle,children:e.text})},C=n(14),f=n.n(C),A=function(e){var t=e.inputType,n=e.text,r=e.onChangeText,o=e.placeholder,i=e.title,c=e.pattern,s=e.value,d=Object(a.useState)(!1),j=Object(l.a)(d,2),b=j[0],u=j[1],O="email"===t?"email":b?"text":"password",p=b?f.a.passwordControl:"".concat(f.a.passwordControl," ").concat(f.a.view);return Object(x.jsxs)("label",{className:f.a.formItem,children:[Object(x.jsx)("p",{className:f.a.inputText,children:n}),Object(x.jsxs)("div",{className:f.a.inputBox,children:[Object(x.jsx)("input",{className:f.a.input,type:O,placeholder:o,title:i,pattern:c,value:s,onChange:function(e){r&&r(e.currentTarget.value)},required:!0}),"password"===t&&Object(x.jsx)("button",{className:p,onClick:function(){u((function(e){return!e}))}})]})]})},N=n(40),v=n.n(N),E=function(e){return Object(x.jsx)("button",{className:v.a.buttonSubmitColor,type:"submit",onClick:e.onClick,disabled:e.disabled,children:e.text})},w=n(11),B=n(4),R=n(41),I=n.n(R).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0,headers:{"API-KEY":""}}),S=function(e){return I.post("/auth/login",e)},G=function(e){return I.post("/auth/register",e)},y={isLoggedIn:!1,error:"",userData:{created:"",email:"",isAdmin:!1,name:"",publicCardPacksCount:0,rememberMe:!1,token:"",tokenDeathTime:0,updated:"",verified:!1,__v:0,_id:""}},L=function(e){return{type:"LOGIN/SET-LOGGED",isLoggedIn:e}},P=function(e){return{type:"LOGIN/SET-ERROR",error:e}},F=function(e){return e.registration.error},k=function(e){return e.registration.registered},U=function(e){return e.app.isLoading},Q=function(e){return e.loginization.isLoggedIn},z=function(e){return e.loginization.error},D=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),d=i[0],b=i[1],u=Object(a.useState)(!1),p=Object(l.a)(u,2),m=p[0],g=p[1],T=Object(w.b)(),C=Object(w.c)(z);return Object(w.c)(Q)?Object(x.jsx)(s.a,{to:de.PROFILE}):Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:j.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:j.a.listTitleBox,children:Object(x.jsx)(_,{text:"Sign In"})}),Object(x.jsxs)("form",{className:j.a.formWrap,onSubmit:function(e){var t;e.preventDefault(),T((t={email:n,password:d,rememberMe:m},function(e){S(t).then((function(t){e(L(!0)),e(function(e){return{type:"LOGIN/SET-USER-DATA",data:e}}(t.data))})).catch((function(t){e(L(!1)),e(P(t.response.data.error))}))}))},action:"",method:"",children:[Object(x.jsx)(A,{text:"Email",inputType:"email",placeholder:"Please enter email",title:"Please enter email",value:n,onChangeText:function(e){r(e),C&&T(P(""))}}),Object(x.jsx)(A,{text:"Password",inputType:"password",placeholder:"Please enter password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *",value:d,onChangeText:function(e){b(e),C&&T(P(""))}}),Object(x.jsx)("input",{type:"checkbox",checked:m,onChange:function(){g(!m)}}),C&&Object(x.jsx)("p",{className:j.a.error,children:C}),Object(x.jsx)("div",{className:j.a.linkWrap,children:Object(x.jsx)(c.b,{className:j.a.passForgot,to:de.PASSWORD_RECOVERY,children:"Forgot password"})}),Object(x.jsx)("div",{className:j.a.buttonContainer,children:Object(x.jsx)(E,{text:"Login",type:"submit"})}),Object(x.jsx)("p",{className:j.a.formText,children:"Don\u2019t have an account?"})]}),Object(x.jsx)(c.b,{className:j.a.linkCardBottom,to:de.REGISTRATION,children:"Sign Up"})]})})},W=function(){return Object(x.jsx)("div",{})},Y=n(18),M=n.n(Y),J=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:M.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:M.a.listTitleBox,children:Object(x.jsx)(_,{text:"Create new password"})}),Object(x.jsxs)("form",{className:M.a.formWrap,action:"",method:"",children:[Object(x.jsx)(A,{text:"",inputType:"password",placeholder:"Password",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *",pattern:"(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}"}),Object(x.jsx)("p",{className:M.a.cardText,children:"Create new password and we will send you further instructions to email"}),Object(x.jsx)("div",{className:M.a.buttonContainer,children:Object(x.jsx)(E,{text:"Create new password"})})]})]})})})},K=n(13),Z=n.n(K),X=n(19),H=n.n(X),V=function(){return Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:H.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:H.a.cardImgBlock,children:Object(x.jsx)("img",{className:H.a.imgCard,src:"data:image/png;base64,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",alt:""})}),Object(x.jsx)("div",{className:H.a.listTitleBox,children:Object(x.jsx)(_,{text:"Check Email"})}),Object(x.jsx)("p",{className:H.a.cardText,children:"We\u2019ve sent an Email with instructions to example@mail.com"})]})})},q=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return n?Object(x.jsx)(V,{}):Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:Z.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:Z.a.listTitleBox,children:Object(x.jsx)(_,{text:"Forgot your password?"})}),Object(x.jsxs)("form",{className:Z.a.formWrap,action:"",method:"",children:[Object(x.jsx)(A,{text:"",inputType:"email",placeholder:"Email",title:"Please enter your email"}),Object(x.jsx)("p",{className:"".concat(Z.a.cardText," ").concat(Z.a.cardTextTop),children:"Enter your email address and we will send you further instructions"}),Object(x.jsx)("div",{className:Z.a.buttonContainer,children:Object(x.jsx)(E,{text:"Send Instructions",onClick:function(){r(!0)}})}),Object(x.jsx)("p",{className:"".concat(Z.a.cardText," ").concat(Z.a.cardTextBottom),children:"Did you remember your password?"})]}),Object(x.jsx)(c.b,{className:Z.a.linkCardBottom,to:de.LOGIN,children:"Try logging in"})]})})},$=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"DAROVA"})})},ee=n(15),te=n.n(ee),ne=n(29),ae=n.n(ne),re=function(e){var t=Object(s.g)();return Object(x.jsx)("div",{className:ae.a.buttonContainerCancel,children:Object(x.jsx)("button",{className:ae.a.buttonCancel,type:"submit",disabled:e.disabled,onClick:function(){return t.goBack()},children:"Cancel"})})},oe={isLoading:!1},ie=function(e){return{type:"APP/SET-IS-LOADING",isLoading:e}},ce={error:"",registered:!1},se=function(e){return{type:"REG/ERROR",error:e}},le=function(){var e=Object(w.b)(),t=Object(w.c)(F),n=Object(w.c)(k),r=Object(w.c)(U),o=Object(a.useState)(""),i=Object(l.a)(o,2),c=i[0],d=i[1],j=Object(a.useState)(""),b=Object(l.a)(j,2),u=b[0],p=b[1],m=Object(a.useState)(""),g=Object(l.a)(m,2),T=g[0],C=g[1],f=Object(a.useState)(!1),N=Object(l.a)(f,2),v=N[0],B=N[1];return n?Object(x.jsx)(s.a,{to:de.LOGIN}):Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:te.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:te.a.listTitleBox,children:Object(x.jsx)(_,{text:"Sign Up"})}),Object(x.jsxs)("form",{className:te.a.formWrap,action:"",method:"",children:[Object(x.jsx)(A,{text:"Email",inputType:"email",placeholder:"Please enter email",title:"Please enter email",value:c,onChangeText:function(n){d(n),t&&e(se(""))}}),Object(x.jsx)(A,{text:"Password",inputType:"password",placeholder:"Please enter password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter.",value:u,onChangeText:function(e){p(e)}}),Object(x.jsx)(A,{text:"\u0421onfirm password",inputType:"password",placeholder:"Please confirm password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"Please confirm password",value:T,onChangeText:function(e){C(e),B(!1)}}),t&&Object(x.jsx)("p",{className:te.a.error,children:t}),v&&Object(x.jsx)("p",{className:te.a.error,children:"Passwords don't match"}),Object(x.jsxs)("div",{className:te.a.buttonsContainer,children:[Object(x.jsx)(re,{disabled:r}),Object(x.jsx)("div",{className:te.a.buttonContainer,children:Object(x.jsx)(E,{text:"Register",onClick:function(){var t;u===T?e((t={email:c,password:u},function(e){e(ie(!0)),G(t).then((function(){e({type:"REG/SET-REGISTERED",registered:!0}),e(se("")),e(ie(!1))})).catch((function(t){e(se(t.response.data.error)),e(ie(!1))}))})):B(!0)},disabled:r})})]})]})]})})},de={LOGIN:"/login",NOT_FOUND:"/404",NEW_PASSWORD:"/new-password",PASSWORD_RECOVERY:"/password-recovery",PROFILE:"/profile",REGISTRATION:"/registration"},je=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(s.a,{to:de.LOGIN})}}),Object(x.jsx)(s.b,{path:de.LOGIN,render:function(){return Object(x.jsx)(D,{})}}),Object(x.jsx)(s.b,{path:de.NOT_FOUND,render:function(){return Object(x.jsx)(W,{})}}),Object(x.jsx)(s.b,{path:de.NEW_PASSWORD,render:function(){return Object(x.jsx)(J,{})}}),Object(x.jsx)(s.b,{path:de.PASSWORD_RECOVERY,render:function(){return Object(x.jsx)(q,{})}}),Object(x.jsx)(s.b,{path:de.PROFILE,render:function(){return Object(x.jsx)($,{})}}),Object(x.jsx)(s.b,{path:de.REGISTRATION,render:function(){return Object(x.jsx)(le,{})}})]})})};var be=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(c.a,{children:Object(x.jsx)(je,{})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},xe=n(23),Oe=n(43),pe={},me={},he=Object(xe.b)({password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;return e},loginization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-ERROR":return Object(B.a)(Object(B.a)({},e),{},{error:t.error});case"LOGIN/SET-LOGGED":return Object(B.a)(Object(B.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"LOGIN/SET-USER-DATA":return Object(B.a)(Object(B.a)({},e),{},{userData:t.data})}return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me;return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REG/ERROR":return Object(B.a)(Object(B.a)({},e),{},{error:t.error});case"REG/SET-REGISTERED":return Object(B.a)(Object(B.a)({},e),{},{registered:t.registered});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-IS-LOADING":return Object(B.a)(Object(B.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),ge=Object(xe.c)(he,Object(xe.a)(Oe.a));i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w.a,{store:ge,children:Object(x.jsx)(be,{})})}),document.getElementById("root")),ue()}},[[76,1,2]]]);
//# sourceMappingURL=main.58524173.chunk.js.map