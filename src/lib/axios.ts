import axios from "axios";
import { auth } from "./auth";

const api = axios.create({
    baseURL: process.env.API_BASEURL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials : true
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
        return Promise.reject(error);
    }
);




// refresh token implementation 

apiprotected.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config

        if (error.response.data.message === "jwt expired" && error.status == 500 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const {data} = await apiprotected.get("/api/auth/refreshToken")
                
                if (data.token) {
                    auth.createSession(data.token)
                }

                console.log("assign new token!!");

                return apiprotected(originalRequest);
            } catch (error : any) {
                console.log(error.response.data);
                return Promise.reject(error);
            }
        }
        // await auth.signOut()
        return Promise.reject(error);
    }
);


export { api, apiprotected }





