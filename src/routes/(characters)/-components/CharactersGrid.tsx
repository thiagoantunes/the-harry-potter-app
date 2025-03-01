import { Link } from "@tanstack/react-router";
import { CharacterCard } from "./CharacterCard";
import { useCharacters } from "../-hooks/useCharacters";

export const CharactersGrid = () => {
  const { characters } = useCharacters();

  return (
    <div className="container mx-auto grid w-min grid-cols-[repeat(auto-fill,minmax(200px,max-content))] gap-4">
      {characters.map((character) => (
        <Link key={character.id} to="/$characterId" params={{ characterId: character.id }}>
          <CharacterCard
            character={character}
            className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </Link>
      ))}
    </div>
  );
};
