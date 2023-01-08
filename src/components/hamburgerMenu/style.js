import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HamburgerMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    transform: translateX(${({ isActive }) => (isActive ? '0' : '-120%')});

    transition: 0.3s all;

    z-index: 10;
`;

export const HamburgerMenuContent = styled.div`
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 20%;
    height: 100%;

    border-radius: 10px;

    transition: 0.5s all;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        width: 50%;
    }
`;

export const HamburgerMenuOverlay = styled.div`
    position: fixed;

    left: 20%; // so that overlay does not hover over the menu

    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);

    z-index: 100;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const HamburgerMenuLink = styled(NavLink)`
    margin-bottom: 15px;

    position: relative;

    font-weight: ${({ accent }) => (accent ? '700' : 'normal')};
    font-size: ${({ accent, theme }) => (accent ? theme.fontSizes.semi : '18px')};
    text-transform: ${({ accent }) => (accent ? 'uppercase' : 'capitalize')};
    color: ${({ theme, accent }) => accent && theme.colors.mainColor};
    letter-spacing: 1.3px;

    &::before {
        content: '';

        position: absolute;
        bottom: -2px;
        left: 0;

        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.mainColor};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.mainColor};
    }

    @media screen and (max-width: 767px) {
        font-size: ${({theme}) => theme.fontSizes.small};
    }
`;
