import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as n,R as B}from"./index-D4H_InIO.js";const T={title:"useMemo"},A=t=>(console.log("UsersSecret"),e.jsx("div",{children:t.users.map((a,o)=>e.jsx("div",{children:a},o))})),w=B.memo(A),u=()=>{console.log("HelpsToReactMemoExample");const[t,a]=n.useState(0),[o,c]=n.useState(["Dimych","Valera","Artem","Katya"]),l=n.useMemo(()=>o.filter(s=>s.toLowerCase().indexOf("a")>-1),[o]),r=()=>{const s=[...o,"Sveta "+new Date().toTimeString().slice(0,8)];c(s)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a(t+1),children:"+"}),e.jsx("button",{onClick:r,children:"Add user"}),t,e.jsx(w,{users:l})]})},i=()=>{const[t,a]=n.useState(3),[o,c]=n.useState(3);let l=1,r=1;l=n.useMemo(()=>{let s=1;for(let m=1;m<=t;m++)s*=m;return s},[t]);for(let s=1;s<=o;s++)r*=s;return e.jsxs(e.Fragment,{children:[e.jsx("input",{value:t,onChange:s=>a(+s.currentTarget.value)}),e.jsx("input",{value:o,onChange:s=>c(+s.currentTarget.value)}),e.jsx("hr",{}),e.jsxs("div",{children:["Result for a: ",l]}),e.jsxs("div",{children:["Result for b: ",r]})]})},d=()=>{console.log("LikeUseCallback");const[t,a]=n.useState(0),[o,c]=n.useState(["React","JS","CSS","HTML"]);n.useMemo(()=>()=>{console.log(o);const r=[...o,"Angular "+new Date().toTimeString().slice(0,8)];c(r)},[o]);const l=n.useCallback(()=>{console.log(o);const r=[...o,"Angular "+new Date().toTimeString().slice(0,8)];c(r)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a(t+1),children:"+"}),t,e.jsx(j,{addBook:l})]})},U=t=>(console.log("BooksSecret"),e.jsx("div",{children:e.jsx("button",{onClick:t.addBook,children:"Add book"})})),j=B.memo(U);u.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoExample"};i.__docgenInfo={description:"",methods:[],displayName:"DifficultCountingExample"};d.__docgenInfo={description:"",methods:[],displayName:"LikeUseCallback"};u.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoExample"};i.__docgenInfo={description:"",methods:[],displayName:"DifficultCountingExample"};d.__docgenInfo={description:"",methods:[],displayName:"LikeUseCallback"};var p,k,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  console.log('HelpsToReactMemoExample');
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya']);
  const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users]);
  const addUser = () => {
    const newUsers = [...users, 'Sveta ' + new Date().toTimeString().slice(0, 8)];
    setUsers(newUsers);
  };
  return <>\r
        <button onClick={() => setCounter(counter + 1)}>+</button>\r
        <button onClick={addUser}>Add user</button>\r
        {counter}\r
        <Users users={newArray} />\r
    </>;
}`,...(g=(k=u.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var b,x,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [a, setA] = useState<number>(3);
  const [b, setB] = useState<number>(3);
  let resultA = 1;
  let resultB = 1;
  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        Math.random();
      }
      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);
  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }
  return <>\r
        <input value={a} onChange={e => setA(+e.currentTarget.value)} />\r
        <input value={b} onChange={e => setB(+e.currentTarget.value)} />\r
        <hr />\r
        <div>\r
            Result for a: {resultA}\r
        </div>\r
        <div>\r
            Result for b: {resultB}\r
        </div>\r
    </>;
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,f,h;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  console.log('LikeUseCallback');
  const [counter, setCounter] = useState<number>(0);
  const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);
  const memoizedAddBook = useMemo(() => {
    return () => {
      console.log(books);
      const newBooks = [...books, 'Angular ' + new Date().toTimeString().slice(0, 8)];
      setBooks(newBooks);
    };
  }, [books]);
  const memoizedAddBook2 = useCallback(() => {
    console.log(books);
    const newBooks = [...books, 'Angular ' + new Date().toTimeString().slice(0, 8)];
    setBooks(newBooks);
  }, []);
  return <>\r
        <button onClick={() => setCounter(counter + 1)}>+</button>\r
        {counter}\r
        <Book addBook={memoizedAddBook2} />\r
    </>;
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const M=["HelpsToReactMemoExample","DifficultCountingExample","LikeUseCallback"];export{i as DifficultCountingExample,u as HelpsToReactMemoExample,d as LikeUseCallback,M as __namedExportsOrder,T as default};
