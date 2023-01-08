import styled, { css } from 'styled-components';

const DefaultButton = styled.button`
    border: none;
    border-radius: 10px;

    font-weight: 500;
    text-align: center;
    color: #ffffff;

    transition: 0.2s all;

    cursor: pointer;

    &:hover {
        color: #ffffff;
        border-radius: 40px;
        box-shadow: 0px 2px 20px 2px rgba(60, 57, 208, 0.3);
    }
`;

const PRIMARY_BTN = css`
    margin: ${({ btnMargin }) => btnMargin || 0};
    padding: ${({ btnPadding }) => btnPadding || '15px 50px'};

    background-color: ${({ theme }) => theme.colors.mainColor};
    
    &:hover {
        box-shadow: 0px 2px 20px 2px rgba(60, 57, 208, 0.3);
    }
`;

const CLEAR_BTN = css`
    margin-top: 30px;
    padding: 10px 50px;

    background-color: ${({ theme }) => theme.colors.subColor};

    &:hover {
        box-shadow: 0px 2px 20px 2px rgba(247, 5, 5, 0.3);
    }
`;

const AUTH_BTN = css`
    padding: 15px 0;
    margin-top: 30px;
    
    width: 100%;
    background-color: #000;
    
    font-size: 18px;
    font-weight: 700;
    
    &:hover {
        box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.3);
    }
    `;

const CART_BTN = css`
    padding: 18px 25px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${({ theme }) => theme.colors.mainColor};
    svg {
        font-size: 16px;
        margin-left: 5px;
    }
`;

export const StyledButton = styled(DefaultButton)`
    ${({ modifier }) => {
        switch (modifier) {
            case 'primary':
                return PRIMARY_BTN;
            case 'clear':
                return CLEAR_BTN;
            case 'auth':
                return AUTH_BTN;
            case 'cart':
                return CART_BTN;
            default:
                return DefaultButton;
        }
    }}
`;
