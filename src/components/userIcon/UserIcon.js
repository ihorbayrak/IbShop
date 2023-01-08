import { useState } from 'react';

import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase';

import { Link } from 'react-router-dom';

import { AiOutlineUser } from 'react-icons/ai';

import { UserContainer, UserMenu, UserMenuItem } from './style.js';

const UserIcon = () => {
    const { authUser, isLoggedIn } = useSelector((state) => state.auth);

    const [isMenuActive, setIsMenuActive] = useState(false);

    const onActiveMenu = () => {
        setIsMenuActive((state) => !state);
    };

    const setUserMenuItems = () => {
        if (isLoggedIn) {
            return (
                <>
                    <UserMenuItem isLogged>
                        {authUser.displayName}
                    </UserMenuItem>
                    <UserMenuItem onClick={signOutUser}>
                        Sign Out
                    </UserMenuItem>
                </>
            );
        }

        if (!isLoggedIn) {
            return (
                <>
                    <li className='user__menu-item'>
                        <Link to='/authentication/sign-in'>Sign In</Link>
                    </li>
                    <li className='user__menu-item'>
                        <Link to='/authentication/join'>Join</Link>
                    </li>
                </>
            );
        }
    };

    return (
        <UserContainer>
            <AiOutlineUser onClick={onActiveMenu} />
            {isMenuActive && (
                <UserMenu>
                    <ul>{setUserMenuItems()}</ul>
                </UserMenu>
            )}
        </UserContainer>
    );
};

export default UserIcon;
