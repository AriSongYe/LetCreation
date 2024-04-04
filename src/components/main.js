// Main.js
import './main.css'; // CSS 파일을 import 합니다.
import { useState, useEffect } from "react";
import axios from "axios";
import PreBox from './Box/preBox';
import PostModal from "./Post/postModal";

function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/data');
                setData(response.data);
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="box-container">
                {data.length > 0 && data.map((item, index) => (
                    <PreBox key={index} data={item} />
                ))}
                <PostModal />
            </div>
        </div>
    );
}

export default Main;
