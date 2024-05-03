import { API_URL, STRAPI_API_TOKEN } from "./variables";

export async function fetchItemsByQuery(productsToFetch) {
  let apiEndpointURL = "/api/products-service/?";

  productsToFetch.map((id, index) => {
    apiEndpointURL += "ids[]=" + id + "&"

    return null;
  });


  let response = await fetch(`${API_URL}${apiEndpointURL}`, {
    method: "GET",
    headers: {
      "Content-Language": "ru"
    },
  });

  let data = await response.json();

  if (!data || !data.data || !data.data.products) {
  }
  
  data = data.data.products;

  return data;
}

export const fetchDataFromApi = async (endpoint) => {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
        "Content-Language": "ru"
      },
    };

    try {
      const res = await fetch(`${API_URL}${endpoint}`, options);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  export const makePaymentRequest = async (payload) => {
    try {
      const res = await fetch("https://nicepay.io/public/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Payment request error:', error);
      throw error;
    }
  };


  // src/api.js
import axios from "axios";

export const register = async (username, email, password) => {
  return await axios.post(`${API_URL}/api/auth/local/register`, {
    username,
    email,
    password,
  });
};

export const login = async (identifier, password) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
    {
      identifier,
      password,
    }
  );

  // Fetch user data with profileImage
  const userResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${response.data.user.id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Return the user and jwt token
  return {
    data: {
      jwt: response.data.jwt,
      user: userResponse.data,
    },
  };
};

export const logout = () => {
  // Remove JWT token from local storage
  localStorage.removeItem("token");
};
// ... other imports and functions
