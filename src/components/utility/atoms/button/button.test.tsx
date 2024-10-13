import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from "@testing-library/react"
import Button from "./button";



describe("Button atom", () => {
    test("Renders with correct text and style", () => {
        render(<Button onClick={() => { }} text="Test" style="StyleTest"></Button>);
        expect(screen.queryByText("Test")).toBeInTheDocument();
    });
    test("Calls on click", () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} text="Test" style="StyleTest"></Button>);

        const btn_el = screen.getByRole('button', {name: "Test"});
        fireEvent.click(btn_el);

        expect(onClick).toHaveBeenCalledTimes(1);

    })
}
)