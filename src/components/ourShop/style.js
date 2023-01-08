import styled from 'styled-components';

export const OurShopSection = styled.section`
    padding-top: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    align-items: center;

    @media screen and (max-width: 992px) {
        display: block;
    }
`;
export const OurShopInfo = styled.div`
    display: grid;
    place-content: center;
`;

export const OurShopDescr = styled.div`
    margin-top: 20px;

    font-weight: 400;
    font-size: 20px;
    color: #343434;
`;

export const OurShopQualities = styled.div`
    margin-top: 40px;

    display: grid;
    grid-template-columns: repeat(auto-fill, 305px);
    justify-content: space-between;
    row-gap: 20px;
`;

export const OurShopBlock = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 40px auto;
    .icon {
        svg {
            font-size: 30px;
            color: ${({ theme }) => theme.colors.mainColor};
        }
    }
    .head {
        font-weight: 700;
        font-size: 17px;
        color: #2b2a2a;
    }
    .body {
        margin-top: 10px;
        font-weight: 400;
        color: #676767;
    }
`;
export const OurShopImg = styled.div`
    width: 100%;
    height: 550px;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;
        min-height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    @media screen and (max-width: 992px) {
        display: none;
    }
`;
