import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import { createFileRoute } from "@tanstack/react-router";
import { queryOptions } from "@tanstack/react-query";
import { Character } from "../../types/characters";
import { fetchCharacter } from "../../api/characters";

export const Route = createFileRoute("/(characters)/$characterId")({
  component: CharacterDeailsView,
  loader: (opts) =>
    opts.context.queryClient.ensureQueryData(
      queryOptions<Character>({
        queryKey: ["characterId", opts.params.characterId],
        queryFn: () => fetchCharacter(opts.params.characterId),
        staleTime: Infinity,
      })
    ),
});

function CharacterDeailsView() {
  const character = Route.useLoaderData();

  if (!character) return <></>;

  return <CharacterDetails character={character} />;
}
