import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProcessStep from "./ProcessStep";

describe("ProcessStep", () => {
  it("renders number, title, and description", () => {
    render(
      <ProcessStep
        number={1}
        title="Análisis"
        description="Evaluamos tu proyecto"
      />,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Análisis")).toBeInTheDocument();
    expect(screen.getByText("Evaluamos tu proyecto")).toBeInTheDocument();
  });
});
