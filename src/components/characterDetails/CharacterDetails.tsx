import { BookOpen, User, Sparkles, School } from "lucide-react";
import { Character } from "../../types/characters";
import { CharacterCard } from "../CharacterCard";
import { Divider } from "./Divider";
import { InfoGrid } from "./InfoGrid";
import { InfoItem } from "./InfoItem";
import { InfoSection } from "./InfoSection";
import { formatDate } from "../../lib/utils";

interface CharacterDetailsProps {
  character: Character;
}

export default function CharacterDetails({ character }: CharacterDetailsProps) {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 px-4 py-8 md:flex-row md:items-start">
      <div className="flex w-[250px] flex-col gap-4 md:col-span-1">
        <CharacterCard character={character} />
        {character.alternate_names && character.alternate_names.length > 0 && (
          <p className="text-sm text-amber-50/30">
            Also known as: {character.alternate_names.join(", ")}
          </p>
        )}
      </div>

      <div className="min-w-[500px] flex-auto rounded-2xl bg-zinc-950 p-6 shadow-md md:col-span-2">
        <InfoSection title="Basic Information" icon={<User className="h-5 w-5" />}>
          <InfoGrid>
            <InfoItem
              label="Species"
              value={<span className="capitalize">{character.species}</span>}
            />
            <InfoItem
              label="Gender"
              value={<span className="capitalize">{character.gender}</span>}
            />
            <InfoItem label="Date of Birth" value={formatDate(character.dateOfBirth)} />
            <InfoItem
              label="Ancestry"
              value={<span className="capitalize">{character.ancestry}</span>}
            />
            <InfoItem
              label="Eye Color"
              value={<span className="capitalize">{character.eyeColour}</span>}
            />
            <InfoItem
              label="Hair Color"
              value={<span className="capitalize">{character.hairColour}</span>}
            />
          </InfoGrid>
        </InfoSection>

        <Divider />

        <InfoSection title="Magical Information" icon={<Sparkles className="h-5 w-5" />}>
          <InfoGrid>
            <InfoItem label="Wizard/Witch" value={character.wizard ? "Yes" : "No"} />
            <InfoItem
              label="Patronus"
              value={<span className="capitalize">{character.patronus}</span>}
            />
          </InfoGrid>
        </InfoSection>

        <Divider />

        <InfoSection title="Hogwarts" icon={<School className="h-5 w-5" />}>
          <InfoGrid>
            <InfoItem label="Student" value={character.hogwartsStudent ? "Yes" : "No"} />
            <InfoItem label="Staff" value={character.hogwartsStaff ? "Yes" : "No"} />
          </InfoGrid>
        </InfoSection>

        <Divider />

        <InfoSection title="Portrayed By" icon={<BookOpen className="h-5 w-5" />}>
          <InfoItem label="" value={character.actor} />
          {character.alternate_actors && character.alternate_actors.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-amber-50/30">Alternate Actors:</p>
              <p className="font-light tracking-wide">{character.alternate_actors.join(", ")}</p>
            </div>
          )}
        </InfoSection>
      </div>
    </div>
  );
}
