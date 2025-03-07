import {StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion
// }
//
// export default meta;

export default {
    title: 'Accordion',
    component: Accordion,
}

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'Hello!',
        collapsed: false,
        items: [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Viktor', value: 3}],
    },
}

const onChangeHandler = action('Accordion mode change event fired');
const onClickCallback = action('Some item was clicked');

export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue={'Collapsed Accordion'}
            collapsed={true}
            onChange={onChangeHandler}
            items={[]}
            onClick={onClickCallback}
        />
    )
}

export const UnCollapsedAccordion = () => {
    return (
        <Accordion
            titleValue={'Opened Accordion'}
            collapsed={false}
            onChange={() => {}}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Viktor', value: 3}
            ]}
            onClick={onClickCallback}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            titleValue={'Users'}
            collapsed={collapsed}
            onChange={() => setCollapsed(!collapsed)}
            items={[
                {title: 'Dimych', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Viktor', value: 3}
            ]}
            onClick={(id) => alert(`User with ID ${id} should be happy`)}
        />
    )
}