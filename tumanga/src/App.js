import './App.css';

import { Route } from 'wouter'
import PublicHome from './pages/publicView/PublicHome';
import Account from 'pages/publicView/Account';
import ProductsView from 'pages/publicView/ProductsView';

import { ProductsContextProvider } from 'context/ProductsContext'
import ProductView from 'pages/publicView/ProductView';


function App() {
  return (
    <div className="App">
      <Route path='/' component={PublicHome} />
      <Route path='/account' component={Account} />
      <ProductsContextProvider>
        <Route path='/products/mangas' component={ProductsView} />
        <Route path='/products/merchandising' component={ProductsView} />
      </ProductsContextProvider>
      <Route path='/product/:id' component={ProductView} />
    </div>
  );
}

export default App;
