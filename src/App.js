import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PersonDetails from './PersonDetails';
import NotFound from './NotFound';
import PersonTable from './PersonTable';
import SettlementDetails from './SettlementDetails';
import SettlementTable from './SettlementTable';
import SimNavBar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <SimNavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/persons" />
            </Route>
            <Route path="/persons">
              <PersonTable />
            </Route>
            <Route path="/settlements">
              <SettlementTable />
            </Route>
            <Route path="/person/:id">
              <PersonDetails />
            </Route>
            <Route path="/settlement/:id">
              <SettlementDetails />
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
