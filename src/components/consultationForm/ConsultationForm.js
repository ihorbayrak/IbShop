import { useState } from 'react';

import FormInput from '../formInput/FormInput';
import Modal from '../modal/Modal';

import './consultationForm.scss';

import girl from '../../assets/message-girl.png';

const defaultInputValues = {
    name: '',
    email: '',
    message: '',
};

const ConsultationForm = () => {
    const [inputValues, setInputValues] = useState(defaultInputValues);

    const { name, email, message } = inputValues;

    const [modalActive, setModalActive] = useState(false);

    const resetFormFields = () => {
        setInputValues(defaultInputValues);
    };

    const handleChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        resetFormFields();

        setModalActive(false);
    };

    return (
        <div className='consultation'>
            <div className='consultation__wrapper'>
                <h3 className='title title_small consultation__title'>Want a consultation?</h3>
                <div className='subtitle'>Easy and simple</div>

                <form className='consultation__form' onSubmit={handleSubmit}>
                    <FormInput
                        id='name'
                        type='text'
                        label='Your name'
                        name='name'
                        onChange={handleChange}
                        value={name}
                    />
                    <FormInput
                        id='email'
                        type='email'
                        label='Your email'
                        name='email'
                        onChange={handleChange}
                        value={email}
                    />
                    <button
                        type='button'
                        className='button consultation__button'
                        onClick={() => setModalActive(true)}
                    >
                        Consultation
                    </button>

                    <Modal active={modalActive} setActive={setModalActive}>
                        <div className='modal__grid'>
                            <div className='modal__wrapper'>
                                <h3 className='title title_small'>Write your message below</h3>
                                <div className='subtitle'>Fast and simple</div>
                                <FormInput
                                    id='message'
                                    name='message'
                                    type='text'
                                    label='Your message'
                                    onChange={handleChange}
                                    value={message}
                                />
                                <button className='button consultation__button'>
                                    Wait for an answer
                                </button>
                            </div>
                            <div className='modal__img'>
                                <img src={girl} alt='girl' />
                            </div>
                        </div>
                    </Modal>
                </form>
            </div>
        </div>
    );
};

export default ConsultationForm;
