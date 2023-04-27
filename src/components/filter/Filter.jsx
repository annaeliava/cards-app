import React, { useState } from "react";
import styles from './Filter.module.scss';

export default function Filter(props) {
    const { handleFilter, btn } = props;

    return (
        <>
            {btn
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