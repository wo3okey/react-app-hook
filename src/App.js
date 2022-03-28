import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import Clicker from './use-state/Clicker'
import InputName from './use-effect/InputName'
import Timer from './use-effect/Timer'
import ClickerRef from './use-ref/ClickerRef'
import LoginRef from './use-ref/LoginRef'
import Context from './use-context/Context'
import Memo from './use-memo/Memo'
import BoxGround from './use-callback/BoxGround'
import Board from './use-reducer/Board'

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return (<div className="App">
    <Clicker></Clicker>
    <InputName></InputName>
    {toggle && <Timer/>}
    <button onClick={() => setToggle(!toggle)}>토글버튼</button>
    <ClickerRef></ClickerRef>
    <LoginRef></LoginRef>
    <Context></Context>
    <Memo></Memo>
    <BoxGround></BoxGround>
    <Board></Board>
  </div>);
}

export default App;
