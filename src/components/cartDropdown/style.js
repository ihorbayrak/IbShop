import styled from 'styled-components';

export const CartDropdownMenu = styled.div`
    padding: 20px;

    position: absolute;
    top: 60px;
    right: 40px;

    display: flex;
    flex-direction: column;
    width: 240px;
    height: 340px;

    border: 1px solid lightgray;
    background-color: white;

    z-index: 20;
`;

export const CartItems = styled.ul`
    margin-bottom: 15px;

    height: 240px;
    display: flex;
    flex-direction: column;

    overflow: auto;
`;
