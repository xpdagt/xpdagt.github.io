import{s as o,a1 as O,r as y,j as e,g as S,d as n,dQ as $,bl as v,U as C,k as K,F as l,i8 as ae,T as s,u as U,ii as ne,x as A,M as I,I as ce,bp as z,X as pe,cE as he,d2 as ge,cF as je,dv as k,ar as ue,cQ as fe,aX as me,ij as f,ik as be,a as Se,dL as Te,il as ke,h_ as we,im as ye,b0 as We,b7 as D,aa as E,dP as Ee,B as ie,D as Ce,io as $e,b as F,aS as ve,fv as ze,bq as G,h$ as He,ip as De,C as m,$ as _e,iq as Q}from"./index-201afa5f.js";import{b as Ae}from"./about_background-625b4bf1.js";import{K as Ie}from"./kncLogo-8ccdd831.js";import{T as Ke}from"./TimerCountdown-bd6e0a2a.js";const Ne="/assets/kyberdao-1-351d6dfc.png",Re="/assets/kyberdao-2-4245c0c0.png",Le=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:i})=>i.text};
  max-width: calc(100% - 20px - 8px);
`;var te;(function(i){i[i.Q_Join=0]="Q_Join",i[i.Q_Chain=1]="Q_Chain",i[i.Q_When=2]="Q_When",i[i.Q_Deadline=3]="Q_Deadline",i[i.Q_Vote=4]="Q_Vote",i[i.Q_LimitOrder=5]="Q_LimitOrder",i[i.Q_Limit=6]="Q_Limit",i[i.Q_Term=7]="Q_Term",i[i.Q_Other=8]="Q_Other"})(te||(te={}));const T=({isExpanded:i,title:r,content:a,toggleExpand:x})=>{const h=K();return e.jsxs(e.Fragment,{children:[e.jsxs(l,{role:"button",onClick:()=>{x()},sx:{height:"56px",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},children:[e.jsx(Le,{children:r}),e.jsx(l,{role:"button",onClick:x,sx:{width:"20px",height:"20px",cursor:"pointer",transition:"all 150ms linear",transform:i?"rotate(180deg)":void 0},children:e.jsx(ae,{size:"20",color:h.text})})]}),i&&e.jsx(s,{fontSize:14,marginBottom:"16px",lineHeight:"20px",color:h.text,children:a})]})},Qe=o.div`
  padding: 16px 24px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: ${({theme:i})=>O(i.background,.8)};
  border-radius: 20px;
`,w=o.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid ${({theme:i})=>i.border};
  margin: 8px 0;
`,Me=()=>{const[i,r]=y.useState(),a=x=>{r(i===x?void 0:x)};return e.jsxs(Qe,{children:[e.jsx(T,{toggleExpand:()=>a(0),isExpanded:i===0,title:S._({id:"P8PcUw"}),content:e.jsx(n,{id:"eljfKp",components:{0:e.jsx($,{to:v.KYBERDAO_STAKE})}})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(1),isExpanded:i===1,title:S._({id:"PrRHPy"}),content:e.jsx(n,{id:"eYo44x"})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(2),isExpanded:i===2,title:S._({id:"87QeAM"}),content:e.jsx(n,{id:"kvn/fZ"})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(3),isExpanded:i===3,title:S._({id:"sNJxau"}),content:e.jsx(n,{id:"1+89DQ"})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(5),isExpanded:i===5,title:S._({id:"MPiQpM"}),content:e.jsx(n,{id:"ZmBkUL"})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(4),isExpanded:i===4,title:S._({id:"79zvTk"}),content:e.jsx(n,{id:"Pr6jNY",components:{0:e.jsx($,{to:v.KYBERDAO_VOTE}),1:e.jsx(C,{href:"https://docs.kyberswap.com/governance/kyberdao"})}})}),e.jsx(w,{}),e.jsx(T,{toggleExpand:()=>a(6),isExpanded:i===6,title:S._({id:"hNInR0"}),content:e.jsx(n,{id:"J8DE1+"})})]})},Be=Me;o.div`
  width: 100%;
  padding: 20px;
  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    padding: 16px 0;
  `}

  display: flex;
  flex-direction: column;
  background: ${({theme:i})=>O(i.buttonGray,.8)};
  border-radius: 20px;
