import styled from 'styled-components';

export const ConsultationContainer = styled.div`
    margin-top: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ConsultationWrapper = styled.div`
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
`;

export const ConsultationFormContainer = styled.form`
    margin-top: 20px;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ModalGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;

        .modal__img {
            display: none;
        }
    }
`;
