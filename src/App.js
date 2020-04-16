import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import './App.css';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
