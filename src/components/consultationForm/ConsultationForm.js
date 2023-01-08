import { useState } from 'react';

import { useForm } from 'react-hook-form';

import FormInput from '../formInput/FormInput';
import Modal from '../modal/Modal';

import {
    ConsultationContainer,
    ConsultationWrapper,
    ConsultationFormContainer,
    ModalGrid,
} from './style.js';
import { Title, SubTitle } from '../../styles/Titles';
import { StyledButton } from '../../styles/Buttons';

import girl from '../../assets/message-girl.png';

const ConsultationForm = () => {
    const { handleSubmit, reset } = useForm();

    const [modalActive, setModalActive] = useState(false);

    const onSubmitForm = (data) => {
        reset();

        setModalActive(false);
    };

    return (
        <ConsultationContainer>
            <ConsultationWrapper>
                <Title fz='semi'>Want a consultation?</Title>
                <SubTitle>Easy and simple</SubTitle>

                <ConsultationFormContainer onSubmit={handleSubmit(onSubmitForm)}>
                    <FormInput id='name' type='text' label='Your name' name='name' required />
                    <FormInput id='email' type='email' label='Your email' name='email' required />
                    <StyledButton
                        type='button'
                        modifier='primary'
                        btnMargin='30px 0 0 0'
                        onClick={() => setModalActive(true)}
                    >
                        Consultation
                    </StyledButton>

                    <Modal active={modalActive} setActive={setModalActive}>
                        <ModalGrid>
                            <div className='modal__wrapper'>
                                <Title fz='semi'>Write your message below</Title>
                                <SubTitle>Fast and simple</SubTitle>

                                <FormInput
                                    id='consultation'
                                    name='consultation'
                                    type='text'
                                    label='Your message'
                                    required
                                />

                                <StyledButton
                                    modifier='primary'
                                    btnMargin='30px 0 0 0'
                                >
                                    Wait for an answer
                                </StyledButton>
                            </div>

                            <div className='modal__img'>
                                <img src={girl} alt='girl' />
                            </div>
                        </ModalGrid>
                    </Modal>
                </ConsultationFormContainer>
            </ConsultationWrapper>
        </ConsultationContainer>
    );
};

export default ConsultationForm;
