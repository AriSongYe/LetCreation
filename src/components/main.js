// Main.js
import './main.css';

import { useState, useEffect } from "react";
import axios from "axios";

import PreBox from './Box/preBox';
import PostModal from "./Post/postModal";
import NavBar from './NavBar/navbar';

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
        <main>
            <NavBar/>
            <div className="box-container">
                <PostModal/>
                {data.length > 0 && data.map((item, index) => (
                    <PreBox key={index} data={item}/>
                ))}
            </div>
        </main>
    );
}

export default Main;
