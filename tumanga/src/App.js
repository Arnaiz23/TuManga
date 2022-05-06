import './App.css';

import { Route } from 'wouter'
import PublicHome from './pages/publicView/PublicHome';
import Account from 'pages/publicView/Account';
import ProductsView from 'pages/publicView/ProductsView';

import { ProductsContextProvider } from 'context/ProductsContext'
import ProductView from 'pages/publicView/ProductView';
import Login from 'pages/publicView/Login/Login';
import Register from 'pages/publicView/Register/Register';
import OrdersAccount from 'pages/publicView/Account/OrdersAccount';
import AddressAccount from 'pages/publicView/Account/AddressAccount';


function App() {
  return (
    <div className="App">
      <Route path='/' component={PublicHome} />
      <Route path='/account' component={Account} />
      <Route path='/account/orders' component={OrdersAccount} />
      <Route path='/account/address' component={AddressAccount} />
      <ProductsContextProvider>
        <Route path='/products/mangas' component={ProductsView} />
        <Route path='/products/merchandising' component={ProductsView} />
      </ProductsContextProvider>
      <Route path='/product/:id' component={ProductView} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </div>
  );
}

export default App;
