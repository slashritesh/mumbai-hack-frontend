import { cookies } from "next/headers"
import { jwtVerify } from 'jose'
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { redirect } from "next/navigation";
import { apiprotected } from "./axios";

interface User {
    id: string,
    email: string,
    role: [string]
}

interface AuthOptions {
    user: User | null;
    sessionCookie: RequestCookie | undefined;
    createSession: (token: string) => Promise<void>;
    getSessionUser: () => Promise<User | null>;
    getToken: () => Promise<string | null>;
    signOut: () => void,
    setToken: (token: string) => void,
    refreshToken: () => Promise<string | null>
}

export const auth: AuthOptions = {
    user: null,
    sessionCookie: undefined,

    setToken: async (token) => {
        const store = await cookies()
        const expirsAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        store.set("session", token, { httpOnly: true, secure: true,sameSite:"none", expires: expirsAt })
    },

    createSession: async (token: string) => {
        const store = await cookies()

        const expirsAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

        store.set("session", token, {
            httpOnly: true,
            secure: true,
            expires: expirsAt
        })
    },

    signOut: async () => {
        const store = await cookies()
        store.delete("session")
        redirect("/login")
    },

    getToken: async () => {
        const store = await cookies()
        auth.sessionCookie = store.get("session")

    
        const token = auth.sessionCookie?.value

        if (!token) {
            return null
        }

        return token
    },

    refreshToken: async () => {
        try {
            const { data } = await apiprotected.get("/",{
                headers:{
                    "cookie":"refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MjhiMjQwYWExZGM3Njk4MTA3N2Y3OCIsImVtYWlsIjoibWFuZXJpdGVzaEBnbWFpbC5jb20iLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTczMTA1MTk0MCwiZXhwIjoxNzMxMTM4MzQwfQ.U_YVRO5RzpsbhdcZ-ElssTn4tBoOVGmbTEaQn5-T320; Path=/; HttpOnly;"
                },
                withCredentials:true
            })
            
            return data.token
        } catch (error: any) {
            console.log("Error refreshing token:", error.response.data);
            return null;
        }
    },

    getSessionUser: async () => {
        const token = await auth.getToken()

        try {
            if (!token) {
                auth.sessionCookie = undefined
                return null
            }

            const key = new TextEncoder().encode(process.env.ACCESSTOKEN_SECERT)
            try {

                const { payload } = await jwtVerify(token, key)
                const { email, role, id } = payload

                const user = {
                    email, role, id
                } as User

                return user
            } catch (error) {
                console.log(error);
                return null
            }

        } catch (error) {
            console.log(error);
            return null
        }
    }
}

