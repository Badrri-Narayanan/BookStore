import './App.css';
import LoginPage from './pages/login-page.component';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Book Worm</h1>
      <Route exact path="/" component={LoginPage} />
    </div>
  );
}

export default App;
