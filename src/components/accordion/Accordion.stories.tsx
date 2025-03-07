import {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Accordion> = {
    component: Accordion
}

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: 'Hello!',
        collapsed: true,
        users: ['1', '2', '3'],
    },
}

const onChangeHandler = action('Accordion mode change event fired')

export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'}
            collapsed={true}
            onChange={onChangeHandler}
            users={['1', '2', '3']}
        />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            title={'Opened Accordion'}
            collapsed={false}
            onChange={() => {}}
            users={['1', '2', '3']}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            title={'Accordion'}
            collapsed={collapsed}
            onChange={() => {
                setCollapsed(!collapsed)
            }}
            users={['1', '2', '3']}
        />
    )
}