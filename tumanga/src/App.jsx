import './App.css';

import { Route } from 'wouter'
import PublicHome from '@pages/publicView/PublicHome/index.jsx';
import Account from '@pages/publicView/Account';
import ProductsView from '@pages/publicView/ProductsView/index.jsx';

import { ProductsContextProvider } from '@/context/ProductsContext.jsx'
import ProductView from '@pages/publicView/ProductView/index.jsx';
import Login from '@pages/publicView/Login/Login.jsx';
import Register from '@pages/publicView/Register/Register.jsx';
import OrdersAccount from '@pages/publicView/Account/OrdersAccount.jsx';
import AddressAccount from '@pages/publicView/Account/AddressAccount.jsx';
import CardsAccount from '@pages/publicView/Account/CardsAccount/CardsAccount.jsx';
import CommentsAccount from '@pages/publicView/Account/CommentsAccount.jsx';
import { OrderContextProvider } from '@/context/OrderContext.jsx';
import OrderProcess from '@pages/publicView/OrderProcess/OrderProcess.jsx';
import Payment from '@pages/publicView/Payment/Payment.jsx';
import OrderDetail from '@pages/publicView/OrderDetail/OrderDetail.jsx';
import SearchProducts from '@pages/publicView/SearchProducts/SearchProducts.jsx';
import ForgetPassword from '@pages/publicView/ForgetPassword/ForgetPassword.jsx';
import RecoverPassword from '@pages/publicView/RecoverPassword/RecoverPassword.jsx';
// import PlatformHome from '@pages/platform/PlatformHome.jsx';
import { AdminContextProvider } from '@/context/AdminContext.jsx';
// import PlatformUsers from '@pages/platform/PlatformUsers.jsx';
// import PlatformEditUser from '@pages/platform/PlatformEditUser.jsx';
// import PlatformNewUser from '@pages/platform/PlatformNewUser.jsx';
// import PlatformProducts from '@pages/platform/PlatformProducts.jsx';
// import PlatformEditProducts from '@pages/platform/PlatformEditProducts.jsx';
// import PlatformNewProduct from '@pages/platform/PlatformNewProduct.jsx';
// import PlatformOrders from '@pages/platform/PlatformOrders.jsx';
// import PlatformRoles from '@pages/platform/PlatformRoles.jsx';
// import PlatformNewRole from '@pages/platform/PlatformNewRole.jsx';
// import PlatformEditRoleView from '@pages/platform/PlatformEditRoleView.jsx';
// import PlatformComments from '@pages/platform/PlatformComments.jsx';


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
      // <AdminContextProvider>
      //   <Route path='/platform' component={PlatformHome} />
      //   <Route path='/platform/users' component={PlatformUsers} />
      //   <Route path='/platform/user/:id' component={PlatformEditUser} />
      //   <Route path='/platform/user' component={PlatformNewUser} />
      //   <Route path='/platform/products' component={PlatformProducts} />
      //   <Route path='/platform/product/:id' component={PlatformEditProducts} />
      //   <Route path='/platform/product' component={PlatformNewProduct} />
      //   <Route path='/platform/orders' component={PlatformOrders} />
      //   <Route path='/platform/roles' component={PlatformRoles} />
      //   <Route path='/platform/role' component={PlatformNewRole} />
      //   <Route path='/platform/role/:id' component={PlatformEditRoleView} />
      //   <Route path='/platform/comments' component={PlatformComments} />
      // </AdminContextProvider>
    </div>
  );
}

export default App;
