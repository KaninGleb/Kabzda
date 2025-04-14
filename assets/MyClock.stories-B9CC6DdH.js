import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as u}from"./index-D4H_InIO.js";const T="_container_19axo_1",b="_currTime_19axo_9",w="_buttons_19axo_19",_={container:T,currTime:b,buttons:w},z="_clock_2klez_1",A="_hand_2klez_27",H="_hour_2klez_45",q="_minute_2klez_55",F="_second_2klez_65",O="_center_2klez_77",o={clock:z,hand:A,hour:H,minute:q,second:F,center:O},R="_clock_1kk4p_1",E={clock:R},a=s=>s<10?"0"+s:s,p=({mode:s})=>{const[n,h]=u.useState(new Date);u.useEffect(()=>{const y=setInterval(()=>{h(new Date)},1e3);return()=>clearInterval(y)},[]);const m=n.getHours(),c=n.getMinutes(),t=n.getSeconds(),g=m/12*360+c/60*30+90,k=c/60*360+t/60*6+90,x=t/60*360+90;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:_.currTime,children:["Current time: ",e.jsx("span",{children:a(n.getHours())}),":",e.jsx("span",{children:a(n.getMinutes())}),":",e.jsx("span",{children:a(n.getSeconds())})]}),s==="analog"?e.jsxs("div",{className:o.clock,children:[e.jsx("div",{className:`${o.hand} ${o.hour}`,style:{transform:`rotate(${g}deg)`}}),e.jsx("div",{className:`${o.hand} ${o.minute}`,style:{transform:`rotate(${k}deg)`}}),e.jsx("div",{className:`${o.hand} ${o.second}`,style:{transform:`rotate(${x}deg)`}}),e.jsx("div",{className:o.center})]}):e.jsx("div",{className:E.clock,children:e.jsxs("span",{children:[a(m),":",a(c),":",a(t)]})})]})};p.__docgenInfo={description:"",methods:[],displayName:"MyClock",props:{mode:{required:!0,tsType:{name:"union",raw:"'analog' | 'digital'",elements:[{name:"literal",value:"'analog'"},{name:"literal",value:"'digital'"}]},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"MyClock",props:{mode:{required:!0,tsType:{name:"union",raw:"'analog' | 'digital'",elements:[{name:"literal",value:"'analog'"},{name:"literal",value:"'digital'"}]},description:""}}};const r=s=>s<10?"0"+s:s,M=()=>{const[s,n]=u.useState(new Date),[h,m]=u.useState("analog");u.useEffect(()=>{const U=setInterval(()=>{n(new Date)},1e3);return()=>clearInterval(U)},[]);const c=s.getHours(),t=s.getMinutes(),g=s.getSeconds(),k=c/12*360+t/60*30+90,x=t/60*360+g/60*6+90,y=g/60*360+90;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:_.container,children:[e.jsxs("div",{className:_.currTime,children:["Current time: ",e.jsx("span",{children:r(s.getHours())}),":",e.jsx("span",{children:r(s.getMinutes())}),":",e.jsx("span",{children:r(s.getSeconds())})]}),h==="analog"?e.jsxs("div",{className:o.clock,children:[e.jsx("div",{className:`${o.hand} ${o.hour}`,style:{transform:`rotate(${k}deg)`}}),e.jsx("div",{className:`${o.hand} ${o.minute}`,style:{transform:`rotate(${x}deg)`}}),e.jsx("div",{className:`${o.hand} ${o.second}`,style:{transform:`rotate(${y}deg)`}}),e.jsx("div",{className:o.center})]}):e.jsx("div",{className:E.clock,children:e.jsxs("span",{children:[r(c),":",r(t),":",r(g)]})})]}),e.jsxs("div",{className:_.buttons,children:[e.jsx("button",{onClick:()=>m("analog"),children:"Analog Mode"}),e.jsx("button",{onClick:()=>m("digital"),children:"Digital Mode"})]})]})};M.__docgenInfo={description:"",methods:[],displayName:"UncontrolledMyClock"};M.__docgenInfo={description:"",methods:[],displayName:"UncontrolledMyClock"};const J={title:"Clock",component:p},l=()=>e.jsx(p,{mode:"analog"}),d=()=>e.jsx(p,{mode:"digital"}),i=()=>e.jsx(M,{});l.__docgenInfo={description:"",methods:[],displayName:"AnalogModeMyClock"};d.__docgenInfo={description:"",methods:[],displayName:"DigitalModeMyClock"};i.__docgenInfo={description:"",methods:[],displayName:"UncontrolledMyClockExample"};l.__docgenInfo={description:"",methods:[],displayName:"AnalogModeMyClock"};d.__docgenInfo={description:"",methods:[],displayName:"DigitalModeMyClock"};i.__docgenInfo={description:"",methods:[],displayName:"UncontrolledMyClockExample"};var j,C,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <MyClock mode={'analog'} />;
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var N,f,$;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <MyClock mode={'digital'} />;
}`,...($=(f=d.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var D,I,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <UncontrolledMyClock />;
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const K=["AnalogModeMyClock","DigitalModeMyClock","UncontrolledMyClockExample"];export{l as AnalogModeMyClock,d as DigitalModeMyClock,i as UncontrolledMyClockExample,K as __namedExportsOrder,J as default};
