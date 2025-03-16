import {Select} from './Select.tsx';
import {useState} from 'react';

export default {
    title: 'Select',
}

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return (
        <Select
            onChange={setValue}
            value={value}
            titleValue={'Users'}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
                {value: '4', title: 'Beijing'},
            ]}/>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <Select
            onChange={setValue}
            titleValue={'Users'}
            value={value}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
                {value: '4', title: 'Beijing'},
            ]}
        />
    )
}