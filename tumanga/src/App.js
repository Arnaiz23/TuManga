import './App.css';

import { Route } from 'wouter'
import PublicHome from './pages/PublicHome';
import Account from 'pages/Account';


function App() {
  return (
    <div className="App">
      <Route path='/' component={PublicHome} />
      <Route path='/account' component={Account} />
    </div>
  );
}

export default App;
