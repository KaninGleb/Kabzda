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