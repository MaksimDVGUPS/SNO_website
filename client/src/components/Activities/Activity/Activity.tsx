import { FC } from 'react';
import styles from './Activity.module.scss'
import {Link} from "react-router-dom";

interface ActivityProps {
    id: string,
    imgSrc: string,
    title: string,
}

const Activity: FC<ActivityProps> = ({ id, imgSrc, title}) => {
    return (
        <Link to={id} className={styles.activity}>
            <img className={styles.activityLogo} src={imgSrc} alt="Activity logo" />
            <h2 className={styles.title}>{title}</h2>
        </Link>
    )
}

export default Activity;