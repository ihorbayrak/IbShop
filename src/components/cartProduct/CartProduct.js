import { formatPrice } from '../../utils/functions/functions';

import './cartProduct.scss';

const CartProduct = ({ cartItem }) => {
    const { name, imageUrl, price, discount, quantity } = cartItem;

    return (
        <div className='cart__product'>
            <img src={imageUrl} alt={name} />
            <div className='cart__product-info'>
                <div className='cart__product-name'>{name}</div>
                <span>
                    {quantity} x ${formatPrice(price, discount).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default CartProduct;
