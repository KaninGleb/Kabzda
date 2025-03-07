import {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
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

export const ControlledInputWithFixedValue = () => <input value={'Hello!'}/>;