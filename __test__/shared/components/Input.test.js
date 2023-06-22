import {fireEvent, render, screen} from "@testing-library/react-native";

import Input from "../../../src/shared/components/Input";

describe("Input", () => {
    const mockProps = {
        value: "Value",
        onChangeValue: jest.fn(),
        placeholder: "Placeholder"
    }

    test("should render correctly", () => {
        render(<Input {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    test("should call onChangeValue when change input text", () => {
        const value = "new value"

        render(<Input {...mockProps} />)
        fireEvent.changeText(screen.getByPlaceholderText(mockProps.placeholder), value)

        expect(mockProps.onChangeValue).toHaveBeenCalledWith(value)
    })
})
