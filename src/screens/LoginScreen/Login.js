import PATH from "../../navigations/NavigationPath";
import {onNavigate} from "../../navigations/RootNavigation";

export const Login = (service) => {
    const {login} = service();

    const onAuthenticate = async (email, password) => {
        try {
            const data = await login(email, password);

            onNavigate({
                routeName: PATH.TODO_LIST,
                isReplace: true
            });
        } catch (e) {
            console.log("error", e);
        }
    }

    return {
        onAuthenticate
    }
}
