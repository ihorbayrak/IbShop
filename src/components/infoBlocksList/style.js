import styled from 'styled-components';

export const Container = styled.ul`
    margin-top: 65px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 992px) {
        flex-wrap: wrap;
    }
`;
