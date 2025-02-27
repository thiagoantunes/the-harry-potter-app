import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characters";
import { useAppStore } from "./useAppStore";
import { Route } from "../routes/(characters)";
import { CharacterFilterType } from "../types/filters";
import { fetchCharacters } from "../api/characters";

export const useCharacters = () => {
  const { filterBy } = Route.useSearch();
  const { preferredHouse, favoriteCharactersIds } = useAppStore();
  const { data, ...rest } = useQuery<Character[]>({
    queryKey: ["characters", preferredHouse],
    queryFn: () => fetchCharacters(preferredHouse),
    staleTime: Infinity,
  });

  const filterKeyMap: Record<CharacterFilterType, (character: Character) => boolean> = {
    favorite: (character) => favoriteCharactersIds.includes(character.id),
    students: (character) => !!character.hogwartsStudent,
    staff: (character) => !!character.hogwartsStaff,
  };

  const characters =
    data
      ?.filter((character) => character.image)
      ?.filter((character) => !filterBy || filterKeyMap[filterBy](character)) || [];

  return {
    characters,
    ...rest,
  };
};
