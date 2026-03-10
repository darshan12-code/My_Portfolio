// src/queryClient.js
// Centralized React Query client with caching config.
// staleTime: how long cached data is considered fresh (no refetch)
// gcTime:    how long unused cache stays in memory before garbage collected
//
// With these settings:
// - Navigating Blog → Case Studies → Blog: NO API call, instant render
// - Data refreshes only after staleTime expires (5 min for lists, 10 min for details)
// - If user leaves tab and comes back, no unnecessary refetch

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data stays "fresh" for 5 minutes — no refetch on re-mount/navigation
      staleTime: 5 * 60 * 1000,
      // Keep unused cache for 15 minutes (survives page navigation)
      gcTime: 15 * 60 * 1000,
      // Don't refetch when user switches back to the tab
      refetchOnWindowFocus: false,
      // Don't refetch on reconnect unless data is stale
      refetchOnReconnect: "always",
      // Retry failed requests once
      retry: 1,
      // Don't refetch on component remount if data is fresh
      refetchOnMount: false,
    },
  },
});

export default queryClient;