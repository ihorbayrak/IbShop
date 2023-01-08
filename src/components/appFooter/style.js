import styled from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 70px;
    padding: 50px;

    width: 100%;

    background-color: #ebebed;

    @media screen and (max-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: space-between;
    row-gap: 50px;

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justifyCenter }) => justifyCenter || 'normal'};

    .footer__about {
        margin-top: 20px;

        font-weight: 500;
        font-size: 14px;
        color: #2b2a2a;
    }
`;

export const FooterInfo = styled.div`
    margin-top: 15px;

    display: grid;
    grid-template-columns: 15px auto;
    column-gap: 10px;
`;

export const FooterDescription = styled.div`
    display: flex;
    flex-direction: column;

    font-weight: 500;
    font-size: 14px;
    color: #676767;

    span {
        margin-bottom: 5px;

        font-weight: 500;
        font-size: 15px;
        color: #2b2a2a;
    }
`;

export const FooterTitle = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #2b2a2a;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const FooterSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterSocialIcon = styled.a`
    margin-right: ${({ marginRight }) => marginRight || 0};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 35px;

    background-color: ${({ iconColor }) => iconColor};
    border-radius: 50%;

    cursor: pointer;

    svg {
        color: #fff;
        font-size: 24px;
    }
`;
