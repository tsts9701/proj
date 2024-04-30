import BrandsSuggestions from "@/components/BrandsSuggestions";
import GenderBannersSuggestions from "@/components/GenderBannersSuggestions"
import HeroBanner from "@/components/HeroBanner";
import HomepageReviews from "@/components/HomepageReviews";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { recommendationProducts, allSiteProducts } from "@/utils/variables";
import reviews from "@/utils/reviews.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function Home({ products }) {
    return (
        <main className="mt-10">
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]" id="productsRecommendations">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Свежие коллекции
                    </div>
                    <div className="text-md md:text-xl">
                        В нашем магазине собраны топовые мировые новинки. Взгляните
                        на наши товары, и вы найдете себе подходящую пару.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="homepage-slider-wrapper">
                    <Carousel 
                        responsive={responsive}
                        arrows
                        autoPlaySpeed={2000}
                        containerClass="container"
                        infinite
                        pauseOnHover
                        draggable={false}
                        emulateTouch={true}
                        autoPlay={true}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        rewind={false}
                        rewindWithAni
                    >
                        {products?.map((product) => (
                            <ProductCard key={product?.id} data={product} />
                        ))}
                    </Carousel>
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}

                <BrandsSuggestions />

                <GenderBannersSuggestions />
            </Wrapper>

            <HomepageReviews reviews={reviews} />

        </main>
    );
}

export async function getStaticProps() {
    let apiEndpointURL = "/api/products-service/?";

    recommendationProducts.map((item, index) => {
        apiEndpointURL += "ids[]=" + item.id + "&"

        return null;
    });

    apiEndpointURL += "language=ru";

    const response = await fetchDataFromApi(apiEndpointURL);
    const products = [];

    for (let key in response.data.products) {
        let baseProduct;

        for (let prd of allSiteProducts) {
            if (prd.id === response.data.products[key].id) {
              baseProduct = prd;

              response.data.products[key].price = baseProduct.startPrice;
             // response.data.products[key].salePrice = baseProduct.salePrice;
              response.data.products[key].name = baseProduct.model;
              break;
            }
        }


        products.push(response.data.products[key]);
    }

    return {
        props: { products }
    };
}
