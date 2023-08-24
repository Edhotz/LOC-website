import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { MarketingPage } from "./pages/MarketingPage";
import { LoginPage } from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import history from "./history";
import AtitivitiesPage from "./pages/AtitivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TasksPage from "./pages/TasksPage";
import CustomersPage from "./pages/CustomersPage";
import PdfPage from "./pages/PdfPage";
import customersDashboard from "./pages/customersDashboard";
import { BgProvider } from "./styles";
import MainPage from "./pages/customersDashboard/Main-page";
import legalization from "./pages/Legalization";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/marketing" component={MarketingPage} />
        <Route path="/login" component={LoginPage} />
        <BgProvider>
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/ativities" component={AtitivitiesPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/legalization" component={legalization} />
          <Route path="/customers" component={CustomersPage} />
          <Route path="/pdf" component={PdfPage} />
          <Route path="/clients/login" component={customersDashboard} />
          <Route path="/clients/main-page" component={MainPage} />
        </BgProvider>
      </Switch>
    </Router>
  );
}

export default App;
