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
    const [description, setDescription] = useState(false);

    const handleShowDescription = () => {
        setDescription(!description);
    };

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
                {
                    description ?
                        <div className={styles.description} onClick={handleShowDescription}>{props.description}</div>
                        :
                        <>
                            <img
                                src={props.image}
                                alt={props.title}
                                className={styles.img}
                                onClick={handleShowDescription} />
                            <div className={styles.title}>{props.title}</div>
                            <div className={styles.year}>{props.release_date}</div>
                            <div className={styles.creator}>Director: {props.director}</div>
                            <div className={styles.rating}>Producer: {props.producer}</div>
                            <div className={styles.runtime_in_minutes}>Minutes: {props.running_time}</div>
                        </>
                }
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