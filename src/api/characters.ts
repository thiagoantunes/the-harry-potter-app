import { HouseType } from "../types/houses";

export const fetchCharacter = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_HARRY_POTTER_API_URL}/character/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.length > 0 ? data[0] : null;
};

export const fetchCharacters = async (house?: HouseType | null) => {
  const routeSuffix = house ? `/house/${house}` : "";
  const response = await fetch(
    `${import.meta.env.VITE_HARRY_POTTER_API_URL}/characters${routeSuffix}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
