import axios from 'axios';
import Modal from 'react-modal';


function PostModal(props) {
    const { isOpen, onRequestClose} = props;
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal">
            <h1>This First Modal</h1>
        </Modal>
    );
}

export default PostModal;