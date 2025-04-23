import {useEffect, useState} from 'react';
import s from './Clock.module.css'
import ac from './AnalogMyClock.module.css'
import dc from './DigitalMyClock.module.css'


type MyClockType = {
  mode: 'analog' | 'digital'
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

export const MyClock = ({ mode }: MyClockType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, [])

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  // const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  // const secondsDeg = (seconds / 60) * 360 + 90;

  const hoursDeg = (hours / 12) * 360;
  const minutesDeg = (minutes / 60) * 360;
  const secondsDeg = (seconds / 60) * 360;

  return (
    <>
      <div className={s.currTime}>
        {`Current time: `}
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
      </div>

      {mode === 'analog' ? (
        <div className={ac.clock}>
          <div className={`${ac.hand} ${ac.hour}`} style={{transform: `rotate(${hoursDeg}deg)`}}/>
          <div className={`${ac.hand} ${ac.minute}`} style={{transform: `rotate(${minutesDeg}deg)`}}/>
          <div className={`${ac.hand} ${ac.second}`} style={{transform: `rotate(${secondsDeg}deg)`}}/>
          <div className={ac.center}/>
        </div>
      ) : (
        <div className={dc.clock}>
          <span>
            { get2digitsString(hours) }:{ get2digitsString(minutes) }:{ get2digitsString(seconds) }
          </span>
        </div>
      )}

    </>
  )
}