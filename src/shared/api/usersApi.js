import axios from "axios";
import { instance } from "./authApi";

export const getAllUsers = (value) => {
    if (value) {
        return axios.get(value);
    }

    return instance.get("/table/");
};
