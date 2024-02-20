import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

const nav = {
  Learn:
    "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
  Docs: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
};

test("Title is displayed", () => {
  render(<Home />);
  const title = screen.getByText(/welcome to next.js/i);
  expect(title).toBeInTheDocument();
});
