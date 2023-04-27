import React, { useState } from "react";
import styles from "./Card.module.scss";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, deleteCartoon } from "../../features/cardSlice";

export default function Card({ id, ...props }) {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);

    const handleDislike = () => {
        setLike(false);
        dispatch(toggleLike({ id, isLiked: false }));
    }

    const handleLike = () => {
        setLike(true);
        dispatch(toggleLike({ id, isLiked: true }));
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
                    src={props.image}
                    alt={props.title}
                    className={styles.img} />
                <div className={styles.title}>{props.title}</div>
                <div className={styles.year}>{props.year}</div>
                <div className={styles.creator}>Creator: {props.creator}</div>
                <div className={styles.rating}>Rating: {props.rating}</div>
                <div className={styles.runtime_in_minutes}>{props.runtime_in_minutes} minutes</div>
                <div className={styles.episodes}>Episodes: {props.episodes}</div>
                {
                    like
                        ?
                        <button
                            className={styles.likeBtn}
                            onClick={handleDislike}>
                            <FavoriteIcon />
                        </button>
                        :
                        <button
                            className={styles.likeBtn}
                            onClick={handleLike}>
                            <FavoriteBorderIcon />
                        </button>
                }
            </div>
        </>
    );
}