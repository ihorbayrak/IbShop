import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../utils/reducers/cartSlice/cartSlice';

import { BsCart4 } from 'react-icons/bs';

import './cartButton.scss';
import Modal from '../modal/Modal';

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
            <button className='button cart-button' onClick={handleClick}>
                Add to cart <BsCart4 />
            </button>

            <Modal active={modalActive} setActive={setModalActive}>
                <p>Please sign in</p>
            </Modal>
        </>
    );
};

export default CartButton;
