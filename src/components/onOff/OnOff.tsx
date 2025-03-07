import React from 'react';

type OnOffType = {
    on: boolean
    setSwitchOn: (on: boolean) => void
}

export function OnOff(props: OnOffType) {

    const onStyle: React.CSSProperties = {
        border: '1px solid black',
        display: 'inline-block',
        marginRight: '5px',
        padding: '10px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: props.on ? 'lightgreen' : 'transparent',
    }

    const offStyle: React.CSSProperties = {
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: props.on ? 'transparent' : 'indianred',
    }

    const indicatorStyle: React.CSSProperties = {
        width: '35px',
        height: '35px',
        marginLeft: '5px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        transform: 'translateY(13px)',
        backgroundColor: props.on ? 'lightgreen' : 'indianred',
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.setSwitchOn(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.setSwitchOn(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}