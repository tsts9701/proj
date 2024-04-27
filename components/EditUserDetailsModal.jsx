import { useEffect, useRef, useState } from "react";

function EditUserDetailsModal(props) {
    let savedUserContactData = window.localStorage.getItem("userContactData");
    let setUserDetailsShown = props.setUserDetailsShown;
    let userDataForm = useRef(null);
    let phoneInput = useRef(null);

    let [ firstNameVal, setFirstNameVal ] = useState("");
    let [ lastNameVal, setLastNameVal ] = useState("");
    let [ emailVal, setEmailVal ] = useState("");
    let [ cityVal, setCityVal ] = useState("");
    let [ phoneVal, setPhoneVal ] = useState("");
    let [ formWasEdited, setFormWasEdited ] = useState(false);

    if (savedUserContactData) {
        savedUserContactData = JSON.parse(savedUserContactData);
    }

    useEffect(() => {
        formatAllInputs(userDataForm, savedUserContactData);

        if (!formWasEdited && savedUserContactData && savedUserContactData.firstName && savedUserContactData.lastName) {
            setFirstNameVal(savedUserContactData.firstName);
            setLastNameVal(savedUserContactData.lastName);
            setCityVal(savedUserContactData.city);
            setEmailVal(savedUserContactData.email);
            setPhoneVal(savedUserContactData.phone);
        }
    }, [userDataForm, savedUserContactData]);

    return (
        <div class="checkapp-modal__mask">
            <div class="checkapp-modal__wrapper">
                <div tabindex="98" class="checkapp-modal__container shipping-modal">
                    <div class="checkapp-modal__header">
                        <div class="checkapp-modal__title">  </div>
                        <button onClick={() => setUserDetailsShown(false)} tabindex="99" class="checkapp-modal__close"></button>
                    </div>
                    <div class="checkapp-modal__body">
                        <div></div>
                        <div class="shipping-options">
                            <div class="shipping-options__item">
                                <h3 class="shipping-options__title">
                                    <button aria-label="посмотреть списком" class="shipping-options__back">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1716 31.8284L1.17157 18.8284L1.17157 13.1715L14.1716 0.171516L19.8284 5.82837L13.6569 11.9999L31 11.9999L31 19.9999L13.6569 19.9999L19.8284 26.1715L14.1716 31.8284Z" fill="#110D1C"></path>
                                        </svg>
                                    </button>
                                    Данные получателя
                                </h3>
                                <form class="address-form" onSubmit={(e) => submitUserData(userDataForm, setUserDetailsShown, e)} ref={userDataForm}>
                                    <div class="input-item input-item_half">
                                        <div class="form-group form-group_relative" required="required" hide-required-label="">
                                            <input onInput={(e) => validateLabelPosition(e)} class="search-form__input input input_default" id="user-firstname" name="user-firstname" value={firstNameVal} onChange={(e) => {setFormWasEdited(true);setFirstNameVal(e.target.value)}} />
                                            <label class="label label_default label_absolute" for="user-firstname"> Имя </label>
                                            <div class="form-group__append"></div>
                                            <div class="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>
                                    <div class="input-item input-item_half">
                                        <div class="form-group form-group_relative" required="required" hide-required-label="">
                                            <input onInput={(e) => validateLabelPosition(e)} class="search-form__input input input_default" id="user-lastname" name="user-lastname" value={lastNameVal} onChange={(e) => {setFormWasEdited(true);setLastNameVal(e.currentTarget.value)}} />
                                            <label class="label label_default label_absolute disabled" for="user-lastname"> Фамилия </label>
                                            <div class="form-group__append"></div>
                                            <div class="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>

                                    <div class="input-item input-item_half input-item_mobile-wide">
                                        <div class="form-group form-group_relative">
                                        <input onInput={(e) => validateLabelPosition(e)} class="input input_default" id="user-city" name="user-city" value={cityVal} onChange={(e) => {setFormWasEdited(true);setCityVal(e.currentTarget.value)}} />
                                        <label class="label label_default label_absolute disabled" for="user-city"> Город </label>
                                        <div class="form-group__append"></div>
                                        <div class="form-group__signature form-group__signature_default"></div>
                                        </div>
                                    </div>

                                    <div class="input-item input-item_half input-item_mobile-wide">
                                        <div class="form-group form-group_relative" required="required" hide-required-label="">
                                        <input onInput={(e) => validateLabelPosition(e)} class="search-form__input input input_default" id="user-email" name="user-email" value={emailVal} onChange={(e) => {setFormWasEdited(true);setEmailVal(e.currentTarget.value)}} />
                                        <label class="label label_default label_absolute disabled" for="user-email"> Адрес электронной почты </label>
                                        <div class="form-group__append"></div>
                                        <div class="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>

                                    <div class="input-item input-item_half input-item_mobile-wide">
                                        <div class="form-group form-group_relative form-group_active" valid="true">
                                            <input placeholder="+7 " ref={phoneInput} onKeyUp={(e) => validatePhoneInput(phoneInput, e)} type="tel"  name="phone" required="required" id="user-phone" class="input input_success" value={phoneVal} onChange={(e) => {setFormWasEdited(true);setPhoneVal(e.currentTarget.value)}} />
                                            <label class="label label-phone-number label_success label_absolute label_focus required" for="user-phone"> Контактный телефон </label>
                                            <div class="form-group__append"></div>
                                            <div class="form-group__signature form-group__signature_success"></div>
                                        </div>
                                    </div>

                                    <div class="input-item address-form__footer">
                                        <div class="address-form__submit-wrapper">
                                            <div className="user-data-modal-caption">
                                                <div>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-info">
                                                        <g clip-path="url(#clip0_18784_214693)">
                                                            <path d="M9 4V8H7V4H9Z" fill="#110D1C"></path>
                                                            <path d="M9 12V10H7V12H9Z" fill="#110D1C"></path>
                                                            <path fillRule="evenodd"clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#110D1C"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_18784_214693">
                                                                <rect width="16" height="16" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <span>Имя и фамилию вводите латиницей</span>
                                            </div>
                                            <button type="submit" class="address-form__submit button button_secondary"> Подтвердить </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function validateLabelPosition(e) {
    if (e && e.target) {
        if (e.target.value.length >= 1) {
            e.target.classList.add("entered-value");
        } else {
            e.target.classList.remove("entered-value");
        }
    }

    if (e.target.id && (e.target.id.includes("user-firstname") || e.target.id.includes("user-lastname"))) {
        var regex = new RegExp(/[а-я]/, "gi");
        e.target.value = e.target.value.replace(regex, "");

        if (!e.target.value.length) {
            e.target.classList.remove("entered-value");
        }
    }
}

function submitUserData(userDataFormRef, setUserDetailsShown, event) {
    event.preventDefault();

    if (userDataFormRef && userDataFormRef.current) {
        let firstNameInput = userDataFormRef.current.querySelector("#user-firstname");
        let lastNameInput = userDataFormRef.current.querySelector("#user-lastname");
        let emailInput = userDataFormRef.current.querySelector("#user-email");
        let cityInput = userDataFormRef.current.querySelector("#user-city");
        let phoneInput = userDataFormRef.current.querySelector("#user-phone");

        let firstNameVal = firstNameInput.value;
        let lastNameVal = lastNameInput.value;
        let emailVal = emailInput.value;
        let cityVal = cityInput.value;
        let phoneVal = phoneInput.value;


        if (!firstNameVal.length) {
            firstNameInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!lastNameVal.length) {
            lastNameInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!emailVal.length) {
            emailInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!cityVal.length) {
            cityInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!phoneVal.length || phoneVal.length !== 15) {
            phoneInput.style.borderBottom = "1px solid red";
            return;
        }

        setUserDetailsShown(false);

        window.localStorage.setItem("userContactData", JSON.stringify({
            firstName: firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            city: cityVal,
            phone: phoneVal
        }));
    }
}

function formatAllInputs(formRef, savedUserContactData) {
    if (savedUserContactData && Object.keys(savedUserContactData)) {
        var allFormInputs = formRef.current.querySelectorAll("input");

        for (let i = 0; i < allFormInputs.length; i++) {
           allFormInputs[i].classList.add("entered-value");
        }
    }
}

function validatePhoneInput(ref, event) {
    if (ref && ref.current) {
        ref.current.value = ref.current.value.replace(/[^+ \d]/g, "")

        let refValue = ref.current.value;

        if (event.keyCode !== 8) {
            if (refValue.length >= 1 && refValue.indexOf("+7") === -1) {
                ref.current.value = "+7 ";

                ref.current.value += refValue;
            }

            if (refValue.length === 6) {
                ref.current.value += " ";
            }

            if (refValue.length === 10) {
                ref.current.value += " ";
            }

            if (refValue.length >= 14) {
                ref.current.value = refValue.slice(0, 15);
            }
        }
    }
}

export default EditUserDetailsModal;