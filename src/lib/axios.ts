import axios from "axios";
import { auth } from "./auth";


const api = axios.create({
    baseURL: process.env.API_BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
});

const apiprotected = axios.create({
    baseURL: process.env.API_BASEURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});


apiprotected.interceptors.request.use(
    async (config) => {
        const token = await auth.getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);


// refresh token implementation 

// apiprotected.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 403) {
//             // Redirect to login page if unauthorized (401 error)
//             window.location.href = "/login";
//         }
//         // Handle other error statuses globally here if needed
//         return Promise.reject(error);
//     }
// );


export {api,apiprotected}

