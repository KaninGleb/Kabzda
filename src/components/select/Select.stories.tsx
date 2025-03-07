import {Select} from './Select.tsx';

export default {
    title: 'Select',
}

export const UnCollapsedAccordion = () => {
    return (
        <Select
            titleValue={'Users'}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Viktor', value: 3},
                {title: 'Igor', value: 4},
            ]}
            onChange={() => {}}
        />
    )
}