`;const Pe=o.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,se=o.div`
  width: 100%;
  height: 46px;
  padding: 0 20px;
  background: unset;

  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  column-gap: 16px;
  border-top: 1px solid ${({theme:i})=>i.border};

  ${({theme:i})=>i.mediaWidth.upToMedium`
    grid-template-columns: 2fr 1fr 1fr 1fr;
    column-gap: 8px;
  `}

  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    grid-template-columns: 1fr 1fr;
  `}

  &[role="button"] {
    cursor: pointer;
  }
`,Fe=o(se)`
  border-top: none;
  background-color: ${({theme:i})=>i.background};
  border-radius: 8px 8px 0px 0px;
  color: ${({theme:i})=>i.subText};
`,Ge=o(se)``,oe=o.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: ${({textAlign:i})=>i||"left"};
`,b=o(oe)``;o(oe)`
  color: ${({theme:i})=>i.text};
`;const Oe=o.div`
  width: 100%;
  border-radius: 20px;
  padding: 24px 24px 30px;
  background-color: ${({theme:i})=>i.tableHeader};
  min-width: 550px;
  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    min-width: unset;
  `}
`,Ue=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  & > img,
  span {
    height: 16px;
    width: 16px;
  }
  ${({theme:i})=>i.mediaWidth.upToMedium`
    align-items: flex-end;
  `};
`,Xe=o.div`
  svg {
    display: block;
  }
  :hover {
    filter: brightness(0.8);
  }
