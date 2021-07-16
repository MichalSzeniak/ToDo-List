import './style/App.scss';
import Login from './pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="logo">ToDo-List</h1>
      <Router>
          <Login/>
      </Router>
    </div>
  );
}

export default App;
