import { cookies } from "next/headers"
import { decodeJwt, JWTPayload } from 'jose'
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

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
    getToken : ()=>Promise<string | null>
}

export const auth: AuthOptions = {
    user: null,
    sessionCookie: undefined,

    createSession: async (token: string) => {
        const store = await cookies()

        const expirsAt = new Date(Date.now() + 5 * 60 * 1000);

        store.set("session", token, {
            httpOnly: true,
            secure: true,
            expires: expirsAt
        })
    },

    getToken : async ()=>{
        const store = await cookies()
        auth.sessionCookie = store.get("session")

        const token = auth.sessionCookie?.value

        if (!token) {
            auth.sessionCookie = undefined
            return null
        }

        return token
    },

    getSessionUser: async () => {
        const store = await cookies()
        auth.sessionCookie = store.get("session")

        const token = auth.sessionCookie?.value
        try {
            if (!token) {
                auth.sessionCookie = undefined
                return null
            }

            const {email,role,id} = decodeJwt(token as string) as JWTPayload

            const user = {
                email,role,id
            } as User

            return user


        } catch (error) {
            console.log(error);
            return null
        }
    }
}

