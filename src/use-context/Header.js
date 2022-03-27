import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import {UserContext} from './UserContext'

const Header = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (<header className="header" style={{
      backgroundColor: isDark
        ? 'black'
        : 'lightgray',
      color: isDark
        ? 'white'
        : 'black'
    }}>
    <h1>welcome {user}!</h1>
  </header>)
};

export default Header
