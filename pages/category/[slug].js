import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";
import { allSiteProducts } from "@/utils/variables";
import { PLP_PAGE_SIZE } from "@/utils/variables";

const Category = ({ apiProducts, restCategoryProducts, maxProductsPages, slug }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [products, setProducts] = useState(null);
    const [restProducts, setRestProducts] = useState([]);
    const [shownProductsCount, setShownProductsCount] = useState(0);
    const [notShownCategoryProducts, setNotShownCategoryProducts] = useState([]);
    const [disabledNextButton, setDisabledNextButton] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [maxPageSize, setMaxPageSize] = useState(1);
    const { query } = useRouter();

    let categoryName = "";

    switch(slug) {
        case "summer-shoes":
            categoryName = "Летняя обувь";
            break;
        case "winter-shoes":
            categoryName = "Зимняя обувь";
            break;
        default:
            break;
    }

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    useEffect(() => {
        if (apiProducts) {
            setIsLoading(false);
            setProducts(apiProducts);
            setShownProductsCount(apiProducts.length)
            setMaxPageSize(maxProductsPages);
            setRestProducts(restCategoryProducts);
        }
    }, [apiProducts]);

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {categoryName}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products && products.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}

                {/* PAGINATION BUTTONS START */}
                {(products && products.length !== 0) && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <span className="font-bold">{`${pageIndex} of ${maxPageSize}`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={disabledNextButton}
                            onClick={async () => {
                                if (pageIndex >= maxPageSize) {
                                    setDisabledNextButton(true);
                                    return;
                                }

                                let newPageProducts = await fetchRestPageProducts(restProducts);
                                restCategoryProducts = null;

                                setProducts((prds) => {
                                    prds.push(...newPageProducts.apiProducts);

                                    return prds;
                                });

                                setNotShownCategoryProducts(() => newPageProducts.newRestCategoryProducts);
                                setPageIndex(pageIndex + 1);
                                setShownProductsCount(shownProductsCount + products.length);
                                setRestProducts(newPageProducts.newRestCategoryProducts);

                                if (pageIndex + 1 >= maxPageSize) {
                                    setDisabledNextButton(true);
                                }
                                //setDisabledNextButton((notShownCategoryProducts.length === 0));
                            }}
                        >
                            Next
                        </button>
                    </div>
                        )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Category;

export async function getStaticPaths() {
    /*const category = await fetchDataFromApi("/api/categories?populate=*");
    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));*/

    return {
        paths: [],
        fallback: true,
    };
}

export async function getStaticProps({ params: { slug } }) {
    let endpointURL = "/api/products-service/?";
    let restCategoryProducts = [];
    let products;
    let sex;

    if (slug === "mens-shoes" || slug === "women-shoes") {
        switch (slug) {
            case "mens-shoes":
                sex = "m";
                break;
            case "women-shoes":
                sex = "w";
                break;
            default:
                break;
        }

        products = allSiteProducts.filter(item => (item.sex === sex));
    } else {
        products = allSiteProducts.filter(item => (item.category === slug));
    }

    let maxProductsPages = Math.ceil(products.length / PLP_PAGE_SIZE);

    if (products.length > PLP_PAGE_SIZE) {
        restCategoryProducts = products.slice(PLP_PAGE_SIZE);
        products = products.slice(0, PLP_PAGE_SIZE);
    }

    products.map(item => {
        endpointURL += "ids[]=" + item.id + "&"
    });

    endpointURL += "language=ru";

    const response = await fetchDataFromApi(endpointURL);
    const apiProducts = [];

    for (let key in response.data.products) {
        apiProducts.push(response.data.products[key]);
    }

    return {
        props: {
            apiProducts,
            restCategoryProducts,
            maxProductsPages,
            slug
        },
    };
}

async function fetchRestPageProducts(restCategoryProducts) {
    let endpointURL = "/api/products-service/?";
    let newRestCategoryProducts = [];
    let pageProducts;

    if (restCategoryProducts.length > PLP_PAGE_SIZE) {
        pageProducts = restCategoryProducts.slice(0, PLP_PAGE_SIZE);
        newRestCategoryProducts = restCategoryProducts.slice(PLP_PAGE_SIZE);
    } else {
        pageProducts = restCategoryProducts;
        newRestCategoryProducts = [];
    }

    pageProducts.map(item => {
        endpointURL += "ids[]=" + item.id + "&"
    });

    endpointURL += "language=ru";

    const response = await fetchDataFromApi(endpointURL);
    const apiProducts = [];

    for (let key in response.data.products) {
        apiProducts.push(response.data.products[key]);
    }

    return {
        apiProducts: apiProducts,
        newRestCategoryProducts: newRestCategoryProducts
    };
}