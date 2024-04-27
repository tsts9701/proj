import Parser from 'html-react-parser';

function PDPAccordion() {
    let faqItems =  [
        {
            "title": "Как подобрать размер ?",
            "content": `<ul>
                <li>
                    Замер стопы: Нужно встать на лист бумаги и обвести стопу. Далее замерить расстояние от большого пальца до крайней точки пятки. Вы также можете ориентироваться по значению в сантиметрах на размерной бирке внутри вашей обуви.
                </li>
                <li>
                    Отличие европейского от российского размера: Европейский больше российского на один размер. Если у вас 38 RU, нужно выбирать 39 EU.
                </li>
                <li>
                    Для широкой стопы: Советуем выбирать обувь на один размер больше.
                </li>
            </ul>`
        },
        {
            "title": "Где вы берёте товары ?",
            "content": "Мы ищем товары практически по всей Европе. У нас есть база интернет-магазинов многих странах, откуда мы выкупаем обувь по самым приемлемых ценах."
        },
        {
            "title": "Сроки доставки",
            "content": "Максимальный срок доставки - до 24 дней. Но это может быть намного быстрее. Это зависит от страны выкупа товара. Например, если товар находится в Латвии/Финляндии/Эстонии, до Москвы он доедет максимум за 7 дней."
        }
    ]

    return (
        <div className="pdp-faq-accordion-container">
            {faqItems.map((item, i) => {
                return (
                    <div className="MuiBox-root mui-style-1iy0dt" id={"collapseItem-" + i} key={i}>
                        <div className="MuiBox-root mui-style-xlyii9">
                            <div className={"title-box MuiBox-root mui-style-1x7woqi "} onClick={() => openCollapse(i)}>
                                <p className="MuiTypography-root MuiTypography-h6 mui-style-1s65c8v">{item.title}</p>
                                <div className="MuiBox-root mui-style-10kyoxo">
                                    <svg data-v-490d9690="" width="16px" height="16px" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4.78462 4.90382C4.81224 4.93418 4.8456 4.95838 4.88265 4.97492C4.91969 4.99147 4.95963 5 5 5C5.04037 5 5.08031 4.99147 5.11735 4.97492C5.1544 4.95838 5.18776 4.93418 5.21538 4.90382L9 1" stroke="#1D1D20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                            </div>
                            <div className={"MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-style-c4sutr " + (i === 0 ? "pdp-faq-list" : "pdp-faq-content")}>
                                <p>
                                    {Parser(item.content)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

function openCollapse (index) {
    let elem = document.getElementById("collapseItem-" + index);

    if (elem) {
        if (elem.querySelector(".mui-style-1x7woqi").classList.contains("opened")) {
            elem.querySelector(".mui-style-c4sutr").classList.remove("opened");
            elem.querySelector(".mui-style-1x7woqi").classList.remove("opened");
        } else {
            elem.querySelector(".mui-style-c4sutr").classList.add("opened");
            elem.querySelector(".mui-style-1x7woqi").classList.add("opened");
        }
    }
}

export default PDPAccordion;