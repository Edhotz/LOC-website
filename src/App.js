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
import { PrivateRoute } from "./privateRoutes";
import customerProfile from "./pages/customerProfile";
import ProceedingData from "./pages/proceedingData";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marketing" component={MarketingPage} />
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/clients/login" component={customersDashboard} />
        <BgProvider>
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/users" component={UsersPage} />
          <PrivateRoute path="/ativities" component={AtitivitiesPage} />
          <PrivateRoute path="/projects" component={ProjectsPage} />
          <PrivateRoute path="/tasks" component={TasksPage} />
          <PrivateRoute path="/legalization" component={legalization} />
          <PrivateRoute path="/customers" component={CustomersPage} />
          <PrivateRoute path="/assign" component={assignProject} />
          <PrivateRoute path="/clients/main-page" component={MainPage} />
          <PrivateRoute
            path="/admin/customer-profile/:id"
            component={customerProfile}
          />
          <PrivateRoute
            path="/admin/proceeding-data"
            component={ProceedingData}
          />
        </BgProvider>
      </Switch>
    </Router>
  );
}

export default App;
