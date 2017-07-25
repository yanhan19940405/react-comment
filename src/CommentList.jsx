import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
class CommentList extends React.Component{
  //ES7语法，需要安装babel-preset-stage-0并在babelrc文件中申明转码规则
  static defaultProps = {
    comments: []
  }
	render() {
    // const comments = [
    //   {username: 'Jerry', content: 'Hello'},
    //   {username: 'Tomy', content: 'World'},
    //   {username: 'Lucy', content: 'Good'}
    // ]

    return (
      <div>{this.props.comments.map((comment, i) => {
        return (
          <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
        )
      })}</div>
    )
  }
}


export default CommentList;