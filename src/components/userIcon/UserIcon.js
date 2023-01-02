import { useState } from 'react';

import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase/firebase';

import { Link } from 'react-router-dom';

import { AiOutlineUser } from 'react-icons/ai';

import './userIcon.scss';

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
                    <li className='user__menu-item user__menu-item_logged'>
                        {authUser.displayName}
                    </li>
                    <li className='user__menu-item' onClick={signOutUser}>
                        Sign Out
                    </li>
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
        <div className='user'>
            <AiOutlineUser onClick={onActiveMenu} />
            {isMenuActive && (
                <div className='user__menu'>
                    <ul>{setUserMenuItems()}</ul>
                </div>
            )}
        </div>
    );
};

export default UserIcon;
