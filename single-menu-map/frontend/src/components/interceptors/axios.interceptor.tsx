import axios, { AxiosRequestConfig } from "axios"

export const AxiosInterceptor = () => {
    const updateHeader = (request: AxiosRequestConfig) => {
        return request; 
    }
    axios.interceptors.request.use((request) => {
        console.log("starting request", request);
        return request;
    })
}