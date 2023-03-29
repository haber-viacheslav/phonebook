"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[648],{9225:function(e,n,r){r.d(n,{$8:function(){return t},FS:function(){return a},pD:function(){return s}});var i=r(4021),t=(r(7427),(0,i.object)().shape({name:(0,i.string)().trim().strict().required(),number:(0,i.string)().phone("UA").required()})),a=(0,i.object)().shape({name:(0,i.string)().trim().strict().required("Required !"),email:(0,i.string)().email("Enter a Vaid Email").required("Email is Required"),password:(0,i.string)().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long"),confirmPassword:(0,i.string)().oneOf([(0,i.ref)("password")],"Password does not matched").required("Confirm Password is Required")}),s=(0,i.object)().shape({email:(0,i.string)().email("Enter a Vaid Email").required("Email is Required"),password:(0,i.string)().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")})},7648:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var i,t,a,s=r(9439),o=r(9164),l=r(1889),c=r(5527),d=r(8870),u=r(890),m=r(4679),x=r(6151),h=r(5705),f=r(8535),p=r(9434),j=r(6916),g=function(e){return e.contacts.items},b=function(e){return e.filter},Z=(0,j.P1)([g,b],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),v=r(9225),w=r(5218),y=r(3329),k={name:"",number:""},C=function(e){var n=e.onClose,r=(0,p.I0)(),i=(0,p.v9)(g);return(0,y.jsx)(o.Z,{children:(0,y.jsx)(l.ZP,{container:!0,sx:{justifyContent:"center"},children:(0,y.jsx)(c.Z,{sx:{boxShadow:"2px 2px 3px #adadad"},children:(0,y.jsxs)(d.Z,{p:5,sx:{maxWidth:"450px"},children:[(0,y.jsx)(u.Z,{variant:"h5",children:"Add contact"}),(0,y.jsx)(h.J9,{initialValues:k,validationSchema:v.$8,onSubmit:function(e,t){var a=t.resetForm;!function(e,n){return e.find((function(e){return e.name===n.name.trim()}))}(i,e)?!function(e,n){return e.find((function(e){return e.number===n.number.trim()}))}(i,e)?(r((0,f.uK)(e)),a(),n()):w.Am.error("Error! \ud83d\ude32 ".concat(e.number," is already in contacts"),{duration:2e3,style:{borderRadius:"10px",background:"#333",color:"#fff"}}):w.Am.error("Error! \ud83d\ude32 ".concat(e.name," is already in contacts"),{duration:2e3,style:{borderRadius:"10px",background:"#333",color:"#fff"}})},children:function(e){return(0,y.jsxs)(h.l0,{children:[(0,y.jsx)(h.gN,{size:"small",as:m.Z,label:"name",type:"text",name:"name",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,y.jsx)(h.Bc,{name:"name"}),error:e.errors.email&&e.touched.email,required:!0}),(0,y.jsx)(h.gN,{size:"small",as:m.Z,label:"number",name:"number",type:"tel",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,y.jsx)(h.Bc,{name:"number"}),error:e.errors.password&&e.touched.password,required:!0}),(0,y.jsx)(x.Z,{variant:"contained",type:"submit",color:"primary",fullWidth:!0,children:"Submit"})]})}})]})})})})},E=r(683),q=r(2791),S=r(168),I=r(6088),P=I.Z.div(i||(i=(0,S.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),F=I.Z.div(t||(t=(0,S.Z)(["\n  max-width: calc(100vw - 10px);\n  max-height: calc(100vh - 10px);\n"]))),T=r(6174),_=function(e){var n=e.onClick,r=e.children;(0,q.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,y.jsx)(T.Z,{children:(0,y.jsx)(P,{onClick:function(e){e.target===e.currentTarget&&n()},children:(0,y.jsx)(F,{children:r})})})},R=function(e){var n=e.data,r=e.onClose,i=n.name,t=n.number,a=n.id,s={name:i,number:t},j=(0,p.I0)();return(0,y.jsx)(o.Z,{children:(0,y.jsx)(l.ZP,{container:!0,sx:{justifyContent:"center"},children:(0,y.jsx)(c.Z,{sx:{boxShadow:"2px 2px 3px #adadad"},children:(0,y.jsxs)(d.Z,{p:5,sx:{maxWidth:"450px"},children:[(0,y.jsx)(u.Z,{variant:"h5",children:"Edit contact"}),(0,y.jsx)(h.J9,{initialValues:s,validationSchema:v.$8,onSubmit:function(e,n){j((0,f.$Z)({id:a,data:e})),r(),n.resetForm(),j((0,f.yF)())},children:function(e){return(0,y.jsxs)(h.l0,{children:[(0,y.jsx)(h.gN,{as:m.Z,label:"name",type:"text",name:"name",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,y.jsx)(h.Bc,{name:"name"}),error:e.errors.email&&e.touched.email,size:"small"}),(0,y.jsx)(h.gN,{as:m.Z,label:"number",name:"number",type:"tel",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,y.jsx)(h.Bc,{name:"number"}),error:e.errors.password&&e.touched.password,size:"small"}),(0,y.jsx)(x.Z,{sx:{textAlign:"center",display:"block",mx:"auto"},variant:"contained",type:"submit",color:"primary",children:"Submit"})]})}})]})})})})},W=r(6520),z=r(3400),A=r(383),B=r(4919),D=function(e){var n=e.contact,r=n.name,i=n.number,t=n.id,a={name:r,number:i,id:t},o=(0,q.useState)(!1),l=(0,s.Z)(o,2),c=l[0],m=l[1],x=function(){return m(!c)},h=(0,p.I0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(d.Z,{sx:{p:"1rem",borderRadius:"0.2rem",boxShadow:"2px 3px 3px ".concat((0,E.m)()),background:"linear-gradient(145deg, ".concat((0,E.m)(),"26, ").concat((0,E.m)(),"26)"),width:{xs:"260px",sm:"440px"},display:"flex",alignItems:"center",position:"relative"},children:[(0,y.jsxs)(d.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row",lg:"column"},gap:{sm:"1.2rem",lg:"0.2rem"},alignItems:"center"},children:[(0,y.jsxs)(u.Z,{variant:"subtitle1",children:[r,":"]}),(0,y.jsx)(u.Z,{variant:"body1",children:i})]}),(0,y.jsxs)(d.Z,{sx:{ml:"auto",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,y.jsx)(W.Z,{title:"Edit",children:(0,y.jsx)(z.Z,{onClick:x,children:(0,y.jsx)(B.Z,{})})}),(0,y.jsx)(W.Z,{title:"Delete",children:(0,y.jsx)(z.Z,{onClick:function(){return h((0,f.GK)(t))},children:(0,y.jsx)(A.Z,{})})})]})]}),c&&(0,y.jsx)(T.Z,{children:(0,y.jsx)(_,{onClick:x,children:(0,y.jsx)(R,{onClose:x,data:a})})})]})},L=I.Z.ul(a||(a=(0,S.Z)(["\n  font-size: 20px;\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),N=function(){var e=(0,p.v9)(Z),n=(0,p.I0)();return(0,q.useEffect)((function(){n((0,f.yF)())}),[n]),(0,y.jsx)(y.Fragment,{children:e.length>0&&(0,y.jsx)(L,{children:e.map((function(e){return(0,y.jsx)("li",{children:(0,y.jsx)(D,{contact:e})},e.id)}))})})},V=r(4808),$=r(9276),J=function(){var e=(0,p.I0)(),n=(0,p.v9)(b);return(0,y.jsx)($.Z,{children:(0,y.jsx)(m.Z,{label:"Find contacts by name",id:"filter",variant:"standard",value:n,onChange:function(n){var r=n.currentTarget.value.toLowerCase();e((0,V.h)(r))},size:"small"})})},K=r(2419),Y=function(){var e=(0,q.useState)(!1),n=(0,s.Z)(e,2),r=n[0],i=n[1],t=function(){return i(!r)};return(0,y.jsx)(c.Z,{sx:{minHeight:{xs:"72vh",sm:"80vh",lg:"84vh",xl:"85vh"}},children:(0,y.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)(d.Z,{sx:{display:"flex",gap:"2rem",alignItems:"center",p:3},children:[(0,y.jsx)(W.Z,{title:"Add your contact",children:(0,y.jsx)(z.Z,{onClick:t,children:(0,y.jsx)(K.Z,{})})}),(0,y.jsx)(J,{})]}),r&&(0,y.jsx)(_,{onClick:t,children:(0,y.jsx)(C,{onClose:t})}),(0,y.jsx)(N,{})]})})}}}]);
//# sourceMappingURL=648.31b81290.chunk.js.map