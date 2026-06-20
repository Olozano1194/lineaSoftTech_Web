import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TeamMemberCard from "./TeamMemberCard";

describe("TeamMemberCard", () => {
  it("renders name, role, description, and image", () => {
    render(
      <TeamMemberCard
        name="Oscar"
        role="Ingeniero de Sistemas"
        description="Especialista en desarrollo web"
        image="/foto.webp"
        imageAlt="Foto de Oscar"
      />,
    );

    expect(screen.getByText("Oscar")).toBeInTheDocument();
    expect(screen.getByText("Ingeniero de Sistemas")).toBeInTheDocument();
    expect(
      screen.getByText("Especialista en desarrollo web"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Foto de Oscar")).toBeInTheDocument();
  });
});