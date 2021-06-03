import React, { useEffect } from 'react';
import { Route, Switch} from  'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import { getInitialData } from './actions/initialData.action';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
   
},[]);
  //routes
  return (
    <div className="App">
     
       <Switch>
         <PrivateRoute path = "/" exact component ={ Home }/>
         <PrivateRoute path = "/category" exact component = {Category}/>
         <PrivateRoute path = "/products" exact component = {Products}/>
         <PrivateRoute path = "/orders" exact component = {Orders}/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
       </Switch>
     
      
    </div>
  );
}

export default App;
