import "./postModal.css"

import axios from 'axios';
import Modal from 'react-modal';
import { useState } from 'react';

function PostModal() {
    const [isModalOpen, setModalOpen] = useState(false);

    const uploadFile = async () => {
        const programFile = document.getElementById('post-file').files[0];
        const image = document.getElementById('post-img').files[0];
        const title = document.getElementById('post-title').value;
        const summary = document.getElementById('post-summary').value;
        
        console.log(programFile);
        console.log(image);
        console.log(title);
        console.log(summary);

        if (programFile !== null && image !== null && title.trim() !== '' && summary !== '')
        {
            console.log("Success try");
            try {
                const formData = new FormData();
                formData.append('file', programFile);
                formData.append('image', image);
                formData.append('title', title);
                formData.append('summary', summary);
                
                await axios.post('/api/submit', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log("Request Close!")
        setModalOpen(false);
    };

    return(
    <div>
        <div class="post-box" onClick={openModal}>
            <h3>Add a Program</h3>
        </div>
        {/* Post Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Post Modal">
            <h1>프로그램 추가</h1>
            <div class="post-input-container">
                <label for="post-file">프로그램 파일을 업로드하세요</label>
                <input class="post-file" id="post-file" type="file" accept=".pdf,.ppt,.pptx,.docx,.doc,.hwp"/>
                <label for="post-img">프로그램을 대표할 이미지를 업로드하세요</label>
                <input class="post-img" id ="post-img"type="file" accept="image/*"/>
                <input class="post-title" id="post-title" placeholder="프로그램 제목을 입력하세요" />
                <textarea class="post-summary" id="post-summary" name="post-summary" placeholder="프로그램에 대하여 간략히 설명하세요"></textarea>
                <button onClick={() => { uploadFile(); }}>Submit</button>
            </div>
        </Modal>
    </div>
    );
}

export default PostModal;