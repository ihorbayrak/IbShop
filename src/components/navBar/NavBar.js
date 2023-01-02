import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

import './navBar.scss';

const NavBar = () => {
    const { linksData, hamburgerMenuActive } = useSelector((state) => state.navBar);

    let activeClassName = 'nav-bar__link nav-bar__link_active';

    const renderLinks = (arr) => {
        return arr.map(({ id, label, route }) => {
            return (
                <li key={id}>
                    <NavLink
                        to={`${route}`}
                        className={({ isActive }) => (isActive ? activeClassName : 'nav-bar__link')}
                    >
                        {label}
                    </NavLink>
                </li>
            );
        });
    };

    const elements = renderLinks(linksData);

    return (
        <nav className='nav-bar'>
            <ul className='nav-bar__menu'>{elements}</ul>

            {hamburgerMenuActive && <HamburgerMenu />}
        </nav>
    );
};

export default NavBar;
