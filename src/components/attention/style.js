import styled from 'styled-components';

export const AttentionContainer = styled.div`
    min-height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #eff0f1;

    color: #676767;
    font-weight: 500;

    @media screen and (max-width: 400px) {
        font-size: ${({theme}) => theme.fontSizes.small};
    }
`;
