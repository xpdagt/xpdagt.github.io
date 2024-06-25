import{k as g,aX as $,ex as T,r as c,az as j,bl as N,ey as w,j as e,cC as B,ez as M,d as x,s as l,B as P,T as R,aS as v}from"./index-201afa5f.js";const u=s=>v`
  width: 36px;
  min-width: 36px;
  padding: 6px;
  background: ${s};
  &:hover {
    background: ${s};
  }
`,y=l(P)`
  overflow: hidden;
  width: fit-content;
  height: 32px;
  padding: 8px 12px;
  background: ${({bgColor:s})=>s};
  color: ${({theme:s,isDisabled:t})=>t?s.border:s.textReverse};
  &:hover {
    background: ${({bgColor:s})=>s};
  }
  ${({iconOnly:s,bgColor:t})=>s&&u(t)};
  ${({theme:s,bgColor:t,iconOnly:a})=>a!==!1&&s.mediaWidth.upToExtraSmall`
   ${u(t)}
  `}
`,A=l(R)`
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px !important;
  ${({iconOnly:s})=>s&&"display: none"};
  ${({theme:s,iconOnly:t})=>t!==!1&&s.mediaWidth.upToExtraSmall`
    display: none;
  `}
`;function z({subscribeTooltip:s,iconOnly:t,trackingEvent:a,onClick:o,topicId:i,style:p}){const m=g(),{mixpanelHandler:h}=$(),{topicGroups:n}=T(),b=c.useMemo(()=>i?n.some(E=>E.topics.some(d=>d.isSubscribed&&String(d.id)===String(i))):!1,[n,i]),r=j(),S=c.useCallback(()=>{r(`${N.PROFILE_MANAGE}${w.PREFERENCE}`)},[r]),f=()=>{S(),o==null||o(),a&&setTimeout(()=>{h(a)},100)};return e.jsx(B,{text:s,width:"400px",children:e.jsxs(y,{bgColor:m.primary,onClick:f,iconOnly:t,style:p,children:[e.jsx(M,{size:16}),e.jsx(A,{iconOnly:t,children:b?e.jsx(x,{id:"SMaFdc"}):e.jsx(x,{id:"EDl9kS"})})]})})}export{z as S};
