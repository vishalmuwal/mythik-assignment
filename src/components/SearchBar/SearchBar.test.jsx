import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders search input and button", () => {
    render(<SearchBar onSearch={() => {}} />);

    expect(
      screen.getByPlaceholderText("Enter GitHub username")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("updates input value when user types", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Enter GitHub username");

    fireEvent.change(input, { target: { value: "testuser" } });

    expect(input.value).toBe("testuser");
  });

  it("calls onSearch with input value when form is submitted", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Enter GitHub username");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "testuser" } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("testuser");
  });
});
