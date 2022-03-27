import {useState, useEffect} from 'react';

const Clicker = () => {
  const [value, setValue] = useState(0);

  const handleValue = (num) => {
    setValue(value + num)
  }

  useEffect(() => {
    console.log('랜더링')
  });

  return (<div>
    <p>
      현재 카운터 값은
      <b>{value}</b>
      입니다.
    </p>
    <button onClick={() => handleValue(1)}>+1</button>
    <button onClick={() => handleValue(-1)}>-1</button>

  </div>);
};

export default Clicker;
