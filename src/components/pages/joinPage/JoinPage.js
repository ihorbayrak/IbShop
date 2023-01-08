import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from '../../../utils/yupSchema/yupSchema';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase';

import FormInput from '../../formInput/FormInput';

import { Wrapper, FormContainer, SuggestionLink, Error } from '../../../styles/FormStyles';
import { StyledButton } from '../../../styles/Buttons';
import { Title } from '../../../styles/Titles';

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
        <Wrapper>
            <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
                <Title fz='medium' centered btnMargin='0 0 0 15px'>
                    Join
                </Title>
                <Error>{errorType && error}</Error>

                <FormInput id='displayName' label='Display Name' type='text' name='displayName' />
                <Error>{errors.displayName && errors.displayName.message}</Error>

                <FormInput id='email' label='Email' type='email' name='email' />
                <Error>{errors.email && errors.email.message}</Error>

                <FormInput id='password' label='Password' type='password' name='password' />
                <Error>{errors.password && errors.password.message}</Error>

                <FormInput
                    id='confirmPassword'
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                />
                <Error>{errors.confirmPassword && errors.confirmPassword.message}</Error>

                <StyledButton modifier='auth'>Sign Up</StyledButton>

                <SuggestionLink>
                    Already have an account? <Link to='/authentication/sign-in'>Sign in</Link>
                </SuggestionLink>
            </FormContainer>
        </Wrapper>
    );
};

export default JoinPage;
