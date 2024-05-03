import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = ({ displayCount, setWishlistItemsCount }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add this line
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    setIsLoading(true); // Start loading
  
    try {
      let apiEndpointURL = "/api/products-service/?";
      let wishlistProducts = localStorage.getItem("wishlistData");

      if (wishlistProducts && wishlistProducts.length) {
        apiEndpointURL += "ids[]=";
        apiEndpointURL += wishlistProducts.split(",").join("&ids[]=");
        apiEndpointURL += "&language=ru";
      }

      const { data } = await fetchDataFromApi(apiEndpointURL);

      if (data && data.products) {
        setFavorites(data.products);
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }

    setIsLoading(false); // End loading
  };


  const fetchProducts = async (ids) => {
    setIsLoading(true); // Start loading
    try {
      const { data } = await fetchDataFromApi(`/api/products?populate=*`);
      const filteredProducts = data.filter((product) =>
        ids.includes(product.id)
      );
      setProducts({ data: filteredProducts });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false); // End loading
  };


  const removeFavorite = async (itemId) => {
    try {
      let wishlistData = localStorage.getItem ("wishlistData");

      if (itemId) itemId += "";

      if (wishlistData && wishlistData.length && wishlistData.indexOf(itemId) !== -1) {
        wishlistData = wishlistData.split(",");

        wishlistData.splice(wishlistData.indexOf(itemId), 1);

        localStorage.setItem("wishlistData", wishlistData.join(","));

        // remove the product from local state as well
        window.location.reload();

        // Show a success toast
        toast.success("Товар удален из списка желаний", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
      // Show an error toast
      toast.error("Ошибка при удалении товара из списка желаний", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

   return (
    <div>
    <ToastContainer />
    {isLoading ? (
      <div>Loading...</div> // Display a loading indicator
    ) : favorites.length === 0 ? (
      <div className="text-center py-8">
        <h5 className="text-lg">Ваш список желаний пуст</h5>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.keys(products).map((product) => {
          return (
            <ProductCard
              key={products[product].id}
              data={products[product]}
              onRemoveFavorite={() => removeFavorite(products[product].id)}
              isFavorite={true}
            />
          );
        })}
      </div>
    )}
  </div>
);
};

Favorites.defaultProps = {
displayCount: Infinity,
};

export default Favorites;
