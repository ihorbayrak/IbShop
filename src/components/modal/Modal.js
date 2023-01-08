import { ModalContainer, ModalContent,  ModalClose } from './style.js';

const Modal = ({ active, setActive, children }) => {
    return (
        <ModalContainer isActive={active} onClick={() => setActive(false)}>
            <ModalContent isActive={active} onClick={(e) => e.stopPropagation()}>
                <ModalClose onClick={() => setActive(false)}>&#10005;</ModalClose>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
