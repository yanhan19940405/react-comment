import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute, Redirect } from 'react-router';
import Applist from '../templates/applist';
import Home from '../templates/home';
import About from '../templates/about';
import NotFound from '../templates/notfound';
import Comment from '../templates/comment';
import CommentApp from '../templates/commentapp';
import CommentInput from '../templates/commentinput';
import Commentlist from '../templates/commentlist';

   

class Routes extends React.Component{
	render() {

		return  (
    
    <Router history={browserHistory}>
         <Route path="/" component={Applist}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="smart" component={NotFound} />
          <Route path="commentapp" component={CommentApp} />
        </Route>
      </Router>
      );
     
	}
}


export default Routes;