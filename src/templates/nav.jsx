import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
class Nav extends React.Component {
  
  render () {
    return (
       <div id="header-nav">
        <ul>
          <li><Link to="/home">主页</Link></li>
          <li><Link to="/about">前后端交互</Link></li>
          <li><Link to="/smart">数据可视化</Link></li>
          <li><Link to="/commentapp">应用实例</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav;