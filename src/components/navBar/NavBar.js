import { useSelector } from 'react-redux';

import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

import { NavBarContainer, NavBarMenu, NavBarLink } from './style.js';

const NavBar = () => {
    const { linksData, hamburgerMenuActive } = useSelector((state) => state.navBar);

    const renderLinks = (arr) => {
        return arr.map(({ id, label, route }) => {
            return (
                <li key={id}>
                    <NavBarLink to={`${route}`}>{label}</NavBarLink>
                </li>
            );
        });
    };

    const elements = renderLinks(linksData);

    return (
        <NavBarContainer>
            <NavBarMenu>{elements}</NavBarMenu>

            {hamburgerMenuActive && <HamburgerMenu />}
        </NavBarContainer>
    );
};

export default NavBar;
