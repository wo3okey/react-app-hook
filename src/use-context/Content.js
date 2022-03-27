import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import {UserContext} from './UserContext'

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (<article className="content" style={{
      backgroundColor: isDark
        ? 'black'
        : 'white',
      color: isDark
        ? 'white'
        : 'black'
    }}>{user}님 좋은하루 되세요.</article>)
};

export default Content
