import clsx from "clsx";
import { Star } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { useAppStore } from "@lib/hooks/useAppStore";

type ToggleFavoriteButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  characterId: string;
};

export const ToggleFavoriteButton = ({
  characterId,
  className,
  ...props
}: ToggleFavoriteButtonProps) => {
  const { favoriteCharactersIds, toggleFavoriteCharacter } = useAppStore();
  const isFavorite = favoriteCharactersIds.includes(characterId);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavoriteCharacter(characterId);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={clsx("rounded-full text-amber-100/50", className)}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      {...props}
    >
      <Star size={24} className={clsx(isFavorite ? "fill-amber-300" : "fill-transparent")} />
    </button>
  );
};
