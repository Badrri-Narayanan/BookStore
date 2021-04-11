import './App.css';
import LoginPage from './pages/login-page/login-page.component';
import {Route, Link, Switch} from 'react-router-dom'

import { connect } from 'react-redux'
import LandingPage from './pages/landing-page/landing-page.compoenet';
import AuthorProfilePage from './pages/author-profile/author-profile.component';

import { setAccessLevel } from './redux/access-level/access-level.action'
import setIsSignedInState from './redux/is-signed-in/is-signed-in.action'

function App({isSignedIn, setAccessLevel, setIsSignedInState}) {
  const handleLogout = () => {
    setIsSignedInState()
    setAccessLevel("")
  }
  return (
    <div className="App">
      {
        (isSignedIn) ?
          <Link 
            onClick={() => handleLogout()}
            to="/" 
            className="logout-btn btn btn-warning">
              Logout
          </Link> 
            : 
          null
      }
      <Switch>
        <Route exact path="/" render={() => isSignedIn ? <LandingPage /> : <LoginPage />} />
        <Route exact path={`/author/:authorId`} render={(props) => isSignedIn ? <AuthorProfilePage {...props} /> : <LoginPage />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  isSignedIn : state.is_signed_in.isSignedIn,
}) 

const mapDispatchToProps = dispatch => ({
  setAccessLevel : accessLevel => dispatch(setAccessLevel(accessLevel)),
  setIsSignedInState : () => dispatch(setIsSignedInState())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
