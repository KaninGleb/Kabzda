import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as i}from"./index-D4H_InIO.js";const M={title:"Input, Checkbox, Select"},a=()=>e.jsx("input",{}),s=()=>{const[n,o]=i.useState(""),t=r=>{o(r.currentTarget.value)};return e.jsxs(e.Fragment,{children:[" ",e.jsx("input",{onChange:t})," - ",n," "]})},l=()=>{const[n,o]=i.useState(""),t=i.useRef(null),r=()=>{const B=t.current;o(B.value)};return e.jsxs(e.Fragment,{children:[" ",e.jsx("input",{ref:t})," ",e.jsx("button",{onClick:r,children:"Save"})," - actual value: ",e.jsx("b",{children:n})," "]})},u=()=>{const[n,o]=i.useState(""),t=r=>{o(r.currentTarget.value)};return e.jsx("input",{value:n,onChange:t})},c=()=>{const[n,o]=i.useState(!0),t=r=>{o(r.currentTarget.checked)};return e.jsxs(e.Fragment,{children:[" ",e.jsx("input",{type:"checkbox",checked:n,onChange:t})," - ",n.toString()," "]})},d=()=>{const[n,o]=i.useState(void 0),t=r=>{o(r.currentTarget.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("select",{value:n,onChange:t,children:[e.jsx("option",{children:"None"}),e.jsx("option",{value:"1",children:"Minsk"}),e.jsx("option",{value:"2",children:"Grodno"}),e.jsx("option",{value:"3",children:"Brest"})]}),` value = ${n}`]})},p=()=>e.jsx("input",{value:"Hello!"});a.__docgenInfo={description:"",methods:[],displayName:"UncontrolledInput"};s.__docgenInfo={description:"",methods:[],displayName:"TrackedValueOfUncontrolledInput"};l.__docgenInfo={description:"",methods:[],displayName:"GetValueOfUncontrolledInputByButtonPress"};u.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};c.__docgenInfo={description:"",methods:[],displayName:"ControlledCheckbox"};d.__docgenInfo={description:"",methods:[],displayName:"ControlledSelect"};p.__docgenInfo={description:"",methods:[],displayName:"ControlledInputWithFixedValue"};a.__docgenInfo={description:"",methods:[],displayName:"UncontrolledInput"};s.__docgenInfo={description:"",methods:[],displayName:"TrackedValueOfUncontrolledInput"};l.__docgenInfo={description:"",methods:[],displayName:"GetValueOfUncontrolledInputByButtonPress"};u.__docgenInfo={description:"",methods:[],displayName:"ControlledInput"};c.__docgenInfo={description:"",methods:[],displayName:"ControlledCheckbox"};d.__docgenInfo={description:"",methods:[],displayName:"ControlledSelect"};p.__docgenInfo={description:"",methods:[],displayName:"ControlledInputWithFixedValue"};var m,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"() => <input />",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,v,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return <> <input onChange={onChangeHandler} /> - {value} </>;
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var V,f,x;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return <> <input ref={inputRef} /> <button onClick={save}>Save</button> - actual value: <b>{value}</b> </>;
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var _,S,y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [parentValue, setParentValue] = useState<string>('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input value={parentValue} onChange={onChangeHandler}></input>;
}`,...(y=(S=u.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var H,j,k;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return <> <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}></input> - {parentValue.toString()} </>;
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var T,N,b;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <>\r
            <select value={parentValue} onChange={onChangeHandler}>\r
                <option>None</option>\r
                <option value={'1'}>Minsk</option>\r
                <option value={'2'}>Grodno</option>\r
                <option value={'3'}>Brest</option>\r
            </select>\r
            {\` value = \${parentValue}\`}\r
        </>;
}`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var E,P,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:"() => <input value={'Hello!'} />",...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const R=["UncontrolledInput","TrackedValueOfUncontrolledInput","GetValueOfUncontrolledInputByButtonPress","ControlledInput","ControlledCheckbox","ControlledSelect","ControlledInputWithFixedValue"];export{c as ControlledCheckbox,u as ControlledInput,p as ControlledInputWithFixedValue,d as ControlledSelect,l as GetValueOfUncontrolledInputByButtonPress,s as TrackedValueOfUncontrolledInput,a as UncontrolledInput,R as __namedExportsOrder,M as default};
