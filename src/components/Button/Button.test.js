import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("Component renders button", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button displays correct text", () => {
  render(<Button>Hello</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Hello");
});

test("Button handles onClick events", () => {
  let i = 0;

  const increment = () => {
    i++;
  };
  render(<Button onClick={increment}>Hello</Button>);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(i).toBe(1);
});

test("Button is red by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button may accept custom background color", () => {
  render(<Button backgroundColor="yellow" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: yellow");
});
