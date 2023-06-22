import {render, fireEvent, screen} from "@testing-library/react-native";

import SubmitButton from "../../../src/shared/components/SubmitButton";

describe("SubmitButton", () => {
    const props = {
        title: "Title",
        onSubmit: jest.fn()
    };

    test("should call onSubmit props when button is clicked", () => {
        render(<SubmitButton {...props} />);
        fireEvent.press(screen.getByText(props.title));

        expect(props.onSubmit).toHaveBeenCalled();
    })

    test("should render correctly", () => {
        render(<SubmitButton {...props} />);

        expect(screen.toJSON()).toMatchSnapshot();
    })
})
