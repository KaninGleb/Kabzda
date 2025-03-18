import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './reducer.tsx';

type AccordionPropsType = {
    title: string
    users?: Array<string>
}


export const UncontrolledAccordion = ({title, users}: AccordionPropsType) => {
    const [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            <AccordionTitle onClick={() => dispatch({ type: TOGGLE_CONSTANT }) } title={title}/>
            {collapsed && <AccordionBody users={users}/>}
        </div>
    )
}

const AccordionTitle = ({title, onClick}: {
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
}

const AccordionBody = ({users}: { users?: Array<string> }) => {
    return (
        <ul>
            {users && users.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    )
}