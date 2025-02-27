import { createFileRoute } from "@tanstack/react-router";
import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import { useCharacter } from "../../hooks/useCharacter";

export const Route = createFileRoute("/(characters)/$characterId")({
  component: CharacterDeailsView,
});

function CharacterDeailsView() {
  const { characterId } = Route.useParams();
  const { character } = useCharacter(characterId);

  if (!character) return <></>;

  return <CharacterDetails character={character} />;
}
