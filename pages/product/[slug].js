import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import AboutOrderOnPDP from "@/components/AboutOrderOnPDP";
import { fetchDataFromApi } from "@/utils/api";
import { allSiteProducts } from "@/utils/variables";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCart } from "@/store/cartSlice";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductSizesGrids from "@/components/ProductSizesGrids";
import { redirect } from "next/dist/server/api-utils";
import PDPAccordion from "@/components/PDPAccordion";
import { compose } from "@reduxjs/toolkit";

const ProductDetails = ({ p, sizesGrids }) => {
  const [ selectedSize, setSelectedSize ] = useState();
  const [ productImages, setProductImages ] = useState([]);
  let [ openedSizesGrids, setOpenedSizesGrids ] = useState(false);
  const [ sizeGrids, setSizeGrids ] = useState(null);
  const [ showError, setShowError ] = useState(false);
  const [ seasonsString, setSeasonsString ] = useState("");
  const [ product, setProduct ] = useState(null);
  const [ apexMaterials, setApexMaterials ] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [ isFavorited, setIsFavorited ] = useState(false);

  useEffect(() => {
    if (p && p.images) {
      setProduct(p);
      setProductImages(() => {
        let array = [];

        for (let i = 0; i < p.images.length; i++) {
          array.push({
            url: p.images[i],
            key: i,
            src: "Product image " + i
          });
        }

        return array;
      });

      setSeasonsString(() => {
        let seasonsArray = [];

        if (p?.natureSeasons) {

          for (let i = 0; i < p.natureSeasons.length; i++) {
            switch (p.natureSeasons[i]) {
             case "winter":
                seasonsArray.push("зима");
                break;
             case "summer":
                seasonsArray.push("лето");
                break;
             case "autumn":
                seasonsArray.push("осень");
                break;
             case "spring":
                sseasonsArray.push("весна");
                break;
              case "demiSeason":
                seasonsArray.push("демисезон");
                break;
             default:
               break;
            }
          }
        }

        return seasonsArray.join(", ");
      });

      setApexMaterials(() => {
        let apexMaterials = "";

        if (p?.apexMaterials) {
          apexMaterials = p.apexMaterials;

          apexMaterials = apexMaterials.replace(/підошва/i, "подошва");
          apexMaterials = apexMaterials.replace(/гума/i, "резина");
          apexMaterials = apexMaterials.replace(/шкіра/i, "кожа");
          apexMaterials = apexMaterials.replace(/з покриттям/i, "с покрытием");
          apexMaterials = apexMaterials.replace(/тканина/i, "ткань");
          apexMaterials = apexMaterials.replace(/синтетичні матеріали/i, "синтетические материалы");
        }

        return apexMaterials;
      });
    }

    if (p && sizesGrids) {
      setSizeGrids(sizesGrids);
    }
  }, [p, sizeGrids]);

  const notify = () => {
    toast.success("Товар успешно добавлен в корзину", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addToWishlist = async (itemId) => {
    const wishlistData = localStorage.getItem("wishlistData");

    if (wishlistData && wishlistData.length) {
      if (wishlistData.indexOf(itemId) !== -1) {
        toast.warn("Товар уже в списке желаний", toastOptions);
        return;
      }

      localStorage.setItem("wishlistData", (wishlistData + "," + itemId));
    } else {
      localStorage.setItem("wishlistData", itemId);
    }

    toast.success("Товар успешно добавлен в список желаний", toastOptions);
    setIsFavorited(true);
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  return (
      <div>
        <div className="w-full md:py-20">
          <ToastContainer />
          <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
              {/* left column start */}
              <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                <ProductDetailsCarousel images={productImages} />
              </div>
              {/* left column end */}

              {/* right column start */}
              <div className="flex-[1] py-3">
                {/* PRODUCT TITLE */}
                <h2 className="text-[34px] font-semibold mb-2 leading-tight">
                  {product?.name}
                </h2>

                {/* PRODUCT SUBTITLE */}
                <div className="text-lg font-semibold mb-5">{product?.subtitle}</div>

                {/* PRODUCT PRICE */}
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold">{p?.salePrice && p?.salePrice > 0 ? p.salePrice : p?.price} &#8381;</p>
                  {product?.price && p?.salePrice > 0 && (
                    <>
                      <p className="text-base font-medium line-through">
                        {p?.salePrice && p.price > p.salePrice ? (product.price + " ₽") : ""}
                      </p>
                      {p?.salePrice && p.price > p.salePrice && (
                        <p className="ml-auto text-base font-medium discount-percents-text">
                        -{getDiscountedPricePercentage(product.price, product.salePrice)}%
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="text-md font-medium text-black/[0.5]">
                  Артикул: {product ? product.id : ""}
                </div>
                <div className="text-md font-medium text-black/[0.5]">
                  
                </div>
                <div className="text-md font-medium text-black/[0.5] seasons-caption">
                  Состав: {apexMaterials}
                </div>
                <div className="text-md font-medium text-black/[0.5] seasons-caption">
                  Сезон: {seasonsString}
                </div>
                <div className="mb-20"></div>

                {/* PRODUCT SIZE RANGE START */}
                <div className="mb-10">
                  {/* HEADING START */}
                  <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">Выберете размер</div>
                    <div className={"choose-size-button " + (sizeGrids ? "" : "d-none")} onClick={() => setOpenedSizesGrids(!openedSizesGrids ? true : false)}>
                      <span>Таблица размеров</span>
                      <span class="MuiButton-endIcon MuiButton-iconSizeMedium mui-style-pt151d">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.879 9H1V7h10.879L7.586 2.707 9 1.293l6 6v1.414l-6 6-1.414-1.414L11.879 9Z" fill="#110D1C"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* HEADING END */}

                  {/* SIZE START */}
                  <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                    {product && product.sizes && Object.keys(product.sizes)
                      .sort((a, b) => a - b)
                      .map((size, i) => (
                        <div
                          key={i}
                          className={`${selectedSize == size ? 'border-black' : ''} border rounded-md text-center py-3 font-medium ${product.sizes[size] ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"}`}
                          onClick={() => {
                            setSelectedSize(size);
                            setShowError(false);
                          }}
                        >
                          {size}
                        </div>
                      ))}
                  </div>
                  {/* SIZE END */}

                  {/* SHOW ERROR START */}
                  {showError && (
                    <div className="text-red-600 mt-1">
                      Size selection is required
                    </div>
                  )}
                  {/* SHOW ERROR END */}
                </div>

                {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                  onClick={() => {
                    if (!selectedSize) {
                      setShowError(true);
                      document.getElementById("sizesGrid").scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    } else {
                      dispatch(getCart());
                      dispatch(
                        addToCart({
                          product,
                          selectedSize,
                          oneQuantityPrice: p.price,
                        })
                      );
                      notify();
                    }
                  }}
                >
                  Добавить в корзину
                </button>
                {/* ADD TO CART BUTTON END */}

                {/* WISHLIST BUTTON START */}
                <button
                    className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                    onClick={() => addToWishlist(product.id)}
                >
                    {currentUser ? 'Favorite' : 'Добавить в список желаний'}
                    {isFavorited ? (
                        <IoMdHeart size={20} />
                    ) : (
                        <IoMdHeartEmpty size={20} />
                    )}
                </button>


                {/* WISHLIST BUTTON END */}

                <div>
                  <div className="text-lg font-bold mb-5">Product Details</div>
                  <div className="markdown text-md text-justify mb-5">
                    <ReactMarkdown>{product?.description}</ReactMarkdown>
                  </div>
                </div>

                <>
                  <PDPAccordion />
                </>
              </div>
              {/* right column end */}
            </div>

            {/*<RelatedProducts products={products} />*/}
          </Wrapper>
        </div>

        <div>
          <AboutOrderOnPDP />
        </div>

        <div>
          <ProductSizesGrids sizesGrids={sizeGrids} productName={p?.name ? p.name : null} openedSizesGrids={openedSizesGrids} setOpenedSizesGrids={setOpenedSizesGrids} />
        </div>

      </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let response = await fetchDataFromApi("/api/products-service/" + slug + "/?" + "language=ru");

  let product = response.data;
  let productMaterials;
  let productName;
  let productSalePrice;
  let productPrice;
  let sizesGrids;
  let baseProduct;

  for (let prd of allSiteProducts) {
    if ((prd.id + "") === slug) {
      baseProduct = prd;
    }
  }

  if (!product || response.code === 404) {
    response = await fetchDataFromApi("/api/products-service/?ids[]=" + slug + "&language=ru");

    if (!response || response.code !== 200) {
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      }
    }

    product = response.data?.products[slug];

    if (!product.availability && product.sizes) {
      let basePrdId = baseProduct.id + "";
      let isMensPrd = (baseProduct.sex === "m");
      let lastIdSym = basePrdId[basePrdId.length - 1];
      let isSizesEdited = false;

      if (isMensPrd) {
        if (lastIdSym === "1") {
          product.sizes["27.5"] = 3;
          product.sizes["26"] = 3;
          product.sizes["29"] = 3;
          product.sizes["25"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "2") {
          product.sizes["29.5"] = 3;
          product.sizes["26.5"] = 3;
          product.sizes["27.5"] = 3;
          product.sizes["30"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "3") {
          product.sizes["27"] = 3;
          product.sizes["27.5"] = 3;
          product.sizes["28"] = 3;
          product.sizes["28.5"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "4") {
          product.sizes["31"] = 3;
          product.sizes["29.5"] = 3;
          product.sizes["25.5"] = 3;
          product.sizes["25"] = 3;
          product.sizes["26.5"] = 3;
          product.sizes["27.5"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "5") {
          product.sizes["31"] = 3;
          product.sizes["30"] = 3;
          product.sizes["29.5"] = 3;
          product.sizes["28"] = 3;
          product.sizes["27.5"] = 3;
          product.sizes["24"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "6") {
          product.sizes["27"] = 3;
          product.sizes["29.5"] = 3;
          product.sizes["30.5"] = 3;

          isSizesEdited = true;
         }
    
         if (lastIdSym === "9") {
          product.sizes["25.5"] = 3;
          product.sizes["26.5"] = 3;
          product.sizes["27.5"] = 3;
          product.sizes["28"] = 3;
          product.sizes["29"] = 3;

          isSizesEdited = true;
         }

         if (!isSizesEdited) {
          product.sizes["26.5"] = 3;
          product.sizes["27.5"] = 3;
          product.sizes["29"] = 3;
          product.sizes["29.5"] = 3;
         }
      } else {
        if (lastIdSym === "9") {
          product.sizes["23"] = 3;
          product.sizes["24"] = 3;
          product.sizes["22"] = 3;
          product.sizes["21.5"] = 3;
          product.sizes["26"] = 3;

          isSizesEdited = true;
        }

        if (lastIdSym === "3") {
          product.sizes["25"] = 3;
          product.sizes["25.5"] = 3;
          product.sizes["21"] = 3;
          product.sizes["23"] = 3;
          product.sizes["27"] = 3;

          isSizesEdited = true;
        }

        if (lastIdSym === "2") {
          product.sizes["25.5"] = 3;
          product.sizes["25"] = 3;
          product.sizes["23"] = 3;

          isSizesEdited = true;
        }

        if (lastIdSym === "5") {
          product.sizes["23.5"] = 3;
          product.sizes["22"] = 3;
          product.sizes["26"] = 3;

          isSizesEdited = true;
        }

        if (lastIdSym === "6") {
          product.sizes["24.5"] = 3;
          product.sizes["24"] = 3;
          product.sizes["22"] = 3;

          isSizesEdited = true;
        }

        if (!isSizesEdited) {
          product.sizes["23.5"] = 3;
          product.sizes["25.5"] = 3;
          product.sizes["22"] = 3;
          product.sizes["24"] = 3;
        }
      }
    }
  }

  if (product?.sizesGridId) {
    let sizesGridResponse = await fetchDataFromApi(`/api/sizesGrids/${product.sizesGridId}/`);

    sizesGrids = sizesGridResponse.data;
  }

  if (product?.natureSeasons && baseProduct.category.indexOf("winter-shoes") !== -1) {
    if (!product.natureSeasons || !product.natureSeasons.length) {
      product.natureSeasons = ["winter"];
    } else if (product.natureSeasons.indexOf("winter") === -1) {
      product.natureSeasons.push("winter");
    }
  }

  productName = baseProduct.model;
  productMaterials = baseProduct.materials;
  productPrice = baseProduct.startPrice;
  productSalePrice = baseProduct.salePrice;

  product.price = 0;
  product.salePrice = 0;
  
  if (product) {
    if (productName) {
      product.name = productName;
    }

    if (productMaterials) {
      product.apexMaterials = productMaterials;
    }

    if (productPrice) {
      product.price = productPrice;
    }

    if (productSalePrice) {
      product.salePrice = productSalePrice;
    }
  }

  return {
    props: {
      p: product,
      sizesGrids: sizesGrids
    },
  };
}
