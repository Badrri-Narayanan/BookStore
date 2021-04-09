import './App.css';
import LoginPage from './pages/login-page/login-page.component';
import {Route} from 'react-router-dom'

import { connect } from 'react-redux'
import LandingPage from './pages/landing-page/landing-page.compoenet';

function App({isSignedIn}) {
  return (
    <div className="App">
      <h1>Book Worm</h1>
      <Route exact path="/" render={() => isSignedIn ? <LandingPage /> : <LoginPage />} />
    </div>
  );
}

const mapStateToProps = state => ({
  isSignedIn : state.is_signed_in.isSignedIn,
}) 

export default connect(mapStateToProps)(App);
