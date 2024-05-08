import axios from "axios";

const postProgram = async () => {
    const programFile = document.getElementById('post-file').files[0];
    const image = document.getElementById('post-img').files[0];
    const title = document.getElementById('post-title').value;
    const summary = document.getElementById('post-summary').value;

    if (programFile !== null && image !== null && title.trim() !== '' && summary !== '')
    {
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
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
};

export default postProgram;