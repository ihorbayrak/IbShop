import styled from 'styled-components';

export const FIltersContainer = styled.div`
    margin-top: 20px;

    display: flex;

    @media screen and (max-width: 576px) {
        margin-top: 40px;
    }
`;

export const FiltersList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
`;

export const FilterItem = styled.button`
    padding: 15px 26px;

    background-color: ${({ isActive }) => (isActive ? '#4d4848' : '#e5e5e7')};
    border: none;
    border-radius: 10px;

    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    color: ${({ isActive }) => (isActive ? '#fff' : '#676767')};
    letter-spacing: 2px;
    cursor: pointer;

    @media screen and (max-width: 576px) {
        padding: 10px;
        letter-spacing: 0;
    }
`;
