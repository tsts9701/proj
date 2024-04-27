import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCart, removeFromCart } from "@/store/cartSlice";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
    const p = data.product;
    const productSize = data.selectedSize;
    const dispatch = useDispatch();

    const updateCartItem = (e, key, currentSize) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
            currentSize: currentSize
        };
        dispatch(updateCart(payload));
    };

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <a href={"product/" + p.id}>
                    <Image
                        src={p.images[0]}
                        alt={p.name}
                        width={120}
                        height={120}
                    />
                </a>
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        <a href={"product/" + p.id}>
                            {p.name}
                        </a>
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        {p.salePrice && p.price > p.salePrice && (
                            <div>{p.salePrice} &#8381;</div>
                        )}
                        <div className={p.price > p.salePrice ? "price-line-through" : ""}>
                            {p.price} &#8381;
                        </div>
                        {p.salePrice && p.price > p.salePrice && (
                            <div className="cart-item-discount-percents-cont text-green-500">
                                ({"-" + getDiscountedPricePercentage(p.price, p.salePrice) + "%"})
                            </div>
                        )}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {p.subtitle}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="text-black"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize", productSize)
                                }
                            >
                                {Object.keys(p.sizes)
                                    .sort((a, b) => a - b)
                                    .map((item, i) => {
                                        if (p.sizes[item]) {
                                            return (
                                                <option
                                                    key={i}
                                                    value={item}
                                                    selected={
                                                        data.selectedSize === item
                                                    }
                                                >
                                                    {item}
                                                </option>
                                            );
                                        }
                                    })
                                }
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="text-black"
                                onChange={(e) => updateCartItem(e, "quantity", productSize)}
                            >
                                {Array.from(
                                    { length: 3 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() => {
                            dispatch(removeFromCart({ id: data.product.id, selectedSize: data.selectedSize}))
                        }
                        }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
