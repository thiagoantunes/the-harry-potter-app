import { useQuery } from "@tanstack/react-query";

const fetchCharacters = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_HARRY_POTTER_API_URL}/characters`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCharacters = () => {
  return useQuery({ queryKey: ["characters"], queryFn: fetchCharacters });
};
