import axios from "axios"

// export const Axios = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api/`,
//   timeout: 0,
//   // headers: {
//   //   "Content-Type": "application/json",
//   //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_PREVIEW_TOKEN}`,
//   // },
// });


export const Axios = async (endpoint, options = {}) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api${endpoint}`;
  const defaultOptions = {
    method: 'GET',
    cache: "no-store",
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  };

  try {
    const response = await fetch(url, defaultOptions);    
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};