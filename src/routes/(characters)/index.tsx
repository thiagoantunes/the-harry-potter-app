import { z } from "zod";
import { createFileRoute, retainSearchParams } from "@tanstack/react-router";
import { characterFilters } from "@lib/constants/filters";
import { CharactersGrid } from "./-components/CharactersGrid";
import { CharactersFilters } from "./-components/CharactersFilters";

export const Route = createFileRoute("/(characters)/")({
  component: CharactersIndexView,
  validateSearch: z.object({
    filterBy: z.enum(characterFilters).optional(),
    search: z.string().optional(),
  }).parse,
  search: {
    middlewares: [retainSearchParams(["filterBy", "search"])],
  },
});

function CharactersIndexView() {
  return (
    <>
      <CharactersFilters />
      <CharactersGrid />
    </>
  );
}
