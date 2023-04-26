import React, { useState } from "react";
import styles from "./Card.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../features/cardSlice";

export default function Card(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const cartoons = useSelector(state => state.cartoon);
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
        dispatch(cartoons.toggleLike());
    }
    return (
        <>
            <div className={styles.container}>
                <button className={styles.closeBtn}>
                    <CloseIcon />
                </button>
                <img
                    src={data.image}
                    alt={data.title}
                    className={styles.img} />
                <div className={styles.info}>{data.title}</div>
                <div className={styles.year}>{data.year}</div>
                <div className={styles.creator}>{data.creator}</div>
                <div className={styles.rating}>{data.rating}</div>
                <div className={styles.runtime_in_minutes}>{data.runtime_in_minutes}</div>
                <div className={styles.episodes}>{data.episodes}</div>
                <button
                    className={styles.likeBtn}
                    onClick={handleLike}>
                    {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
            </div>
        </>
    );
}