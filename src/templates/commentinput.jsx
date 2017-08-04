import React from 'react';
import ReactDOM from 'react-dom';
class CommentInput extends React.Component{
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange () {
    this.setState({
      username: document.getElementById('test').value
    })
  }
  handlecontentChange () {
    this.setState({
      content: document.getElementById('test2').value
    })
  }
  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
    // if (this.props.onSubmit) {
    //   const { username, content } = this.state
    //   this.props.onSubmit({username, content})
    // }
    // this.setState({ content: '' })
  }
  componentDidMount () {
    this.textarea.focus()
  }
   _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }
componentWillMount () {
    this._loadUsername()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

	render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input id="test" onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea id="test2"ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handlecontentChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}


export default CommentInput;