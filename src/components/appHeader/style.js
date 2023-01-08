import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 14px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dddddd;

    @media screen and (max-width: 576px) {
        padding: 14px;
    }
`;

export const HeaderLogo = styled.div`
    font-size: 26px;
    width: 140px;
    span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.mainColor};
    }

    @media screen and (max-width: 576px) {
        font-size: ${({ theme }) => theme.fontSizes.semi};
        width: 100px;
    }
`;

export const HeaderCatalog = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex: 1;
    height: 12px;
    cursor: pointer;
    span {
        display: block;
        height: 2px;
        width: 26px;
        background-color: #000;
        margin-bottom: 3px;
    }

    @media screen and (max-width: 992px) {
        display: block;
    }
`;
