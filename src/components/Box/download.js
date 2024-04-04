import axios from 'axios';

function DownButton( { filepath } ) {

    const downloadFile = async () => {
        try {
            console.log(filepath);
            // 서버에 GET 요청을 보내서 파일을 다운로드합니다.
            const response = await axios.get(`http://localhost:3000/api/programs/${filepath}`, {
                responseType: 'blob', // 파일 형식으로 응답 받음
            });
            
            // 파일 다운로드를 위한 Blob 객체 생성
            const blob = new Blob([response.data], { type: response.headers['content-type'] });

            // 다운로드 링크 생성
            const downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = filepath.split('/').pop(); // 파일 경로에서 파일명 추출하여 다운로드할 파일명으로 설정
            downloadLink.click(); // 클릭하여 다운로드 시작
        } catch (error) {
            console.log(filepath);
            console.error('Error downloading file:', error);
        }
    };
    return (<button onClick={downloadFile}/>)
}

export default DownButton;