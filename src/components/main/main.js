// Main.js
import './main.css';

import { useState, useEffect } from "react";
import axios from "axios";
import PreBox from './Box/preBox';
import PostModal from "./Post/postModal";
import PreBoxSkeleton from './Skeleton/preBoxSkeleton';

function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {    
                const response = await axios.get('http://letcreation.store/api/data');
                setTimeout(() => {
                    setData(response.data);
                }, 3000);
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    const Skeletons = (n) => {
        const skeletons = [];
        for (let i = 0; i < n; i++) {
            skeletons.push(<PreBoxSkeleton key={i} />);
        }
        return skeletons;
    };

    return (
        <main class="main" id="main"> 
            <div className="box-container">
                <PostModal/>
                {data.length > 0 ? data.map((item, index) => (
                    <PreBox key={index} data={item}/>
                )): Skeletons(30)}
            </div>
        </main>
    );
}

export default Main;