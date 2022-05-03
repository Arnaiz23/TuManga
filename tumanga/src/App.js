import './App.css';

import { Route } from 'wouter'
import PublicHome from './pages/publicView/PublicHome';
import Account from 'pages/publicView/Account';
import ProductsView from 'pages/publicView/ProductsView';


function App() {
  return (
    <div className="App">
      <Route path='/' component={PublicHome} />
      <Route path='/account' component={Account} />
      <Route path='/products/mangas' component={ProductsView} />
      <Route path='/products/merchandising' component={ProductsView} />
    </div>
  );
}

export default App;
