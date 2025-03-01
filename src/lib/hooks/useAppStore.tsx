import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HouseType } from "@lib/constants/houses";

interface AppState {
  preferredHouse: HouseType | null | undefined;
  favoriteCharactersIds: string[];
  setPreferredHouse: (house: HouseType | null | undefined) => void;
  toggleFavoriteCharacter: (characterId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      preferredHouse: undefined,
      favoriteCharactersIds: [],
      setPreferredHouse: (preferredHouse) => set(() => ({ preferredHouse })),
      toggleFavoriteCharacter: (characterId) =>
        set((state) => ({
          favoriteCharactersIds: state.favoriteCharactersIds.includes(characterId)
            ? state.favoriteCharactersIds.filter((id) => id !== characterId)
            : [...state.favoriteCharactersIds, characterId],
        })),
    }),
    {
      name: "the-harry-potter-app-storage",
    }
  )
);
