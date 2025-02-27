import { Character } from "../types/characters";
import clsx from "clsx";
import { ToggleFavoriteButton } from "./characters/ToggleFavoriteButton";

type CharacterCardProps = {
  character: Character;
  className?: string;
};

export const CharacterCard = ({ character, className }: CharacterCardProps) => {
  return (
    <article
      className={clsx(
        "relative isolate flex h-[350px] w-[200px] flex-col justify-end overflow-hidden rounded-2xl px-3 py-6 shadow-md shadow-zinc-950",
        className
      )}
    >
      <ToggleFavoriteButton characterId={character.id} className="absolute top-2 right-2 z-20" />
      <img
        src={character.image || undefined}
        alt={character.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-stone-900/20"></div>
      <h3 className="z-10 font-light tracking-wide">{character.name}</h3>
    </article>
  );
};
