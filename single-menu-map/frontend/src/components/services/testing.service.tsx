import axios from "axios"
import { Menu } from "../menu/TableMenu";

export const TestingService = () => {
    return axios.get("https://rickandmortyapi.com/api/character/2");
}

export const get = (url: string) => {
    return axios.get(url);
}

export const post = (url: string, body: Menu) => {
    return axios.post(url, body);
}