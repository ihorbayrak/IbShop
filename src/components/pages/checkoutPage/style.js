import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 400px;
    column-gap: 40px;

    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const CheckoutList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CheckoutInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const CheckoutTotal = styled.div`
    font-size: 32px;
    span {
        font-size: 28px;
        color: ${({ theme }) => theme.colors.mainColor};
        font-weight: 700;
    }
`;
