import { Link, createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { HousePreferenceGateway } from "../components/HousePreferenceGateway";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <HousePreferenceGateway>
          <Link
            to="/"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            The Harry Potter App
          </Link>
          <Outlet />
        </HousePreferenceGateway>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
