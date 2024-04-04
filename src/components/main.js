import "./main.css";

import PreBox from './Box/preBox';
import PostModal from "./Post/postModal";


function Main() {

    return (
        <div>
            <div class="box-container">
                <PreBox/>
                <PostModal/>
            </div>
        </div>
    );
}

export default Main;
