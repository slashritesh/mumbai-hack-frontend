import { apiprotected } from "@/lib/axios";
import { AxiosError } from "axios";


export const getOrganization = async ()=>{
    try {
       const { data } = await apiprotected.get("/api/auth/user") 
        return data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error.response?.data)
        }
    }
}