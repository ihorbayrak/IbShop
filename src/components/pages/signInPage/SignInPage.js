import { useState } from 'react';

import { useForm } from 'react-hook-form';

import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';

import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../formInput/FormInput';
import { BsGoogle } from 'react-icons/bs';

import './signInPage.scss';

const SignInPage = () => {
    const navigate = useNavigate();

    const [errorType, setErrorType] = useState('');

    const { handleSubmit, reset } = useForm();

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

        navigate('/');
    };

    const onSubmitForm = async (data) => {
        const { email, password } = data;

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            reset();

            navigate('/');

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
        <div className='sign-in'>
            <form className='sign-in__form' onSubmit={handleSubmit(onSubmitForm)}>
                <h2 className='title title_medium title_center sign-in__title'>Sign in now</h2>
                <p className='error-message'>{errorType && error}</p>

                <FormInput id='email' label='Email' type='email' name='email' required />

                <FormInput
                    id='password'
                    label='Password'
                    type='password'
                    name='password'
                    required
                />

                <button className='button button_auth' type='submit'>
                    Sign In
                </button>

                <h3 className='title title_small title_center sign-in__suggestion'>
                    or sign in with google...
                </h3>

                <button className='button button_auth' type='button' onClick={signInWithGoogle}>
                    Sign In With Google <BsGoogle />
                </button>

                <div className='sign-in__join'>
                    Don't have an account? <Link to='/authentication/join'>Join now</Link>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;
