import styled from 'styled-components';

export const SliderContainer = styled.div`
    margin-top: 40px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SliderWrapper = styled.div`
    max-width: 600px;
    min-height: 450px;
    display: flex;

    overflow: hidden;
`;

export const SlideImg = styled.img`
    transition: 1.5s all ease;
    height: 450px;
    width: 100%;

    transform: translateX(${({ slideIndex }) => slideIndex * -100}%);
`;

export const SliderArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 45px;
    height: 45px;

    background-color: #fff;
    border-radius: 50%;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.mainColor};

    cursor: pointer;

    left: ${({ direction }) => direction === 'left' && '0'};
    right: ${({ direction }) => direction === 'right' && '0'};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
