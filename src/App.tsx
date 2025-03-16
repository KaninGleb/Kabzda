import './App.css';
import {useState} from 'react';
import {Accordion} from './components/accordion/Accordion.tsx';
import {UncontrolledAccordion} from './components/unControlledAccordion/UncontrolledAccordion.tsx';
import {UnControlledRating} from './components/unControlledRating/UnControlledRating.tsx';
import {Rating, RatingValueType} from './components/rating/Rating.tsx';
import {UncontrolledOnOff} from './components/uncontrolledOnOff/UncontrolledOnOff.tsx';
import {OnOff} from './components/onOff/OnOff.tsx';
import {Select} from './components/select/Select.tsx';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('');

    return (
        <div className="App">
            <Accordion
                titleValue={'Menu-1'}
                collapsed={true}
                items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]}
                onChange={()=>{}}
                onClick={()=>{}}
            />
            <Accordion
                titleValue={'Users'}
                collapsed={false}
                items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]}
                onChange={()=>{}}
                onClick={()=>{}}
            />

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <OnOff on={switchOn} setSwitchOn={setSwitchOn}/>

            <UncontrolledAccordion
                title={'Menu-2'}
                users={['1', '2', '3']}
            />

            <UnControlledRating onChange={()=>{}}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            
            <Accordion
                titleValue={'Menu-3'}
                collapsed={accordionCollapsed}
                items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}]}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                onClick={(id) => alert(`User with ID ${id} should be happy`)}
            />

            <Select
                titleValue={'Users'}
                value={selectValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                    {value: '4', title: 'Beijing'},
                ]}
                onChange={setSelectValue}
            />
        </div>
    )
}

export default App;