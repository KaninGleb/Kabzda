import {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'Input, Checkbox, Select',
}

export const UncontrolledInput = () => <input/>;

export const TrackedValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <> <input onChange={onChangeHandler}/> - {value} </>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <> <input ref={inputRef}/> <button onClick={save}>Save</button> - actual value: <b>{value}</b> </>;
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return <input value={parentValue} onChange={onChangeHandler}></input>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    }

    return <> <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}></input> - {parentValue.toString()} </>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <>
            <select value={parentValue} onChange={onChangeHandler}>
                <option>None</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Grodno</option>
                <option value={'3'}>Brest</option>
            </select>
            {` value = ${parentValue}`}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'Hello!'}/>;