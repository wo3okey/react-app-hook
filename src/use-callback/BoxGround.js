import {useState, useCallback} from 'react'
import Box from './Box'

const BoxGround = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const changeNumber = (e) => {
    setSize(e.target.value)
  };

  const changeBoxSize = useCallback(() => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`
    };  
  }, [size]);

  const changeThema = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{
        backgroundColor: isDark ? "black" : "white"
      }}>
      <input type="number" value={size} onChange={changeNumber}></input>
      <Box changeBoxSize={changeBoxSize}></Box>
      <button onClick={changeThema}>테마변경하기</button>
    </div>
  );

};

export default BoxGround
