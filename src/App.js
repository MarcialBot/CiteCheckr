import React from 'react';
import { Switch, Route }  from 'react-router-dom';

//Presentational components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Page components
import Home from './pages/Home/Home';
import Campaigns from './pages/Campaigns/Campaigns';
import Profile from './pages/Profile/Profile';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {

    }
  }
  render() {
    return (
    <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          <Switch> 
            <Route exact path ='/' render={props => 
              <Home />
            } />
            <Route exact path ='/campaigns' render={props => 
              <Campaigns />
            } />
            <Route exact path ='/profile' render={props => 
              <Profile />
            } />
          </Switch>
        </div>
        <Footer />
    </div>
  );
    }
}

export default App;
