export const STRAPI_API_TOKEN = 
    process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

export const PLP_PAGE_SIZE = 15;

export const DELIVERY_COST = 2070;

export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://megasport.ua"; //"https://ecommerce-store-8kem.onrender.com";


export const desktopNavigation = [
    { id: 1, name: "Главная", url: "/" },
    { id: 2, name: "Мужчинам", subMenu: true, mensCat: true },
    { id: 3, name: "Женщинам", subMenu: true, womensCat: true },
    { id: 4, name: "О нас", url: "/about" }
];

export const mobileNavigation = [
    { id: 1, name: "Мужчинам", subMenu: true, mensCat: true },
    { id: 2, name: "Женщинам", subMenu: true, womensCat: true },
    { id: 3, name: "Главная", url: "/" },
    { id: 4, name: "Корзина", url: "/cart" },
    { id: 5, name: "Список Желаний", url: "/favorites" },
    { id: 6, name: "О нас", url: "/about" },
];

export const subCategories = [
    {
        name: "Летняя обувь",
        apiId: "obuv",
        id: "summer-shoes"
    },
    {
        name: "Зимняя обувь",
        apiId: "obuv",
        id: "winter-shoes"
    }
];

export const allSiteProducts = [
    {
        id: 1692270,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike REACT PEGASUS TRAIL 4"
    },
     {
        id: 1689398,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas Originals NITEBALL"
    },
    {
        id: 1692918,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike REACT WILDHORSE 8"
    },
    {
        id: 1691536,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike ZOOMX ZEGAMA TRAIL"
    },
    {
        id: 1692300,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas SWIFT RUN 23"
    },
    {
        id: 1692859,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1692989,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1689293,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1683786,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1691646,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1691679,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1682837,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 119833,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1689023,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1689157,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1689214,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1686793,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1691635,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1683528,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1683838,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 1682908,
        category: "mens-summer-shoes",
        sex: "m"
    },
    {
        id: 60549,
        category: "mens-winter-shoes",
        sex: "m"
    }
];

export const recommendationProducts = [
    {
        id: 1689398,
        category: "summer-shoes",
        sex: "m"
    },
    {
        id: 1692918,
        category: "summer-shoes",
        sex: "m"
    },
    {
        id: 1691536,
        category: "summer-shoes",
        sex: "m"
    },
    {
        id: 1692300,
        category: "summer-shoes",
        sex: "m"
    }
]

export const mensSummerProductsCount = allSiteProducts.filter(product => (product.category === "mens-summer-shoes" && product.sex === "m")).length;
export const mensWinterProductsCount = allSiteProducts.filter(product => (product.category === "mens-winter-shoes" && product.sex === "m")).length;
export const womensSummerProductsCount = allSiteProducts.filter(product => (product.category === "women-summer-shoes" && product.sex === "w")).length;
export const womensWinterProductsCount = allSiteProducts.filter(product => (product.category === "women-winter-shoes" && product.sex === "w")).length;