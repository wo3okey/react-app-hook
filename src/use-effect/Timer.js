import {useState, useEffect} from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("타이머 랜더링.")

    const timer = setInterval(() => {
      setTime(time => time + 1)
      console.log("타이머가 돌아갑니다.")
    }, 1000);

    return() => {
      clearInterval(timer);
      console.log("타이머를 종료합니다.")
    };
  }, []);

  return (<div>
    <span>타이머가 돌아갑니다.</span>
    <span>시간: {time}</span>
  </div>);
};

export default Timer
