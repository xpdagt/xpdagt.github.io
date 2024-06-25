import{r as g,u as _,L as u,a as X,R as F,B as T,b as J,j as i,c as K,T as U,d as L,W as Z,e as ee,s as D,C as te,f as z,i as se,g as b,K as E,q as v,h as ne,k as B,F as ie,l as oe,m as re,n as ae,o as ce,E as R,p as S}from"./index-201afa5f.js";import{C as le,a as de,K as ue,T as j}from"./styled-580c6267.js";import{u as he,I as ge}from"./index-06088ef7.js";import"./XCircle-ab46d13b.js";const C=({onClick:e,method:t,flowStatus:{flowReady:n,autoLoginMethod:s}})=>{const l=g.useRef(!1),{account:a}=_();g.useEffect(()=>{l.current||!n||s!==t||(s===u.ETH&&a||[u.GOOGLE,u.EMAIL].includes(s))&&(l.current=!0,e==null||e())},[n,s,e,t,a])},pe=({loading:e,disabled:t,onClick:n,flowStatus:s,primary:l})=>{const a=X(),{account:d}=_(),r=g.useCallback(c=>{var p;(p=c==null?void 0:c.preventDefault)==null||p.call(c),d?n():a()},[a,n,d]);C({onClick:r,flowStatus:s,method:u.ETH});const o={height:"36px",id:"btnLoginEth",onClick:c=>{c.preventDefault(),r()},disabled:t||e,children:i.jsx(i.Fragment,{children:e?i.jsxs(i.Fragment,{children:[i.jsx(K,{})," "," ",i.jsxs(U,{sx:{whiteSpace:"nowrap"},children:[" ",i.jsx(L,{id:"uIVkKI"})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(Z,{}),"  ",i.jsx(L,{id:"YgNzNF"})]})})};return F.createElement(l?T:J,o)},fe=({primary:e,flowStatus:t})=>{const n=g.useRef(null),{autoLoginMethod:s}=t,l=s===u.GOOGLE,a=g.useCallback(()=>{var r,o;(o=(r=n.current)==null?void 0:r.click)==null||o.call(r)},[]);C({onClick:a,flowStatus:t,method:u.GOOGLE});const d={height:"36px",id:"btnLoginGoogle",type:"submit",value:"google",name:"provider",ref:n,children:i.jsx(L,{id:"qLYyho"}),style:l?{opacity:0}:void 0};return F.createElement(e?T:ee,d)},xe=D(te)`
  width: 100%;
  justify-content: center;
  gap: 16px;
`,me=({flowStatus:e})=>{const{email:t}=z(),{inputEmail:n,errorInput:s,onChangeEmail:l}=he(se(t)&&t||""),[a,d]=g.useState(!1),r=()=>{d(!1)},o=h=>{var m;(m=h==null?void 0:h.preventDefault)==null||m.call(h),!(s||a||!n)&&d(!0)};C({method:u.EMAIL,onClick:o,flowStatus:e});const c=async h=>{const m=await E.oauthUi.loginEmail(h);console.debug("oauth resp login email",m)},p=async({email:h})=>E.oauthUi.sendVerifyCode({email:h,flow:v(window.location.search).flow+"",csrf:e.csrf});return i.jsxs(xe,{children:[i.jsx(ge,{hasError:!!s,isVerifiedEmail:!0,value:n,placement:b._({id:"hzKQCy"}),onChange:l,style:{width:340,height:36},onDismissVerifyModal:r,isShowVerify:a,sendCodeFn:p,verifyCodeFn:c,getErrorMsgFn:O}),i.jsx(T,{height:"36px",onClick:o,children:i.jsx(L,{id:"tqNP5x"})})]})},G=e=>{var t,n;return((n=(t=e==null?void 0:e.oauth_client)==null?void 0:t.metadata)==null?void 0:n.allowed_login_methods)??[]},Y=e=>{const t=e.includes(u.ETH),n=e.length;return t&&n===1||t&&n===2&&e.includes(u.ANONYMOUS)},Ee=e=>{const t=G(e);let n;if(t.length===1){if(t.includes(u.ANONYMOUS))throw new Error("Not found login method for this app");t.includes(u.GOOGLE)&&(n=u.GOOGLE)}Y(t)&&(n=u.ETH);const{type:s}=v(window.location.search);return!n&&ne(s+"",u)&&t.includes(s)&&(n=s),n},ye=({domain:e,uri:t,address:n,version:s,nonce:l,chainId:a,issuedAt:d,statement:r})=>{let o=[`${e} wants you to sign in with your Ethereum account:`,n].join(`
`);o=[o,r].join(`

`),r&&(o+=`
`);const c=[`URI: ${t}`,`Version: ${s}`,"Chain ID: "+a,`Nonce: ${l}`,`Issued At: ${d}`].join(`
`);return[o,c].join(`
`)},je=({messages:e})=>{const t=B();return e!=null&&e.length?i.jsx("div",{children:e.map((n,s)=>i.jsx(U,{as:"label",color:n.type==="warn"?t.warning:t.red,children:n.text},s))}):null},we=D.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 340px;
  max-width: 90vw;
`,k=()=>i.jsx("div",{style:{flex:1,borderTop:"1px solid #505050"}}),Le=()=>{const e=B();return i.jsxs(ie,{style:{width:"100%",alignItems:"center",gap:10,color:e.subText},children:[i.jsx(k,{})," or ",i.jsx(k,{})]})},Ie=({formConfig:e,signInWithEth:t,flowStatus:n,disableEth:s})=>{const{processingSignIn:l}=n,a=g.useMemo(()=>{const r=G(e),o=r.includes(u.ETH),c=r.includes(u.GOOGLE),p=r.includes(u.EMAIL),h=[];return o&&h.push(i.jsx(pe,{onClick:t,disabled:s,loading:l,flowStatus:n,primary:!p})),p&&h.push(i.jsx(me,{flowStatus:n})),c&&h.push(i.jsx(fe,{flowStatus:n,primary:!p&&!o})),h},[s,n,e,l,t]);if(!e)return null;const{ui:d}=e;return i.jsxs(we,{encType:"application/x-www-form-urlencoded",action:d.action,method:d.method,children:[i.jsx(je,{messages:d.messages}),a.map((r,o)=>i.jsxs(g.Fragment,{children:[r,o!==a.length-1&&i.jsx(Le,{})]},o))]})},O=e=>{var l,a,d,r,o,c;const t=(l=e==null?void 0:e.response)==null?void 0:l.data;if(((a=t==null?void 0:t.error)==null?void 0:a.id)==="self_service_flow_expired")return b._({id:"dM1Gv5"});const s=(r=(d=t==null?void 0:t.ui)==null?void 0:d.messages)==null?void 0:r[0];return(s==null?void 0:s.id)===4000001?b._({id:"XVbCyT"}):(s==null?void 0:s.text)||((o=t==null?void 0:t.error)==null?void 0:o.reason)||((c=t==null?void 0:t.error)==null?void 0:c.message)||(e==null?void 0:e.message)||e+""},W=e=>{var t,n,s,l;return((l=(s=(n=(t=e==null?void 0:e.ui)==null?void 0:t.nodes)==null?void 0:n.find(a=>a.attributes.name==="csrf_token"))==null?void 0:s.attributes)==null?void 0:l.value)??""};function Te(){var V,N;const{account:e,chainId:t}=_(),{library:n}=oe(),[s,l]=g.useState(),[a,d]=g.useState(""),[r,o]=g.useState({flowReady:!1,autoLoginMethod:void 0,processingSignIn:!1,csrf:""}),{wallet_address:c}=z(),p=G(s),h=e&&Y(p),m=h&&c&&(c==null?void 0:c.toLowerCase())!==(e==null?void 0:e.toLowerCase()),w=g.useRef(!1),$=g.useCallback(async()=>{var I,f;try{const x=(f=(I=s==null?void 0:s.oauth_client)==null?void 0:I.metadata)==null?void 0:f.siwe_config;if(m||!x||w.current||!n||!e||!t)return;o(M=>({...M,processingSignIn:!0}));const{challenge:y,issued_at:P}=s;w.current=!0;const q=ye({address:e,chainId:t,nonce:y,issuedAt:P,...x}),Q=await n.getSigner().signMessage(q);await E.oauthUi.loginEthereum({address:e,signature:re(Q),csrf:W(s),chainId:t})&&(w.current=!1,o(M=>({...M,processingSignIn:!1})))}catch(x){ae(x)||d(O(x)),console.error("signInWithEthereum err",x),w.current=!1,o(y=>({...y,processingSignIn:!1}))}},[e,n,s,t,m]);g.useEffect(()=>{(async()=>{try{E.initialize({mode:R});const f=await E.oauthUi.getFlowLogin();if(!f)return;l(f);const{client_id:x}=f.oauth_client;E.initialize({clientId:x,mode:R}),o(y=>({...y,flowReady:!0,autoLoginMethod:Ee(f),csrf:W(f)}))}catch(f){const{error_description:x}=v(window.location.search);d(x||O(f))}})()},[]),g.useEffect(()=>()=>ce(),[]);const A=((V=s==null?void 0:s.oauth_client)==null?void 0:V.client_name)||((N=s==null?void 0:s.oauth_client)==null?void 0:N.client_id),H=()=>m?i.jsxs(j,{children:["Your address is mismatched. The expected address is ",S(c),", but the address provided is ",S(e),". Please change your wallet address accordingly."]}):e&&i.jsxs(j,{children:["To get started, please sign-in to verify your ownership of this wallet address ",S(e)]});return i.jsx(le,{children:i.jsxs(de,{children:[i.jsx(ue,{}),a?i.jsx(j,{children:a}):r.autoLoginMethod===u.GOOGLE?i.jsxs(j,{style:{display:"flex",alignItems:"center",gap:"10px"},children:[i.jsx(K,{size:"20px"})," Checking data ..."]}):h?H():A&&i.jsxs(j,{children:["Please sign in to continue with ",A]}),i.jsx(Ie,{formConfig:s,flowStatus:r,signInWithEth:$,disableEth:!!m})]})})}export{Te as Login,Te as default,O as getIamErrorMsg};
