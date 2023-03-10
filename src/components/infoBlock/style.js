import styled from 'styled-components';

export const InfoBlockContainer = styled.li`
    padding: 30px 30px 10px 30px;

    position: relative;

    background: #fff;
    max-width: 370px;
    min-height: 228px;
    border-radius: 0px 40px;
    &::before {
        content: '';

        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);

        width: 30px;
        height: 2px;
        background: ${({ theme }) => theme.colors.mainColor};
    }
    &:last-child {
        &::before {
            display: none;
        }
    }

    @media screen and (max-width: 992px) {
        &::before {
            display: none;
        }
    }
`;

export const InfoBlockTitle = styled.div`
    position: relative;

    font-weight: 500;
    font-size: 16px;
    color: #000000;
    span {
        position: absolute;
        left: -25px;
        svg {
            color: ${({ theme }) => theme.colors.mainColor};
            font-size: 20px;
        }
    }
`;

export const InfoBlockText = styled.p`
    margin-top: 20px;

    font-weight: 400;
    font-size: 14px;
    color: #676767;
`;

export const InfoBlockNumber = styled.div`
    position: absolute;
    top: -30px;
    left: 0;

    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mainColor};
`;
