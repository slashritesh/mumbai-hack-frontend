"use server"

import { auth } from "@/lib/auth";
import { api } from "@/lib/axios";
import { loginschema } from "@/schema/auth.schema";
import { AxiosError } from "axios";
import { z } from "zod";


export const register = async (formdata: FormData) => {
    console.log("email", formdata.get("fullname"));
    console.log("email", formdata.get("email"));
    console.log("password", formdata.get("password"));
}



export const login = async (values: z.infer<typeof loginschema>) => {

    const validatefields = loginschema.safeParse(values)

    if (!validatefields.success) {
        return { error: "creadentials required!" }
    }

    try {
        const { email, password } = validatefields.data

        const { data } = await api.post("/api/auth/login", {
            email, password
        })

        

        await auth.createSession(data.token)

        

        return { success: "logged in Sucessfully" }

    } catch (error: any) {
        if (error instanceof AxiosError) {
            if (!error.response) {                
                return { error: "Network issue in backend" }
            }
            return { error: error.response?.data.message }
        }      
        return { error: "something went wrong" }
    }
}