`;function Ye({isOpen:i,closeModal:r}){var H;const{chainId:a,networkInfo:x}=U(),[h,u]=y.useState(1),d=ne(h,10),c=K(),g=A(`(max-width: ${I.upToExtraSmall}px)`);return e.jsx(ce,{isOpen:i,onDismiss:r,maxWidth:"800px",width:"70vw",children:e.jsx(Oe,{children:e.jsxs(l,{sx:{gap:"16px"},flexDirection:"column",children:[e.jsxs(l,{sx:{gap:"26px"},flexDirection:"column",children:[e.jsxs(z,{children:[e.jsx(s,{fontSize:20,fontWeight:500,lineHeight:"24px",children:e.jsx(n,{id:"cyx/NW"})}),e.jsx(Xe,{onClick:r,children:e.jsx(pe,{style:{cursor:"pointer"}})})]}),e.jsxs(Pe,{children:[e.jsxs(Fe,{children:[e.jsx(b,{children:e.jsx(n,{id:"IFhn8a"})}),g?null:e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(n,{id:"SFr5Hx"})}),e.jsx(b,{children:e.jsx(n,{id:"8k/jX7"})})]}),e.jsx(b,{textAlign:"right",children:e.jsx(n,{id:"WpaCeG"})})]}),(H=d==null?void 0:d.transactions)==null?void 0:H.map(p=>{const W=new Date(p.timestamp*1e3);return e.jsxs(Ge,{children:[e.jsx(b,{children:e.jsxs(l,{sx:{gap:"4px"},children:[e.jsx(Ue,{children:e.jsx("img",{src:x.icon})}),e.jsxs(s,{fontSize:14,fontWeight:400,lineHeight:"normal",alignSelf:"center",children:[p.tx.slice(0,6),"...",p.tx.slice(-4)]}),e.jsx(he,{toCopy:p.tx,margin:"unset",color:c.subText}),e.jsx(ge,{href:je(a,p.tx,"transaction"),color:c.subText})]})}),g?null:e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs(l,{flexDirection:"column",sx:{gap:"4px"},children:[e.jsx(s,{children:W.toLocaleDateString()}),e.jsx(s,{fontWeight:400,color:c.subText,children:W.toLocaleTimeString()})]})}),e.jsx(b,{children:e.jsxs(l,{flexDirection:"column",sx:{gap:"4px"},children:[e.jsxs(s,{children:[k(p.gasFeeInNativeToken)," ",ue[a].symbol]}),e.jsx(s,{fontWeight:400,color:c.subText,children:k(p.gasFeeInUSD,!0)})]})})]}),e.jsx(b,{textAlign:"right",children:e.jsxs(l,{flexDirection:"column",sx:{gap:"4px"},children:[e.jsxs(s,{children:[k(p.gasRefundInKNC)," KNC"]}),e.jsxs(s,{fontWeight:400,color:c.subText,children:[e.jsx(n,{id:"xN9AhL",values:{0:p.userTier}})," - ",Number(p.gasRefundPercentage)*100,"%"]})]})})]},p.tx)})]})]}),e.jsx(fe,{onPageChange:u,totalCount:((d==null?void 0:d.pagination.pageSize)??0)*((d==null?void 0:d.pagination.totalOfPages)??0),currentPage:(d==null?void 0:d.pagination.currentPage)??0,pageSize:(d==null?void 0:d.pagination.pageSize)??0,haveBg:!1,style:{padding:"0"}})]})})})}const qe=o.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: ${({theme:i})=>i.border};
  margin: 0;
`,Ze=o(l)`
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({theme:i})=>i.tableHeader};
  gap: 20px;
  flex-direction: column;
`,M=o(s)`
  ${({theme:i})=>i.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:i})=>i.subText};
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  ${({active:i,theme:r})=>i&&ve`
      border-radius: 12px;
      font-weight: 600;
      color: ${r.primary};
    `}

  :hover {
    color: ${({theme:i})=>ze(.1,i.primary)};
  }
`;function Je(){const{mixpanelHandler:i}=me(),{account:r,chainId:a}=U(),[x,h]=y.useState(f.Available),u=K(),{totalReward:d,reward:c,claimableReward:g}=be({rewardStatus:x}),H=Se(),[p,W]=y.useState(!1),N=ne(1,1),X=A(`(max-width: ${I.upToXXSmall}px)`),Y=A(`(max-width: ${I.upToExtraSmall}px)`),{userTier:q,gasRefundPercentage:Z}=Te(),{data:R}=ke(void 0),J=R==null?void 0:R.data.startTime,{switchToEthereum:de}=we(),V=ye(),[L,ee]=y.useState(!1),xe=y.useCallback(async()=>{try{ee(!0),i(We.GAS_REFUND_CLAIM_CLICK,{source:"KNC Utility page",token_amount:g==null?void 0:g.knc}),await V()}finally{ee(!1)}},[V,g==null?void 0:g.knc,i]);return e.jsxs(Ze,{children:[e.jsxs(l,{flexDirection:"column",sx:{gap:"16px"},children:[e.jsxs(z,{width:"100%",flexDirection:Y?"column":"row",align:Y?"start":"center",sx:{gap:"16px"},children:[e.jsxs(l,{children:[e.jsx(D,{children:e.jsx(E,{width:"fit-content",text:e.jsx(n,{id:"el6K1X"}),placement:"top",children:e.jsx(M,{active:x===f.Available,onClick:()=>h(f.Available),children:e.jsx(n,{id:"csDS2L"})})})}),e.jsx(s,{sx:{userSelect:"none"},children:" | "}),e.jsx(D,{children:e.jsx(E,{width:"fit-content",text:e.jsx(n,{id:"RUkJv0"}),placement:"top",children:e.jsx(M,{active:x===f.Pending,onClick:()=>h(f.Pending),children:e.jsx(n,{id:"UbRKMZ"})})})}),e.jsx(s,{sx:{userSelect:"none"},children:" | "}),e.jsx(D,{children:e.jsx(E,{width:"fit-content",text:e.jsx(n,{id:"MNskPa"}),placement:"top",children:e.jsx(M,{active:x===f.Claimed,onClick:()=>h(f.Claimed),children:e.jsx(n,{id:"hRWvpI"})})})})]}),!!q&&!!Z&&e.jsx(s,{fontSize:12,fontWeight:400,lineHeight:"16px",width:"fit-content",children:e.jsx(n,{id:"SmzQ6+",values:{userTier:q,0:Z*100}})})]}),e.jsxs(z,{width:"100%",flexDirection:"row",sx:{gap:"16px"},align:"end",children:[e.jsxs(l,{flexDirection:"column",sx:{gap:"8px"},children:[e.jsxs(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:u.text,alignItems:"center",children:[r?k((c==null?void 0:c.knc.toString())||"0"):"--"," KNC"]}),e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,color:u.subText,alignItems:"center",children:r?(c!=null&&c.usd?"~":"")+k((c==null?void 0:c.usd.toString())||"0",!0):"$ --"})]}),e.jsx(l,{width:"fit-content",children:x===f.Available?r?Ee(a)?e.jsx(ie,{padding:X?"8px 28px":"8px 45px",onClick:L?void 0:xe,disabled:L||((g==null?void 0:g.knc)??0)<=0,children:L?e.jsx(Ce,{children:e.jsx(n,{id:"KvG1xW"})}):e.jsx(n,{id:"hom7qf"})}):e.jsx(E,{text:e.jsx(n,{id:"u6RHCC",components:{0:e.jsx($e,{onClick:()=>de(t`Gas refund program`)})}}),width:"244px",children:e.jsx(ie,{padding:X?"8px 28px":"8px 45px",$disabled:!0,children:e.jsx(n,{id:"hom7qf"})})}):e.jsx(F,{onClick:H,padding:"10px 12px",children:e.jsx(n,{id:"iSLIjg"})}):x===f.Pending&&J?e.jsx(s,{fontSize:12,fontWeight:500,lineHeight:"16px",as:"span",children:e.jsx(n,{id:"v781fz",components:{0:e.jsx(Ke,{endTime:J,maxLength:2,sx:{display:"inline-flex !important"}})}})}):null})]})]}),e.jsx(qe,{}),e.jsxs(z,{flexDirection:"row",sx:{gap:"16px"},children:[e.jsxs(l,{flexDirection:"column",sx:{gap:"16px"},children:[e.jsx(D,{fontSize:14,lineHeight:"20px",fontWeight:500,color:u.subText,children:e.jsx(E,{width:"fit-content",text:e.jsx(n,{id:"+tp6W5"}),placement:"top",children:e.jsx(n,{id:"kmKgqc"})})}),e.jsxs(l,{flexDirection:"column",sx:{gap:"8px"},children:[e.jsxs(s,{fontSize:20,lineHeight:"24px",fontWeight:500,color:u.text,alignItems:"center",children:[r?k((d==null?void 0:d.knc.toString())??"0"):"--"," KNC"]}),e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,color:u.subText,alignItems:"center",children:r?(d!=null&&d.usd?"~":"")+k((d==null?void 0:d.usd.toString())??"0",!0):"$ --"})]})]}),e.jsx(l,{alignSelf:"end",children:!!r&&!!(N!=null&&N.transactions.length)&&e.jsx(F,{padding:"2px 12px",onClick:()=>W(le=>!le),style:{whiteSpace:"nowrap"},width:"max-content",children:e.jsx(s,{fontSize:12,fontWeight:500,lineHeight:"16px",children:e.jsx(n,{id:"IqzHJK"})})})})]}),e.jsx(Ye,{isOpen:p,closeModal:()=>W(!1)})]})}o.div`
  width: 100%;
  padding: 20px;
  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    padding: 16px 0;
  `}

  display: flex;
  flex-direction: column;
  background: ${({theme:i})=>O(i.buttonGray,.8)};
  border-radius: 20px;
