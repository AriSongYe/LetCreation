import './PreBoxSkeleton.css'; // 스켈레톤 애니메이션을 위한 CSS 파일
import Shimmer from './Shimmer';

function PreBoxSkeleton() {
return (
    <div className="pre-box-skeleton">
        <div className="skeleton-img">
            <Shimmer/>
        </div>
        <div className="skeleton-title">
            <Shimmer/>
        </div>
    </div>
);
}

export default PreBoxSkeleton;