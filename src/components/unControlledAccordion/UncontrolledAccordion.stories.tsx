import {UncontrolledAccordion} from './UncontrolledAccordion.tsx';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const ModeChanging = () => {
    return <UncontrolledAccordion title={'Users'} users={['1', '2', '3']} />
}
