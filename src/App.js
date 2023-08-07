import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { MarketingPage } from "./pages/MarketingPage";
import { LoginPage } from "./pages/Login";
import { AuthProvider } from "./AuthProvider";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import history from "./history";
import AtitivitiesPage from "./pages/AtitivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";
import CustomersPage from "./pages/CustomersPage";
import { RequireAuth } from "./AuthProvider/RequireAuth";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marketing" component={MarketingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/ativities" component={AtitivitiesPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/tasks" component={TasksPage} />
        <Route path="/customers" component={CustomersPage} />
      </Switch>
    </Router>
  );
}

export default App;
