import {useSelector} from "react-redux";
import {render} from "@testing-library/react-native";

import PopupMenu from "../../../src/shared/components/PopupMenu";
import {onNavigate} from "../../../src/navigations/RootNavigation";
import PATH from "../../../src/navigations/NavigationPath";

jest
    .mock("react-redux", () => ({
        useSelector: jest.fn(),
        useDispatch: jest.fn()
    }))
    .mock("../../../src/navigations/RootNavigation", () => ({
        onNavigate: jest.fn()
    }))

describe("PopupMenu", () => {
    test("should call onNavigate when isLoggedIn is false", () => {
        useSelector.mockImplementation(() => false);

        render(<PopupMenu />);

        expect(onNavigate).toHaveBeenCalledWith({
            routeName: PATH.LOGIN,
            isReplace: true
        })
    })
})
