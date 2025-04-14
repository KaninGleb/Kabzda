import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{S as d}from"./Select-BhmsmoWO.js";import{r as n}from"./index-D4H_InIO.js";const E={title:"HelpsToReactMemoSelect"},l=()=>{const[i,v]=n.useState([{value:"111",title:"Minsk",citizens:5},{value:"212",title:"Moscow",citizens:10},{value:"333",title:"Kiev",citizens:15},{value:"434",title:"Beijing",citizens:20}]),[S,g]=n.useState(""),[h,w]=n.useState(""),[z,F]=n.useState(""),[s,m]=n.useState(""),[a,y]=n.useState(""),[c,p]=n.useState(""),r=n.useMemo(()=>i.filter(t=>t.value.indexOf("3")>-1),[i]),o=n.useMemo(()=>i.filter(t=>t.title.toLowerCase().indexOf("m")>-1),[i]),u=n.useMemo(()=>i.filter(t=>t.citizens%2===0),[i]);n.useEffect(()=>console.log("idFilter"),[r]),n.useEffect(()=>console.log("mFilter"),[o]),n.useEffect(()=>console.log("citizensFilter"),[u]);const V=()=>{if(s&&a.trim()&&c){const t={value:s,title:a,citizens:+c};v(N=>[...N,t]),m(""),y(""),p("")}};return e.jsxs("div",{style:{display:"flex",gap:"20px",maxWidth:"max-content"},children:[e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:["Select 1: ",r.length,e.jsx(d,{titleValue:"",value:z,items:r,onChange:F})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:["Select 2: ",o.length,e.jsx(d,{titleValue:"",value:S,items:o,onChange:g})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:["Select 3: ",u.length,e.jsx(d,{titleValue:"",value:h,items:u,onChange:w})]})]}),e.jsx("hr",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("input",{type:"number",placeholder:"Enter ID",value:s,onChange:t=>m(t.currentTarget.value)}),e.jsx("input",{type:"text",placeholder:"Enter city name",value:a,onChange:t=>y(t.currentTarget.value)}),e.jsx("input",{type:"number",placeholder:"Enter the number of citizens",value:c,onChange:t=>p(t.currentTarget.value)}),e.jsx("button",{onClick:V,children:"Add city"})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoSelect"};l.__docgenInfo={description:"",methods:[],displayName:"HelpsToReactMemoSelect"};var C,f,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [data, setData] = useState<MemoSelectItemType[]>([{
    value: '111',
    title: 'Minsk',
    citizens: 5
  }, {
    value: '212',
    title: 'Moscow',
    citizens: 10
  }, {
    value: '333',
    title: 'Kiev',
    citizens: 15
  }, {
    value: '434',
    title: 'Beijing',
    citizens: 20
  }]);
  const [selectValue1, setSelectValue1] = useState('');
  const [selectValue2, setSelectValue2] = useState('');
  const [selectValue3, setSelectValue3] = useState('');
  const [newCityId, setNewCityId] = useState('');
  const [newCityName, setNewCityName] = useState('');
  const [newCityCitizens, setNewCityCitizens] = useState('');
  const idFilter = useMemo(() => data.filter(c => c.value.indexOf('3') > -1), [data]);
  const mFilter = useMemo(() => data.filter(c => c.title.toLowerCase().indexOf('m') > -1), [data]);
  const citizensFilter = useMemo(() => data.filter(c => c.citizens % 2 === 0), [data]);

  // const idFilter = data.filter(c => c.value.indexOf('3') > -1);
  // const mFilter = data.filter(c => c.title.toLowerCase().indexOf('m') > -1);
  // const citizensFilter = data.filter(c => c.citizens % 2 === 0);

  useEffect(() => console.log('idFilter'), [idFilter]);
  useEffect(() => console.log('mFilter'), [mFilter]);
  useEffect(() => console.log('citizensFilter'), [citizensFilter]);
  const addCityHandler = () => {
    if (newCityId && newCityName.trim() && newCityCitizens) {
      const newCity = {
        value: newCityId,
        title: newCityName,
        citizens: +newCityCitizens
      };
      setData(prevData => [...prevData, newCity]);
      setNewCityId('');
      setNewCityName('');
      setNewCityCitizens('');
    }
  };
  return <div style={{
    display: 'flex',
    gap: '20px',
    maxWidth: 'max-content'
  }}>\r
            <div style={{
      display: 'flex',
      gap: '20px'
    }}>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>\r
                    Select 1: {idFilter.length}\r
                    <Select titleValue={''} value={selectValue3} items={idFilter} onChange={setSelectValue3} />\r
                </div>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>\r
                    Select 2: {mFilter.length}\r
                    <Select titleValue={''} value={selectValue1} items={mFilter} onChange={setSelectValue1} />\r
                </div>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>\r
                    Select 3: {citizensFilter.length}\r
                    <Select titleValue={''} value={selectValue2} items={citizensFilter} onChange={setSelectValue2} />\r
                </div>\r
            </div>\r
            <hr />\r
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>\r
                <input type={'number'} placeholder={'Enter ID'} value={newCityId} onChange={e => setNewCityId(e.currentTarget.value)} />\r
                <input type={'text'} placeholder={'Enter city name'} value={newCityName} onChange={e => setNewCityName(e.currentTarget.value)} />\r
                <input type={'number'} placeholder={'Enter the number of citizens'} value={newCityCitizens} onChange={e => setNewCityCitizens(e.currentTarget.value)} />\r
                <button onClick={addCityHandler}>Add city</button>\r
            </div>\r
        </div>;
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const I=["HelpsToReactMemoSelect"];export{l as HelpsToReactMemoSelect,I as __namedExportsOrder,E as default};
