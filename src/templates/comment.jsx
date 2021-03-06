import React from 'react';
import ReactDOM from 'react-dom';
class Comment extends React.Component{
  // static propTypes = {
  //   comment: PropTypes.object.isRequired,
  //   onDeleteComment: PropTypes.func,
  //   index: PropTypes.number
  // }
handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }
	// render () {
 //    return (
 //      <div className='comment'>
 //        <div className='comment-user'>
 //          <span>{this.props.comment.username}</span>：
 //        </div>
 //        <p>{this.props.comment.content}</p>
 //      </div>
 //    )
 //  }
 constructor () {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount () {
    this._updateTimeString()
     this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
componentWillUnmount () {
    clearInterval(this._timer)
  }
  _updateTimeString () {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p className='comment-text'>{comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment

