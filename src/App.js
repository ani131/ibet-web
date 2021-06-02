import Navbar from './components/Navbar';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './screens/NotFound';
import Quiz from './screens/Quiz';
import Dashboard from './screens/Dashboard';
import Scoring from './screens/Scoring';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/scoring">
              <Scoring />
            </Route> 
            <Route exact path="/quiz">
              <Quiz />
            </Route>  
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;