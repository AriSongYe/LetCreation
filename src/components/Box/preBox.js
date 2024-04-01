import "./preBox.css";

import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Modal from 'react-modal';

function PreBox(props) {
    const {title, imgPath, id} = props;
    
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false); 
    };

    return (
    <div>
        <div class="pre-box" onClick={openModal}>
            <img class="pre-img" src="http://localhost:3000/api/imgs/실루엣퀴즈.png" alt="이미지"></img>
            <div class="pre-title">{title}</div>
        </div>
        {isModalOpen && <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Program Modal"
            >
                <h1>This First Modal</h1>
                <img class="modal-image"src={`http://localhost:3000/api/imgs/실루엣퀴즈.png`} alt="Image" />
        </Modal>}
        
    </div>);
}

PreBox.propTypes = {
    title: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default PreBox;