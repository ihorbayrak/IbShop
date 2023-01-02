import Spinner from '../../components/spinner/Spinner';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

export const formatPrice = (price, discount) => {
    return price - discount * (price / 100);
};

export const setContent = (status, Component) => {
    switch (status) {
        case 'loading':
            return <Spinner />;
        case 'idle':
            return <Component />;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process state');
    }
};
