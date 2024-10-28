"use server"

export const register = async (formdata : FormData)=>{
    console.log("email",formdata.get("fullname"));
    console.log("email",formdata.get("email"));
    console.log("password",formdata.get("password"));
}

export const login = async (formdata : FormData)=>{
    console.log("email",formdata.get("email"));
    console.log("password",formdata.get("password"));
}