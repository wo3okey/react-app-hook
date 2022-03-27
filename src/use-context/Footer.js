import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

const Footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  const toggleThema = () => {
    setIsDark(!isDark);
  };

  return (<footer className="footer" style={{
      backgroundColor: isDark
        ? 'black'
        : 'lightgray'
    }}>
    <button className="button" onClick={toggleThema}>다크모드변경</button>
  </footer>)
};

export default Footer
