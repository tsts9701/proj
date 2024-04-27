import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { desktopNavigation, subCategories, mensSummerProductsCount, womensSummerProductsCount, mensWinterProductsCount, womensWinterProductsCount } from "@/utils/variables";

const Menu = ({ mensCatClassName, womensCatClassName, setMensCatClassName, setWomensCatClassName, setShowMenCatMenu, setShowWomenCatMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black text-nowrap pr-2">
            {desktopNavigation.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {item.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => {
                                    if (item.mensCat) {
                                        setShowMenCatMenu(true);
                                        setMensCatClassName("");
                                    } else {
                                        setShowWomenCatMenu(true);
                                        setWomensCatClassName("");
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (item.mensCat) {
                                        setShowMenCatMenu(false);
                                        setMensCatClassName("d-none")
                                    } else {
                                        setShowWomenCatMenu(false);
                                        setWomensCatClassName("d-none");
                                    }
                                }}
                            >
                                {item.name}
                                <BsChevronDown size={14} />

                                <ul className={"bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg " + (item.mensCat ? mensCatClassName : womensCatClassName)}>
                                    {subCategories?.map(
                                        cat => {
                                            
                                            let catProductsCount = 0;

                                            switch(cat.id) {
                                                case "summer-shoes":
                                                    catProductsCount = item.mensCat ? mensSummerProductsCount : womensSummerProductsCount;
                                                break;
                                                case "winter-shoes":
                                                    catProductsCount = item.mensCat ? mensWinterProductsCount : womensWinterProductsCount;
                                                break;
                                                default:
                                                break;
                                            }

                                            return ( 
                                                <Link
                                                    key={cat.id}
                                                    href={`/category/${(item.mensCat ? "mens-" : "women-") + cat.id}`}
                                                    onClick={() => {
                                                        setShowMenCatMenu(false);
                                                        setShowWomenCatMenu(false);
                                                    }}
                                                >
                                                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                        {cat.name}
                                                        <span className="opacity-50 text-sm">
                                                            {catProductsCount}
                                                        </span>
                                                    </li>
                                                </Link>
                                            )
                                        }
                                    )}
                                </ul>
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;
