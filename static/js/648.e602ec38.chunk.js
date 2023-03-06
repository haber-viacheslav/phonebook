"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[648],{9225:function(e,n,r){r.d(n,{$8:function(){return i},FS:function(){return a},pD:function(){return s}});var t=r(5282),i=(r(7427),(0,t.object)().shape({name:(0,t.string)().trim().strict().required(),number:(0,t.string)().phone("UA").required()})),a=(0,t.object)().shape({name:(0,t.string)().trim().strict().required("Required !"),email:(0,t.string)().email("Enter a Vaid Email").required("Email is Required"),password:(0,t.string)().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long"),confirmPassword:(0,t.string)().oneOf([(0,t.ref)("password")],"Password does not matched").required("Confirm Password is Required")}),s=(0,t.object)().shape({email:(0,t.string)().email("Enter a Vaid Email").required("Email is Required"),password:(0,t.string)().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")})},7648:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var t,i,a,s=r(9439),l=r(9164),o=r(1889),c=r(5527),d=r(8870),u=r(890),m=r(1040),x=r(6151),h=r(5705),f=r(8535),j=r(9434),p=r(6916),g=function(e){return e.contacts.items},Z=function(e){return e.filter},b=(0,p.P1)([g,Z],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),v=r(9225),w=r(3329),y={name:"",number:""},C=function(e){var n=e.onClose,r=(0,j.I0)(),t=(0,j.v9)(g);return(0,w.jsx)(l.Z,{children:(0,w.jsx)(o.ZP,{container:!0,sx:{justifyContent:"center"},children:(0,w.jsx)(c.Z,{children:(0,w.jsxs)(d.Z,{p:5,children:[(0,w.jsx)(u.Z,{variant:"h5",children:"Add contact"}),(0,w.jsx)(h.J9,{initialValues:y,validationSchema:v.$8,onSubmit:function(e,i){var a=i.resetForm;!function(e,n){return e.find((function(e){return e.name===n.name.trim()}))}(t,e)?!function(e,n){return e.find((function(e){return e.phone===n.number.trim()}))}(t,e)?(r((0,f.uK)(e)),a(),n()):alert("".concat(e.number," is already in contacts")):alert("".concat(e.name," is already in contacts"))},children:function(e){return(0,w.jsxs)(h.l0,{children:[(0,w.jsx)(h.gN,{size:"small",as:m.Z,label:"name",type:"text",name:"name",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,w.jsx)(h.Bc,{name:"name"}),error:e.errors.email&&e.touched.email,required:!0}),(0,w.jsx)(h.gN,{size:"small",as:m.Z,label:"number",name:"number",type:"tel",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,w.jsx)(h.Bc,{name:"number"}),error:e.errors.password&&e.touched.password,required:!0}),(0,w.jsx)(x.Z,{variant:"contained",type:"submit",color:"primary",fullWidth:!0,children:"Submit"})]})}})]})})})})},k=r(683),E=r(2791),q=r(168),S=r(225),I=S.Z.div(t||(t=(0,q.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),P=S.Z.div(i||(i=(0,q.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),F=r(6174),T=function(e){var n=e.onClick,r=e.children;(0,E.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,w.jsx)(F.Z,{children:(0,w.jsx)(I,{onClick:function(e){e.target===e.currentTarget&&n()},children:(0,w.jsx)(P,{children:r})})})},_=function(e){var n=e.data,r=e.onClose,t=n.name,i=n.number,a=n.id,s={name:t,number:i},p=(0,j.I0)();return(0,w.jsx)(l.Z,{children:(0,w.jsx)(o.ZP,{container:!0,sx:{justifyContent:"center",zIndex:"modal"},children:(0,w.jsx)(c.Z,{children:(0,w.jsxs)(d.Z,{p:5,children:[(0,w.jsx)(u.Z,{variant:"h5",children:"Edit contact"}),(0,w.jsx)(h.J9,{initialValues:s,validationSchema:v.$8,onSubmit:function(e,n){p((0,f.$Z)({id:a,data:e})),r(),n.resetForm(),p((0,f.yF)())},children:function(e){return(0,w.jsxs)(h.l0,{children:[(0,w.jsx)(h.gN,{as:m.Z,label:"name",type:"text",name:"name",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,w.jsx)(h.Bc,{name:"name"}),error:e.errors.email&&e.touched.email,size:"small"}),(0,w.jsx)(h.gN,{as:m.Z,label:"number",name:"number",type:"tel",fullWidth:!0,variant:"outlined",margin:"dense",helperText:(0,w.jsx)(h.Bc,{name:"number"}),error:e.errors.password&&e.touched.password,size:"small"}),(0,w.jsx)(x.Z,{sx:{textAlign:"center"},variant:"contained",type:"submit",color:"primary",children:"Submit"})]})}})]})})})})},z=r(6520),R=r(3400),W=r(383),A=r(4919),B=function(e){var n=e.contact,r=n.name,t=n.number,i=n.id,a={name:r,number:t,id:i},l=(0,E.useState)(!1),o=(0,s.Z)(l,2),c=o[0],m=o[1],x=function(){return m(!c)},h=(0,j.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(d.Z,{sx:{p:"1rem",borderRadius:"0.2rem",boxShadow:"2px 3px 3px ".concat((0,k.m)()),background:"linear-gradient(145deg, ".concat((0,k.m)(),"26, ").concat((0,k.m)(),"26)"),width:{xs:"260px",sm:"440px"},display:"flex",alignItems:"center",position:"relative"},children:[(0,w.jsxs)(d.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row",lg:"column"},gap:{sm:"1.2rem",lg:"0.2rem"},alignItems:"center"},children:[(0,w.jsxs)(u.Z,{variant:"subtitle1",children:[r,":"]}),(0,w.jsx)(u.Z,{variant:"body1",children:t})]}),(0,w.jsxs)(d.Z,{sx:{ml:"auto",display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,w.jsx)(z.Z,{title:"Edit",children:(0,w.jsx)(R.Z,{onClick:x,children:(0,w.jsx)(A.Z,{})})}),(0,w.jsx)(z.Z,{title:"Delete",children:(0,w.jsx)(R.Z,{onClick:function(){return h((0,f.GK)(i))},children:(0,w.jsx)(W.Z,{})})})]})]}),c&&(0,w.jsx)(T,{onClick:x,children:(0,w.jsx)(_,{onClose:x,data:a})})]})},L=S.Z.ul(a||(a=(0,q.Z)(["\n  font-size: 20px;\n  display: flex;\n  gap: 8px;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),N=function(){var e=(0,j.v9)(b),n=(0,j.I0)();return(0,E.useEffect)((function(){n((0,f.yF)())}),[n]),(0,w.jsx)(w.Fragment,{children:e.length>0&&(0,w.jsx)(L,{children:e.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(B,{contact:e})},e.id)}))})})},V=r(4808),$=r(9276),D=function(){var e=(0,j.I0)(),n=(0,j.v9)(Z);return(0,w.jsx)($.Z,{children:(0,w.jsx)(m.Z,{label:"Find contacts by name",id:"filter",variant:"standard",value:n,onChange:function(n){var r=n.currentTarget.value.toLowerCase();e((0,V.h)(r))},size:"small"})})},J=r(2419),K=function(){var e=(0,E.useState)(!1),n=(0,s.Z)(e,2),r=n[0],t=n[1],i=function(){return t(!r)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(d.Z,{sx:{display:"flex",gap:"2rem",alignItems:"center",p:3},children:[(0,w.jsx)(z.Z,{title:"Add your contact",children:(0,w.jsx)(R.Z,{onClick:i,children:(0,w.jsx)(J.Z,{})})}),(0,w.jsx)(D,{})]}),r&&(0,w.jsx)(T,{onClick:i,children:(0,w.jsx)(C,{onClose:i})}),(0,w.jsx)(N,{})]})}}}]);
//# sourceMappingURL=648.e602ec38.chunk.js.map