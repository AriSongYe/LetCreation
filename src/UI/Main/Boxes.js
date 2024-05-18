import { useEffect, useState } from 'react';
import styles from './Boxes.module.css'

import PreBox from './preBox'
import PostBox from './postBox';
import getMainData from '../../API/getMainData';
import Skeleton from '../Skeleton/Skeleton';

function Boxes() {
    const [data, setData] = useState([]);
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

    const renderSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < 50; i++) {
            skeletons.push(<Skeleton key={i} />);
        }
        return skeletons;
    };



    return(
        <section data-testid="PreBoxes" className={styles.section} id="PreBoxes">
            <PostBox onPost={handlePost} />
            {data.length > 0 ? data.map((el, index) => {
                return (<PreBox key={index} data={el}/>)
            }): (renderSkeletons())}

        </section>
    )
}

export default Boxes;