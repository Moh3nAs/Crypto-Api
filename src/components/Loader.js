import React from 'react';

//Gif
import spinner from "../services/assets/loading.gif"

//styles
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div>
            <img className={styles.image} src={spinner} alt="Loading"></img>
        </div>
    );
};

export default Loader;