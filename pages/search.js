import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchItemsByQuery } from "../utils/api";
import { allSiteProducts } from "@/utils/variables";
import ProductCard from "../components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { dark } from "@material-ui/core/styles/createPalette";
import { data } from "autoprefixer";

function SearchPage() {
    const router = useRouter();
    const { query } = router.query;
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let productsToFetch = [];

        if (!allSiteProducts || !allSiteProducts.length || !query) {
            return;
        }

        for (let i = 0; i < allSiteProducts.length; i++) {
            if (allSiteProducts[i] && allSiteProducts[i].model) {
                if (
                    allSiteProducts[i].model
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) !== -1
                ) {
                    productsToFetch.push(allSiteProducts[i].id);
                }
            }
        }

        if (!productsToFetch.length) {
            let queryArray = query.toLocaleLowerCase().split(" ");

            if (queryArray.length >= 2) {
                for (let i = 0; i < allSiteProducts.length; i++) {
                    if (allSiteProducts[i] && allSiteProducts[i].model) {
                        let prdName = allSiteProducts[i].model.toLowerCase();

                        if (prdName.indexOf(queryArray[0]) !== -1 && prdName.indexOf(queryArray[1]) !== -1) {
                            productsToFetch.push(allSiteProducts[i].id);
                        }
                    }
                }
            }
        }

        if (!productsToFetch.length) {
            let queryArray = query.toLocaleLowerCase().split(" ");

            if (queryArray.length >= 2) {
                for (let i = 0; i < allSiteProducts.length; i++) {
                    if (allSiteProducts[i] && allSiteProducts[i].model) {
                        for (let j = 0; j < queryArray.length; j++) {
                            let prdName = allSiteProducts[i].model.toLowerCase();

                            if (prdName.indexOf(query[j]) !== -1) {
                                productsToFetch.push(allSiteProducts[i].id);
                            }
                        }
                    }
                }
            }
        }

        async function fetchData() {
            const data = await fetchItemsByQuery(productsToFetch);

            setItems(data);
            setLoading(false);
        }
        fetchData();
    }, [query]);

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="mt-4 mb-4">
                    Search results for
                    <p className="text-3xl">{query}</p>
                </div>

                {loading ? (
                    <p className="mt-4 mb-4 text-center">Loading...</p>
                ) : items ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.keys(items).map((product) => (
                            <ProductCard
                                key={items[product].id}
                                data={items[product]}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="mt-4 mb-4 text-center">No items found.</p>
                )}
            </Wrapper>
        </div>
    );
}

export default SearchPage;
