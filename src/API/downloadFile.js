import axios from 'axios';

const downloadFile = async ( {filepath} ) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/programs/${filepath}`, {
            responseType: 'blob',
        });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = filepath.split('/').pop();
        downloadLink.click();
    } catch (error) {
        console.error('Error downloading file:', error);
    }
};

export default downloadFile;