import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../utils/reducers/cartSlice/cartSlice';

import './amountCounter.scss';

const AmountCounter = ({ cartItem }) => {
    const dispatch = useDispatch();

    return (
        <div className='amount-counter'>
            <button
                className='amount-counter__button'
                onClick={() => dispatch(removeItemFromCart(cartItem))}
            >
                -
            </button>
            <div className='amount-counter__value'>{cartItem.quantity}</div>
            <button
                className='amount-counter__button'
                onClick={() => dispatch(addItemToCart(cartItem))}
            >
                +
            </button>
        </div>
    );
};

export default AmountCounter;
