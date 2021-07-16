import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToDoLists from "./pages/ToDoLists";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="logo">ToDo-List</h1>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/lists">
            <PrivateRoute component={ToDoLists}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
