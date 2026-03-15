// src/services/queryClient.jsx
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:            0,        // always stale — refetch on mount
      gcTime:               15 * 60 * 1000, // keep cache in memory 15 min (instant nav)
      refetchOnMount:       true,     // ← was false, this was the bug
      refetchOnWindowFocus: false,    // no need to refetch on tab switch
      refetchOnReconnect:   "always",
      retry:                1,
    },
  },
});

export default queryClient;