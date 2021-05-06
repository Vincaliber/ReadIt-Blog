import React from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { data } from './components/Data'
import Home from './components/Home'
import Articles from './components/Articles'
import Team from './components/Team'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleBlog from './components/SingleBlog';
import Default from './components/Default';

function App(props) {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Articles/" component={Articles} />
          <Route path="/Team" component={Team} />
          <Route path="/Contact" component={Contact} />
          <Route path="/SingleBlog/:value/:id" component={SingleBlog} />
          <Route component={Default} />
        </Switch>
        <Footer data={data} />
      </Router>

    </div>
  );
}

export default App;
