import {useState, useEffect} from 'react'

const Box = ({changeBoxSize}) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스키우기");
    setStyle(changeBoxSize());
  }, [changeBoxSize]);

  return (<div style={style}></div>);

};

export default Box
