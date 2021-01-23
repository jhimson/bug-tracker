import './App.css';

import {Switch, Route} from 'react-router-dom';

// Components
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/PageNotFound'



function App() {
  return (
    <Switch>
      <Route path='/' component={LoginPage} exact/>
      <Route path='/register' component={RegisterPage} exact/>
      <Route component={PageNotFound} exact/>
    </Switch>
  );
}

export default App;
