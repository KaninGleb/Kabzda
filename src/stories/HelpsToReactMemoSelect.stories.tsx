import {ItemType, Select} from '../components/select/Select.tsx';
import {useEffect, useMemo, useState} from 'react';

export default {
    title: 'HelpsToReactMemoSelect',
}

type MemoSelectItemType = ItemType & { citizens: number }

export const HelpsToReactMemoSelect = () => {
    const [data, setData] = useState<MemoSelectItemType[]>([
        {value: '111', title: 'Minsk', citizens: 5},
        {value: '212', title: 'Moscow', citizens: 10},
        {value: '333', title: 'Kiev', citizens: 15},
        {value: '434', title: 'Beijing', citizens: 20},
    ])

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
                citizens: +newCityCitizens,
            }
            setData(prevData => [...prevData, newCity]);
            setNewCityId('');
            setNewCityName('');
            setNewCityCitizens('');
        }
    }

    return (
        <div style={{ display: 'flex', gap: '20px', maxWidth: 'max-content'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    Select 1: {idFilter.length}
                    <Select
                        titleValue={''}
                        value={selectValue3}
                        items={idFilter}
                        onChange={setSelectValue3}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    Select 2: {mFilter.length}
                    <Select
                        titleValue={''}
                        value={selectValue1}
                        items={mFilter}
                        onChange={setSelectValue1}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    Select 3: {citizensFilter.length}
                    <Select
                        titleValue={''}
                        value={selectValue2}
                        items={citizensFilter}
                        onChange={setSelectValue2}
                    />
                </div>
            </div>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <input
                    type={'number'}
                    placeholder={'Enter ID'}
                    value={newCityId}
                    onChange={(e) => setNewCityId(e.currentTarget.value)}
                />
                <input
                    type={'text'}
                    placeholder={'Enter city name'}
                    value={newCityName}
                    onChange={(e) => setNewCityName(e.currentTarget.value)}
                />
                <input
                    type={'number'}
                    placeholder={'Enter the number of citizens'}
                    value={newCityCitizens}
                    onChange={(e) => setNewCityCitizens(e.currentTarget.value)}
                />
                <button onClick={addCityHandler}>Add city</button>
            </div>
        </div>
    )
}