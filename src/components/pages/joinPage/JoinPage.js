import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../utils/yupSchema/yupSchema';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase';

import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../formInput/FormInput';

import './joinPage.scss';

const JoinPage = () => {
    const navigate = useNavigate();

    const [errorType, setErrorType] = useState('');

    const {
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(yupSchema),
    });

    const onSubmitForm = async (data) => {
        const { displayName, email, password } = data;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });

            navigate('/');

            reset();

            setErrorType('');
        } catch (error) {
            setErrorType(error.code);
        }
    };

    const errorMessage = (errorType) => {
        switch (errorType) {
            case 'auth/email-already-in-use':
                return 'This email already in use';
            default:
                return 'Something went wrong during registration, try again';
        }
    };

    const error = errorMessage(errorType);

    return (
        <div className='join'>
            <form className='join__form' onSubmit={handleSubmit(onSubmitForm)}>
                <h2 className='title title_medium title_center sign-in__title'>Join</h2>
                <p className='error-message'>{errorType && error}</p>

                <FormInput id='displayName' label='Display Name' type='text' name='displayName' />
                <p className='join__error'>{errors.displayName && errors.displayName.message}</p>

                <FormInput id='email' label='Email' type='email' name='email' />
                <p className='join__error'>{errors.email && errors.email.message}</p>

                <FormInput id='password' label='Password' type='password' name='password' />
                <p className='join__error'>{errors.password && errors.password.message}</p>

                <FormInput
                    id='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                />
                <p className='join__error'>
                    {errors.confirmPassword && errors.confirmPassword.message}
                </p>

                <button className='button button_auth'>Sign Up</button>
                <div className='join__already'>
                    Already have an account? <Link to='/authentication/sign-in'>Sign in</Link>
                </div>
            </form>
        </div>
    );
};

export default JoinPage;
