import { useQuery } from "@tanstack/react-query";
import { Route } from "..";
import { fetchCharacters } from "@lib/api/characters";
import { useAppStore } from "@lib/hooks/useAppStore";
import { Character } from "@lib/constants/characters";
import { CharacterFilterType } from "@lib/constants/filters";

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
