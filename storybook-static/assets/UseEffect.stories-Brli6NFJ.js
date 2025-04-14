import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as e}from"./index-D4H_InIO.js";const _={title:"useEffect demo"},c=()=>{const[s,r]=e.useState(1),[n,o]=e.useState(1);return console.log("SimpleExample"),e.useEffect(()=>{console.log("1. useEffect every render")}),e.useEffect(()=>{console.log("2. useEffect only first render (componentDidMount)")},[]),e.useEffect(()=>{console.log("3. useEffect first render and every counter changing")},[n]),t.jsxs(t.Fragment,{children:[t.jsx("div",{id:"title"}),"Hello, ",s," ",n,t.jsx("button",{onClick:()=>r(s+1),children:"fake +"}),t.jsx("button",{onClick:()=>o(n+1),children:"counter +"})]})},a=()=>{const[s]=e.useState(1),[r,n]=e.useState(1);return console.log("SetTimeoutExample"),e.useEffect(()=>{setInterval(()=>{console.log("tick: "+r),n(o=>o+1)},1e3)},[]),t.jsxs(t.Fragment,{children:["Hello, counter: ",r," - fake: ",s]})},l=()=>{const[s,r]=e.useState("");return e.useEffect(()=>{const n=setInterval(()=>{const o=new Date().getHours(),u=new Date().getMinutes(),m=new Date().getSeconds();console.log(`${o}:${u}:${m}`),r([o,u,m].join(":"))},1e3);return()=>clearInterval(n)},[]),t.jsxs(t.Fragment,{children:["Time: ",s]})},i=()=>{const[s,r]=e.useState("");return e.useEffect(()=>{const n=setInterval(()=>{const o=new Date().toTimeString().slice(0,8);console.log(o),r(o)},1e3);return()=>clearInterval(n)},[]),t.jsxs(t.Fragment,{children:["Time: ",s]})};c.__docgenInfo={description:"",methods:[],displayName:"SimpleExample"};a.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExample"};l.__docgenInfo={description:"",methods:[],displayName:"UseEffectClocks"};i.__docgenInfo={description:"",methods:[],displayName:"UseEffectMyClocks"};c.__docgenInfo={description:"",methods:[],displayName:"SimpleExample"};a.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExample"};l.__docgenInfo={description:"",methods:[],displayName:"UseEffectClocks"};i.__docgenInfo={description:"",methods:[],displayName:"UseEffectMyClocks"};var f,d,p;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log('SimpleExample');

  // useEffect(() => {
  //   console.log('useEffect');
  //
  //   const title = document.getElementById('title');
  //   if (title) title.textContent = counter.toString();
  //
  // }, [counter]);

  useEffect(() => {
    console.log('1. useEffect every render');
  });
  useEffect(() => {
    console.log('2. useEffect only first render (componentDidMount)');
  }, []);
  useEffect(() => {
    console.log('3. useEffect first render and every counter changing');
  }, [counter]);
  return <>\r
      <div id={'title'}></div>\r
      Hello, {fake} {counter}\r
      <button onClick={() => setFake(fake + 1)}>fake +</button>\r
      <button onClick={() => setCounter(counter + 1)}>counter +</button>\r
    </>;
}`,...(p=(d=c.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,E,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [fake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log('SetTimeoutExample');
  useEffect(() => {
    setInterval(() => {
      console.log('tick: ' + counter);
      setCounter(state => state + 1);
    }, 1000);
  }, []);
  return <>\r
      Hello, counter: {counter} - fake: {fake}\r
    </>;
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var k,x,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      console.log(\`\${hours}:\${minutes}:\${seconds}\`);
      setTime([hours, minutes, seconds].join(':'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <>\r
      Time: {time}\r
    </>;
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var v,T,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const getTime = new Date().toTimeString().slice(0, 8);
      console.log(getTime);
      setTime(getTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <>\r
      Time: {time}\r
    </>;
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const j=["SimpleExample","SetTimeoutExample","UseEffectClocks","UseEffectMyClocks"];export{a as SetTimeoutExample,c as SimpleExample,l as UseEffectClocks,i as UseEffectMyClocks,j as __namedExportsOrder,_ as default};
