import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'es6-promise';


class About extends React.Component {
// constructor () {
//     super()
//     this.state = {
//       username: "",
//       password:"",
//       flv:""

//     }
//   }

//   componentWillMount (){
//   	// var result = fetch('https://api.github.com/', { 
//    // method: 'GET',
//    //  mode: 'cors',
//    //  headers: { 'Accept': 'application/json' } });
//    //  result.then(res => { return res.json() }).
//    //  then(json => { this.setState({username:json.authorizations_url,
//    //  password:json.commit_search_url,flv:json.feeds_url })});
// function status(response){
//     if(response.status>=200 && response.status<300){
//         return Promise.resolve(response);
//     }
//     else{
//         return Promise.reject(new Error(response.statusText));
//     }
// }
// function json(response){
//     return response.json();
// }
// fetch("https://api.github.com/")
// .then(status)
// .then(json)
// .then(
//     json=>{this.setState({username:json.authorizations_url,
//     password:json.commit_search_url,flv:json.feeds_url })}
// )
// .catch(function(err){
//     console.log("Fetch错误:"+err);
// });
//   }

  render () {
    return (
      <div id="about">
      <Aboutfetch/>
     
      </div>


    )
  }
}
class Aboutfetch extends React.Component {
constructor () {
    super()
    this.state = {
      username: "",
      password:"",
      flv:""

    }
  }
  componentWillMount (){
  	// var result = fetch('https://api.github.com/', { 
   // method: 'GET',
   //  mode: 'cors',
   //  headers: { 'Accept': 'application/json' } });
   //  result.then(res => { return res.json() }).
   //  then(json => { this.setState({username:json.authorizations_url,
   //  password:json.commit_search_url,flv:json.feeds_url })});
function status(response){
    if(response.status>=200 && response.status<300){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(new Error(response.statusText));
    }
}
function json(response){
    return response.json();
}
fetch("https://api.github.com/")
.then(status)
.then(json)
.then(
    json=>{this.setState({username:json.authorizations_url,
    password:json.commit_search_url,flv:json.feeds_url })}
)
.catch(function(err){
    console.log("Fetch错误:"+err);
});
  }

  render () {
    return (
      <div >
      <h2>使用Fetch交互</h2>
     <img src={require('../img/fetch.jpg')}/>
      <p>如图1：代码交互示意图</p>
      <ul>
         <li><strong>username:</strong>{this.state.username}</li>
         <li><strong>password:</strong>{this.state.password}</li>
         <li><strong>flv:</strong>{this.state.flv}</li>
      </ul>
      </div>


    )
  }

}

export default About;