import styled from 'styled-components';

export const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 120px;
    height: 40px;

    background: #e5e5e7;
    border-radius: 20px;

    button {
        font-size: 20px;

        background-color: transparent;
        border: none;

        cursor: pointer;
    }
`;

export const AmountValue = styled.div`
    padding: 0 10px 0 10px;
    margin: 0 15px 0 15px;

    border-right: 2px solid #fff;
    border-left: 2px solid #fff;
`;
