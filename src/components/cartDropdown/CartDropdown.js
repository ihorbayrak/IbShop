import { Link } from 'react-router-dom';
import CartProduct from '../cartProduct/CartProduct';

import { useSelector } from 'react-redux';

import './cartDropdown.scss';

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
        <div className='cart__dropdown'>
            <ul className='cart__items'>
                {elements.length === 0 ? <span>Your cart is empty </span> : elements}
            </ul>
            <Link to='/checkout' className='button cart__button'>
                Go to checkout
            </Link>
        </div>
    );
};

export default CartDropdown;
