import { formatPrice } from '../../utils/functions/functions';

import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/reducers/cartSlice/cartSlice';

import AmountCounter from '../amountCounter/AmountCounter';

import { MdOutlineDeleteForever } from 'react-icons/md';

import { CheckoutItemContainer, CheckoutItemImg, CheckoutItemRemove } from './style.js';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity, discount } = cartItem;

    return (
        <CheckoutItemContainer>
            <CheckoutItemImg className='checkout-item__img'>
                <img src={imageUrl} alt={name} />
            </CheckoutItemImg>

            <div>{name}</div>
            <span>
                {quantity} x {formatPrice(price, discount).toFixed(2)} $
            </span>

            <AmountCounter cartItem={cartItem} />

            <CheckoutItemRemove>
                <MdOutlineDeleteForever onClick={() => dispatch(deleteItemFromCart(cartItem))} />
            </CheckoutItemRemove>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
