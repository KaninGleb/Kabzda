import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as i}from"./index-D4H_InIO.js";const a=r=>{const[s,d]=i.useState(r.titleValue),[c,m]=i.useState(!1),p=n=>{d(n.currentTarget.value)},g={display:"flex",flexDirection:"column",gap:"10px",maxWidth:"120px"},y={padding:"10px",border:"none",backgroundColor:"lightGrey",cursor:"pointer",borderRadius:"5px"};return e.jsxs("div",{style:g,children:[e.jsxs("span",{children:["Selected: ",s===r.titleValue?"":s]}),e.jsxs("select",{style:y,onChange:p,onClick:()=>m(!0),children:[e.jsx("option",{disabled:c,children:r.titleValue}),r.items.map(n=>e.jsx("option",{children:n.title},n.value))]})]})};a.__docgenInfo={description:"",methods:[],displayName:"MySelect",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string
    value: string
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ItemType[]"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"MySelect",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string
    value: string
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ItemType[]"},description:""}}};const h={title:"MySelect"},t=()=>e.jsx(a,{titleValue:"Users",items:[{value:"1",title:"Dimych"},{value:"2",title:"Valera"},{value:"3",title:"Viktor"},{value:"4",title:"Igor"}],onChange:()=>{}});t.__docgenInfo={description:"",methods:[],displayName:"BaseExample"};t.__docgenInfo={description:"",methods:[],displayName:"BaseExample"};var l,u,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <MySelect titleValue={'Users'} items={[{
    value: '1',
    title: 'Dimych'
  }, {
    value: '2',
    title: 'Valera'
  }, {
    value: '3',
    title: 'Viktor'
  }, {
    value: '4',
    title: 'Igor'
  }]} onChange={() => {}} />;
}`,...(o=(u=t.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const f=["BaseExample"];export{t as BaseExample,f as __namedExportsOrder,h as default};
