import { useNavigate } from "@tanstack/react-router";
import { CharacterFilterType } from "../../types/filters";
import { Route } from "../../routes/(characters)";
import { Button } from "../Button";

const filterButtons: { filterKey: CharacterFilterType | undefined; label: string }[] = [
  { filterKey: undefined, label: "All Characters" },
  { filterKey: "students", label: "Students" },
  { filterKey: "staff", label: "Staff" },
  { filterKey: "favorite", label: "Favorite" },
];

export const CharactersFilters = () => {
  const navigate = useNavigate({ from: Route.fullPath });
  const { filterBy } = Route.useSearch();

  const setFilterBy = (filterBy?: CharacterFilterType) =>
    navigate({
      search: (old) => ({ ...old, filterBy }),
      replace: true,
    });

  return (
    <div className="flex justify-center">
      <nav className="flex items-center space-x-1 overflow-x-auto rounded-xl bg-amber-950/20 text-sm rtl:space-x-reverse">
        {filterButtons.map(({ filterKey, label }) => (
          <Button
            key={label}
            onClick={() => setFilterBy(filterKey)}
            active={filterBy === filterKey}
            className="font-mono font-normal"
          >
            {label}
          </Button>
        ))}
      </nav>
    </div>
  );
};
