import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
class CommentList extends React.Component{
  // static propTypes = {
  //   comments: PropTypes.array,
  //   onDeleteComment: PropTypes.func
  // }


  //ES7语法，需要安装babel-preset-stage-0并在babelrc文件中申明转码规则
  static defaultProps = {
    comments: []
  }
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
	render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]

  
     
        return (
          <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)}/>)}
      </div>
        )
      }

  
}


export default CommentList;