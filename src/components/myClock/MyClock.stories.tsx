import {MyClock} from './MyClock.tsx';
import {UncontrolledMyClock} from './UncontrolledMyClock.tsx';


export default {
  title: 'Clock',
  component: MyClock
}

export const AnalogModeMyClock = () => {
  return (
    <MyClock mode={'analog'}/>
  )
}

export const DigitalModeMyClock = () => {
  return (
    <MyClock mode={'digital'}/>
  )
}

export const UncontrolledMyClockExample = () => {
  return (
    <UncontrolledMyClock/>
  )
}