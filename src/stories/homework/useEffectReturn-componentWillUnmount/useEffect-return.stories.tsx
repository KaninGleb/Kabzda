import {useEffect, useState} from 'react';


export default {
  title: 'useEffect - return homework'
}


export const SetTimeoutExampleHW1RendersMistake = () => {
  const [count, setCount] = useState(0);

  console.log('SetTimeoutExample rendered')

  useEffect(() => {
    const button = document.getElementById('b1');
    const handleClick = () => setCount(count => count + 1);

    button?.addEventListener('click', handleClick)
    console.log('Effect occurred')
  }, [count]);

  return (
    <>
      Count - {count} <button id={'b1'}>+</button>
    </>
  )
}

export const SetTimeoutExampleHW1 = () => {
  const [count, setCount] = useState(0);

  console.log('SetTimeoutExample rendered')

  useEffect(() => {
    const button = document.getElementById('b1');
    const handleClick = () => setCount((prevState) => prevState + 1);

    button?.addEventListener('click', handleClick)
    console.log('Effect occurred')

    return () => {
      button?.removeEventListener('click', handleClick)
      console.log('Cleanup occurred');
    }
  }, []);

  return (
    <>
      Count - {count} <button id={'b1'}>+</button>
    </>
  )
}