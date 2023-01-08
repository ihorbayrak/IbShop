import styled from 'styled-components';

export const ProductSection = styled.section`
    display: grid;
    grid-template-columns: 350px 1fr;
    align-items: center;
    column-gap: 40px;
    row-gap: 30px;

    @media screen and (max-width: 768px) {
        grid-template-columns: minmax(auto, 350px);
    }
`;

export const ProductImg = styled.div`
    position: relative;

    margin-top: 20px;

    width: 100%;
    max-height: 500px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 300px;
`;
