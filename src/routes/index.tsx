import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useCharacters } from "../hooks/useCharacters";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data, isLoading } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <span className="text-xl font-normal text-gray-500">There are {data?.length} characters</span>
    </div>
  );
}
