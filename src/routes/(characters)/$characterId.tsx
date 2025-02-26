import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(characters)/$characterId")({
  component: CharacterDeailsView,
});

function CharacterDeailsView() {
  const { characterId } = Route.useParams();
  return (
    <div className="flex flex-col gap-2">
      <Link to="/" className="font-bold">
        Back
      </Link>
      <div>Hello {characterId}!</div>
    </div>
  );
}
