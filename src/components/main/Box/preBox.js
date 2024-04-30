import "./preBox.css";
import Modal from 'react-modal';
import { useState } from "react";
import DownButton from "./download";

function PreBox({ data }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        console.log("Request Close!")

        setModalOpen(false); 
    };

    return (
        <div className="pre-box" >
            <div className="pre-box-container" onClick={openModal}>
                <img className="pre-img" src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="Preview 이미지"></img>
                <div className="pre-title">{data.title}</div>
            </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Program Modal" shouldCloseOnOverlayClick={true}>
            <h1>{data.title}</h1>
            <img className="modal-image" src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="Modal inner 이미지" />
            <p>{data.summary}</p>
            <DownButton filepath={data.filePath}/>
            <div className="comment-container">
            </div>
        </Modal>
        </div>
    );
}

export default PreBox;
