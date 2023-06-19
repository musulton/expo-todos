import {useDispatch} from "react-redux";

import PATH from "../../navigations/NavigationPath";
import {onNavigate} from "../../navigations/RootNavigation";
import {showError, showLoading} from "../../shared/store/app/AppAction";

export const Login = (service) => {
    const dispatch = useDispatch();
    const {login} = service();

    const onAuthenticate = async (email, password) => {
        try {
            dispatch(showLoading(true));

            await login(email, password);

            dispatch(login());
            onNavigate({
                routeName: PATH.TODO_LIST,
                isReplace: true
            });
        } catch (e) {
            dispatch(showError(e));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onDismissError = () => dispatch(showError(""));

    return {
        onAuthenticate,
        onDismissError
    }
}
