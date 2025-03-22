import{j as c}from"./jsx-runtime-BO8uF4Og.js";import{S as m}from"./Select-BhmsmoWO.js";import{r as v}from"./index-D4H_InIO.js";const h={title:"Select"},e=()=>{const[a,s]=v.useState("2");return c.jsx(m,{onChange:s,value:a,titleValue:"Users",items:[{value:"1",title:"Minsk"},{value:"2",title:"Moscow"},{value:"3",title:"Kiev"},{value:"4",title:"Beijing"}]})},t=()=>{const[a,s]=v.useState("");return c.jsx(m,{onChange:s,titleValue:"Users",value:a,items:[{value:"1",title:"Minsk"},{value:"2",title:"Moscow"},{value:"3",title:"Kiev"},{value:"4",title:"Beijing"}]})};e.__docgenInfo={description:"",methods:[],displayName:"WithValue"};t.__docgenInfo={description:"",methods:[],displayName:"WithoutValue"};e.__docgenInfo={description:"",methods:[],displayName:"WithValue"};t.__docgenInfo={description:"",methods:[],displayName:"WithoutValue"};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('2');
  return <Select onChange={setValue} value={value} titleValue={'Users'} items={[{
    value: '1',
    title: 'Minsk'
  }, {
    value: '2',
    title: 'Moscow'
  }, {
    value: '3',
    title: 'Kiev'
  }, {
    value: '4',
    title: 'Beijing'
  }]} />;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,u,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <Select onChange={setValue} titleValue={'Users'} value={value} items={[{
    value: '1',
    title: 'Minsk'
  }, {
    value: '2',
    title: 'Moscow'
  }, {
    value: '3',
    title: 'Kiev'
  }, {
    value: '4',
    title: 'Beijing'
  }]} />;
}`,...(r=(u=t.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const g=["WithValue","WithoutValue"];export{e as WithValue,t as WithoutValue,g as __namedExportsOrder,h as default};
