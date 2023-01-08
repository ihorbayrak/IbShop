import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 120px;
    svg {
        cursor: pointer;
        font-size: 26px;
    }

    @media screen and (max-width: 576px) {
        width: 50px;
    }
`;

export const UserMenu = styled.div`
    padding: 10px;

    position: absolute;
    top: 50px;
    right: -20px;

    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    width: 120px;

    z-index: 20;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const UserMenuItem = styled.li`
    padding: 10px 0;

    font-size: 16px;

    cursor: pointer;
    &:hover {
        transition: 0.3s all;
    }
    ${({ isLogged }) =>
        isLogged &&
        css`
            font-size: ${({theme}) => theme.fontSizes.small};
            font-weight: 700;
            cursor: default;
        `}
`;
