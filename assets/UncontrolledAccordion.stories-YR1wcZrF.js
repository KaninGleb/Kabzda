import{j as o}from"./jsx-runtime-BO8uF4Og.js";import{r as m,R as a}from"./index-D4H_InIO.js";const l="TOGGLE-COLLAPSED",u=(e,r)=>{switch(r.type){case l:return{...e,collapsed:!e.collapsed};default:throw new Error("Bad action type!")}},t=({title:e,users:r})=>{const[s,p]=m.useReducer(u,{collapsed:!1});return o.jsxs("div",{children:[o.jsx(g,{onClick:()=>p({type:l}),title:e}),s.collapsed&&o.jsx(y,{users:r})]})},g=a.memo(({title:e,onClick:r})=>{const s={userSelect:"none",cursor:"pointer"};return o.jsx("h3",{onClick:r,style:s,children:e})}),y=a.memo(({users:e})=>o.jsx("ul",{children:e&&e.map((r,s)=>o.jsx("li",{children:r},s))}));t.__docgenInfo={description:"",methods:[],displayName:"UncontrolledAccordion",props:{title:{required:!0,tsType:{name:"string"},description:""},users:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"UncontrolledAccordion",props:{title:{required:!0,tsType:{name:"string"},description:""},users:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""}}};const x={title:"UncontrolledAccordion",component:t},n=()=>o.jsx(t,{title:"Users",users:["1","2","3"]});n.__docgenInfo={description:"",methods:[],displayName:"ModeChanging"};n.__docgenInfo={description:"",methods:[],displayName:"ModeChanging"};var c,i,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <UncontrolledAccordion title={'Users'} users={['1', '2', '3']} />;
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const _=["ModeChanging"];export{n as ModeChanging,_ as __namedExportsOrder,x as default};
