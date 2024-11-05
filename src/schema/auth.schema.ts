import { z } from "zod";


export const loginschema = z.object({
    email : z.string().email(),
    password : z.string().min(1,{message:"password must required"}),
})