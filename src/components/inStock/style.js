import styled from 'styled-components';

export const InStockSection = styled.section`
    padding-top: 40px;

    @media screen and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const InStockList = styled.ul`
    margin-top: 30px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 300px));
    justify-content: space-between;
    row-gap: 20px;
`;

export const InStockLink = styled.div`
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mainColor};
`;
