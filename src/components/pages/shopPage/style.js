import styled from 'styled-components';

export const ShopSection = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 300px) 1fr;
    column-gap: 20px;

    @media screen and (max-width: 576px) {
        justify-content: center;
        align-items: center;
        grid-template-columns: minmax(auto, 300px);
    }
`;

export const ShopOptions = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-end;

    @media screen and (max-width: 1440px) {
        grid-template-columns: minmax(auto, 550px);
    }

    @media screen and (max-width: 576px) {
        margin-top: 20px;
    }
`;

export const ShopFilters = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
`;
