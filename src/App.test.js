import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Suma de números positivos", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText("0");
  const addButton = getByText("+");
  const equalButton = getByText("=");
  const result = getByTestId("result");

  fireEvent.click(getByText("1"));
  fireEvent.click(addButton);
  fireEvent.click(getByText("2"));
  fireEvent.click(equalButton);

  expect(result.textContent).toBe("3");
});

test("Resta de números negativos", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText("0");
  const subtractButton = getByText("-");
  const equalButton = getByText("=");
  const result = getByTestId("result");

  fireEvent.click(getByText("-1"));
  fireEvent.click(subtractButton);
  fireEvent.click(getByText("-2"));
  fireEvent.click(equalButton);

  expect(result.textContent).toBe("-3");
});

test("Multiplicación de números decimales", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText("0");
  const multiplyButton = getByText("*");
  const equalButton = getByText("=");
  const result = getByTestId("result");

  fireEvent.click(getByText("2.5"));
  fireEvent.click(multiplyButton);
  fireEvent.click(getByText("1.5"));
  fireEvent.click(equalButton);

  expect(result.textContent).toBe("3.75");
});

test("División entre cero", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText("0");
  const divideButton = getByText("/");
  const equalButton = getByText("=");
  const result = getByTestId("result");

  fireEvent.click(getByText("5"));
  fireEvent.click(divideButton);
  fireEvent.click(getByText("0"));
  fireEvent.click(equalButton);

  expect(result.textContent).toBe("Error");
});

test("Entrada no válida", () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText("0");
  const equalButton = getByText("=");
  const result = getByTestId("result");

  fireEvent.click(getByText("abc"));
  fireEvent.click(equalButton);

  expect(result.textContent).toBe("Error");
});