import {useState, useEffect} from 'react';

const InputName = () => {
  const [name, setName] = useState("wookey")

  const handleInputChange = (e) => {
    setName(e.target.value)
  };

  useEffect(() => {
    console.log('name 변화체크중')
  }, [name]);

  return (<div>
    <input type="text" value={name} onChange={handleInputChange}></input>
    <span>name: {name}</span>
  </div>);
};

export default InputName;
