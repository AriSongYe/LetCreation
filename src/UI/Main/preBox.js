import { useState } from 'react';
import styles from './preBox.module.css';
import downloadFile from '../../API/downloadFile';
import Modal from 'react-modal';

function PreBox({ data }) {
    const [isModalOpen, setModalOpen] = useState(false);

    if (!data || !data.imagePath) {
        return null;
    }

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return(
        <div className={styles.container}>
            <figure onClick={openModal}>
                <img className={styles.img} src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="preView Image!"/>
                <figcaption className={styles.caption}>{data.title}</figcaption>
            </figure>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <h1>{data.title}</h1>
                <img className={styles.modalImage} src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="Image" />
                <p>{data.summary}</p>
                <button onClick={() => downloadFile({filepath: data.filePath})}/>
                <div className="comment-container">
                </div>
            </Modal>
        </div>
    )
}

export default PreBox;