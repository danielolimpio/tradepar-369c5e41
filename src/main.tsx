import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from "react";

const queryClient = new QueryClient();

// Componente wrapper para os providers
const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        {children}
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

// Componente wrapper com ScrollToTop
const RouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

// Envolve as rotas com os wrappers
const wrappedRoutes = routes.map((route) => ({
  ...route,
  element: route.element ? (
    <AppWrapper>
      <RouteWrapper>{route.element}</RouteWrapper>
    </AppWrapper>
  ) : route.element,
}));

export const createRoot = ViteReactSSG(
  { routes: wrappedRoutes, basename: "/" },
  ({ isClient }) => {
    if (isClient) {
      console.log("Hydration complete");
    }
  }
);
