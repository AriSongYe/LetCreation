import axios from "axios";

const getMainData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/data');
        console.log(`getMainData ${response.data}`)
        return response.data;
    } catch (error) {
        console.log('데이터를 불러오는 중 오류가 발생했습니다:', error)
    }
}
export default getMainData;