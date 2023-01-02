import './modal.scss';

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal modal_active' : 'modal'} onClick={() => setActive(false)}>
            <div
                className={active ? 'modal__content modal__content_active' : 'modal__content'}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='modal__close' onClick={() => setActive(false)}>
                    &#10005;
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
