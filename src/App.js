import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import signup from './components/Pages/signup';

function App() {
  return (
    <div className="App">
     
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/services' exact component={Services}/>
         <Route path='/products' exact component={Products}/>
         <Route path='/signup' exact component={signup}/>
       </Switch>
     </Router>

    </div>
  );
}

export default App;
