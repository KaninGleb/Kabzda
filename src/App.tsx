import './App.css';
import {useState} from 'react';
import {Accordion} from './components/accordion/Accordion.tsx';
import {UncontrolledAccordion} from './components/unControlledAccordion/UncontrolledAccordion.tsx';
import {UnControlledRating} from './components/unControlledRating/UnControlledRating.tsx';
import {Rating, RatingValueType} from './components/rating/Rating.tsx';
import {UncontrolledOnOff} from './components/uncontrolledOnOff/UncontrolledOnOff.tsx';
import {OnOff} from './components/onOff/OnOff.tsx';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion
                title={'Menu-1'}
                collapsed={true}
                users={['1', '2', '3']}
            />
            <Accordion
                title={'Users'}
                collapsed={false}
                users={['1', '2', '3']}
            />

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <OnOff on={switchOn} setSwitchOn={setSwitchOn}/>

            <UncontrolledAccordion
                title={'Menu-2'}
                users={['1', '2', '3']}
            />

            <UnControlledRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            
            <Accordion
                title={'Menu-3'}
                collapsed={accordionCollapsed}
                users={['1', '2', '3']}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />
        </div>
    )
}

export default App;