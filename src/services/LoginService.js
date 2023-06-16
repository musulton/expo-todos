import {useDeps} from "../shared/context/DependencyContext";
import localStorage from "../shared/utils/LocalStorage";

const LoginService = () => {
    const {apiClient} = useDeps();

    const login = async (email, password) => {
        try {
            const data = await apiClient({
                method: 'post',
                url: 'auth/login',
                params: {
                    email, password
                }
            });

            await localStorage().setData("token", data["access_token"]);
        } catch (e) {
            throw e;
        }
    }

    return {
        login
    }
}

export default LoginService;
