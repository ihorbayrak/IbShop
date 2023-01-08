import { useDispatch } from 'react-redux';
import { toggleHamburgerMenu } from '../../redux/reducers/navBarSlice/navBarSlice';

import { Link, useNavigate, Outlet } from 'react-router-dom';

import CartIcon from '../cartIcon/CartIcon';
import NavBar from '../navBar/NavBar';
import Attention from '../attention/Attention';
import UserIcon from '../userIcon/UserIcon';

import { HeaderContainer, HeaderLogo, HeaderCatalog, Hamburger } from './style';
import { StyledButton } from '../../styles/Buttons';

const AppHeader = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            <Attention />
            <HeaderContainer>
                <Hamburger onClick={() => dispatch(toggleHamburgerMenu())}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>

                <HeaderLogo>
                    <Link to='/'>
                        <span>Ib</span>SHOP.
                    </Link>
                </HeaderLogo>

                <HeaderCatalog>
                    <StyledButton modifier='primary' onClick={() => navigate('/catalog')}>
                        Catalog
                    </StyledButton>
                </HeaderCatalog>

                <NavBar />

                <CartIcon />

                <UserIcon />
            </HeaderContainer>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppHeader;
