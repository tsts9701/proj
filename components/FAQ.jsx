import Parser from 'html-react-parser';

function Faq () {
    let faqItems =  [
        {
            "title": "ДО КАКОГО МОМЕНТА Я СМОГУ ОТМЕНИТЬ УЖЕ ОФОРМЛЕННЫЙ ЗАКАЗ?",
            "content": 'Заказ можно отменить до тех пор, пока поставщик не подтвердил наличие выбранного вами товара, и его статус не сменился на "Подтвержден". Для этого свяжитесь с нами по телефону.'
        },
        {
            "title": "ГДЕ Я МОГУ ОТСЛЕДИТЬ СВОЙ ЗАКАЗ?",
            "content": "После подтверждения заказа, вы получите личную ссылку где сможете отслеживать заказ. Также вся необходимая информация о передвижении вашей посылки будет приходить на указанною вами электронную почту."
        },
        {
            "title": "ЧТО ДЕЛАТЬ, ЕСЛИ ТРАНСПОРТНАЯ КОМПАНИЯ ПОТЕРЯЕТ МОЮ ПОСЫЛКУ?",
            "content": "Мы несем ответственность за вашу посылку в течение всего ее пути до финальной передачи вам в руки. В случае потери заказа мы вернем вам потраченные вами денежные средства во время оформления заказа."
        },
        {
            "title": "КАК Я МОГУ ВЕРНУТЬ ТОВАР, КОТОРЫЙ НЕ ПОДОШЕЛ?",
            "content": "Возврату подлежат только товары с заводским браком. Вернуть товар, потому что он не подошел, к сожалению, будет невозможно. Чтобы совершить возврат бракованного товара, нужно связаться с нами по электронной почте или по горячей линии телефона. <b>Внимание! Мы рекомендуем снимать распаковку посылки на видео. Это поможет быстрее разобраться в ситуации и решить возникшие проблемы.</b>"
        },
        {
            "title": "КОНТАКТЫ",
            "content": `<div>
                <div className="faq-contact-methods">
                    <span><img alt="email-icon" src="/email-icon.svg" /></span>
                    <span>crosscentre@crosscentre.ru</span>
                </div>
                <div className="faq-contact-methods mt-5">
                    <span><img alt="email-icon" src="/phone-icon.png" /></span>
                    <span>+7 (812) 443-00-00</span>
                </div>
                <div className="mt-5">
                    <span>ООО “Екоммерс Деливери“</span><br />
                    <span>Юридический адрес: 123290, Москва г, муниципальный округ</span><br />
                    <span>Хорошево-Мневники, Причальный проезд, дом 2, помещение XVIII 3 этаж ком. 17</span><br />
                    <span>Фактический адрес: 123290, Москва г, муниципальный округ Хорошево-Мневники, Причальный проезд, дом 2, помещение XVIII 3 этаж ком. 17</span><br />
                    <span>Почтовый адрес: 123290, г. Москва, Причальный проезд, д.2,</span><br />
                    <span>Бизнес-центр «Якорь»</span><br />
                </div>
            </div>`
        }
    ];

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


    return (
        <div>
            {faqItems.map((item, i) => {

                return (
                    <div className="MuiBox-root mui-style-1iy0dt" id={"collapseItem-" + i} key={i}>
                        <div className="MuiBox-root mui-style-xlyii9">
                            <div className={"title-box MuiBox-root mui-style-1x7woqi "} onClick={() => openCollapse(i)}>
                                <p className="MuiTypography-root MuiTypography-h6 mui-style-1s65c8v">{item.title}</p>
                                <div className="MuiBox-root mui-style-10kyoxo">
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 13.284 13.966 22h-3.932L1 13.284 4.931 9.49l4.29 4.138V2h5.559v11.629l4.289-4.138L23 13.284Z" fill="#110D1C"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className={"MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-style-c4sutr " + (i === 4 || i === 3 ? "faq-contacts" : "")}>
                                <p>
                                    {Parser(item.content)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
       
    )
}

export default Faq;