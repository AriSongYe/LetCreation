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
            <figure className={styles.prebox} onClick={openModal}>
                <img className={styles.img} src={`http://localhost:3000/api/imgs/${data.imagePath}`} alt="preView"/>
                <img className={styles.likeImg} src='/graylike16nofill.png' alt='like'/>
                <figcaption className={styles.caption}>{data.title}</figcaption>
            </figure>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <h1 className={styles.boxtitle}>{data.title}</h1>
                <h3>{`인원제한: ${data.headCnt === 0 ? "없음" : data.headCnt + "명 이하"}`}</h3>
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