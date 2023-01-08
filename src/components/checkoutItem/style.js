import styled from 'styled-components';

export const CheckoutItemContainer = styled.li`
    padding: 15px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 2px solid lightgray;

    span {
        font-weight: 700;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
        gap: 15px;

        &:last-child {
            border-bottom: 2px solid lightgray;
        }
    }
`;

export const CheckoutItemImg = styled.div`
    width: 220px;
    height: 350px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CheckoutItemRemove = styled.div`
    svg {
        font-size: 24px;
        vertical-align: middle;

        cursor: pointer;
    }
`;
