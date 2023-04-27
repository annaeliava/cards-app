import React, { useState } from "react";
import styles from "./Card.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, deleteCartoon } from "../../features/cardSlice";

export default function Card(props) {
    const { data, id } = props;
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
        dispatch(toggleLike());
    }

    const deleteCard = () => {
        dispatch(deleteCartoon(id));
    };

    return (
        <>
            <div className={styles.container}>
                <button
                    className={styles.closeBtn}
                    onClick={deleteCard}>
                    <CloseIcon />
                </button>
                <img
                    src={data.image || 'https://i.pinimg.com/564x/49/50/e8/4950e8a46b46da3c50b024cafc316ae3.jpg'}
                    alt={data.title}
                    className={styles.img} />
                <div className={styles.title}>{data.title}</div>
                <div className={styles.year}>{data.year}</div>
                <div className={styles.creator}>Creator: {data.creator}</div>
                <div className={styles.rating}>Rating: {data.rating}</div>
                <div className={styles.runtime_in_minutes}>{data.runtime_in_minutes} minutes</div>
                <div className={styles.episodes}>Episodes: {data.episodes}</div>
                <button
                    className={styles.likeBtn}
                    onClick={handleLike}>
                    {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
            </div>
        </>
    );
}