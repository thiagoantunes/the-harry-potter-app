import { useNavigate } from "@tanstack/react-router";
import { CharacterFilterType } from "../../types/filters";
import { Route } from "../../routes/(characters)";

export const CharactersFilters = () => {
  const navigate = useNavigate({ from: Route.fullPath });

  const setFilterBy = (filterBy?: CharacterFilterType) =>
    navigate({
      search: (old) => ({ ...old, filterBy }),
      replace: true,
    });

  const setSerchTerm = (search?: string) =>
    navigate({
      search: (old) => ({ ...old, search }),
      replace: true,
    });

  return (
    <h2 className="flex gap-2">
      <button onClick={() => setFilterBy()} className="text-2xl font-bold">
        All Characters
      </button>
      <button onClick={() => setFilterBy("students")} className="text-2xl font-bold">
        Students
      </button>
      <button onClick={() => setFilterBy("staff")} className="text-2xl font-bold">
        Staff
      </button>
      <button onClick={() => setSerchTerm("test")} className="text-2xl font-bold">
        Simulate search
      </button>
    </h2>
  );
};