`;const Ve=o.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,re=o.div`
  width: 100%;
  height: 36px;
  padding: 0 20px;
  background: unset;

  display: grid;
  align-items: center;
  grid-template-columns: 48px 1fr 96px 24px;
  column-gap: 16px;
  border-top: 1px solid ${({theme:i})=>i.border};

  ${({theme:i})=>i.mediaWidth.upToExtraSmall`
    column-gap: 8px;
  `}

  &[role="button"] {
    cursor: pointer;
  }
`,ei=o(re)`
  border-top: none;
  background: linear-gradient(
    0deg,
    ${({theme:i})=>G(.5,i.primary)} 0%,
    ${({theme:i})=>G(.8,i.primary)} 100%
  );
`,B=o(re)``,j=o.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  color: ${({theme:i})=>i.text};
  text-align: ${({textAlign:i})=>i||"left"};
`,ii=o.div`
  width: 100%;
  background-image: url(${Ae});
  background-size: 100% auto;
  background-repeat: repeat-y;
  z-index: 1;
  background-color: transparent;
  background-position: top;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px 48px;
  ${({theme:i})=>i.mediaWidth.upToMedium`
    padding: 16px;
  `}
`,ti=o.div`
  max-width: 1224px;
`,_=o.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding: 24px 0;
  align-items: flex-start;

  ${({theme:i})=>i.mediaWidth.upToMedium`
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  `}

  & > * {
    flex: 1 1 0px;
    max-width: 588px;
    ${({theme:i})=>i.mediaWidth.upToMedium`
      max-width: 700px;
    `}
    width: 100%;
  }
