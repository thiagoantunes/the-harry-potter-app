import { Link } from "@tanstack/react-router";
import { useCharacters } from "../../hooks/useCharacters";

export const CharactersGrid = () => {
  const { data } = useCharacters();

  return (
    <ul>
      {data?.map((character) => (
        <Link
          key={character.id}
          to="/$characterId"
          params={{ characterId: character.id }}
          preload="intent"
          className={`block px-3 py-2`}
          activeProps={{ className: `font-bold` }}
        >
          {character.name}
        </Link>
      ))}
    </ul>
  );
};
