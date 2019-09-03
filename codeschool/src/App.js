import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './landing-page/Home'
import Signup from './userregistration/Signup'
import Login from './userregistration/Login'
import Auth from "./userregistration/Auth"
import Faq from './pages/Faq'
import Error from './components/Error'


function App() {
  return (
   <div className="App">
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/faq" component={Faq}/>
    <Route exact path="/authentification" component={Auth}/>
    <Route component={Error} />
   </Switch>
   </div>
  );
}

export default App;