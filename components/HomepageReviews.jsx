import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomepageReview from "./HomepageReview";
import allReviews from "@/utils/reviews";

function HomepageReviews(props) {
    let reviews = props.reviews;
    let totalReviewsCount = reviews.length;
    let averageMark = 0;

    for (let i of allReviews) {
        averageMark += +(i.mark);
    }

    averageMark = (averageMark / totalReviewsCount);

    let oneStarClass = "tt-icon-star--full";
    let twoStarsClass = averageMark > 1 && averageMark <= 1.5 ? (averageMark === 2 ? "tt-icon-star--full" : "tt-icon-star--half") : "tt-icon-star--full";
    let threeStarsClass = averageMark > 2 && averageMark <= 3 ? (averageMark === 3 ? "tt-icon-star--full" : "tt-icon-star--half") : (averageMark > 2 ?  "tt-icon-star--full" : "tt-icon-star--empty");
    let fourStarsClass = averageMark > 3 && averageMark <= 4 ? (averageMark === 4 ? "tt-icon-star--full" : "tt-icon-star--half") : (averageMark > 3 ?  "tt-icon-star--full" : "tt-icon-star--empty");
    let fiveStarsClass = averageMark > 4 && averageMark <= 5 ? (averageMark === 5 ? "tt-icon-star--full" : "tt-icon-star--half") : (averageMark > 4 ?  "tt-icon-star--full" : "tt-icon-star--empty");

    let items = reviews.map((review, index) => {
        return (
            <HomepageReview review={review} key={index} />
        );
    })

    return (
        <div className="homepage-reviews">
            <div className="homepage-reviews-header">
                <div className="homepage-reviews-header-content">
                    <div>
                        <h3>Наши отзывы</h3>
                       

                        <div className="homepage-reviews-stars">
                            <div>
                                <div className="tt-c-rating__star">
                                    <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon tt-o-icon--star--full"} aria-hidden="true" focusable="false">

                                        <use xlinkHref={"#" + oneStarClass}></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (twoStarsClass.indexOf("empty") !== -1 ? twoStarsClass : (twoStarsClass.indexOf("half") !== -1 ? "tt-o-icon--star--half" : "tt-o-icon--star--full"))} aria-hidden="true" focusable="false">

                                        <use xlinkHref={"#" + twoStarsClass}></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (threeStarsClass.indexOf("empty") !== -1 ? threeStarsClass : (threeStarsClass.indexOf("half") !== -1 ? "tt-o-icon--star--half" : "tt-o-icon--star--full"))} aria-hidden="true" focusable="false">

                                        <use xlinkHref={"#" + threeStarsClass}></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className={"tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (fourStarsClass.indexOf("empty") !== -1 ? fourStarsClass : (fourStarsClass.indexOf("half") !== -1 ? "tt-o-icon--star--half" : "tt-o-icon--star--full"))} aria-hidden="true" focusable="false">

                                        <use xlinkHref={"#" + fourStarsClass}></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className={"tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (fiveStarsClass.indexOf("empty") !== -1 ? fiveStarsClass : (fiveStarsClass.indexOf("half") !== -1 ? "tt-o-icon--star--half" : "tt-o-icon--star--full"))} aria-hidden="true" focusable="false">

                                        <use xlinkHref={"#" + fiveStarsClass}></use>
                                    </svg>
                                </div>
                            </div>
                            <div className="stars-caption-homepage">
                                {averageMark.toFixed(1)} рейтинг из {totalReviewsCount} отзыва
                            </div>
                        </div>
                    </div>
                    <div className="es-header-border"></div>
                    <div className="see-all-reviews-homepage">
                        <a href="/allreviews">
                            Смотреть все
                        </a>
                    </div>
                    <div className="smile-icon">
                        <img src="/smileicon.svg" alt="Smile icon" />
                    </div>
                </div>
            </div>

            <AliceCarousel
                autoPlay
                touchTracking
                mouseTracking
                disableButtonsControls
                disableDotsControls
                items={items}
                responsive={getResponsive()}
                autoPlayInterval={1000}
                
            ></AliceCarousel>
        </div>
    );
}

function getResponsive() {
    return {
        0: { 
            items: 1, 
            innerWidth: 50
        },
        568: { 
            items: 1, 
            innerWidth: 50
        },
        768: {
            items: 2, 
            itemsFit: 'contain'
        },
        992: {
            items: 2, 
            itemsFit: 'contain'
        },
        1220: {
            items: 3, 
            itemsFit: 'contain'
        },
        1600: {
            items: 4, 
            itemsFit: 'contain'
        },
    };
}

export default HomepageReviews;