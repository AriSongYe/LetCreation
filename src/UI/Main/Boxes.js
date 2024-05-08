import { useEffect, useState } from 'react';
import styles from './Boxes.module.css'

import PreBox from './preBox'
import PostBox from './postBox';
import getMainData from '../../API/getMainData';

function Boxes() {
    const [data, setData] = useState(null);
    const [postData, setPostData] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            const mainData = await getMainData();
            console.log(mainData);
            setData(mainData);
        };
        fetchData();
    }, [postData]);

    const handlePost = () => {
        setPostData(!postData);
    }

    return(
        <section data-testid="PreBoxes" class={styles.section} id="PreBoxes">
            <PostBox onPost={handlePost} />
            {data == null ? null :data.map((el, index) => {
                return (<PreBox key={index} data={el}/>);
            })}
        </section>
    )
}

export default Boxes;