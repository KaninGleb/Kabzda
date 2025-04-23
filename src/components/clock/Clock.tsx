import {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView.tsx';
import {DigitalClockView} from './DigitalClockView.tsx';


type MyClockType = {
  mode?: 'analog' | 'digital'
}

export const Clock = ({ mode }: MyClockType) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, [])

  let view;

  switch (mode) {
    case 'analog':
      view = <AnalogClockView date={date} />;
      break;
    case 'digital':
    default:
      view = <DigitalClockView date={date} />
  }

  return (
    <div>
      {view}
    </div>
  )
}

export type ClockViewPropsType = {
  date: Date
}
