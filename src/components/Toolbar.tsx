import { useRouter, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Toolbar = () => {
  const router = useRouter();
  const routerState = useRouterState();
  const isRootRoute = routerState.location.pathname === "/";

  return (
    <div className="flex items-center bg-amber-900/15 p-4">
      <div className="mr-4 flex w-8 items-center justify-center">
        {!isRootRoute && (
          <button
            onClick={() => router.history.back()}
            className="text-amber-200 hover:text-amber-100"
          >
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      <h1 className="flex items-center text-xl font-medium text-amber-200">The Harry Potter App</h1>
    </div>
  );
};
