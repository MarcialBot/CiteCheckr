import React from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

//Presentational components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Page components
import Home from './pages/Home/Home';
import Campaigns from './pages/Campaigns/Campaigns';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.scss';
import userService from './utils/userService';

class App extends React.Component {

  state = {
    user: userService.getUser()
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {
    return (
    <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch> 
            <Route exact path ='/' render={props => 
              <Home />
            } />
            <Route exact path ='/campaigns' render={props => 
              userService.getUser()
              ? <Campaigns />
              : <Redirect to='/login' />
            } />
            <Route exact path ='/profile' render={props => 
              <Profile />
            } />
            <Route exact path ='/login' render={props => 
              <Login {...props}
              handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
            <Route exact path ='/signup' render={props => 
              <Signup {...props}  
              handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
          </Switch>
        </div>
        <Footer />
    </div>
  );
    }
}

export default App;
