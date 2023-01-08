import styled, { css } from 'styled-components';

export const Title = styled.h2`
    font-weight: 700;
    font-size: ${({ fz, theme }) => theme.fontSizes[fz] || '30px'};
    line-height: 50px;
    text-transform: capitalize;
    color: #2b2a2a;
    ${({ centered }) =>
        centered &&
        css`
            text-align: center;
        `}

    @media screen and (max-width: 370px) {
        font-size: ${({ fz, theme }) => fz || theme.fontSizes.small};
    }
`;

export const SubTitle = styled.h3`
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;

    color: #2b2a2a;
`;
