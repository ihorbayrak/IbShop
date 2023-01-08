import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryItemContainer = styled.li`
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 10px;

    &:hover {
        transition: 0.5s all;
        filter: grayscale(0.7);
    }
`;

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    p {
        padding: 10px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);

        background-color: rgb(149, 149, 149);
        border: 3px solid lightgray;
        border-radius: 10px;

        color: ${({ theme }) => theme.colors.backColor};
        text-transform: uppercase;

        @media screen and (max-width: 480px) {
            font-size: ${({theme}) => theme.fontSizes.small};
        }
    }
`;
