import { useDispatch, useSelector } from 'react-redux';
import {
    toggleCartDropdown,
    amountCartItemsSelector,
    totalCostSelector,
} from '../../redux/reducers/cartSlice/cartSlice';

import CartDropdown from '../cartDropdown/CartDropdown';
import { BsCart4 } from 'react-icons/bs';

import { CartContainer, CartTotal, CartCounter } from './style.js';

const CartIcon = () => {
    const { isCartOpen } = useSelector((state) => state.cart);
    const amount = useSelector(amountCartItemsSelector);
    const total = useSelector(totalCostSelector);
    const dispatch = useDispatch();

    return (
        <CartContainer>
            <BsCart4 onClick={() => dispatch(toggleCartDropdown())} />
            {isCartOpen && <CartDropdown />}

            <CartCounter>{amount}</CartCounter>

            <CartTotal>{total.toFixed(2)} $</CartTotal>
        </CartContainer>
    );
};

export default CartIcon;
