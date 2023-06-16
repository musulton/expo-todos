import {useDeps} from "../shared/context/DependencyContext";

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
