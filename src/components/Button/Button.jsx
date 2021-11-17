import { useState } from "react";
import styles from "./Button.module.css";

export default function Button({ initLikeValue, initDisLikeValue }) {
    const buttons = ["like", "dislike"];
    const [like, setLike] = useState(initLikeValue);
    const [disLike, setDisLike] = useState(initDisLikeValue);

    const handlClick = (btn) => {
        if (btn === buttons[0]) setLike((prev) => prev + 1);
        else setDisLike((prev) => (prev === 0 ? (prev = 0) : prev - 1));
    };
    return (
        <div className={styles.wrapper}>
            {buttons.map((button) => (
                <button key={button} className={styles.btn} onClick={() => handlClick(button)}>
                    {button} {button === "like" ? like : disLike}
                </button>
            ))}
        </div>
    );
}
