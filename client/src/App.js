import './App.css';

import {Switch, Route} from 'react-router-dom';

// Components
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <Switch>
      <Route path='/' component={LoginPage} />
    </Switch>
  );
}

export default App;
