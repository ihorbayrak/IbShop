import { useDispatch, useSelector } from 'react-redux';
import { totalCostSelector, clearItemsFromCart } from '../../../redux/reducers/cartSlice/cartSlice';

import CheckoutItem from '../../checkoutItem/CheckoutItem';

import { CheckoutWrapper, CheckoutList, CheckoutInfo, CheckoutTotal } from './style.js';
import { StyledButton } from '../../../styles/Buttons';
import { Title } from '../../../styles/Titles';

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
            <Title fz='large' centered>
                checkout
            </Title>
            <StyledButton modifier='clear' onClick={() => dispatch(clearItemsFromCart())}>
                Clear all
            </StyledButton>

            <CheckoutWrapper>
                <CheckoutList>
                    {elements.length === 0 ? <span>You haven't added products yet</span> : elements}
                </CheckoutList>

                <CheckoutInfo>
                    <CheckoutTotal>
                        Total: <span>${total.toFixed(2)}</span>
                    </CheckoutTotal>

                    {elements.length !== 0 && (
                        <StyledButton modifier='primary' btnMargin='15px 0 0 0'>
                            Buy
                        </StyledButton>
                    )}
                </CheckoutInfo>
            </CheckoutWrapper>
        </section>
    );
};

export default CheckoutPage;
