import { useDispatch, useSelector } from 'react-redux';
import {
    toggleCartDropdown,
    amountCartItemsSelector,
    totalCostSelector,
} from '../../utils/reducers/cartSlice/cartSlice';

import CartDropdown from '../cartDropdown/CartDropdown';
import { BsCart4 } from 'react-icons/bs';

import './cartIcon.scss';

const CartIcon = () => {
    const { isCartOpen } = useSelector((state) => state.cart);
    const amount = useSelector(amountCartItemsSelector);
    const total = useSelector(totalCostSelector);
    const dispatch = useDispatch();

    return (
        <div className='cart'>
            <BsCart4 onClick={() => dispatch(toggleCartDropdown())} />
            {isCartOpen && <CartDropdown />}

            <div className='cart__counter'>{amount}</div>
            <div className='cart__total'>{total.toFixed(2)} $</div>
        </div>
    );
};

export default CartIcon;
