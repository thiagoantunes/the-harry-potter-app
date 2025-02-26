import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characters";

const fetchCharacters = async () => {
  const response = await fetch(`${import.meta.env.VITE_HARRY_POTTER_API_URL}/characters`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCharacters = () => {
  return useQuery<Character[]>({ queryKey: ["characters"], queryFn: fetchCharacters });
};
