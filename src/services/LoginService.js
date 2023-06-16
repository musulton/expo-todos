import {useDeps} from "../shared/context/DependencyContext";

const LoginService = () => {
    const {apiClient} = useDeps();

    const login = async (email, password) => {
        try {
            const data = await apiClient.post('auth/login', {
                email, password
            });

            return data;
        } catch (e) {
            throw e;
        }
    }

    return {
        login
    }
}

export default LoginService;
