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
import CardsAccount from 'pages/publicView/Account/CardsAccount/CardsAccount';
import CommentsAccount from 'pages/publicView/Account/CommentsAccount';
import { OrderContextProvider } from 'context/OrderContext';
import OrderProcess from 'pages/publicView/OrderProcess/OrderProcess';
import Payment from 'pages/publicView/Payment/Payment';
import OrderDetail from 'pages/publicView/OrderDetail/OrderDetail';
import SearchProducts from 'pages/publicView/SearchProducts/SearchProducts';
import ForgetPassword from 'pages/publicView/ForgetPassword/ForgetPassword';
import RecoverPassword from 'pages/publicView/RecoverPassword/RecoverPassword';
import PlatformHome from 'pages/platform/PlatformHome';
import { AdminContextProvider } from 'context/AdminContext';
import PlatformUsers from 'pages/platform/PlatformUsers';
import PlatformEditUser from 'pages/platform/PlatformEditUser';
import PlatformNewUser from 'pages/platform/PlatformNewUser';
import PlatformProducts from 'pages/platform/PlatformProducts';
import PlatformEditProducts from 'pages/platform/PlatformEditProducts';


function App() {
  return (
    <div className="App">
      <OrderContextProvider>
        <Route path='/' component={PublicHome} />
        <Route path='/account' component={Account} />
        <Route path='/account/orders' component={OrdersAccount} />
        <Route path='/account/address' component={AddressAccount} />
        <Route path='/account/cards' component={CardsAccount} />
        <Route path='/account/comments' component={CommentsAccount} />
        <Route path='/search/:search' component={SearchProducts} />
        <ProductsContextProvider>
          <Route path='/products/mangas' component={ProductsView} />
          <Route path='/products/merchandising' component={ProductsView} />
        </ProductsContextProvider>
        <Route path='/product/:id' component={ProductView} />
        <Route path='/order' component={OrderProcess} />
        <Route path='/order/:id' component={OrderDetail} />
        <Route path='/payment' component={Payment} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </OrderContextProvider>
      <Route path='/forgetPassword' component={ForgetPassword} />
      <Route path='/recoverPassword/:token' component={RecoverPassword} />
      <AdminContextProvider>
        <Route path='/platform' component={PlatformHome} />
        <Route path='/platform/users' component={PlatformUsers} />
        <Route path='/platform/user/:id' component={PlatformEditUser} />
        <Route path='/platform/user' component={PlatformNewUser} />
        <Route path='/platform/products' component={PlatformProducts} />
        <Route path='/platform/product/:id' component={PlatformEditProducts} />
      </AdminContextProvider>
    </div>
  );
}

export default App;
