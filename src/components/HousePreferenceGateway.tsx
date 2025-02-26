import { ReactNode } from "react";
import { useAppStore } from "../hooks/usePreferencesStore";
import { houses } from "../types/houses";
import { HouseCard } from "./houses/HouseCard";

interface HousePreferenceGatewayProps {
  children: ReactNode;
}

export const HousePreferenceGateway = ({ children }: HousePreferenceGatewayProps) => {
  const preferredHouse = useAppStore((store) => store.preferredHouse);
  const setPreferredHouse = useAppStore((store) => store.setPreferredHouse);

  if (preferredHouse !== undefined) return <>{children}</>;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 p-2 text-lg">
        {houses.map((house) => (
          <HouseCard key={house} house={house} onClick={setPreferredHouse} />
        ))}
      </div>

      <button onClick={() => setPreferredHouse(null)}>Show all characters</button>
    </div>
  );
};
