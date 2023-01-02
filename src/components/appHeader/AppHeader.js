import { useDispatch } from 'react-redux';
import { toggleHamburgerMenu } from '../../utils/reducers/navBarSlice/navBarSlice';

import { Link, NavLink, Outlet } from 'react-router-dom';

import CartIcon from '../cartIcon/CartIcon';
import NavBar from '../navBar/NavBar';
import Attention from '../attention/Attention';
import UserIcon from '../userIcon/UserIcon';

import './appHeader.scss';

const AppHeader = () => {
    const dispatch = useDispatch();

    let activeStyle = {
        color: '#ffffff',
        borderRadius: '40px',
        boxShadow: '0px 2px 20px 2px rgba(60, 57, 208, 0.3)',
    };

    return (
        <>
            <Attention />
            <header className='header'>
                <div className='hamburger' onClick={() => dispatch(toggleHamburgerMenu())}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='header__logo'>
                    <Link to='/'>
                        <span>Ib</span>SHOP.
                    </Link>
                </div>
                <div className='header__catalog'>
                    <NavLink
                        to='/catalog'
                        className='button header__button'
                        style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                        Catalog
                    </NavLink>
                </div>

                <NavBar />

                <CartIcon />

                <UserIcon />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppHeader;
