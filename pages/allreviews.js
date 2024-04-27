import Wrapper from "@/components/Wrapper";
import allReviews from "@/utils/reviews";
import { useState } from "react";

function Allreviews ({ reviews }) {
    let [ reviewsShown, setReviewsShown ] = useState(6);

    let totalReviewsCount = reviews.length;
    let fiveMarksCount = 0;
    let fourMarksCount = 0;
    let threeMarksCount = 0;
    let twoMarksCount = 0;
    let oneMarksCount = 0;
    let averageMark = 0;
    let fiveMarksPercents;
    let fourMarksPercents;
    let threeMarksPercents;
    let twoMarksPercents;
    let oneMarksPercents;
    let correspondFillWidth;
    let markFillWidth;

    for (let i of reviews) {
        averageMark += +(i.mark);

        switch (+i.mark) {
            case 5:
                fiveMarksCount += 1;
                break;
            case 4:
                fourMarksCount += 1;
                break;
            case 3:
                threeMarksCount += 1;
                break;
            case 2:
                twoMarksCount += 1;
                break;
            case 1:
                oneMarksCount += 1;
                break;
            default:
                break;
        }
    }

    fiveMarksPercents = Math.round((fiveMarksCount * 100) / totalReviewsCount);
    fourMarksPercents = Math.round((fourMarksCount * 100) / totalReviewsCount);
    threeMarksPercents = Math.round((threeMarksCount * 100) / totalReviewsCount);
    twoMarksPercents = Math.round((twoMarksCount * 100) / totalReviewsCount);
    oneMarksPercents = Math.round((oneMarksCount * 100) / totalReviewsCount);
    averageMark = (averageMark / totalReviewsCount).toFixed("1");
    correspondFillWidth = Math.round((averageMark * 100) / 5);

    return (
        <Wrapper>

        <div>

            <div id="tt-reviews-summary" data-v-app="">
                <svg xmlns="http://www.w3.org/2000/svg" hidden={true}>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="tt-icon-star--full" viewBox="0 0 24 24"><path d="M12 18.66l-7.44 4.35 1.98-8.16L0 9.36l8.62-.7L12 .99l3.38 7.67 8.62.7-6.54 5.49 1.98 8.16L12 18.66z"></path></symbol>
                    <symbol id="tt-icon-star--half" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.09L9.09 9l-7.42.62 5.66 4.93-1.72 7.32 1.07-.65L12 17.97V2.09z"></path><path d="M12 2.09L14.91 9l7.42.62-5.66 4.93 1.72 7.32-1.07-.65L12 17.97V2.09z"></path></symbol>
                </svg>

                <div className="tt-w-reviews-summary">
                    <div className="tt-l-grid tt-c-reviews-summary__content">
                        <div className="tt-l-grid__row tt-c-reviews-summary__grid-row flex-column">
                            <div className="tt-l-grid__col tt-c-reviews-summary__grid-col tt-l-grid__col--1 tt-c-reviews-summary__grid-col--1 mr-4 text-center">
                            <div className="tt-c-reviews-summary__rating tt-u-mb--sm"><span className="tt-c-reviews-summary__rating-number">4.7</span> <span className="tt-c-reviews-summary__rating-text">out of 5 stars</span></div>
                            <div className="tt-c-rating tt-c-reviews-summary__stars tt-u-mb--lg">

                                <div className="tt-c-rating__star">
                                    <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--xl tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">

                                        <use xlinkHref="#tt-icon-star--full"></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--xl tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">

                                        <use xlinkHref="#tt-icon-star--full"></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--xl tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">

                                        <use xlinkHref="#tt-icon-star--full"></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--xl tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">

                                        <use xlinkHref="#tt-icon-star--full"></use>
                                    </svg>
                                </div>
                                <div className="tt-c-rating__star">
                                    <svg className="tt-o-icon tt-o-icon--star--half tt-o-icon--xl tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">

                                        <use xlinkHref="#tt-icon-star--half"></use>
                                    </svg>
                                </div>
                            </div>
                            
                            </div>
                            <div className="tt-l-grid__col tt-c-reviews-summary__grid-col tt-l-grid__col--2 tt-c-reviews-summary__grid-col--2 reviews-item-col">
                                <div className="tt-c-ratings-breakdown tt-u-spacing--md tt-c-reviews-summary__ratings-breakdown">
                                    <div className="tt-c-ratings-breakdown__heading tt-u-align-center" role="heading" aria-level="3">Кол-во отзывов - {totalReviewsCount}</div>
                                    <div className="tt-c-ratings-breakdown__table tt-u-spacing--xs">
                                        <p className="tt-u-clip-hide">Rated 5 stars by 70% of reviewers</p>
                                        <div role="button" tabIndex="0" className="tt-c-ratings-breakdown__bar-wrap" aria-label="Show reviews with a 5 star rating">
                                            <span className="tt-c-ratings-breakdown__rating">
                                            <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--sm tt-c-ratings-breakdown__star tt-c-rating__icon tt-c-ratings-breakdown__star tt-c-rating__icon" aria-hidden="true" focusable="false">

                                                <use xlinkHref="#tt-icon-star--full"></use>
                                            </svg>
                                            <span className="tt-c-ratings-breakdown__rating-number" aria-hidden="true">5</span>
                                            </span>
                                            <span className="tt-c-ratings-breakdown__bar"><span className="tt-c-ratings-breakdown__bar-progress" style={{"width": "70.4%"}}></span></span><span className="tt-c-ratings-breakdown__percent" aria-hidden="true">{fiveMarksPercents}%</span>
                                        </div>
                                        <p className="tt-u-clip-hide">Rated 4 stars by 26% of reviewers</p>
                                        <div role="button" tabIndex="0" className="tt-c-ratings-breakdown__bar-wrap" aria-label="Show reviews with a 4 star rating">
                                            <span className="tt-c-ratings-breakdown__rating">
                                            <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--sm tt-c-ratings-breakdown__star tt-c-rating__icon tt-c-ratings-breakdown__star tt-c-rating__icon" aria-hidden="true" focusable="false">

                                                <use xlinkHref="#tt-icon-star--full" height={20}></use>
                                            </svg>
                                            <span className="tt-c-ratings-breakdown__rating-number" aria-hidden="true">4</span>
                                            </span>
                                            <span className="tt-c-ratings-breakdown__bar"><span className="tt-c-ratings-breakdown__bar-progress" style={{"width": "25.9%"}}></span></span><span className="tt-c-ratings-breakdown__percent" aria-hidden="true">{fourMarksPercents}%</span>
                                        </div>
                                        <p className="tt-u-clip-hide">Rated 3 stars by 4% of reviewers</p>
                                        <div role="button" tabIndex="0" className="tt-c-ratings-breakdown__bar-wrap" aria-label="Show reviews with a 3 star rating">
                                            <span className="tt-c-ratings-breakdown__rating">
                                            <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--sm tt-c-ratings-breakdown__star tt-c-rating__icon tt-c-ratings-breakdown__star tt-c-rating__icon" aria-hidden="true" focusable="false">

                                                <use xlinkHref="#tt-icon-star--full"></use>
                                            </svg>
                                            <span className="tt-c-ratings-breakdown__rating-number" aria-hidden="true">3</span>
                                            </span>
                                            <span className="tt-c-ratings-breakdown__bar"><span className="tt-c-ratings-breakdown__bar-progress" style={{"width": "3.7%"}}></span></span><span className="tt-c-ratings-breakdown__percent" aria-hidden="true">{threeMarksPercents}%</span>
                                        </div>
                                        <p className="tt-u-clip-hide">Rated 2 stars by 0% of reviewers</p>
                                        <div className="tt-c-ratings-breakdown__bar-wrap">
                                            <span className="tt-c-ratings-breakdown__rating">
                                            <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--sm tt-c-ratings-breakdown__star tt-c-rating__icon tt-c-ratings-breakdown__star tt-c-rating__icon" aria-hidden="true" focusable="false">

                                                <use xlinkHref="#tt-icon-star--full"></use>
                                            </svg>
                                            <span className="tt-c-ratings-breakdown__rating-number" aria-hidden="true">2</span>
                                            </span>
                                            <span className="tt-c-ratings-breakdown__bar"><span className="tt-c-ratings-breakdown__bar-progress" style={{"width": "0%"}}></span></span><span className="tt-c-ratings-breakdown__percent" aria-hidden="true">{twoMarksPercents}%</span>
                                        </div>
                                        <p className="tt-u-clip-hide">Rated 1 star by 0% of reviewers</p>
                                        <div className="tt-c-ratings-breakdown__bar-wrap">
                                            <span className="tt-c-ratings-breakdown__rating">
                                            <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--sm tt-c-ratings-breakdown__star tt-c-rating__icon tt-c-ratings-breakdown__star tt-c-rating__icon" aria-hidden="true" focusable="false">

                                                <use xlinkHref="#tt-icon-star--full"></use>
                                            </svg>
                                            <span className="tt-c-ratings-breakdown__rating-number" aria-hidden="true">1</span>
                                            </span>
                                            <span className="tt-c-ratings-breakdown__bar"><span className="tt-c-ratings-breakdown__bar-progress" style={{"width": "0%"}}></span></span><span className="tt-c-ratings-breakdown__percent" aria-hidden="true">{oneMarksPercents}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tt-l-grid__col tt-c-reviews-summary__grid-col tt-l-grid__col--3 tt-c-reviews-summary__grid-col--3 reviews-item-col">
                                <div className="tt-c-summary-dim tt-c-summary-dim-rating tt-u-spacing--sm tt-c-reviews-summary__custom-dim" label="Value">
                                    <div className="tt-c-summary-dim__heading tt-u-align-center" role="heading" aria-level="3">Соответствие: {averageMark} / 5.0</div>
                                    <div className="tt-c-summary-dim-rating__bar-wrap">
                                        <div className="tt-c-summary-dim-rating__bar"><span className="tt-c-summary-dim-rating__progress" style={{"width": correspondFillWidth + "%"}}></span></div>
                                    </div>
                                </div>
                                <div className="tt-c-summary-dim tt-c-summary-dim-rating tt-u-spacing--sm tt-c-reviews-summary__custom-dim" label="Quality">
                                    <div className="tt-c-summary-dim__heading tt-u-align-center" role="heading" aria-level="3">Оценка: {(averageMark - 0.1).toFixed(1)} / 5.0</div>
                                    <div className="tt-c-summary-dim-rating__bar-wrap">
                                        <div className="tt-c-summary-dim-rating__bar"><span className="tt-c-summary-dim-rating__progress" style={{"width": (correspondFillWidth - 1) + "%"}}></span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="tt-l-grid__row tt-c-reviews-summary__grid-row"></div>
                    </div>
                </div>
            </div>

            <div className="tt-reviews-list">
                <div className="tt-w-reviews-list" >
                    {reviews.map((review, i) => {
                        let goodCorrespdWidth = Math.round((+review.mark * 100) / 5);

                        return (
                            <div className={`tt-c-review ${i >= reviewsShown ? "d-none" : ""}`} key={i}>
                                <div className="tt-l-grid tt-c-review__content">
                                    <div className="tt-l-grid__row tt-c-review__grid-row">
                                        <div className="tt-l-grid__col tt-c-review__grid-col relative tt-l-grid__col--1 tt-c-review__grid-col--1 review-col review-col-first">
                                            <div className="tt-c-rating tt-c-review__rating tt-u-mb--sm">
                                            <div className="tt-u-clip-hide">Rated {review.mark} out of 5</div>
                                            <div className="tt-c-rating__star">
                                                <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">
                                                    
                                                    <use xlinkHref="#tt-icon-star--full"></use>
                                                </svg>
                                            </div>
                                            <div className="tt-c-rating__star">
                                                <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">
                                                    
                                                    <use xlinkHref="#tt-icon-star--full"></use>
                                                </svg>
                                            </div>
                                            <div className="tt-c-rating__star">
                                                <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">
                                                    
                                                    <use xlinkHref="#tt-icon-star--full"></use>
                                                </svg>
                                            </div>
                                            <div className="tt-c-rating__star">
                                                <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">
                                                    
                                                    <use xlinkHref="#tt-icon-star--full"></use>
                                                </svg>
                                            </div>
                                            <div className="tt-c-rating__star">
                                                <svg className="tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon" aria-hidden="true" focusable="false">
                                                    
                                                    <use xlinkHref="#tt-icon-star--full"></use>
                                                </svg>
                                            </div>
                                            </div>
                                            <div className="tt-o-byline tt-u-spacing--left--xs tt-c-review__byline tt-u-mb--lg">
                                            <span className="tt-o-byline__item tt-o-byline__author">{hideEmail(review.email)}</span>
                                            <span className="tt-o-badge tt-o-badge--verified-purchaser">
                                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m25.319.176 2.063 6.779 6.902-1.602-1.602 6.902 6.779 2.063-4.839 5.177 4.839 5.176-6.779 2.064 1.602 6.902-6.902-1.602-2.064 6.778-5.176-4.838-5.176 4.838-2.064-6.778L6 33.637l1.602-6.902L.824 24.67l4.838-5.176-4.838-5.177 6.778-2.063L6 5.353l6.902 1.602L14.966.176l5.176 4.839L25.32.176Z" fill="#DBFF00"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m19.854 10.934-7.947 4.528v9.154l7.947 4.805 7.947-4.805v-9.154l-7.947-4.528Zm-.621-2.053c.385-.22.857-.22 1.242 0l8.783 5.005c.392.223.634.64.634 1.09v10.112c0 .44-.23.846-.606 1.074l-8.783 5.31c-.4.242-.9.242-1.298 0l-8.784-5.31a1.255 1.255 0 0 1-.605-1.074V14.976c0-.45.242-.867.633-1.09l8.784-5.005Z" fill="#110D1C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.52 16.111c.402.415.391 1.077-.024 1.479l-7.277 7.043-4.07-4.706a1.046 1.046 0 0 1 1.582-1.367l2.623 3.032 5.688-5.505a1.046 1.046 0 0 1 1.478.024Z" fill="#110D1C"></path></svg>
                                            </span>
                                            
                                            </div>
                                        </div>
                                        <div className="tt-l-grid__col tt-c-review__grid-col tt-l-grid__col--2 tt-c-review__grid-col--2 review-col review-col-second">
                                            <div id="tt-review-title-661078" className="tt-c-review__heading tt-u-mb--sm" role="heading" aria-level="3">
                                            <div className="tt-c-review__heading-text">{review.header}</div>
                                            </div>
                                            <div className="tt-c-review__text">
                                            <div className="tt-c-review__text-wrap">
                                                <div className="tt-c-review__text-content-wrapper tt-u-mb--md">
                                                    <span className="tt-c-review__text-content">{review.content}</span> 
                                                </div>
                                            </div>
                                            
                                            </div>
                                        </div>
                                        <div className="tt-l-grid__col tt-c-review__grid-col tt-l-grid__col--3 tt-c-review__grid-col--3 review-col review-col-third">
                                            <div className="tt-c-dimension tt-u-mb--xl tt-c-dimension--1">
                                            <div className="tt-c-dimension__heading tt-u-mb--sm"><span className="tt-c-dimension__label">Соответствие товара: </span><span className="tt-c-dimension__value-label">{review.mark} / 5.0</span></div>
                                            <div className="tt-c-dimension__bar-wrap tt-c-dimension__bar-wrap--rating">
                                                <div className="tt-c-dimension__bar">
                                                    <span className="tt-c-dimension__progress" style={{"width": goodCorrespdWidth + "%"}}></span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tt-c-dimension tt-u-mb--xl tt-c-dimension--1">
                                            <div className="tt-c-dimension__heading tt-u-mb--sm"><span className="tt-c-dimension__label">Оценка: </span><span className="tt-c-dimension__value-label">{review.mark} / 5.0</span></div>
                                            <div className="tt-c-dimension__bar-wrap tt-c-dimension__bar-wrap--rating">
                                                <div className="tt-c-dimension__bar">
                                                    <span className="tt-c-dimension__progress" style={{"width": goodCorrespdWidth + "%"}}></span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tt-c-review__purchased tt-u-mb--sm">{review.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className={`show-more-button ${reviewsShown >= totalReviewsCount ? "d-none" : ""}`} onClick={() => setReviewsShown(reviewsShown + 6)}>
                        <button>Показать больше</button>
                    </div>
                </div>
            </div>

        </div>
        </Wrapper>
    )
}

export async function getStaticProps() {
    var sortedReviews = allReviews.sort(function(a,b){
        let dateAArray = a.date.split(".");
        let dateBArray = b.date.split(".");
        let newDateA = dateAArray[2] + "." + dateAArray[1] + "." + dateAArray[0];
        let newDateB = dateBArray[2] + "." + dateBArray[1] + "." + dateBArray[0];

        return new Date(newDateB) - new Date(newDateA);
    });

    return {
      props: {
        reviews: sortedReviews
      },
    };
}

function hideEmail(email) {
    return email.replace(/(.{3})(.*)(?=@)/,
      function(gp1, gp2, gp3) { 
        for (let i = 0; i < gp3.length; i++) { 
            gp2+= "*"; 
        } 
        return gp2; 
      });
  };

export default Allreviews;