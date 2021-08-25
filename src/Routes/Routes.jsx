import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProductPage from '../Admin/AddProductPage';
import EditProductPage from '../Admin/EditProductPage';
import Cart from '../components/Cart/Cart';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ProductDetails from '../components/ProductDetails';
import Favorite from '../components/Favorite';
import ProductContextProvider from '../contexts/ProductContext';
import ProductList from '../components/ProductList'
import PrivateRoute from './PrivateRoute';
import Signup from '../Auth/SignUp';
import Login from '../Auth/Login';
import AuthContextProvider from '../contexts/AuthContext';
import ForgotPassword from '../Auth/ForgotPassword';
import UpdateProfile from '../Auth/UpdateProfile';
import Creditcard from '../components/creditCard/CreditCard';
import Footer from '../components/footer/Footer';




const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <ProductContextProvider>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <Route exact path="/list" component={ProductList} />
                        <Route exact path="/addproduct" component={AddProductPage} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path='/details/:id' component={ProductDetails} />
                        <Route exact path="/edit/:id" component={EditProductPage} />
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                        <Route exact path="/pay" component={Creditcard} />
                        <Route exact path="/favorite" component={Favorite} />


                    </Switch>
                    <Footer />
                </ProductContextProvider>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;