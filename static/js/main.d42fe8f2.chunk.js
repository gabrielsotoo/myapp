(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{144:function(e,t,n){},163:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(45),s=n.n(l),r=(n(144),n(119)),o=n(120),i=n(121),b=n(127),h=n(126),u=n(122),j=n.n(u),d=(n(163),n(185)),p=n(189),g=n(186),m=n(187),y=n(10),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).changeHandler=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),console.log(a.state),console.log("hola"),j.a.post("https://sheet.best/api/sheets/4b3a5b3b-e79d-406b-86de-72d2a8cdc1df",a.state).then((function(e){console.log(e)}))},a.state={name:"",age:"",salary:"",hobby:"",location:""},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.age,a=e.salary,c=e.hobby;e.location;return Object(y.jsxs)(d.a,{fluid:!0,className:"container",children:[Object(y.jsx)(p.a,{as:"h2",children:"React Google Sheets!"}),Object(y.jsxs)(g.a,{className:"form",onSubmit:this.submitHandler,children:[Object(y.jsxs)(g.a.Field,{children:[Object(y.jsx)("label",{children:"Name"}),Object(y.jsx)("input",{placeholder:"Enter your name",type:"text",name:"name",value:t,onChange:this.changeHandler})]}),Object(y.jsxs)(g.a.Field,{children:[Object(y.jsx)("label",{children:"Age"}),Object(y.jsx)("input",{placeholder:"Enter your age",type:"number",name:"age",value:n,onChange:this.changeHandler})]}),Object(y.jsxs)(g.a.Field,{children:[Object(y.jsx)("label",{children:"Salary"}),Object(y.jsx)("input",{placeholder:"Enter your salary",type:"number",name:"salary",value:a,onChange:this.changeHandler})]}),Object(y.jsxs)(g.a.Field,{children:[Object(y.jsx)("label",{children:"Hobby"}),Object(y.jsx)("input",{placeholder:"Enter your hobby",type:"text",name:"hobby",value:c,onChange:this.changeHandler})]}),Object(y.jsx)(m.a,{color:"blue",type:"submit",children:"Submit"})]})]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};n(171);s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(O,{})}),document.getElementById("root")),x()}},[[172,1,2]]]);
//# sourceMappingURL=main.d42fe8f2.chunk.js.map