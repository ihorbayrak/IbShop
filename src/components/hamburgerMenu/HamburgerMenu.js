import { useDispatch, useSelector } from 'react-redux';
import { closeHamburgerMenu } from '../../redux/reducers/navBarSlice/navBarSlice';

import {
    HamburgerMenuContainer,
    HamburgerMenuContent,
    HamburgerMenuOverlay,
    HamburgerMenuLink,
} from './style.js';

const HamburgerMenu = () => {
    const { linksData, hamburgerMenuActive } = useSelector((state) => state.navBar);
    const dispatch = useDispatch();

    const renderLinks = (arr) => {
        return arr.map(({ id, label, route }) => {
            return (
                <li key={id}>
                    <HamburgerMenuLink to={`${route}`}>{label}</HamburgerMenuLink>
                </li>
            );
        });
    };

    const elements = renderLinks(linksData);

    return (
        <HamburgerMenuContainer
            isActive={hamburgerMenuActive}
            onClick={() => dispatch(closeHamburgerMenu())}
        >
            <HamburgerMenuOverlay></HamburgerMenuOverlay>

            <HamburgerMenuContent onClick={(e) => e.stopPropagation()}>
                <HamburgerMenuLink accent='accent' to='/catalog'>
                    Catalog
                </HamburgerMenuLink>

                <ul>{elements}</ul>
            </HamburgerMenuContent>
        </HamburgerMenuContainer>
    );
};

export default HamburgerMenu;
