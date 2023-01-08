import styled from 'styled-components';

export const CartProductContainer = styled.div`
    margin-bottom: 15px;

    display: flex;
    width: 100%;
    height: 80px;

    img {
        width: 30%;
        object-fit: cover;
    }
`;

export const CartProductInfo = styled.div`
    padding: 10px 20px;

    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div {
        font-weight: 700;
    }

    span {
        font-size: 16px;
    }
`;
