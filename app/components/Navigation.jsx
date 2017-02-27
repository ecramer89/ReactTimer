import React from 'react';
import {Link, IndexLink} from 'react-router'; //you need to place the desired component/module in deconstructor syntax if it isn't the default export of the module. the module is an object.

export default class Navigation extends React.Component{
//do not forget that in react the css term class becomes className (otherwise naming conflict with React class)
//IndexLink is smart enough to know that navigating to /X shouldn't imply that the path to / is active. */
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink to="/#" activeClassName="active-link">Timer</IndexLink></li>
          <li><Link to="/#" activeClassName="active-link">Countdown</Link></li>
        </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
          <li className="menu-text">Copied from a discounted Udemy course, by <a href="http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg" target="_blank">Emily</a></li>
        </ul>
        </div>
      </div>
    )
  }
}
