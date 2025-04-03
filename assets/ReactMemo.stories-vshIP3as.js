import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as o,R as l}from"./index-D4H_InIO.js";const h={title:"React.memo demo"},p=s=>e.jsx("div",{children:s.count}),x=s=>e.jsx("div",{children:s.users.map((n,r)=>e.jsx("div",{children:n},r))}),j=l.memo(x),t=()=>{console.log("Example1");const[s,n]=o.useState(0),[r,d]=o.useState(["Dimych","Valera","Artem"]),i=()=>{const m=[...r,"Sveta "+new Date().toDateString().split(" ").join("-")];d(m)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(s+1),children:"+"}),e.jsx("button",{onClick:i,children:"Add user"}),e.jsx(p,{count:s}),e.jsx(j,{users:r})]})};t.__docgenInfo={description:"",methods:[],displayName:"Example1"};t.__docgenInfo={description:"",methods:[],displayName:"Example1"};var a,c,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  console.log('Example1');
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
  const addUser = () => {
    const newUsers = [...users, 'Sveta ' + new Date().toDateString().split(' ').join('-')];
    setUsers(newUsers);
  };
  return <>\r
        <button onClick={() => setCounter(counter + 1)}>+</button>\r
        <button onClick={addUser}>Add user</button>\r
        <NewMessageCounter count={counter} />\r
        <Users users={users} />\r
    </>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const S=["Example1"];export{t as Example1,S as __namedExportsOrder,h as default};
