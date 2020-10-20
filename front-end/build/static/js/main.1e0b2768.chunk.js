(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{87:function(e,a,t){e.exports=t(96)},92:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),c=(t(92),t(146)),o=t(139),m=t(53),u=t(69),s=t(128),h=t(132),p=t(136),E=t(135),g=t(130),d=t(133),f=t(134),b=t(98),v=t(137),y=t(138),j=Object(s.a)({table:{minWidth:650},button:{margin:10}});function C(e){var a=j(),t=Object(n.useState)([]),l=Object(m.a)(t,2),i=l[0],c=l[1];Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){c(e)}))}),[c]);return r.a.createElement(g.a,{component:b.a},r.a.createElement(h.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,null,"User ID"),r.a.createElement(E.a,{align:"right"},"Name"),r.a.createElement(E.a,{align:"right"},"Username"),r.a.createElement(E.a,{align:"right"},"Email"),r.a.createElement(E.a,{align:"right"},"City"),r.a.createElement(E.a,{align:"right"},"Phone"),r.a.createElement(E.a,{align:"right"},"Website"),r.a.createElement(E.a,{align:"right"},"Delete"),r.a.createElement(E.a,{align:"right"},"Edit"))),r.a.createElement(p.a,null,i.length>0?i.map((function(e){return r.a.createElement(f.a,{key:e.id},r.a.createElement(E.a,{component:"th",scope:"row"},e.id),r.a.createElement(E.a,{align:"right"},e.name),r.a.createElement(E.a,{align:"right"},e.username),r.a.createElement(E.a,{align:"right"},e.email),r.a.createElement(E.a,{align:"right"},e.address.city),r.a.createElement(E.a,{align:"right"},e.phone),r.a.createElement(E.a,{align:"right"},e.website),r.a.createElement(E.a,{align:"right"},r.a.createElement(v.a,{onClick:function(){return function(e){var a="https://jsonplaceholder.typicode.com/users/".concat(e);fetch(a,{method:"DELETE"}).then((function(a){var t=i.filter((function(a){return e!==a.id}));c(t)}))}(e.id)}},r.a.createElement(y.a,null,"delete"))),r.a.createElement(E.a,{align:"right"},r.a.createElement(v.a,{onClick:function(){return function(e){var a="https://jsonplaceholder.typicode.com/users/".concat(e);fetch(a,{method:"PUT",body:JSON.stringify({id:"".concat(e),name:"foo",username:"bar",phone:"5045",city:"Kolkata",email:"user@gmail.com",website:"www.website.com"}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}(e.id)}},r.a.createElement(y.a,null,"edit"))))})):r.a.createElement(f.a,null,r.a.createElement(E.a,{component:"th",scope:"row"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading..."),r.a.createElement(E.a,{align:"right"},"Loading...")))))}var O=t(142),w=t(149),x=t(145),S=t(54),k=t(148),W=t(68),D=t(14),N=t(15),L=t(17),U=t(19),A=t(151),P=t(147),T=function(e){Object(U.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).next=function(a){a.preventDefault(),e.props.nextStep()},e}return Object(N.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return r.a.createElement(A.a,{open:!0,fullWidth:!0,maxWidth:"sm"},r.a.createElement(o.a,null,r.a.createElement(P.a,{label:"Name",onChange:t("name"),defaultValue:a.name,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{label:"Phone",onChange:t("phone"),defaultValue:a.phone,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{label:"City",onChange:t("city"),defaultValue:a.city,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{style:{margin:10},color:"primary",variant:"contained",onClick:this.next},"Next")))}}]),t}(n.Component),V=t(141),B=function(e){Object(U.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).next=function(a){a.preventDefault(),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(N.a)(t,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return r.a.createElement(V.a,null,r.a.createElement(A.a,{open:!0,fullWidth:!0,maxWidth:"sm"},r.a.createElement(o.a,null,r.a.createElement(O.a,{title:"Enter Personal Details"}),r.a.createElement(P.a,{label:"Username",onChange:t("username"),defaultValue:a.username,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{label:"email",onChange:t("email"),defaultValue:a.email,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(P.a,{label:"Website",onChange:t("website"),defaultValue:a.website,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{color:"secondary",style:{margin:10},variant:"contained",onClick:this.back},"Back"),r.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.next},"Continue"))))}}]),t}(n.Component),R=t(140),J=t(143),M=t(144),G=function(e){Object(U.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).confirm=function(a){a.preventDefault(),fetch("https://jsonplaceholder.typicode.com/users",{method:"POST"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),e.props.nextStep()},e.back=function(a){a.preventDefault(),e.props.prevStep()},e}return Object(N.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.name,t=e.username,n=e.email,l=e.phone,i=e.city,c=e.website;return r.a.createElement(V.a,null,r.a.createElement(A.a,{open:!0,fullWidth:!0,maxWidth:"sm"},r.a.createElement(o.a,null,r.a.createElement(O.a,{title:"Confirm User Data"}),r.a.createElement(R.a,null,r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"Name",secondary:a})),r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"Username",secondary:t})),r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"Email",secondary:n})),r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"Phone Number",secondary:l})),r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"City",secondary:i})),r.a.createElement(J.a,null,r.a.createElement(M.a,{primary:"Website",secondary:c}))),r.a.createElement("br",null),r.a.createElement(v.a,{color:"secondary",style:{margin:10},variant:"contained",onClick:this.back},"Back"),r.a.createElement(v.a,{color:"primary",variant:"contained",onClick:this.confirm},"Confirm"))))}}]),t}(n.Component),I=function(e){Object(U.a)(t,e);var a=Object(L.a)(t);function t(){return Object(D.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){var e=this.props.values,a=e.name,t=e.username,n=e.email,l=e.phone,i=e.city,c=e.website;return r.a.createElement(g.a,{component:b.a},r.a.createElement("h5",{style:{margin:10}},"User Added Successfully"),r.a.createElement(h.a,{"aria-label":"simple table"},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,null,"Name"),r.a.createElement(E.a,{align:"right"},"Username"),r.a.createElement(E.a,{align:"right"},"Email"),r.a.createElement(E.a,{align:"right"},"City"),r.a.createElement(E.a,{align:"right"},"Phone"),r.a.createElement(E.a,{align:"right"},"Website"))),r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{component:"th",scope:"row"},a),r.a.createElement(E.a,{align:"right"},t),r.a.createElement(E.a,{align:"right"},n),r.a.createElement(E.a,{align:"right"},i),r.a.createElement(E.a,{align:"right"},l),r.a.createElement(E.a,{align:"right"},c)))))}}]),t}(n.Component),F=function(e){Object(U.a)(t,e);var a=Object(L.a)(t);function t(){var e;Object(D.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={step:1,id:"",name:"",username:"",email:"",phone:"",city:"",website:""},e.nextStep=function(){var a=e.state.step;e.setState({step:a+1})},e.prevStep=function(){var a=e.state.step;e.setState({step:a-1})},e.handleChange=function(a){return function(t){e.setState(Object(W.a)({},a,t.target.value))}},e}return Object(N.a)(t,[{key:"render",value:function(){var e=this.state,a=e.step,t={id:e.id,name:e.name,username:e.username,email:e.email,phone:e.phone,city:e.city,website:e.website};switch(a){case 1:return r.a.createElement(T,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement(B,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:t});case 3:return r.a.createElement(G,{nextStep:this.nextStep,prevStep:this.prevStep,values:t});case 4:return r.a.createElement(I,{values:t});default:console.log("This is a multi-step form built with React.")}}}]),t}(n.Component);function K(e){var a=e.children,t=e.value,n=e.index,l=Object(u.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(k.a,{p:3},r.a.createElement(S.a,null,a)))}function $(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var q=Object(s.a)((function(e){return{root:{flexGrow:1,backgroundColor:"white"}}}));function z(){var e=q(),a=r.a.useState(0),t=Object(m.a)(a,2),n=t[0],l=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(O.a,{position:"static",color:"primary"},r.a.createElement(w.a,{value:n,onChange:function(e,a){l(a)},"aria-label":"simple tabs example",centered:!0},r.a.createElement(x.a,Object.assign({label:"READ"},$(0))),r.a.createElement(x.a,Object.assign({label:"CREATE"},$(1))))),r.a.createElement(K,{value:n,index:0},r.a.createElement(C,null)),r.a.createElement(K,{value:n,index:1},r.a.createElement(F,null)))}function H(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{container:!0,spacing:3},r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement("h1",null,"USER MANAGEMENT")),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(z,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[87,1,2]]]);
//# sourceMappingURL=main.1e0b2768.chunk.js.map