import { z } from "zod";
import { createFileRoute, retainSearchParams } from "@tanstack/react-router";
import { characterFilters } from "../../types/filters";
import { CharactersFilters } from "../../components/characters/CharactersFilters";
import { CharactersGrid } from "../../components/characters/CharactersGrid";

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
