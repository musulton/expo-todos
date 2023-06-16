import axios from "axios";
import {
    UnauthorizedError,
    GlobalError
} from "../shared/utils/AppError";

const client = axios.create({
    baseURL: "https://34bb-103-78-25-190.ngrok-free.app"
});

const clientService = () => {
    const post = async (url, params) => {
        try {
            const result = await client.post(url, params);
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

    return {
        post
    }
}

export default clientService;
