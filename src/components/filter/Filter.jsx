import React from "react";
import styles from './Filter.module.scss';

export default function Filter(props) {
    const { handleFilter, filter } = props;

    return (
        <>
            {filter
                ?
                <button className={styles.button} onClick={() => handleFilter(false)}>
                    favorites
                </button>
                :
                <button className={styles.button} onClick={() => handleFilter(true)}>
                    all
                </button>
            }
        </>
    );
}