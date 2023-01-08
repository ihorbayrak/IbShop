import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/reducers/cartSlice/cartSlice';

import Modal from '../modal/Modal';

import { BsCart4 } from 'react-icons/bs';

import { StyledButton } from '../../styles/Buttons';

const CartButton = ({ product }) => {
    const [modalActive, setModalActive] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isLoggedIn) {
            dispatch(addItemToCart(product));
        }

        if (!isLoggedIn) {
            setModalActive(true);
        }
    };

    return (
        <>
            <StyledButton modifier='cart' onClick={handleClick}>
                Add to cart <BsCart4 />
            </StyledButton>

            <Modal active={modalActive} setActive={setModalActive}>
                <p>Please sign in</p>
            </Modal>
        </>
    );
};

export default CartButton;
