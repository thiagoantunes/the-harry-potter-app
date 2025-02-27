import { ReactNode } from "react";
import { useAppStore } from "../hooks/useAppStore";
import { houses } from "../types/houses";
import { HouseCard } from "./HouseCard";
import { Button } from "./Button";

interface HousePreferenceGatewayProps {
  children: ReactNode;
}

export const HousePreferenceGateway = ({ children }: HousePreferenceGatewayProps) => {
  const preferredHouse = useAppStore((store) => store.preferredHouse);
  const setPreferredHouse = useAppStore((store) => store.setPreferredHouse);

  if (preferredHouse !== undefined) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-30">
      <h1 className="text-center text-3xl">Choose your preferred house</h1>

      <div className="flex flex-wrap items-center justify-evenly gap-12">
        {houses.map((house) => (
          <HouseCard key={house} house={house} onClick={setPreferredHouse} />
        ))}
      </div>

      <Button onClick={() => setPreferredHouse(null)} className="self-center text-lg">
        Show all characters
      </Button>
    </div>
  );
};
