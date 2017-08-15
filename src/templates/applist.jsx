import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Comment from './comment';
import CommentApp from './commentapp';
import CommentInput from './commentinput';
import Commentlist from './commentlist';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Applist extends React.Component {
  
  render () {
    return (

       <div id="applist">
         <Nav />
         <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
             
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
          <div key={this.props.location.pathname}
                     style={{position:"absolute", width: "100%"}}>
          
          {this.props.children}</div>
          </ReactCSSTransitionGroup>
       </div>
    )
  }
}
export default Applist;