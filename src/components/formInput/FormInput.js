import { useForm } from 'react-hook-form';

import { StyledInput, StyledLabel, InputContainer } from './style.js';

const FormInput = ({ id, label, ...otherProps }) => {
    const { register } = useForm();

    return (
        <InputContainer>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}

            <StyledInput id={id} {...otherProps} {...register(otherProps.name)} />
        </InputContainer>
    );
};

export default FormInput;
