import styled from 'styled-components';

export const CatalogSection = styled.section`
    @media screen and (max-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const CatalogContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    justify-content: space-between;
    align-items: center;
    row-gap: 15px;
`;
