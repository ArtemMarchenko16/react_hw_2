import axios from "axios";
import {IUser} from "../models/IUser";
import {IPosts} from "../models/IPosts";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getUsers = async ():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>("/users")
    return axiosResponse.data
}

export const getPosts = async (user:IUser) => {
    let response = await axiosInstance.get<IPosts[]>("/posts", {
        params: {userId: user.id}
    })
    return response.data
}