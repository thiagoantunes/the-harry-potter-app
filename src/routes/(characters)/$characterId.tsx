import { createFileRoute } from "@tanstack/react-router";
import { queryOptions } from "@tanstack/react-query";
import { User, Sparkles, School, BookOpen } from "lucide-react";
import { fetchCharacter } from "@lib/api/characters";
import { InfoSection } from "@lib/components/InfoSection";
import { Character } from "@lib/constants/characters";
import { CharacterCard } from "./-components/CharacterCard";
import { formatDate } from "@lib/utils";

export const Route = createFileRoute("/(characters)/$characterId")({
  component: CharacterDeailsView,
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(
      queryOptions<Character>({
        queryKey: ["characterId", params.characterId],
        queryFn: () => fetchCharacter(params.characterId),
      })
    ),
});

function CharacterDeailsView() {
  const character = Route.useLoaderData();

  if (!character) return <></>;

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
          <InfoSection.Grid>
            <InfoSection.Item
              label="Species"
              value={<span className="capitalize">{character.species}</span>}
            />
            <InfoSection.Item
              label="Gender"
              value={<span className="capitalize">{character.gender}</span>}
            />
            <InfoSection.Item label="Date of Birth" value={formatDate(character.dateOfBirth)} />
            <InfoSection.Item
              label="Ancestry"
              value={<span className="capitalize">{character.ancestry}</span>}
            />
            <InfoSection.Item
              label="Eye Color"
              value={<span className="capitalize">{character.eyeColour}</span>}
            />
            <InfoSection.Item
              label="Hair Color"
              value={<span className="capitalize">{character.hairColour}</span>}
            />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Magical Information" icon={<Sparkles className="h-5 w-5" />}>
          <InfoSection.Grid>
            <InfoSection.Item label="Wizard/Witch" value={character.wizard ? "Yes" : "No"} />
            <InfoSection.Item
              label="Patronus"
              value={<span className="capitalize">{character.patronus}</span>}
            />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Hogwarts" icon={<School className="h-5 w-5" />}>
          <InfoSection.Grid>
            <InfoSection.Item label="Student" value={character.hogwartsStudent ? "Yes" : "No"} />
            <InfoSection.Item label="Staff" value={character.hogwartsStaff ? "Yes" : "No"} />
          </InfoSection.Grid>
        </InfoSection>

        <InfoSection.Divider />

        <InfoSection title="Portrayed By" icon={<BookOpen className="h-5 w-5" />}>
          <InfoSection.Item label="" value={character.actor} />
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
