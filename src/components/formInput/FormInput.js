import { useForm } from 'react-hook-form';

import './formInput.scss';

const FormInput = ({ id, label, ...otherProps }) => {
    const { register } = useForm();

    return (
        <div className='input__container'>
            {label && (
                <label htmlFor={id} className='input__label'>
                    {label}
                </label>
            )}

            <input id={id} className='input' {...otherProps} {...register(otherProps.name)} />
        </div>
    );
};

export default FormInput;
