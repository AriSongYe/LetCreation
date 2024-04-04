import "./postModal.css"

import axios from 'axios';
import Modal from 'react-modal';
import { useState } from 'react';

function PostModal() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const allowedFormats = ['pdf', 'ppt', 'pptx', 'doc', 'docx', 'hwp'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (allowedFormats.includes(fileExtension)) {
            setSelectedFile(file);
        } else {
            alert('Invalid file format. Please select a PDF, PPT, DOC, or HWP file.');
            event.target.value = null;
        }
    };

    const handleImageChange = (event) => {
        const allowedImageFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
        const image = event.target.files[0];
        if (image) {
            const fileExtension = image.name.split('.').pop().toLowerCase();
            if (allowedImageFormats.includes(fileExtension)) {
                setSelectedImage(image);
            } else {
                alert('Invalid image file format. Please select an image file (JPG, JPEG, PNG, GIF, BMP).');
                event.target.value = null;
            }
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    const handleSubmit = async () => {
    
        try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('image', selectedImage);
        formData.append('title', title);
        formData.append('summary', summary);
        
        const response = await axios.post('/api/submit', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        console.error('Error submitting data:', error);
    }
    closeModal();
};

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false); 
    };

    return(
    <div>
        <div class="post-box" onClick={openModal}>
            <div class="post-title">Add a Program</div>
        </div>
        {(isModalOpen &&
        <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            contentLabel="Post Modal">
            <h1>Add new Program</h1>
            <div class="post-input-container">
                <input class="post-file" type="file" onChange={handleFileChange} placeholder={selectedFile ? selectedFile.name : "Add a title"} />
                <input class="post-img" type="file" onChange={handleImageChange} placeholder={selectedImage ? selectedImage.name : "Add a image"}/>
                <input class="post-title" onChange={handleTitleChange} placeholder="Write a title" />
                <input class="post-summary" onChange={handleSummaryChange} placeholder="Write Summary"/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </Modal>
        )}
    </div>
    );
}

export default PostModal;