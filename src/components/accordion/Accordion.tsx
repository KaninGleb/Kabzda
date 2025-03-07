type AccordionPropsType = {
    title: string
    collapsed: boolean
    users?: Array<string>
    onChange?: () => void
}

export const Accordion = ({title, collapsed, users, onChange}: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={title}
                onChange={onChange}
            />
            { !collapsed && <AccordionBody users={users}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange?: () => void,
}

const AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {
        return (
        <h3 onClick={onChange}>{title}</h3>
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