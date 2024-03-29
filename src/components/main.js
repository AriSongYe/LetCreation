import "./main.css";

import axios from 'axios';

import PreBox from './Box/preBox';
import Modal from 'react-modal';
import PostModal from "./Post/postModal";

import {useState, useEffect} from "react";

function Main() {
    const [data, setData] = useState({});


    const [isModalOpen, setModalOpen] = useState(false);
    const openPostModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/api/data';
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('요청 중 오류 발생:', error);
            });
    }, []);

    console.log(data); // 상태 변수인 data를 콘솔에 로깅

    return (
        <div class="box-container">
            <PreBox
                title="실루엣 퀴즈"
                id="1"
                imgPath="실루엣퀴즈.png"
            />
            {data.length > 0 && <h1>{data[0].name}</h1>}
            <button onClick={openPostModal}>Add Program</button>
            <PostModal isOpen={isModalOpen} onRequestClose={closeModal}/>
        </div>
    );
}

export default Main;
