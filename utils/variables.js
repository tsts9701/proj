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
        id: 1682953,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike M AIR MAX ALPHA TRAINER 5",
        materials: "76% текстиль, 24% синтетика; Подошва: 100% резина",
        startPrice: 8500,
        salePrice: 7499
    },
    {
        id: 1699658,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Jordan Max Aura 5",
        materials: "76% кожа, 14% синтетика, 10% текстиль",
        startPrice: 10500,
        salePrice: 8999
    },
    {
        id: 1697339,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Jordan Max Aura 5",
        materials: "76% кожа, 14% синтетика, 10% текстиль",
        startPrice: 10500,
        salePrice: 8999
    },
    {
        id: 1692270,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike REACT PEGASUS TRAIL 4",
        materials: "75% текстиль, 25% синтетика; Подошва: 100% резина",
        startPrice: 9999
    },
     {
        id: 1689398,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas Originals NITEBALL",
        materials: "Кожа - 60%. Текстиль - 40%. Подошва - резина",
        startPrice: 13499,
        salePrice: 3990
    },
    {
        id: 1692918,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike REACT WILDHORSE 8",
        materials: "41% синтетика, 59% текстиль. Подошва - 100% резина",
        startPrice: 15000,
        salePrice: 12999
    },
    {
        id: 1691536,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike ZOOMX ZEGAMA TRAIL",
        startPrice: 14999,
        salePrice: 13499
    },
    {
        id: 1692300,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas SWIFT RUN 23",
        materials: "Текстиль - 100%",
        startPrice: 7299

    },
    {
        id: 1692859,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike AIR MAX IMPACT 4",
        startPrice: 12599,
        salePrice: 9999
    },
    {
        id: 1692989,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma Fast-Trac Nitro 2",
        materials: "100% текстиль. Подошва резина",
        startPrice: 10000,
        salePrice: 9699
    },
    {
        id: 1689293,
        category: "mens-summer-shoes",
        sex: "m",
        model: "New Balance model FF X More Trail v3",
        startPrice: 20000,
        salePrice: 16499
    },
    {
        id: 1683786,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max Impact 4",
        startPrice: 12599,
        salePrice: 9999
    },
    {
        id: 1691646,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma X-Ray 2 Square SD",
        startPrice: 8999,
        salePrice: 5299
    },
    {
        id: 1691679,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas TERREX SOULSTRIDE",
        materials: "Текстиль - 60%, синтетика - 40%",
        startPrice: 6199
    },
    {
        id: 1682837,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max SYSTM",
        startPrice: 8999,
        salePrice: 5899

    },
    {
        id: 119833,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma Retaliate 2",
        materials: "100% текстиль. Подошва резина",
        startPrice: 9200
    },
    {
        id: 1689023,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max 97",
        materials: "100% текстиль. Подошва резина",
        startPrice: 9500,
        salePrice: 6199
    },
    {
        id: 72448,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max 90",
        materials: "45% текстиль, 35% кожа, 20% синтетика. Подошва резина",
        startPrice: 14999,
        salePrice: 5700
    },
    {
        id: 1699599,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Adidas Originals NITEBALL",
        materials: "60% кожа, текстиль 40%",
        startPrice: 20000,
        salePrice: 10099
    },
    {
        id: 1699772,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma Pacer 23 Desert Road",
        materials: "100% текстиль, подошва резина",
        startPrice: 5100
    },
    {
        id: 1695434,
        category: "mens-summer-shoes",
        sex: "m",
        model: "New Balance model FF X More Trail V3",
        startPrice: 5599,
        salePrice: 3299
    },
    {
        id: 1696493,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Champion tennis clay 86 low cut shoe",
        startPrice: 2850

    },
    {
        id: 1699552,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max 90",
        materials: "45% текстиль, 35% кожа, 20% синтетика. Подошва резина",
        startPrice: 15500,
        salePrice: 10199
    },
    {
        id: 1689157,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Max Plus",
        startPrice: 16000,
        salePrice: 7999
    },
    {
        id: 1689214,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike REACT WILDHORSE 8",
        startPrice: 15000,
        salePrice: 12999
    },
    {
        id: 1686793,
        category: "mens-summer-shoes",
        sex: "m",
        model: "New Balance model MR530 R",
        startPrice: 10999,
        salePrice: 7800
    },
    {
        id: 1691635,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma MAPF1 X-Ray Speed",
        startPrice: 7699,
        salePrice: 4399
    },
    {
        id: 1683528,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma RS-X 3D",
        startPrice: 8799,
        salePrice: 5799
    },
    {
        id: 1683528,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma Softride Enzo Evo",
        startPrice: 12999,
        salePrice: 7099
    },
    {
        id: 60549,
        category: "mens-winter-shoes",
        sex: "m",
        model: "Nike Path Winter",
        startPrice: 8000,
        salePrice: 5599
    },
    {
        id: 1697519,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike AIR HUARACHE RUNNER",
        materials: "100% текстиль. Подошва 100% резина",
        startPrice: 18899,
        salePrice: 13199
    },
    {
        id: 1697344,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike AIR MAX SOLO",
        materials: "4% синтетика, 96% текстиль. Подошва 100% резина",
        startPrice: 15999,
        salePrice: 14299
    },
    {
        id: 1696792,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Puma BMW MMS Trinity",
        materials: "Текстиль, синтетические материалы",
        startPrice: 6999,
        salePrice: 4499
    },
    {
        id: 1699645,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Pegasus Trail 4",
        materials: "25% синтетика, 75% текстиль",
        startPrice: 16999,
        salePrice: 14899
    },
    {
        id: 1694515,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike FULL FORCE LO",
        materials: "57% кожа, 39% синтетика, 4% текстиль",
        startPrice: 16799,
        salePrice: 13599
    },
    {
        id: 1696654,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Champion rebound 2.0 low low",
        startPrice: 4599,
        salePrice: 3099
    },
    {
        id: 72463,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Force 1",
        materials: "100%  кожа, подошва 100% резина",
        startPrice: 13399,
        salePrice: 5999
    },
    {
        id: 1696902,
        category: "mens-summer-shoes",
        sex: "m",
        model: "Nike Air Force 1",
        materials: "100%  кожа, подошва 100% резина",
        startPrice: 13399,
        salePrice: 5999
    },
    {
        id: 1692985,
        category: "mens-winter-shoes",
        sex: "m",
        model: "Puma Tarrenz SB III",
        materials: "75% синтетические материалы, 25% текстиль. Подошва резина",
        startPrice: 10099,
        salePrice: 5599
    },
    {
        id: 1693019,
        category: "mens-winter-shoes",
        sex: "m",
        model: "Nike MANOA LEATHER",
        materials: "кожа 92%, синт. кожа 8%. Внутри текстиль 100%. Подошва 100% резина",
        startPrice: 16999,
        salePrice: 9999

    },
    {
        id: 1694535,
        category: "mens-winter-shoes",
        sex: "m",
        model: "Adidas TERREX EASTRAIL 2",
        materials: "60% синтетика, текстиль 40%. Подошва 100% резина",
        startPrice: 8000,
        salePrice: 5799
    },
    {
        id: 1616027,
        category: "mens-winter-shoes",
        sex: "m",
        model: "Champion mid cut shoe climb rx mid",
        startPrice: 5999,
        salePrice: 3599
    },
    {
        id: 1696914,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Air Max Pulse",
        materials: "10% кожа, 8% текстиль, 82% текстиль",
        startPrice: 12999,
        salePrice: 6399
    },
    {
        id: 1699825,
        category: "women-summer-shoes",
        sex: "w",
        model: "New Balance model 550",
        materials: "Кожа/ткань",
        startPrice: 7650,
        salePrice: 4890
    },
    {
        id: 1698587,
        category: "women-summer-shoes",
        sex: "w",
        model: "Adidas Originals OZMILLEN W",
        materials: "Синтетика 60%, текстиль 40%",
        startPrice: 15100,
        salePrice: 11190
    },
    {
        id: 1695433,
        category: "women-summer-shoes",
        sex: "w",
        model: "New Balance model 327",
        materials: "Замша/текстиль",
        startPrice: 18300,
        salePrice: 12890
    },
    {
        id: 1696507,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Free Metcon 5",
        materials: "100% текстиль. Подошва резина",
        startPrice: 14250,
        salePrice: 10090

    },
    {
        id: 1697033,
        category: "women-summer-shoes",
        sex: "w",
        model: "Adidas Originals FORUM BOLD STRIPES",
        materials: "кожа 60%, синтетика 40%",
        salePrice: 14700,
        salePrice: 10670
    },
    {
        id: 1698942,
        category: "women-summer-shoes",
        sex: "w",
        model: "Puma X-Ray Speed",
        materials: "50% текстиль, 50% синт. материалы",
        startPrice: 5680
    },
    {
        id: 1700213,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Motiva",
        materials: "23% синтетика, 77% текстиль",
        startPrice: 5990
    },
    {
        id: 1696689,
        category: "women-summer-shoes",
        sex: "w",
        model: "Puma PWRFrame TR 3 Wn's Animal Remix",
        materials: "100% текстиль, подошва 100% резина",
        startPrice: 6250
    },
    {
        id: 1699508,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Court Legacy Lift",
        materials: "72% кожа, 19% синтетика, 9% текстиль",
        startPrice: 11290,
        salePrice: 6290
    },
    {
        id: 1697331,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Court Vision Alta",
        materials: "52% кожа, 42% синтетика",
        startPrice: 12180,
        salePrice: 7780
    },
    {
        id: 1697237,
        category: "women-summer-shoes",
        sex: "w",
        model: "Puma Carina 2.0 I Am The Drama",
        startPrice: 11490,
        salePrice: 8090
    },
    {
        id: 1697331,
        category: "women-summer-shoes",
        sex: "w",
        model: "Nike Air Force 1 '07 SE",
        materials: "53% кожа, 47% синтетика",
        startPrice: 16999,
        salePrice: 9999
    },
    {
        id: 1694294,
        category: "women-winter-shoes",
        sex: "w",
        model: "Puma Snowbae Wns",
        materials: "99% текстиль, 1% кожа",
        startPrice: 7099,
        salePrice: 4899
    },
    {
        id: 1692987,
        category: "women-winter-shoes",
        sex: "w",
        model: "Puma Mayze Chelsea Suede Wn's",
        materials: "кожа, текстиль",
        startPrice: 9090,
        salePrice: 6090
    },
    {
        id: 1693261,
        category: "women-winter-shoes",
        sex: "w",
        model: "Puma Mayra",
        materials: "60% кожа, 40% синт. материалы",
        startPrice: 7570,
        salePrice: 4890
    },
];

export const recommendationProducts = [
    {
        id: 1694515,
        category: "summer-shoes",
        sex: "m"
    },
    {
        id: 1689398,
        category: "summer-shoes",
        sex: "m"
    },
    {
        id: 72463,
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
    }
]

export const mensSummerProductsCount = allSiteProducts.filter(product => (product.category === "mens-summer-shoes" && product.sex === "m")).length;
export const mensWinterProductsCount = allSiteProducts.filter(product => (product.category === "mens-winter-shoes" && product.sex === "m")).length;
export const womensSummerProductsCount = allSiteProducts.filter(product => (product.category === "women-summer-shoes" && product.sex === "w")).length;
export const womensWinterProductsCount = allSiteProducts.filter(product => (product.category === "women-winter-shoes" && product.sex === "w")).length;