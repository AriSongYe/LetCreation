import "./main.css";

import axios from 'axios';

import PreBox from './Box/preBox';
import Modal from 'react-modal';
import PostModal from "./Post/postModal";

import {useState, useEffect} from "react";

function Main() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/data');
                setJsonData(response.data);
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div class="box-container">
                <PostModal/>
                <PreBox
                    title="실루엣 퀴즈"
                    id="1"
                    imgPath="실루엣퀴즈.png"
                />
            </div>
        </div>
    );
}

export default Main;
