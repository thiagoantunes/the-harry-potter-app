import { Link } from "@tanstack/react-router";
import { useCharacters } from "../../hooks/useCharacters";
import { CharacterCard } from "../CharacterCard";

export const CharactersGrid = () => {
  const { characters } = useCharacters();

  return (
    <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {characters.map((character) => (
        <Link
          key={character.id}
          preload="intent"
          to="/$characterId"
          params={{ characterId: character.id }}
        >
          <CharacterCard
            character={character}
            className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </Link>
      ))}
    </div>
  );
};
