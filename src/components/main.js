import axios from 'axios';
import {useState, useEffect} from "react";

function Main() {
    const [data, setData] = useState(1);

    useEffect(() => {
      // GET 요청을 보낼 URL
      const apiUrl = 'http://localhost:3000/api/data';
      // Axios를 사용하여 GET 요청 보내기
      axios.get(apiUrl)
        .then(response => {
          // 응답 데이터 설정
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          // 에러 처리
          console.error('요청 중 오류 발생:', error);
        });
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행
    return (
        <div>
            <h1>hello React-Project</h1>
            {data ? <div></div> : <h1>{data.name}</h1>}
        </div>
        );
}

export default Main;