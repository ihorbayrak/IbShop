import styled from 'styled-components';

export const CartContainer = styled.div`
    padding-right: 30px;

    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    flex: 1;
    svg {
        font-size: 30px;
        color: ${({theme}) => theme.colors.mainColor};

        cursor: pointer;
    }
`;

export const CartTotal = styled.div`
    position: absolute;
    bottom: -20px;
    right: -8px;
`;

export const CartCounter = styled.div`
    padding: 15px;

    position: absolute;
    top: -20px;
    right: -10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #e5e5e7;
`;
