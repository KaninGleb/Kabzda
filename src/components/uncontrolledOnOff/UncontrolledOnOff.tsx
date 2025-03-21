import React, {useState} from 'react';

type UncontrolledOnOffType = {
    onChange: (on: boolean) => void;
    defaultOn?: boolean
}

export const UncontrolledOnOff = React.memo((props: UncontrolledOnOffType) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle: React.CSSProperties = {
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '10px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: on ? 'lightgreen' : 'transparent',
    }

    const offStyle: React.CSSProperties = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: on ? 'transparent' : 'indianred',
    }

    const indicatorStyle: React.CSSProperties = {
        width: '35px',
        height: '35px',
        marginLeft: '5px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        transform: 'translateY(13px)',
        backgroundColor: on ? 'lightgreen' : 'indianred',
    }

    const onClicked = () => {
        setOn(true);
        props.onChange(true);
    }

    const offClicked = () => {
        setOn(false);
        props.onChange(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
})