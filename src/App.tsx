import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DataVizPage from "./pages/DataVizPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/data-visualization">
       <DataVizPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
