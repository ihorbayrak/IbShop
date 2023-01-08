import styled from 'styled-components';

export const Attribute = styled.div`
    padding: 10px 20px;

    position: absolute;
    top: 0;
    right: 0;

    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: ${({ customColor }) => customColor || '#fff'};

    opacity: 0.8;

    border-radius: 10px;
    background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};
`;
