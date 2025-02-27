import { useQuery } from "@tanstack/react-query";
import { Character } from "../types/characters";

const fetchCharacter = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_HARRY_POTTER_API_URL}/character/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCharacter = (id: string) => {
  const { data, ...rest } = useQuery<Character[]>({
    queryKey: ["characters", id],
    queryFn: () => fetchCharacter(id),
  });

  return {
    character: data?.[0],
    ...rest,
  };
};
