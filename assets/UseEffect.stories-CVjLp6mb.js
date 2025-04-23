import{j as t}from"./jsx-runtime-BO8uF4Og.js";import{r as n}from"./index-D4H_InIO.js";const q={title:"useEffect demo"},c=()=>{const[e,s]=n.useState(1),[o,r]=n.useState(1);return console.log("SimpleExample"),n.useEffect(()=>{console.log("1. useEffect every render")}),n.useEffect(()=>{console.log("2. useEffect only first render (componentDidMount)")},[]),n.useEffect(()=>{console.log("3. useEffect first render and every counter changing")},[o]),t.jsxs(t.Fragment,{children:[t.jsx("div",{id:"title"}),"Hello, ",e," ",o,t.jsx("button",{onClick:()=>s(e+1),children:"fake +"}),t.jsx("button",{onClick:()=>r(o+1),children:"counter +"})]})},a=()=>{const[e]=n.useState(1),[s,o]=n.useState(1);return console.log("SetTimeoutExample"),n.useEffect(()=>{setInterval(()=>{console.log("tick: "+s),o(r=>r+1)},1e3)},[]),t.jsxs(t.Fragment,{children:["Hello, counter: ",s," - fake: ",e]})},l=()=>{const[e,s]=n.useState(1);return console.log("SetTimeoutExample"),n.useEffect(()=>{const o=setInterval(()=>{console.log("tick: "+e),s(r=>r+1)},1e3);return()=>clearInterval(o)},[]),t.jsxs(t.Fragment,{children:["Hello, counter: ",e]})},i=()=>{const[e,s]=n.useState("");return n.useEffect(()=>{const o=setInterval(()=>{const r=new Date().getHours(),p=new Date().getMinutes(),g=new Date().getSeconds();console.log(`${r}:${p}:${g}`),s([r,p,g].join(":"))},1e3);return()=>clearInterval(o)},[]),t.jsxs(t.Fragment,{children:["Time: ",e]})},u=()=>{const[e,s]=n.useState("");return n.useEffect(()=>{const o=setInterval(()=>{const r=new Date().toTimeString().slice(0,8);console.log(r),s(r)},1e3);return()=>clearInterval(o)},[]),t.jsxs(t.Fragment,{children:["Time: ",e]})},m=()=>{const[e,s]=n.useState(1);console.log("Component rendered"),n.useEffect(()=>(console.log("Effect occurred"),()=>{console.log("Reset effect")}),[e]);const o=()=>s(e+1);return t.jsxs(t.Fragment,{children:["Hello, counter: ",e," ",t.jsx("button",{onClick:o,children:"+"})]})},d=()=>{const[e,s]=n.useState("");return console.log("Component rendered with:"+e),n.useEffect(()=>{const o=r=>{console.log(r.key),s(e+r.key)};return window.document.addEventListener("keypress",o),()=>{window.document.removeEventListener("keypress",o)}},[e]),t.jsxs(t.Fragment,{children:["Typed text: ",e]})},f=()=>{const[e,s]=n.useState("");return console.log("Component rendered with: "+e),n.useEffect(()=>{const o=setTimeout(()=>{s("3 seconds passed")},3e3);return()=>clearTimeout(o)},[e]),t.jsxs(t.Fragment,{children:["Text: ",e]})};c.__docgenInfo={description:"",methods:[],displayName:"SimpleExample"};a.__docgenInfo={description:"",methods:[],displayName:"SetIntervalMistakeExample"};l.__docgenInfo={description:"",methods:[],displayName:"SetIntervalExample"};i.__docgenInfo={description:"",methods:[],displayName:"UseEffectClocks"};u.__docgenInfo={description:"",methods:[],displayName:"UseEffectMyClocks"};m.__docgenInfo={description:"",methods:[],displayName:"ResetEffectExample"};d.__docgenInfo={description:"",methods:[],displayName:"KeysTrackerExample"};f.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExample"};c.__docgenInfo={description:"",methods:[],displayName:"SimpleExample"};a.__docgenInfo={description:"",methods:[],displayName:"SetIntervalMistakeExample"};l.__docgenInfo={description:"",methods:[],displayName:"SetIntervalExample"};i.__docgenInfo={description:"",methods:[],displayName:"UseEffectClocks"};u.__docgenInfo={description:"",methods:[],displayName:"UseEffectMyClocks"};m.__docgenInfo={description:"",methods:[],displayName:"ResetEffectExample"};d.__docgenInfo={description:"",methods:[],displayName:"KeysTrackerExample"};f.__docgenInfo={description:"",methods:[],displayName:"SetTimeoutExample"};var E,x,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,k,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,T,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [counter, setCounter] = useState(1);
  console.log('SetTimeoutExample');
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('tick: ' + counter);
      setCounter(state => state + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  return <>\r
      Hello, counter: {counter}\r
    </>;
}`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var _,C,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var j,D,N;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,F,b;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [counter, setCounter] = useState(1);
  console.log('Component rendered');
  useEffect(() => {
    console.log('Effect occurred');
    return () => {
      console.log('Reset effect');
    };
  }, [counter]);
  const increase = () => setCounter(counter + 1);
  return <>\r
      Hello, counter: {counter} <button onClick={increase}>+</button>\r
    </>;
}`,...(b=(F=m.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var H,U,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [text, setText] = useState('');
  console.log('Component rendered with:' + text);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      setText(text + e.key);
    };
    window.document.addEventListener('keypress', handler);
    return () => {
      window.document.removeEventListener('keypress', handler);
    };
  }, [text]);
  return <>\r
      Typed text: {text}\r
    </>;
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var $,K,L;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [text, setText] = useState('');
  console.log('Component rendered with: ' + text);
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setText('3 seconds passed');
    }, 3000);
    return () => clearTimeout(timeoutID);
  }, [text]);
  return <>\r
      Text: {text}\r
    </>;
}`,...(L=(K=f.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const z=["SimpleExample","SetIntervalMistakeExample","SetIntervalExample","UseEffectClocks","UseEffectMyClocks","ResetEffectExample","KeysTrackerExample","SetTimeoutExample"];export{d as KeysTrackerExample,m as ResetEffectExample,l as SetIntervalExample,a as SetIntervalMistakeExample,f as SetTimeoutExample,c as SimpleExample,i as UseEffectClocks,u as UseEffectMyClocks,z as __namedExportsOrder,q as default};
