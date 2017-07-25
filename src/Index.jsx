import React from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component{
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment (comment) {
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
	render() {

		return  (

    <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
      );
     
	}
}


ReactDOM.render(< CommentApp/>, document.getElementById('root'));
export default CommentApp;