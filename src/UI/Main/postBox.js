import styles from './postBox.module.css';
import { useState } from 'react';

import Modal from 'react-modal';
import postProgram from '../../API/postProgram';

function PostBox( { onPost } ) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = ({ onPost }) => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleSubmit = async () => {
        await postProgram();
        alert('프로그램이 성공적으로 등록되었습니다!');
        onPost();
        closeModal();
    }

    return (
        <div>
        <div className={styles.box} onClick={openModal}>
            <h3>Add a Program</h3>
        </div>
        {/* Post Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Post Modal" className={styles.modal} ariaHideApp={false}>
            <h1>프로그램 추가</h1>
            <div className={styles.container}>
                <div className={styles.uploadContainer}>
                    <label className={styles.label} for="post-file">프로그램 파일을 업로드해주세요</label>
                    <label className={styles.label}for="post-img">프로그램을 대표할 이미지를 업로드해주세요</label>
                    <input className={styles.File} id="post-file" type="file" accept=".pdf,.ppt,.pptx,.docx,.doc,.hwp"/>
                    <input className={styles.img} id ="post-img"type="file" accept="image/*"/>
                </div>
                <input className={styles.title} id="post-title" placeholder="프로그램 제목을 입력해주세요" />
                <textarea className={styles.summary} id="post-summary" name="post-summary" placeholder="프로그램에 대하여 간략히 설명해주세요"></textarea>
                <button onClick={() => { handleSubmit() }}>Submit</button>
            </div>
        </Modal>
    </div>
    )
}

export default PostBox;