import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { FaBeer } from "react-icons/fa";

import Button from "./button";
import { light } from "../../config/buttonTheme";

test("renders with icons", () => {
  const { getByText } = render(
    <ThemeProvider theme={light}>
      <Button icon={<FaBeer />} variant="primary">
        Beer Button
      </Button>
    </ThemeProvider>
  );
  expect(getByText("Beer Button")).toBeTruthy();
});

test("is disabled", () => {
  const { getByText } = render(<Button disabled>Disabled Button</Button>);
  expect(getByText("Disabled Button").closest("button").disabled).toBeTruthy();
});
