import { useDispatch, useSelector } from 'react-redux';
import { totalCostSelector, clearItemsFromCart } from '../../../utils/reducers/cartSlice/cartSlice';

import CheckoutItem from '../../checkoutItem/CheckoutItem';

import './checkoutPage.scss';

const CheckoutPage = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    const { cartItems } = useSelector((state) => state.cart);
    const total = useSelector(totalCostSelector);
    const dispatch = useDispatch();

    const renderCartItems = (arr) => {
        if (!isLoggedIn) {
            return <span>Sign In to see your cart items</span>;
        }

        return arr.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        });
    };

    const elements = renderCartItems(cartItems);

    return (
        <section className='checkout'>
            <h2 className='title title_center'>checkout</h2>
            <button className='button button_clear' onClick={() => dispatch(clearItemsFromCart())}>
                Clear all
            </button>

            <div className='checkout__wrapper'>
                <ul className='checkout__list'>
                    {elements.length === 0 ? <span>You haven't added products yet</span> : elements}
                </ul>

                <div className='checkout__buy-info'>
                    <div className='checkout__total'>
                        Total: <span>${total.toFixed(2)}</span>
                    </div>

                    {elements.length !== 0 && (
                        <button className='button checkout__button'>Buy</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
