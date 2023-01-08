import styled from 'styled-components';

export const DotsContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    z-index: 5;
`;

export const Dot = styled.div`
    margin: 0 5px;

    width: ${({ isSmall }) => (isSmall ? '10px' : '20px')};
    height: ${({ isSmall }) => (isSmall ? '10px' : '20px')};
    border-radius: 50%;
    background: ${({ theme, isActive }) =>
        isActive ? theme.colors.mainColor : theme.colors.backColor};

    cursor: pointer;

    transition: 0.5s all;
`;
