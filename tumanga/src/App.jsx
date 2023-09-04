import { lazy, Suspense } from "react"
import PublicHome from "@pages/publicView/PublicHome/index.jsx"
import { Route } from "wouter"

import { AdminContextProvider } from "@/context/AdminContext.jsx"
import { OrderContextProvider } from "@/context/OrderContext.jsx"
import { ProductsContextProvider } from "@/context/ProductsContext.jsx"

import Spinner from "./components/publicFolder/Spinner/Spinner"

import "./App.css"
const PlatformHome = lazy(() => import("@pages/platform/PlatformHome.jsx"))
const PlatformComments = lazy(() =>
  import("@pages/platform/PlatformComments.jsx"),
)
const PlatformEditProducts = lazy(() =>
  import("@pages/platform/PlatformEditProducts.jsx"),
)
const PlatformEditRoleView = lazy(() =>
  import("@pages/platform/PlatformEditRoleView.jsx"),
)
const PlatformEditUser = lazy(() =>
  import("@pages/platform/PlatformEditUser.jsx"),
)
const PlatformNewProduct = lazy(() =>
  import("@pages/platform/PlatformNewProduct.jsx"),
)
const PlatformNewRole = lazy(() =>
  import("@pages/platform/PlatformNewRole.jsx"),
)
const PlatformNewUser = lazy(() =>
  import("@pages/platform/PlatformNewUser.jsx"),
)
const PlatformOrders = lazy(() => import("@pages/platform/PlatformOrders.jsx"))
const PlatformProducts = lazy(() =>
  import("@pages/platform/PlatformProducts.jsx"),
)
const PlatformRoles = lazy(() => import("@pages/platform/PlatformRoles.jsx"))
const PlatformUsers = lazy(() => import("@pages/platform/PlatformUsers.jsx"))
const Account = lazy(() => import("@pages/publicView/Account"))
const AddressAccount = lazy(() =>
  import("@pages/publicView/Account/AddressAccount.jsx"),
)
const CardsAccount = lazy(() =>
  import("@pages/publicView/Account/CardsAccount/CardsAccount.jsx"),
)
const CommentsAccount = lazy(() =>
  import("@pages/publicView/Account/CommentsAccount.jsx"),
)
const OrdersAccount = lazy(() =>
  import("@pages/publicView/Account/OrdersAccount.jsx"),
)
const ForgetPassword = lazy(() =>
  import("@pages/publicView/ForgetPassword/ForgetPassword.jsx"),
)
const Login = lazy(() => import("@pages/publicView/Login/Login.jsx"))
const OrderDetail = lazy(() =>
  import("@pages/publicView/OrderDetail/OrderDetail.jsx"),
)
const OrderProcess = lazy(() =>
  import("@pages/publicView/OrderProcess/OrderProcess.jsx"),
)
const Payment = lazy(() => import("@pages/publicView/Payment/Payment.jsx"))
const ProductsView = lazy(() =>
  import("@pages/publicView/ProductsView/index.jsx"),
)
const ProductView = lazy(() =>
  import("@pages/publicView/ProductView/index.jsx"),
)
const RecoverPassword = lazy(() =>
  import("@pages/publicView/RecoverPassword/RecoverPassword.jsx"),
)
const Register = lazy(() => import("@pages/publicView/Register/Register.jsx"))
const SearchProducts = lazy(() =>
  import("@pages/publicView/SearchProducts/SearchProducts.jsx"),
)

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div
            style={{
              display: "grid",
              placeItems: "center",
              height: "100dvh",
            }}
          >
            <Spinner />
          </div>
        }
      >
        <OrderContextProvider>
          <Route path="/" component={PublicHome} />
          <Route path="/account" component={Account} />
          <Route path="/account/orders" component={OrdersAccount} />
          <Route path="/account/address" component={AddressAccount} />
          <Route path="/account/cards" component={CardsAccount} />
          <Route path="/account/comments" component={CommentsAccount} />
          <Route path="/search/:search" component={SearchProducts} />
          <ProductsContextProvider>
            <Route path="/products/mangas" component={ProductsView} />
            <Route path="/products/merchandising" component={ProductsView} />
          </ProductsContextProvider>
          <Route path="/product/:id" component={ProductView} />
          <Route path="/order" component={OrderProcess} />
          <Route path="/order/:id" component={OrderDetail} />
          <Route path="/payment" component={Payment} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </OrderContextProvider>
        <Route path="/forgetPassword" component={ForgetPassword} />
        <Route path="/recoverPassword/:token" component={RecoverPassword} />

        <AdminContextProvider>
          <Route path="/platform" component={PlatformHome} />
          <Route path="/platform/users" component={PlatformUsers} />
          <Route path="/platform/user/:id" component={PlatformEditUser} />
          <Route path="/platform/user" component={PlatformNewUser} />
          <Route path="/platform/products" component={PlatformProducts} />
          <Route
            path="/platform/product/:id"
            component={PlatformEditProducts}
          />
          <Route path="/platform/product" component={PlatformNewProduct} />
          <Route path="/platform/orders" component={PlatformOrders} />
          <Route path="/platform/roles" component={PlatformRoles} />
          <Route path="/platform/role" component={PlatformNewRole} />
          <Route path="/platform/role/:id" component={PlatformEditRoleView} />
          <Route path="/platform/comments" component={PlatformComments} />
        </AdminContextProvider>
      </Suspense>
    </div>
  )
}

export default App
