import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Foods from './Components/Foods/Foods';

import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import FoodDetails from './Components/FoodDetails/FoodDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header></Header>

        {/* Switch Able  component */}
        <Switch>
          <Route exact path="/">
              <Banner></Banner>
              <Foods></Foods>
              <Features></Features>
          </Route>
          <Route path="/food/:id">
              <FoodDetails></FoodDetails>
          </Route>
          <Route path="/login">
              <h1>Welcome to Login</h1>
          </Route>
        </Switch>
        {/* End of Switch Able  component */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
