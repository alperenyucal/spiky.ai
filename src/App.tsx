import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import DataViz from "./components/DataViz/DataViz";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data-visualization">
          <DataViz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
