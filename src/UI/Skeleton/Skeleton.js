import styles from './Skeleton.module.css'; // 스켈레톤 애니메이션을 위한 CSS 파일
import Shimmer from './shimmer';

function Skeleton() {
return (
    <div className={styles.box}>
        <div className={styles.img}>
            <Shimmer/>
        </div>
        <div className={styles.title}>
            <Shimmer/>
        </div>
    </div>
);
}

export default Skeleton;