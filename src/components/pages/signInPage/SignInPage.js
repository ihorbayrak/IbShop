import { useState } from 'react';

import { useForm } from 'react-hook-form';

import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';

import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../formInput/FormInput';
import { BsGoogle } from 'react-icons/bs';

import { Wrapper, FormContainer, SuggestionLink, Error } from '../../../styles/FormStyles';
import { StyledButton } from '../../../styles/Buttons';
import { Title } from '../../../styles/Titles';

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
        <Wrapper>
            <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
                <Title fz='medium' centered>
                    Sign in now
                </Title>
                <Error>{errorType && error}</Error>

                <FormInput id='email' label='Email' type='email' name='email' required />

                <FormInput
                    id='password'
                    label='Password'
                    type='password'
                    name='password'
                    required
                />

                <StyledButton modifier='auth' type='submit'>
                    Sign In
                </StyledButton>

                <Title fz='semi' centered>
                    or sign in with google...
                </Title>

                <StyledButton modifier='auth' type='button' onClick={signInWithGoogle}>
                    Sign In With Google <BsGoogle />
                </StyledButton>

                <SuggestionLink>
                    Don't have an account? <Link to='/authentication/join'>Join now</Link>
                </SuggestionLink>
            </FormContainer>
        </Wrapper>
    );
};

export default SignInPage;
