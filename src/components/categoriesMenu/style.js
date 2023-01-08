import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const circleStyles = css`
    content: '';

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;

    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 50%;
`;

export const CategoriesContainer = styled.aside`
    margin-top: 30px;
    padding: 20px;

    background-color: #fff;
    width: 100%;
    border-radius: 10px;
`;

export const CategoriesTitle = styled.div`
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #2b2a2a;
`;

export const CategoriesList = styled.ul`
    margin-top: 30px;
    padding: 0 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CategoriesItem = styled.li`
    position: relative;

    margin-bottom: 10px;

    font-weight: 500;
    font-size: 15px;
    text-transform: capitalize;
`;

export const StyledNavLink = styled(NavLink)`
    &.active {
        color: ${({ theme }) => theme.colors.mainColor};
        &::before {
            ${circleStyles}
        }
    }
`;
