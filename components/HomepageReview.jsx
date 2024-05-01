function HomepageReview({ review }) {
    let mark = +review.mark;
    let oneStarClass = "tt-icon-star--full";
    let twoStarsClass = mark > 1 && mark < 2 ? "tt-icon-star--half" : (mark > 1 ? "tt-icon-star--full" : "tt-icon-star--empty");
    let threeStarsClass = mark > 3 && mark < 4 ? "tt-icon-star--half" : (mark > 2 ? "tt-icon-star--full" : "tt-icon-star--empty");
    let fourStarsClass = mark > 3 && mark < 4 ? "tt-icon-star--half" : (mark > 3 ? "tt-icon-star--full" : "tt-icon-star--empty");
    let fiveStarsClass = mark > 4 && mark < 5 ? "tt-icon-star--half" : (mark > 4 ? "tt-icon-star--full" : "tt-icon-star--empty");

    return (
        <div className="homepage-review-wrapper">
            <div className="homepage-review-inner">
                <svg xmlns="http://www.w3.org/2000/svg" hidden={true}>
                    <symbol id="tt-icon-star--empty" viewBox="0 0 24 24"><path d="M12 18l-6.4 3.88 1.73-7.33-5.66-4.93L9.09 9 12 2.09 14.91 9l7.42.64-5.63 5 1.72 7.34z" fill="none"></path></symbol>
                    <symbol xmlns="http://www.w3.org/2000/svg" id="tt-icon-star--full" viewBox="0 0 24 24"><path d="M12 18.66l-7.44 4.35 1.98-8.16L0 9.36l8.62-.7L12 .99l3.38 7.67 8.62.7-6.54 5.49 1.98 8.16L12 18.66z"></path></symbol>
                    <symbol id="tt-icon-star--half" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.09L9.09 9l-7.42.62 5.66 4.93-1.72 7.32 1.07-.65L12 17.97V2.09z"></path><path d="M12 2.09L14.91 9l7.42.62-5.66 4.93 1.72 7.32-1.07-.65L12 17.97V2.09z"></path></symbol>
                </svg>
                <div className="homepage-review-head">
                    <p>{hideEmail(review.email)}</p>
                    <p>{review.date}</p>
                </div>
                <div>
                    <div className="tt-c-rating__star">
                        <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon tt-o-icon--star--full"} aria-hidden="true" focusable="false">
                            
                            <use xlinkHref={"#" + oneStarClass}></use>
                        </svg>
                    </div>
                    <div className="tt-c-rating__star">
                        <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (twoStarsClass.indexOf("empty") !== -1 ? twoStarsClass : "tt-o-icon--star--full")} aria-hidden="true" focusable="false">
                            
                            <use xlinkHref={"#" + twoStarsClass}></use>
                        </svg>
                    </div>
                    <div className="tt-c-rating__star">
                        <svg className={"tt-o-icon tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (threeStarsClass.indexOf("empty") !== -1 ? threeStarsClass : "tt-o-icon--star--full")} aria-hidden="true" focusable="false">
                            
                            <use xlinkHref={"#" + threeStarsClass}></use>
                        </svg>
                    </div>
                    <div className="tt-c-rating__star">
                        <svg className={"tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (fourStarsClass.indexOf("empty") !== -1 ? fourStarsClass : "tt-o-icon--star--full")} aria-hidden="true" focusable="false">
                            
                            <use xlinkHref={"#" + fourStarsClass}></use>
                        </svg>
                    </div>
                    <div className="tt-c-rating__star">
                        <svg className={"tt-o-icon tt-o-icon--star--full tt-o-icon--lg tt-c-rating__icon tt-c-rating__icon " + (fiveStarsClass.indexOf("empty") !== -1 ? fiveStarsClass : "tt-o-icon--star--full")} aria-hidden="true" focusable="false">
                            
                            <use xlinkHref={"#" + fiveStarsClass}></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <p>{review.content}</p>
                </div>

                <div className="review-icon">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#google-logo)">
                            <path d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z" fill="#fbbb00"></path>
                            <path d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z" fill="#518ef8"></path>
                            <path d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z" fill="#28b446"></path>
                            <path d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z" fill="#f14336"></path>
                        </g>
                        <defs>
                            <clipPath id="google-logo">
                                <rect width="16" height="16" fill="#ffffff"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function hideEmail(email) {
    return email.replace(/(.{3})(.*)(?=@)/,
      function(gp1, gp2, gp3) { 
        for (let i = 0; i < gp3.length; i++) { 
            gp2+= "*"; 
        } 
        return gp2; 
      });
}

export default HomepageReview;