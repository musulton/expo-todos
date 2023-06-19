import axios from "axios";
import {
    UnauthorizedError,
    GlobalError
} from "../shared/utils/AppError";
import localStorage from "../shared/utils/LocalStorage";

const client = axios.create({
    baseURL: "https://d14a-103-78-25-190.ngrok-free.app"
});

client.interceptors.request.use(async (config) => {
    if (config.url !== "/login") {
        const token = await localStorage().getData("token");

        config.headers = {
            'Authorization': `Bearer ${token}`
        }
    }

    return config;
})

const apiClient = async ({
    url, method, params = null
 }) => {
    try {
        const result = await client[method](url, params);
        return result.data;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                throw new UnauthorizedError("Unauthorized");
            }
        } else {
            throw new GlobalError('Oops');
        }
    }
}

export default apiClient;
