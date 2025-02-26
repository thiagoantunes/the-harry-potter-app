import { HouseType } from "../../types/houses";

type HouseCardProps = {
  house: HouseType;
  onClick: (house: HouseType) => void;
};

export const HouseCard = ({ house, onClick }: HouseCardProps) => {
  const handleClick = () => onClick(house);

  return (
    <button key={house} onClick={handleClick} className={`block px-3 py-2`}>
      {house}
    </button>
  );
};
