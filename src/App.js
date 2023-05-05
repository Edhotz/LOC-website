import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from "./pages";
import { MarketingPage } from './pages/MarketingPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/marketing' component={MarketingPage} exact />
        </Switch>
    </Router>
  );
}

export default App;
