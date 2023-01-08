import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);

    pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};

    transition: 0.5s all;

    z-index: 100;
`;

export const ModalContent = styled.div`
    padding: 30px 50px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #fff;
    min-height: 50vh;

    transform: scale(${({ isActive }) => (isActive ? 1 : 0.5)});

    transition: 0.5s all;
`;

export const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;

    font-size: 20px;
    font-weight: 700;
    color: #9c9b9b;

    cursor: pointer;
`;
