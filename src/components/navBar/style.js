import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const underLine = css`
    content: '';

    position: absolute;
    bottom: -29px;
    left: 0;

    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.mainColor};

    transition: 0.5s all ease;
`;

export const NavBarContainer = styled.nav`
    position: relative;

    flex: 2;

    @media screen and (max-width: 992px) {
        flex: 1;
    }
`;

export const NavBarMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const NavBarLink = styled(NavLink)`
    position: relative;

    font-weight: 500;
    color: #676767;
    text-transform: capitalize;

    transition: 0.5s all ease;

    &::before {
        ${underLine}
    }

    &:hover {
        &::before {
            ${underLine} {
                width: 100%;
            }
        }
    }

    &.active {
        &::before {
            ${underLine} {
                width: 100%;
            }
        }
    }
`;
