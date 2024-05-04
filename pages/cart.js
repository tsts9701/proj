import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { DELIVERY_COST } from "@/utils/variables";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sha256 } from "@/utils/helper";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
import EditUserDetailsModal from "@/components/EditUserDetailsModal";
import { toast } from "react-toastify";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const [ loading, setLoading ] = useState(false);
    const [ userEmail, setUserEmail ] = useState("");
    const { cartItems } = useSelector((state) => state.cart);
    const loggedInUser = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    let paymentForm = useRef(null);
    let [ userDetailsShown, setUserDetailsShown ] = useState(false);
    let [ selectedDeliveryMethod, setSelectedDeliveryMethod ] = useState("1");
    let userContactData = window.localStorage.getItem("userContactData");

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, val) => {
            let price = val.product.salePrice ? val.product.salePrice : val.product.price

            total += (price * val.quantity);
            return total;
        }, 0);
    }, [cartItems]);

    const handlePayment = async () => {
        setLoading(true);

        try {
            let orderId = Math.random().toString(36).substr(2, 10);
            let amountToPay = selectedDeliveryMethod === "1" ? subTotal : DELIVERY_COST;
            let savedUserContactData = window.localStorage.getItem("userContactData");

            let merchantIdInput = paymentForm.current.querySelector("input[name='merchant_id']");
            let amountInput = paymentForm.current.querySelector("input[name='amount']");
            let currencyInput = paymentForm.current.querySelector("input[name='currency']");
            let orderIdInput = paymentForm.current.querySelector("input[name='order_id']");
            let emailInput = paymentForm.current.querySelector("input[name='email']");
            let signInput = paymentForm.current.querySelector("input[name='sign']");

            if (!savedUserContactData) {
                return;
            }

            savedUserContactData = JSON.parse(savedUserContactData);

            merchantIdInput.value = "d366ba9e-b918-4180-b8d8-c70e8cfb5f02";
            amountInput.value = amountToPay;
            currencyInput.value = "RUB";
            orderIdInput.value = orderId;
            emailInput.value = savedUserContactData.email;
            signInput.value = sha256(["d366ba9e-b918-4180-b8d8-c70e8cfb5f02", amountToPay, "RUB",
                "2e6ca7490bb95e5a4425fca73d9c9298", orderId
            ].join(":"));

            setLoading(false);

            setTimeout(function () {
                paymentForm.current.submit();
            }, 300);
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <div className="w-full md:py-20 cart-page">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Корзина
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Товары
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Summary</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="text-md md:text-lg font-medium text-black">
                                            Итого
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            {subTotal} &#8381;
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="text-md md:text-lg font-medium text-black">
                                            Доставка
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            {selectedDeliveryMethod === "1" ? "Бесплатно" : (DELIVERY_COST + " ₽")}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5 totals-text-content">
                                        Ваш заказ будет доставлен из-за рубежа. Вы можете выбрать между 100% оплатой сейчас (доставка бесплатная)
                                        и оплатой при получении (вы оплачиваете только полную стоимость доставки на этом этапе). Доставку по России осуществляет 
                                        5Post. После подтверждения заказа вы сможете отслеживать заказ, мы предоставим вам доступ к личному
                                        кабинету, где будет представлена вся информация о ваших заказах. <b>После оплаты с Вами свяжется наш 
                                        менеджер.</b>
                                    </div>
                                </div>

                                <div className="delivery-payment-methods">
                                    <div className={"delivery-payment-method " + (selectedDeliveryMethod === "1" ? "active" : "")}
                                        onClick={() => setSelectedDeliveryMethod("1")}
                                    >
                                        <div className="delivery-method-header">
                                            <span>100% оплата</span>
                                        </div>
                                        <div className="delivery-method-content">
                                            <span>Вы оплачиваете полную стоимость товара. Доставка бесплатная.</span>
                                        </div>
                                    </div>
                                    <div className={"delivery-payment-method " + (selectedDeliveryMethod === "2" ? "active" : "")}
                                        onClick={() => setSelectedDeliveryMethod("2")}
                                    >
                                        <div className="delivery-method-header">
                                            <span>Оплата при получении</span>
                                        </div>
                                        <div className="delivery-method-content">
                                            <span>Вы оплачиваете полную стоимость доставки, а товар при получении.</span>
                                        </div>
                                    </div>
                                </div>

                                {/* BUTTONS START */}

                                <button 
                                    onClick={() => setUserDetailsShown(true)}
                                    className="edit-user-details-button"
                                >
                                   {!userContactData ? "Добавить" : "Изменить"} данные получателя
                                </button>

                                <button
                                    disabled={!userContactData ? "true" : ""}
                                    className="come-to-checkout-button"
                                    onClick={handlePayment}
                                >
                                    {selectedDeliveryMethod === "1" ? ("Оплатить " + subTotal + " ₽") : ("Оплатить " + DELIVERY_COST + " ₽")}
                                    {loading && <img src="/spinner.svg" />}
                                </button>

                                {/* BUTTONS END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            В корзине пока пусто
                        </span>
                        <span className="text-center mt-4">
                            Похоже, вы ничего не добавляли.
                            <br />
                            Изучите наши товары, вы найдете подходящий вариант :)
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            За покупками
                        </Link>
                    </div>
                )}
            </Wrapper>

            {
                userDetailsShown ? <EditUserDetailsModal setUserDetailsShown={setUserDetailsShown} setUserEmail={setUserEmail} /> : <div className="hello"></div>
            }

            <form className="d-none" method="POST" action="https://aaio.so/merchant/pay" ref={paymentForm}>
                <input type="hidden" name="merchant_id" value="" />
                <input type="hidden" name="amount" value="" />
                <input type="hidden" name="currency" value="" />
                <input type="hidden" name="order_id" value="" />
                <input type="hidden" name="sign" value="" />
                <input type="hidden" name="email" value="" />
                <input type="hidden" name="lang" value="ru" />
                <input type="submit" name="pay" value="Пополнить" />
            </form>
        </div>
    );
};

export default Cart;
