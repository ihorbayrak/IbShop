import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/reducers/cartSlice/cartSlice';

import { AmountContainer, AmountValue } from './style';

const AmountCounter = ({ cartItem }) => {
    const dispatch = useDispatch();

    return (
        <AmountContainer>
            <button onClick={() => dispatch(removeItemFromCart(cartItem))}>-</button>

            <AmountValue>{cartItem.quantity}</AmountValue>

            <button onClick={() => dispatch(addItemToCart(cartItem))}>+</button>
        </AmountContainer>
    );
};

export default AmountCounter;
