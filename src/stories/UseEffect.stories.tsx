import {useEffect, useState} from 'react';


export default {
  title: 'useEffect demo',
}


export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log('SimpleExample');

  // useEffect(() => {
  //   console.log('useEffect');
  //
  //   const title = document.getElementById('title');
  //   if (title) title.textContent = counter.toString();
  //
  // }, [counter]);

  useEffect(() => {
    console.log('1. useEffect every render');
  });

  useEffect(() => {
    console.log('2. useEffect only first render (componentDidMount)');
  }, []);

  useEffect(() => {
    console.log('3. useEffect first render and every counter changing');
  }, [counter]);

  return (
    <>
      <div id={'title'}></div>
      Hello, {fake} {counter}
      <button onClick={() => setFake(fake + 1)}>fake +</button>
      <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
  )
}

export const SetTimeoutExample = () => {
  const [fake] = useState(1);
  const [counter, setCounter] = useState(1);

  console.log('SetTimeoutExample');

  useEffect(() => {

    setInterval(() => {
      console.log('tick: ' + counter);
      setCounter((state) => state + 1);
    }, 1000)

  }, []);

  return (
    <>
      Hello, counter: {counter} - fake: {fake}
    </>
  )
}

export const UseEffectClocks = () => {
  const [time, setTime] = useState('');

  useEffect(() => {

    const intervalId = setInterval(() => {
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();

      console.log( `${hours}:${minutes}:${seconds}` );

      setTime( [hours, minutes, seconds].join(':') );
    }, 1000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      Time: {time}
    </>
  )
}

export const UseEffectMyClocks = () => {
  const [time, setTime] = useState('');

  useEffect(() => {

    const intervalId = setInterval(() => {
      const getTime = new Date().toTimeString().slice(0, 8);
      console.log(getTime);
      setTime(getTime);
    }, 1000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      Time: {time}
    </>
  )
}

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log('Component rendered');

  useEffect(() => {
    console.log('Effect occurred');

    return () => {
      console.log('Reset effect');
    }
  }, [counter]);

  const increase = () => setCounter(counter + 1);

  return (
    <>
      Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
  )
}

