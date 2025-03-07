import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff.tsx';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callback = action('On or Off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>