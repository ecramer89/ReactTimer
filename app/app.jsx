/* the cause of your silly problem was putting a semicolon after the argument call to document get element by id*/
var React = require('react');
var ReactDOM = require('react-dom'); //we have to explicitly import the modules when we remove them from the script tags for these dependencies in index, which otherwise makes stuff globally available
//"destruturing syntax" applied to the object that is returned by the require command
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');



require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


//there is something important about the order (yes, because they are processed l-r. so first we transform the sheet to style)
require('style!css!sass!applicationStyles'); //style! and css! are both specialized webpack loaders that we installed to handle these file types

//router has one prop, history

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      </Route>
    </Router>,
    document.getElementById('app')
);
