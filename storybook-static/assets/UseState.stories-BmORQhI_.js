import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as m}from"./index-D4H_InIO.js";const p={title:"useState demo"};function u(){return console.log("generateData"),3284982732}const e=()=>{console.log("Example1");const[s,a]=m.useState(u);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>a(c=>c+1),children:"+"}),s]})};e.__docgenInfo={description:"",methods:[],displayName:"Example1"};e.__docgenInfo={description:"",methods:[],displayName:"Example1"};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  console.log('Example1');

  // const initValue = useMemo(generateData, []);

  const [counter, setCounter] = useState(generateData);
  return <>\r
    <button onClick={() => setCounter(state => state + 1)}>+</button>\r
    {counter}\r
  </>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const d=["Example1"];export{e as Example1,d as __namedExportsOrder,p as default};
