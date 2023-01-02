import { formatPrice } from '../../utils/functions/functions';

import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../utils/reducers/cartSlice/cartSlice';

import AmountCounter from '../amountCounter/AmountCounter';

import { MdOutlineDeleteForever } from 'react-icons/md';

import './checkoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity, discount } = cartItem;

    return (
        <li className='checkout-item'>
            <div className='checkout-item__img'>
                <img src={imageUrl} alt={name} />
            </div>

            <div className='checkout-item__name'>{name}</div>
            <div className='checkout-item__price'>
                {quantity} x {formatPrice(price, discount).toFixed(2)} $
            </div>

            <AmountCounter cartItem={cartItem} />

            <div className='checkout-item__remove'>
                <MdOutlineDeleteForever onClick={() => dispatch(deleteItemFromCart(cartItem))} />
            </div>
        </li>
    );
};

export default CheckoutItem;
