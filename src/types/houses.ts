export const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravencla"] as const;

export type HouseType = (typeof houses)[number];
