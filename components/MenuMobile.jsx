import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Logout from "./Logout";
import { useRouter } from "next/router";
import { mobileNavigation, subCategories, mensSummerProductsCount, womensSummerProductsCount, mensWinterProductsCount, womensWinterProductsCount } from "@/utils/variables";


const MenuMobile = ({ showMenCatMenu, showWomenCatMenu, mensCatClassName, womensCatClassName, setMensCatClassName, setWomensCatClassName, setShowMenCatMenu, setShowWomenCatMenu, setMobileMenu, isLoggedIn }) => {
  const router = useRouter();

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black overflow-y-auto">
    {mobileNavigation.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => {
                  if (item.mensCat) {
                    if (showMenCatMenu) {
                      setShowMenCatMenu(false);
                      setMensCatClassName("d-none");
                    } else {
                      setShowMenCatMenu(true);
                      setMensCatClassName("");
                    }
                  } else {
                    if (showWomenCatMenu) {
                      setShowWomenCatMenu(false);
                      setWomensCatClassName("d-none");
                    } else {
                      setShowWomenCatMenu(true);
                      setWomensCatClassName("");
                    }
                  }
                }}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                <ul className={"bg-black/[0.05] -mx-5 mt-5 -mb-4 " + (item.mensCat ? mensCatClassName : womensCatClassName)}>
                  {subCategories?.map((cat) => {
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
                          
                        }}
                      >
                        <li className="py-4 px-8 border-t flex justify-between">
                          {cat.name}
                          <span className="opacity-50 text-sm">
                            {catProductsCount}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li className="py-4 px-8 border-t flex justify-between">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
