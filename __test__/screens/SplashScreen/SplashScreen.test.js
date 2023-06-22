import {render, screen, waitFor} from "@testing-library/react-native";

import SplashScreen from "../../../src/screens/SplashScreen/SplashScreen";
import {onNavigate} from "../../../src/navigations/RootNavigation";
import PATH from "../../../src/navigations/NavigationPath";
import {login} from "../../../src/shared/store/login/LoginAction";

const mockGetData = jest.fn();

jest
    .mock("react-redux", () => ({
        useDispatch: jest.fn(() => jest.fn())
    }))
    .mock("../../../src/shared/utils/LocalStorage", () => ({
        __esModule: true,
        default: jest.fn(() => ({
            getData: mockGetData
        }))
    }))
    .mock("../../../src/navigations/RootNavigation", () => ({
        onNavigate: jest.fn()
    }))
    .mock("../../../src/shared/store/login/LoginAction", () => ({
        login: jest.fn()
    }))

describe("SplashScreen", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    })

    beforeAll(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    })

    test("should navigate to TODO LIST when has token", async () => {
        mockGetData.mockImplementation(() => "token123");

        render(<SplashScreen />);

        await waitFor(() => {
            jest.runOnlyPendingTimers();
        });

        expect(login).toHaveBeenCalled();
        expect(onNavigate).toHaveBeenCalledWith({
            isReplace: true,
            routeName: PATH.TODO_LIST
        })
    })

    test("should navigate to LOGIN when has not token", async () => {
        mockGetData.mockImplementation(() => null);

        render(<SplashScreen />);

        await waitFor(() => {
            jest.runOnlyPendingTimers();
        });

        expect(login).not.toHaveBeenCalled();
        expect(onNavigate).toHaveBeenCalledWith({
            isReplace: true,
            routeName: PATH.LOGIN
        })
    })

    test("should return correctly", () => {
        render(<SplashScreen />);

        expect(screen.toJSON()).toMatchSnapshot();
    })
})
