import { useEffect, lazy, Suspense } from 'react';

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser, removeCurrentUser } from '../../utils/reducers/authSlice/authSlice';

import { Route, Routes } from 'react-router-dom';

import AppFooter from '../appFooter/AppFooter';
import HomePage from '../pages/homePage/HomePage';
import DeliveryPage from '../pages/deliveryPage/DeliveryPage';
import ContactsPage from '../pages/contactsPage/ContactsPage';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import SingleProductPage from '../pages/singleProductPage/SingleProductPage';
import CheckoutPage from '../pages/checkoutPage/CheckoutPage';
import SignInPage from '../pages/signInPage/SignInPage';
import JoinPage from '../pages/joinPage/JoinPage';
import Spinner from '../spinner/Spinner';

const ShopPage = lazy(() => import('../pages/shopPage/ShopPage'));
const Page404 = lazy(() => import('../pages/404/Page404'));
const AppHeader = lazy(() => import('../appHeader/AppHeader'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                const { displayName, email, uid } = user;

                createUserDocumentFromAuth(user);

                const authUserObj = {
                    uid,
                    displayName: displayName ? displayName : email.slice(0, email.indexOf('@')),
                    email,
                };
                dispatch(setCurrentUser(authUserObj));
            }

            if (!user) {
                dispatch(removeCurrentUser());
            }
        });

        return unsubscribe;
    }, []);

    return (
        <div className='app'>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path='/' element={<AppHeader />}>
                        <Route index element={<HomePage />} />
                        <Route path='delivery' element={<DeliveryPage />} />
                        <Route path='contacts' element={<ContactsPage />} />
                        <Route path='catalog' element={<CatalogPage />} />
                        <Route path='shop/:category' element={<ShopPage />} />
                        <Route path='shop/:category/:product' element={<SingleProductPage />} />
                        <Route path='checkout' element={<CheckoutPage />} />
                        <Route path='*' element={<Page404 />} />
                    </Route>

                    <Route path='/authentication/sign-in' element={<SignInPage />} />
                    <Route path='/authentication/join' element={<JoinPage />} />
                </Routes>

                <AppFooter />
            </Suspense>
        </div>
    );
};

export default App;
