import "./preBox.css";
import PropTypes from "prop-types";
import Modal from 'react-modal';
import { useState } from "react";
import DownButton from "./download";

function PreBox({ data }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false); 
    };

    return (
        <div className="pre-box" onClick={openModal}>
            <div className="pre-box-container">
                <img className="pre-img" src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="이미지"></img>
                <div className="pre-title">{data.title}</div>
            </div>
            {isModalOpen && <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Program Modal"
                shouldCloseOnOverlayClick={true}
                >
                    <h1>{data.title}</h1>
                    <img className="modal-image" src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="Image" />
                    <p>{data.summary}</p>
                    <DownButton filepath={data.filePath}/>
                    <div className="comment-container">
                    </div>
            </Modal>}
        </div>
    );
}

PreBox.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired
    }).isRequired
};

export default PreBox;
