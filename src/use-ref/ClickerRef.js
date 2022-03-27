import {useState, useRef, useEffect} from 'react'

const ClickerRef = () => {
  console.log("ClickerRef 렌더링")
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  const increaseCount = () => {
    setCount(count + 1)
  };

  useEffect(() => {
    refCount.current = refCount.current + 1;
    console.log("refCount", refCount);
  });

  return (<div>
    <button onClick={increaseCount}>state카운트증가</button>
    <span>count: {count}</span>

      <button onClick={increaseCount}>ref카운트증가</button>
      <span>refCount: </span>
  </div>)
};

export default ClickerRef
