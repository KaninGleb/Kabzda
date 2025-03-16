import {ChangeEvent, CSSProperties, useState} from 'react';

type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    titleValue: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const MySelect = (props: SelectPropsType) => {
    const [value, setValue] = useState(props.titleValue);
    const [disabled, setDisabled] = useState<boolean>(false);

    // const headerValue = props.items.find(i => i.value === props.value);

    const selectOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    }

    const divFlexCss: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '120px'
    }

    const selectCss: CSSProperties = {
        padding: '10px',
        border: 'none',
        backgroundColor: 'lightGrey',
        cursor: 'pointer',
        borderRadius: '5px',
    }

    return (
        <div style={divFlexCss}>
            <span>Selected: {value === props.titleValue ? '' : value}</span>
            <select
                style={selectCss}
                onChange={selectOnChangeHandler}
                onClick={() => setDisabled(true)}
            >
                <option disabled={disabled}>{props.titleValue}</option>
                {props.items.map(i => (
                    <option key={i.value}>
                        {i.title}
                    </option>
                ))}
            </select>
        </div>
    )
}