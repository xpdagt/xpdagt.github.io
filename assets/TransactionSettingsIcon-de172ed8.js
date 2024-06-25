import{s as g,X as I,aB as H,r as u,k as f,aX as k,j as e,I as M,F as d,T as p,d as a,e as y,bw as P,b0 as v,hN as E,hO as A,gN as D,hP as L,g_ as j,b7 as b,aa as T,U as z,hQ as V,dG as _,dH as W,g as m,h2 as B,aA as N,f2 as $,O as G}from"./index-201afa5f.js";const O=g.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: ${({theme:n})=>n.tableHeader};
`,R=g.input`
  margin-top: 24px;
  background: ${({theme:n})=>n.buttonBlack};
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500px;
  line-height: 20px;
  outline: none;
  color: ${({theme:n})=>n.text};
  border: none;
  &::placeholder {
    color: ${({theme:n})=>n.disableText};
  }
`,U=g(I)`
  height: 24px;
  width: 24px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({theme:n})=>n.text};
  }
`,Z=g.span`
  color: ${({theme:n})=>n.warning};
  cursor: not-allowed;
  user-select: none;
`;function J({show:n,setShow:t}){const[,i]=H(),[r,s]=u.useState(""),l=f(),{mixpanelHandler:c}=k(),x=()=>{r.trim().toLowerCase()==="confirm"&&(c(v.DEGEN_MODE_TOGGLE,{type:"on"}),i(),s(""),t(!1))};return e.jsx(M,{isOpen:n,onDismiss:()=>{s(""),t(!1)},maxHeight:100,width:"480px",maxWidth:"unset",children:e.jsxs(O,{children:[e.jsxs(d,{alignItems:"center",justifyContent:"space-between",children:[e.jsx(p,{fontSize:"20px",fontWeight:500,lineHeight:"24px",children:e.jsx(a,{id:"6foA8n"})}),e.jsx(U,{onClick:()=>t(!1)})]}),e.jsx(p,{marginTop:"24px",fontSize:14,fontWeight:500,lineHeight:"20px",color:l.subText,children:e.jsx(a,{id:"CAyITr"})}),e.jsx(p,{marginTop:"24px",fontSize:14,fontWeight:400,lineHeight:"24px",color:l.text,children:e.jsx(a,{id:"+BzDT+",components:{0:e.jsx(Z,{})}})}),e.jsx(R,{placeholder:"Confirm",value:r,onChange:o=>s(o.target.value),onKeyUp:o=>{o.key==="Enter"&&x()}}),e.jsxs(d,{sx:{gap:"16px"},marginTop:"24px",justifyContent:"center",children:[e.jsx(y,{style:{flex:1,fontSize:"16px",padding:"10px"},onClick:()=>{s(""),t(!1)},children:e.jsx(a,{id:"VeDYgJ"})}),e.jsx(P,{disabled:r.trim().toLowerCase()!=="confirm",style:{fontSize:"16px",flex:1,padding:"10px"},onClick:x,children:e.jsx(a,{id:"7VpPHA"})})]})]})})}const X=({isActive:n,onClick:t})=>{const i=f();return e.jsx(d,{sx:{width:"16px",height:"16px",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:"8px"},role:"button",onClick:t,children:n?e.jsx(E,{height:"16px",color:i.text}):e.jsx(A,{height:"16px",color:i.subText})})},F=g.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  &[data-warning='true'] {
    color: ${({theme:n})=>n.warning};
  }

  &[data-error='true'] {
    color: ${({theme:n})=>n.red1};
  }
`,q=({shouldShowPinButton:n=!0})=>{const{rawSlippage:t,setRawSlippage:i,isSlippageControlPinned:r,togglePinSlippage:s}=D(),l=L(),c=B(t,l),x=c!==j.NORMAL,o=f();return e.jsxs(d,{sx:{flexDirection:"column",rowGap:"8px"},children:[e.jsxs(d,{sx:{alignItems:"center"},children:[e.jsx(b,{fontSize:12,fontWeight:400,color:o.subText,underlineColor:o.border,children:e.jsx(T,{text:e.jsx(p,{children:e.jsx(a,{id:"IQ5oQu",components:{0:e.jsx(z,{href:"https://docs.kyberswap.com/getting-started/foundational-topics/decentralized-finance/slippage"})}})}),placement:"right",children:e.jsx(a,{id:"x6GJ4a"})})}),n&&e.jsx(X,{isActive:r,onClick:s})]}),e.jsx(V,{rawSlippage:t,setRawSlippage:i,isWarning:x,defaultRawSlippage:l?_:W}),x&&e.jsx(F,{"data-warning":!0,"data-error":!1,children:c===j.HIGH?m._({id:"WhgXye"}):m._({id:"SzyXkE"})})]})},S=n=>{const t=Number.parseInt(n,10);return n.length>5||Number.isNaN(t)||String(Math.floor(t))!==n?!1:0<t&&t<1e4},K=({className:n})=>{const t=f(),[i,r]=N(),[s,l]=u.useState(String(Math.floor(i/60))),c=u.useRef(null),x=S(s),o=()=>{if(!S(s))return;const h=parseInt(s,10)*60;r(h)},w=h=>{var C;h.key==="Enter"&&(o(),(C=c.current)==null||C.blur())};return $(c,()=>o()),u.useEffect(()=>{l(String(Math.floor(i/60)))},[i]),e.jsxs(d,{justifyContent:"space-between",alignItems:"center",className:n,children:[e.jsx(d,{alignItems:"center",children:e.jsx(b,{fontSize:12,fontWeight:400,color:t.subText,underlineColor:t.border,children:e.jsx(T,{text:e.jsx(p,{children:e.jsx(a,{id:"DMtNzZ"})}),placement:"right",children:e.jsx(a,{id:"wNtlPc"})})})}),e.jsxs(d,{sx:{height:"28px",fontWeight:500,fontSize:"12px",lineHeight:"16px",columnGap:"2px",alignItems:"center",backgroundColor:t.tabBackground,padding:"0 8px",borderRadius:"40px"},children:[e.jsx(G,{width:60,children:e.jsx("input",{ref:c,className:"input",placeholder:String(i/60),value:s,onChange:h=>l(h.target.value),onBlur:o,onKeyUp:w,"data-valid":x})}),e.jsx(p,{fontWeight:500,fontSize:"12px",lineHeight:"16px",children:e.jsx(a,{id:"3131gY"})})]})]})},ee=g(K)`
  .input {
    width: 100%;
    background: transparent;
    font-size: 12px;
    font-weight: 500;
    outline: none;
    border: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    color: ${({theme:n})=>n.text};
    text-align: right;

    &[data-valid='false'] {
      color: ${({theme:n})=>n.red1};
    }
  }
`,Q=({size:n,fill:t,style:i={},onClick:r})=>e.jsx("svg",{onClick:r,style:i,width:n||20,height:n||20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2.5 15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H7.5V14.1667H3.33333C2.875 14.1667 2.5 14.5417 2.5 15ZM2.5 5C2.5 5.45833 2.875 5.83333 3.33333 5.83333H10.8333V4.16667H3.33333C2.875 4.16667 2.5 4.54167 2.5 5ZM10.8333 16.6667V15.8333H16.6667C17.125 15.8333 17.5 15.4583 17.5 15C17.5 14.5417 17.125 14.1667 16.6667 14.1667H10.8333V13.3333C10.8333 12.875 10.4583 12.5 10 12.5C9.54167 12.5 9.16667 12.875 9.16667 13.3333V16.6667C9.16667 17.125 9.54167 17.5 10 17.5C10.4583 17.5 10.8333 17.125 10.8333 16.6667ZM5.83333 8.33333V9.16667H3.33333C2.875 9.16667 2.5 9.54167 2.5 10C2.5 10.4583 2.875 10.8333 3.33333 10.8333H5.83333V11.6667C5.83333 12.125 6.20833 12.5 6.66667 12.5C7.125 12.5 7.5 12.125 7.5 11.6667V8.33333C7.5 7.875 7.125 7.5 6.66667 7.5C6.20833 7.5 5.83333 7.875 5.83333 8.33333ZM17.5 10C17.5 9.54167 17.125 9.16667 16.6667 9.16667H9.16667V10.8333H16.6667C17.125 10.8333 17.5 10.4583 17.5 10ZM13.3333 7.5C13.7917 7.5 14.1667 7.125 14.1667 6.66667V5.83333H16.6667C17.125 5.83333 17.5 5.45833 17.5 5C17.5 4.54167 17.125 4.16667 16.6667 4.16667H14.1667V3.33333C14.1667 2.875 13.7917 2.5 13.3333 2.5C12.875 2.5 12.5 2.875 12.5 3.33333V6.66667C12.5 7.125 12.875 7.5 13.3333 7.5Z",fill:t||"white"})}),ne=Q;export{J as A,q as S,ee as T,ne as a};
