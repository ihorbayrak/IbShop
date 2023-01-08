import { Link } from 'react-router-dom';
import CartProduct from '../cartProduct/CartProduct';

import { useSelector } from 'react-redux';

import { CartDropdownMenu, CartItems } from './style.js';
import { StyledButton } from '../../styles/Buttons';

const CartDropdown = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { isLoggedIn } = useSelector((state) => state.auth);

    const renderCartItems = (arr) => {
        if (!isLoggedIn) {
            return <span>Sign In to see your cart items</span>;
        }

        return arr.map((cartItem) => {
            return <CartProduct key={cartItem.id} cartItem={cartItem} />;
        });
    };

    const elements = renderCartItems(cartItems);

    return (
        <CartDropdownMenu>
            <CartItems>
                {elements.length === 0 ? <span>Your cart is empty </span> : elements}
            </CartItems>

            <StyledButton modifier='primary' btnPadding='10px' btnMargin='auto'>
                <Link to='/checkout'>Go to checkout</Link>
            </StyledButton>
        </CartDropdownMenu>
    );
};

export default CartDropdown;
