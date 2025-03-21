import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer.tsx';

type AccordionPropsType = {
    title: string
    users?: Array<string>
}


export const UncontrolledAccordion = ({title, users}: AccordionPropsType) => {
    const [state, dispatch] = useReducer(reducer, { collapsed: false });

    return (
        <div>
            <AccordionTitle onClick={() => dispatch({ type: TOGGLE_COLLAPSED }) } title={title}/>
            {state.collapsed && <AccordionBody users={users}/>}
        </div>
    )
}

const AccordionTitle = React.memo(({title, onClick}: {
    title: string
    onClick: () => void
}) => {

    const titleStyle: React.CSSProperties = {
        userSelect: 'none',
        cursor: 'pointer',
    }

    return (
        <h3 onClick={onClick} style={titleStyle}>{title}</h3>
    )
})

const AccordionBody = React.memo(({users}: { users?: Array<string> }) => {
    return (
        <ul>
            {users && users.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    )
})