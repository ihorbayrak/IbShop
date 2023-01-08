import { formatPrice } from '../../utils/functions/functions';

import { CartProductContainer, CartProductInfo } from './style.js';

const CartProduct = ({ cartItem }) => {
    const { name, imageUrl, price, discount, quantity } = cartItem;

    return (
        <CartProductContainer>
            <img src={imageUrl} alt={name} />

            <CartProductInfo>
                <div>{name}</div>

                <span>
                    {quantity} x ${formatPrice(price, discount).toFixed(2)}
                </span>
            </CartProductInfo>
        </CartProductContainer>
    );
};

export default CartProduct;
