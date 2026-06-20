import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PlanCard from "./PlanCard";
import { MdLanguage } from "react-icons/md";

// BtnPrice reads VITE_WA_PHONE — mock it so it renders in tests
vi.mock("../../components/ui/BtnPrice", () => ({
  default: ({ planName }: { planName: string }) => (
    <button>{planName}</button>
  ),
}));

describe("PlanCard", () => {
  const baseProps = {
    icon: MdLanguage,
    title: "Plan Básico",
    description: "Un plan básico para comenzar",
    priceFrom: 199,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    planName: "Plan Básico",
  };

  it("renders title, description, price, features, and BtnPrice", () => {
    render(<PlanCard {...baseProps} />);

    expect(
      screen.getByRole("heading", { name: "Plan Básico" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Un plan básico para comenzar"),
    ).toBeInTheDocument();
    expect(screen.getByText(/Desde/i)).toBeInTheDocument();
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Plan Básico" }),
    ).toBeInTheDocument();
  });

  it("renders price formatted with currency", () => {
    render(<PlanCard {...baseProps} />);

    expect(screen.getByText(/199/)).toBeInTheDocument();
  });

  it("does not show popular badge when isPopular is false", () => {
    render(<PlanCard {...baseProps} />);

    expect(screen.queryByText("Más Popular")).not.toBeInTheDocument();
  });

  it("shows popular badge and conditional styling when isPopular is true", () => {
    render(<PlanCard {...baseProps} isPopular={true} />);

    expect(screen.getByText("Más Popular")).toBeInTheDocument();
  });
});