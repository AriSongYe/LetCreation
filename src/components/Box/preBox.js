import "./preBox.css";

import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Modal from 'react-modal';

function PreBox() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [data, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/data');
                setJsonData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false); 
    };

    return (
    <div>
        <div class="pre-box" onClick={openModal}>
                <img className="pre-img" src={`http://localhost:3000/api/imgs/${data.length > 0 && data[8].imagePath}`} alt="이미지"></img>
                <div className="pre-title">{data.title}</div>
        </div>
        {isModalOpen && <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Program Modal"
            >
                <h1>{data.title}</h1>
                <img class="modal-image"src={`http://localhost:3000/api/imgs/${data.length > 0 && data[8].imagePath}`} alt="Image" />
                <div class="comment-container">
                    <button/>
                </div>
        </Modal>}
    </div>);
}

export default PreBox;