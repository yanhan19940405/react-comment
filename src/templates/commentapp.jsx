import React from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './commentinput';
import CommentList from './commentlist';

class CommentApp extends React.Component{
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleDeleteComment (index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }
  // handleSubmitComment (comment) {
  //   this.state.comments.push(comment)
  //   this.setState({
  //     comments: this.state.comments
  //   })
  // }
	render() {

		return  (

    <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
      );
     
	}
}



export default CommentApp;