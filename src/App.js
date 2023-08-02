import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { MarketingPage } from "./pages/MarketingPage";
import { LoginPage } from "./pages/Login";
import { AuthProvider } from "./AuthProvider";
import Dashboard from "./pages/Dashboard";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/marketing" component={MarketingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/users" component={UsersPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