`,P=o.li`
  ::marker {
    color: ${({theme:i})=>i.subText};
  }
`,ni=o.div`
  padding: 2px 12px;
  width: fit-content;
  border-radius: 12px;
  background: ${({theme:i})=>G(.8,i.red)};
  color: ${({theme:i})=>i.red};
  font-size: 12px;
  font-weight: 500;
`,si=o.div`
  background-color: ${({theme:i})=>i.background};
  border-radius: 20px;
  padding: 16px;
  width: 100%;
`,oi=o(si)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({theme:i})=>i.primary};
`;function ai(){const{account:i}=U(),r=K(),{stakedBalance:a}=He(),x=A(`(max-width: ${I.upToMedium}px)`),{data:h}=De(),u=(h==null?void 0:h.data.status)==="finished";return e.jsx(ii,{children:e.jsxs(ti,{children:[e.jsxs(_,{children:[e.jsxs(m,{gap:"24px",children:[e.jsx(s,{fontSize:24,fontWeight:500,id:"knc-utility",children:e.jsx(n,{id:"ohkZl+"})}),e.jsxs(m,{gap:"16px",children:[e.jsxs(oi,{children:[e.jsx(s,{fontSize:14,lineHeight:"20px",color:r.subText,children:e.jsx(n,{id:"EII+9s"})}),e.jsxs(s,{fontSize:16,lineHeight:"20px",color:r.text,display:"flex",alignItems:"center",style:{gap:"8px"},fontWeight:500,children:[e.jsx(Ie,{size:20})," ",i?_e.formatUnits(a):"--"," KNC"]})]}),e.jsx(l,{alignSelf:"flex-end",children:e.jsx($,{to:v.KYBERDAO_STAKE,children:e.jsx(F,{padding:"2px 12px",children:e.jsx(s,{fontSize:12,lineHeight:"16px",fontWeight:500,children:e.jsx(n,{id:"ZNpsCv"})})})})}),e.jsx(s,{as:"span",fontSize:16,fontWeight:500,color:r.subText,lineHeight:"24px",children:e.jsx(n,{id:"VKd1dw",components:{0:e.jsx($,{to:`${v.ABOUT}/knc`}),1:e.jsx($,{to:v.KYBERDAO_VOTE})}})})]})]}),e.jsx(l,{flexDirection:"column",alignItems:"center",children:e.jsx("img",{src:Ne,width:"100%",style:{maxHeight:"372px"}})})]}),e.jsxs(_,{style:{paddingBottom:x?"0":void 0},children:[e.jsxs(z,{flexDirection:"row",gap:"16px",children:[e.jsx(s,{fontSize:x?20:24,fontWeight:500,id:"gas-refund-program",alignSelf:"start",children:e.jsx(n,{id:"voyjfp"})}),u&&e.jsx(ni,{children:e.jsx(s,{children:e.jsx(n,{id:"237hSL"})})})]}),x||e.jsx("div",{})]}),e.jsxs(_,{style:{padding:x?"16px 0 12px":void 0},children:[e.jsxs(m,{children:[e.jsx(Je,{}),e.jsx("img",{src:Re,alt:"Kyber DAO",width:"100%",style:{maxHeight:"491px",marginTop:"-30px"}})]}),e.jsxs(m,{gap:"16px",children:[e.jsx(s,{fontSize:20,fontWeight:400,lineHeight:"32px",color:r.text,id:"how-to-participate",children:e.jsx(n,{id:"ZZ+Dqx"})}),e.jsx(s,{fontSize:16,fontWeight:400,lineHeight:"24px",color:r.subText,children:e.jsx(n,{id:"gNEweH"})}),e.jsx(s,{fontSize:16,fontWeight:400,lineHeight:"24px",color:r.text,fontStyle:"italic",children:e.jsx(n,{id:"H7+Tdj",components:{0:e.jsx("br",{})}})}),e.jsxs("ul",{style:{listStylePosition:"outside",paddingInlineStart:"30px",display:"flex",gap:"16px",flexDirection:"column",margin:0},children:[e.jsx(P,{children:e.jsx(s,{fontSize:16,fontWeight:400,lineHeight:"24px",color:r.subText,as:"span",children:e.jsx(n,{id:"qUOkIp"})})}),e.jsx(P,{children:e.jsx(s,{fontSize:16,fontWeight:400,lineHeight:"24px",color:r.subText,as:"span",children:e.jsx(n,{id:"Uz0tLd"})})}),e.jsx(P,{children:e.jsx(s,{fontSize:16,fontWeight:400,lineHeight:"24px",color:r.subText,as:"span",children:e.jsx(n,{id:"ZPIFrU",components:{0:e.jsx(C,{href:"https://docs.kyberswap.com/governance/knc-token/gas-refund-program"})}})})})]}),e.jsxs(Ve,{children:[e.jsxs(ei,{children:[e.jsx(j,{children:e.jsx(n,{id:"nNGGkA"})}),e.jsx(j,{textAlign:"center",children:e.jsx(n,{id:"8onCb3"})}),e.jsx(j,{textAlign:"center",children:e.jsx(n,{id:"Lh/IPw"})})]}),e.jsxs(B,{children:[e.jsx(j,{children:"Tier 1"}),e.jsx(j,{textAlign:"center",children:"500 KNC"}),e.jsx(j,{textAlign:"center",children:"10%"})]}),e.jsxs(B,{children:[e.jsx(j,{children:"Tier 2"}),e.jsx(j,{textAlign:"center",children:"5,000 KNC"}),e.jsx(j,{textAlign:"center",children:"15%"})]}),e.jsxs(B,{children:[e.jsx(j,{children:"Tier 3"}),e.jsx(j,{textAlign:"center",children:"10,000 KNC"}),e.jsx(j,{textAlign:"center",children:"20%"})]})]})]})]}),e.jsxs(_,{children:[e.jsxs(m,{gap:"16px",width:"100%",children:[e.jsx(s,{fontSize:20,lineHeight:"32px",fontWeight:400,id:"faq",children:e.jsx(n,{id:"/lDBHm"})}),e.jsx(m,{gap:"56px",children:e.jsx(Be,{})})]}),e.jsxs(m,{gap:"16px",width:"100%",children:[e.jsx(s,{fontSize:20,lineHeight:"32px",fontWeight:400,id:"tac",children:e.jsx(n,{id:"mvP/25"})}),e.jsx(m,{gap:"56px",children:e.jsxs("ul",{style:{paddingInlineStart:"20px",marginBlockStart:0},children:[e.jsx("li",{children:e.jsx(s,{fontSize:14,fontWeight:400,lineHeight:"20px",children:e.jsx(n,{id:"i6dZgz",components:{0:e.jsx(C,{href:Q.KYBERSWAP_TERMS})}})})}),e.jsx("br",{}),e.jsx("li",{children:e.jsx(s,{fontSize:14,fontWeight:400,lineHeight:"20px",children:e.jsx(n,{id:"4KRE5J",components:{0:e.jsx(C,{href:Q.KYBERSWAP_TERMS})}})})}),e.jsx("br",{}),e.jsx("li",{children:e.jsx(s,{fontSize:14,fontWeight:400,lineHeight:"20px",children:e.jsx(n,{id:"X29Vy9"})})}),e.jsx("br",{}),e.jsx("li",{children:e.jsx(s,{fontSize:14,fontWeight:400,lineHeight:"20px",children:e.jsx(n,{id:"VjX1Ih",components:{0:e.jsx(C,{href:Q.KYBERSWAP_TERMS})}})})}),e.jsx("br",{}),e.jsx("li",{children:e.jsx(s,{fontSize:14,fontWeight:400,lineHeight:"20px",children:e.jsx(n,{id:"OzL4Tn"})})})]})})]})]})]})})}export{ai as default};
