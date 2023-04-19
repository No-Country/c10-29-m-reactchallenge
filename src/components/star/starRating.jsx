import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import "./Star.css";

const StarRating = () => {

    const [rating, setRating] = useState(parseInt(localStorage.getItem('rating')) || null);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        localStorage.setItem('rating', rating);
    }, [rating]);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />

                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)} />
                    </label>
                );
            })}
            {/* <p><h3>Calificame</h3>{rating}</p> */}
        </div>
    );
};

export default StarRating;
