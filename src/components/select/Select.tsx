import styles from './Select.module.css'
import React, {useState, KeyboardEvent, useEffect} from 'react';

export type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: string
    titleValue: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = React.memo((props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect( () => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: string) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
            // props.items.forEach((item, i) => {

                if (props.items[i].value === hoveredElementValue) {
                    const pretenderElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretenderElement) {
                        props.onChange(pretenderElement.value);
                        return;
                    }
                }

            // })
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }

    return (
        <div className={styles.select} onKeyDown={onKeyDown} tabIndex={0} onBlur={ () => setActive(false) }>
                <span
                    className={styles.main}
                    onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
            {active &&
                <div className={styles.items}>
                    {props.items.map(i => (
                        <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
})