import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    users?: Array<string>
}

export const UncontrolledAccordion = ({title, users}: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleHandler = () => setCollapsed(!collapsed);

    return (
        <div>
            <AccordionTitle onClick={toggleHandler} title={title}/>
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