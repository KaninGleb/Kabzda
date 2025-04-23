import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as s}from"./index-D4H_InIO.js";const x={title:"useEffect - return homework"},t=()=>{const[c,u]=s.useState(0);return console.log("SetTimeoutExample rendered"),s.useEffect(()=>{const e=document.getElementById("b1"),r=()=>u(d=>d+1);e==null||e.addEventListener("click",r),console.log("Effect occurred")},[c]),o.jsxs(o.Fragment,{children:["Count - ",c," ",o.jsx("button",{id:"b1",children:"+"})]})},n=()=>{const[c,u]=s.useState(0);return console.log("SetTimeoutExample rendered"),s.useEffect(()=>{const e=document.getElementById("b1"),r=()=>u(d=>d+1);return e==null||e.addEventListener("click",r),console.log("Effect occurred"),()=>{e==null||e.removeEventListener("click",r),console.log("Cleanup occurred")}},[]),o.jsxs(o.Fragment,{children:["Count - ",c," ",o.jsx("button",{id:"b1",children:"+"})]})};t.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExampleHW1RendersMistake"};n.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExampleHW1"};t.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExampleHW1RendersMistake"};n.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExampleHW1"};var l,a,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  console.log('SetTimeoutExample rendered');
  useEffect(() => {
    const button = document.getElementById('b1');
    const handleClick = () => setCount(count => count + 1);
    button?.addEventListener('click', handleClick);
    console.log('Effect occurred');
  }, [count]);
  return <>\r
      Count - {count} <button id={'b1'}>+</button>\r
    </>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var m,p,E;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  console.log('SetTimeoutExample rendered');
  useEffect(() => {
    const button = document.getElementById('b1');
    const handleClick = () => setCount(prevState => prevState + 1);
    button?.addEventListener('click', handleClick);
    console.log('Effect occurred');
    return () => {
      button?.removeEventListener('click', handleClick);
      console.log('Cleanup occurred');
    };
  }, []);
  return <>\r
      Count - {count} <button id={'b1'}>+</button>\r
    </>;
}`,...(E=(p=n.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};const S=["SetTimeoutExampleHW1RendersMistake","SetTimeoutExampleHW1"];export{n as SetTimeoutExampleHW1,t as SetTimeoutExampleHW1RendersMistake,S as __namedExportsOrder,x as default};
