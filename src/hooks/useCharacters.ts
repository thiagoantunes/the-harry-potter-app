import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characters";
import { useAppStore } from "./useAppStore";
import { HouseType } from "../types/houses";
import { Route } from "../routes/(characters)";
import { CharacterFilterType } from "../types/filters";

const fetchCharacters = async (house?: HouseType | null) => {
  const routeSuffix = house ? `/house/${house}` : "";
  const response = await fetch(
    `${import.meta.env.VITE_HARRY_POTTER_API_URL}/characters${routeSuffix}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCharacters = () => {
  const { filterBy } = Route.useSearch();
  const { preferredHouse, favoriteCharactersIds } = useAppStore();
  const { data, ...rest } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: () => fetchCharacters(preferredHouse),
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
