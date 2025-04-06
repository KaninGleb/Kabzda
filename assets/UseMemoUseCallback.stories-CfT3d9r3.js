import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as n,R as B}from"./index-D4H_InIO.js";const T={title:"useMemo"},A=o=>(console.log("UsersSecret"),e.jsx("div",{children:o.users.map((r,t)=>e.jsx("div",{children:r},t))})),U=B.memo(A),l=()=>{console.log("HelpsToReactMemoExample");const[o,r]=n.useState(0),[t,d]=n.useState(["Dimych","Valera","Artem","Katya"]),a=n.useMemo(()=>t.filter(s=>s.toLowerCase().indexOf("a")>-1),[t]),c=()=>{const s=[...t,"Sveta "+new Date().toTimeString().slice(0,8)];d(s)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(o+1),children:"+"}),e.jsx("button",{onClick:c,children:"Add user"}),o,e.jsx(U,{users:a})]})},u=()=>{const[o,r]=n.useState(3),[t,d]=n.useState(3);let a=1,c=1;a=n.useMemo(()=>{let s=1;for(let m=1;m<=o;m++)s*=m;return s},[o]);for(let s=1;s<=t;s++)c*=s;return e.jsxs(e.Fragment,{children:[e.jsx("input",{value:o,onChange:s=>r(+s.currentTarget.value)}),e.jsx("input",{value:t,onChange:s=>d(+s.currentTarget.value)}),e.jsx("hr",{}),e.jsxs("div",{children:["Result for a: ",a]}),e.jsxs("div",{children:["Result for b: ",c]})]})},i=()=>{console.log("LikeUseCallback");const[o,r]=n.useState(0),[t,d]=n.useState(["React","JS","CSS","HTML"]),a=n.useCallback(()=>{console.log(t);const c=[...t,"Angular "+new Date().toTimeString().slice(0,8)];d(c)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(o+1),children:"+"}),o,e.jsx(v,{addBook:a})]})},j=o=>(console.log("BooksSecret"),e.jsx("div",{children:e.jsx("button",{onClick:o.addBook,children:"Add book"})})),v=B.memo(j);l.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoExample"};u.__docgenInfo={description:"",methods:[],displayName:"DifficultCountingExample"};i.__docgenInfo={description:"",methods:[],displayName:"LikeUseCallback"};l.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoExample"};u.__docgenInfo={description:"",methods:[],displayName:"DifficultCountingExample"};i.__docgenInfo={description:"",methods:[],displayName:"LikeUseCallback"};var p,k,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(g=(k=l.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var b,x,C;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,S,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  console.log('LikeUseCallback');
  const [counter, setCounter] = useState<number>(0);
  const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

  // const memoizedAddBook = useMemo(() => {
  //     return () => {
  //         console.log(books)
  //         const newBooks = [...books, 'Angular ' + new Date().toTimeString().slice(0, 8)];
  //         setBooks(newBooks);
  //     }
  // }, [books]);

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
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const M=["HelpsToReactMemoExample","DifficultCountingExample","LikeUseCallback"];export{u as DifficultCountingExample,l as HelpsToReactMemoExample,i as LikeUseCallback,M as __namedExportsOrder,T as default};
