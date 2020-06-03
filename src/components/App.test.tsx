import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import App from "./App";

describe("<App />", () => {
  test("renders", async () => {
    const { container, asFragment } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});