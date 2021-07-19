import "./style/App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import ToDoLists from "./pages/ToDoLists";
import ListElement from "./pages/ListElement";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <h1 className="logo">ToDo-List</h1>
        <Switch>
          <Route path="/" exact render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route
            path="/lists/:id"
            render={() => <PrivateRoute component={ListElement} />}
          />
          <Route
            path="/lists"
            render={() => <PrivateRoute component={ToDoLists} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
