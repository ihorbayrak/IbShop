import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCardContainer = styled.li`
    background-color: #fff;
    border-radius: 10px;
`;

export const ProductCardImg = styled.div`
    position: relative;

    width: 100%;
    height: 330px;
`;

export const SlideCardImg = styled.img`
    position: absolute; // to place images behind each other

    width: 100%;
    height: 100%;
    object-fit: cover;

    opacity: ${({ current }) => (current ? 1 : 0)};

    transition: 1.5s all;
`;

export const ProductCardLink = styled(Link)`
    width: 100%;
    height: 330px;
`;

export const ProductCardName = styled.div`
    padding: 10px;
    text-transform: capitalize;
`;

export const ProductCardPrice = styled.div`
    padding: 10px;

    width: 130px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: ${({ isBig }) => isBig && '30px'};

    ${({ isOld }) =>
        isOld &&
        css`
            font-weight: 500;
            color: #676767;
            text-decoration: line-through;
        `}
`;

export const ProductBuy = styled.div`
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const BuyLink = styled(Link)`
    color: ${({ theme }) => theme.colors.mainColor};

    &:hover {
        color: ${({ theme }) => theme.colors.mainColor};

        text-decoration: underline;
    }
`;
