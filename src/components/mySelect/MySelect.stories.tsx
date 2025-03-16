import {MySelect} from './MySelect.tsx';


export default {
    title: 'MySelect',
}

export const BaseExample = () => {
    return (
        <MySelect
            titleValue={'Users'}
            items={[
                {value: '1', title: 'Dimych'},
                {value: '2', title: 'Valera'},
                {value: '3', title: 'Viktor'},
                {value: '4', title: 'Igor'},
            ]}
            onChange={()=>{}}
        />
    )
}