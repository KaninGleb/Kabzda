
type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = ({titleValue, collapsed, items, onChange, onClick}: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={titleValue}
                onChange={onChange}
            />
            { !collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {
    return (
        <h3 onClick={onChange} style={{cursor: 'pointer'}}>{title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = ({items, onClick}: AccordionBodyType) => {
    return (
        <ul>
            {items && items.map((user,  i) => (
                <li key={i} onClick={() => {onClick(user.value)}} style={{cursor: 'pointer'}}>{user.title}</li>
            ))}
        </ul>
    )
}