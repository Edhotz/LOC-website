import "./App.css";
import history from "./history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BgProvider } from "./styles";

import { Home } from "./pages";
import { MarketingPage } from "./pages/MarketingPage";
import { LoginPage } from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import AtitivitiesPage from "./pages/AtitivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";
import CustomersPage from "./pages/CustomersPage";
import customersDashboard from "./pages/customersDashboard";
import MainPage from "./pages/customersDashboard/Main-page";
import legalization from "./pages/Legalization";
import assignProject from "./pages/AssignProjects";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marketing" component={MarketingPage} />
        <BgProvider>
          <Route path="/admin/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/ativities" component={AtitivitiesPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/legalization" component={legalization} />
          <Route path="/customers" component={CustomersPage} />
          <Route path="/assign" component={assignProject} />
          <Route path="/clients/login" component={customersDashboard} />
          <Route path="/clients/main-page" component={MainPage} />
        </BgProvider>
      </Switch>
    </Router>
  );
}

export default App;
