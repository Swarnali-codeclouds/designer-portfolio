import React from "react";
import { Star } from "lucide-react";
import "./RatingCard.css";

export default function RatingCard(){
    const rating = 4.8; // Example rating value
    const reviews = 1245;

    const fullStar = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStar = 5 - fullStar - halfStar;      

    return(
        <div class="d-flex align-items-center mt-4 p-4 rating-card-container  justify-content-center justify-content-lg-start text-center text-lg-start m-auto m-lg-0">
            <div className="ranting-info me-4">
           <h1> {rating} </h1>
        </div>
        <div>
        <div className="rating-card">
            <div className="review-count">
                <span className="review-count">({reviews} reviews)</span>
            </div>
                <div className="rating-stars">
                    {[...Array(fullStar)].map((_, index) => (
                        <Star key={`full-${index}`} className="star full" />
                    ))}
                    {[...Array(halfStar)].map((_, index) => (
                        <Star key={`half-${index}`} className="star half" />
                    ))}
                    {[...Array(emptyStar)].map((_, index) => (
                        <Star key={`empty-${index}`} className="star empty" />
                    ))}
                </div>
            </div>
            </div>
            </div>
    )
}