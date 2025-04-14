import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{R as V,r as T}from"./index-D4H_InIO.js";import{a as _}from"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";const s=({titleValue:e,collapsed:n,items:o,onChange:c,onClick:x})=>r.jsxs("div",{children:[r.jsx(j,{title:e,onChange:c}),!n&&r.jsx(D,{items:o,onClick:x})]}),j=V.memo(({title:e,onChange:n})=>(console.log("AccordionTitle rendered"),r.jsx("h3",{onClick:n,style:{cursor:"pointer"},children:e}))),D=V.memo(({items:e,onClick:n})=>(console.log("AccordionBody rendered"),r.jsx("ul",{children:e&&e.map((o,c)=>r.jsx("li",{onClick:()=>{n(o.value)},style:{cursor:"pointer"},children:o.title},c))})));s.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    title: string\r
    value: any\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}],raw:"ItemType[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    title: string\r
    value: any\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}],raw:"ItemType[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""}}};const U={title:"Accordion",component:s},l={args:{titleValue:"Hello!",collapsed:!1,items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Viktor",value:3}]}},I=_("Accordion mode change event fired"),q=_("Some item was clicked"),t=()=>r.jsx(s,{titleValue:"Collapsed Accordion",collapsed:!0,onChange:I,items:[],onClick:q}),a=()=>r.jsx(s,{titleValue:"Opened Accordion",collapsed:!1,onChange:()=>{},items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Viktor",value:3}],onClick:q}),i=()=>{const[e,n]=T.useState(!1);return r.jsx(s,{titleValue:"Users",collapsed:e,onChange:()=>n(!e),items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Viktor",value:3}],onClick:o=>alert(`User with ID ${o} should be happy`)})};t.__docgenInfo={description:"",methods:[],displayName:"CollapsedAccordion"};a.__docgenInfo={description:"",methods:[],displayName:"UnCollapsedAccordion"};i.__docgenInfo={description:"",methods:[],displayName:"AccordionDemo"};t.__docgenInfo={description:"",methods:[],displayName:"CollapsedAccordion"};a.__docgenInfo={description:"",methods:[],displayName:"UnCollapsedAccordion"};i.__docgenInfo={description:"",methods:[],displayName:"AccordionDemo"};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    titleValue: 'Hello!',
    collapsed: false,
    items: [{
      title: 'Dimych',
      value: 1
    }, {
      title: 'Valera',
      value: 2
    }, {
      title: 'Viktor',
      value: 3
    }]
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,y,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onChange={onChangeHandler} items={[]} onClick={onClickCallback} />;
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,C,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Accordion titleValue={'Opened Accordion'} collapsed={false} onChange={() => {}} items={[{
    title: 'Dimych',
    value: 1
  }, {
    title: 'Valera',
    value: 2
  }, {
    title: 'Viktor',
    value: 3
  }]} onClick={onClickCallback} />;
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var A,k,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return <Accordion titleValue={'Users'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)} items={[{
    title: 'Dimych',
    value: 1
  }, {
    title: 'Valera',
    value: 2
  }, {
    title: 'Viktor',
    value: 3
  }]} onClick={id => alert(\`User with ID \${id} should be happy\`)} />;
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const H=["FirstStory","CollapsedAccordion","UnCollapsedAccordion","AccordionDemo"];export{i as AccordionDemo,t as CollapsedAccordion,l as FirstStory,a as UnCollapsedAccordion,H as __namedExportsOrder,U as default};
