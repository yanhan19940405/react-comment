import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Comment from './comment';
import CommentApp from './commentapp';
import CommentInput from './commentinput';
import Commentlist from './commentlist';

class Applist extends React.Component {
  
  render () {
    return (
       <div id="applist">
         <Nav />
          <div>{this.props.children}</div>
       </div>
    )
  }
}
export default Applist;