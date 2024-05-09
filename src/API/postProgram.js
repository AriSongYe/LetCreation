import axios from "axios";
import isEmpty from "../Util/isEmpty";

const MAX_FILE_SIZE_MB = 100; // 최대 허용 파일 크기 (MB)

const postProgram = async () => {
    const programFile = document.getElementById('post-file').files[0];
    const image = document.getElementById('post-img').files[0];
    const title = document.getElementById('post-title').value;
    const summary = document.getElementById('post-summary').value;
    
    if (!isEmpty(programFile) && !isEmpty(image) && !isEmpty(title) && !isEmpty(summary))
    {
        if (programFile.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
            alert(`파일 크기는 ${MAX_FILE_SIZE_MB}MB를 초과할 수 없습니다.`);
            return (-1);
        }
        try {
            const formData = new FormData();
            formData.append('file', programFile);
            formData.append('image', image);
            formData.append('title', title);
            formData.append('summary', summary);
            
            const response = await axios.post('http://localhost:3000/api/submit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response;
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('프로그램 게시를 실패했습니다! 파일 용량이 100MB 넘는지 확인해주세요!');
            return (-1);
        }
    } else {
        alert('모든 입력 필드를 채워주세요!');
        return (-1);
    }
};

export default postProgram;