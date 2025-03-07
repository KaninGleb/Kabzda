import {useState} from 'react';
import {OnOff} from './OnOff.tsx';
import {action} from '@storybook/addon-actions';

export default {
    title: 'onOff',
    component: OnOff,
}

const callback = action('On or Off clicked')

export const OnMode = () => <OnOff on={true} setSwitchOn={callback}/>
export const OffMode = () => <OnOff on={false} setSwitchOn={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <OnOff on={value} setSwitchOn={setValue}/>
}