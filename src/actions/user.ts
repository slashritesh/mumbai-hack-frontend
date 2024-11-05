import { cookies } from "next/headers"


export const getUserByToken = async ()=>{
    try {
        const cookie = await cookies()
        const token = cookie.get("accessToken")?.value 

        const res = await fetch(`${process.env.API_BASEURL}/api/auth/user`,{
            cache:"no-store",
            headers :{
                "authorization": `Bearer ${token}`
            }
        })
        const data = await res.json()

        console.log(data);

        return data
        
    } catch (error) {
        console.log(error);  
    }
}