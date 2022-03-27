import './Context.css';
import {useState, useRef, useEffect} from 'react';
import Page from './Page';
import {ThemeContext} from './ThemeContext';
import {UserContext} from './UserContext';

const Context = () => {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState("");
  const inputRef = useRef();

  const changeUser = (e) => {
    setUser(e.target.value)
  };

  return (
    <UserContext.Provider value={'사용자'}>
    <input type="text" placeholder="사용자입력" ref={inputRef}></input>
    <ThemeContext.Provider value={{
        isDark,
        setIsDark
      }}>
      <Page></Page>
    </ThemeContext.Provider>
  </UserContext.Provider>)
};

export default Context
