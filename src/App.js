import './App.css';
import LoginPage from './pages/login-page/login-page.component';
import {Route, Switch} from 'react-router-dom'

import { connect } from 'react-redux'
import LandingPage from './pages/landing-page/landing-page.compoenet';
import AuthorProfilePage from './pages/author-profile/author-profile.component';

function App({isSignedIn}) {
  return (
    <div className="App">
      <h1>Book Worm</h1>
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

export default connect(mapStateToProps)(App);
