import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mz9imx34",
  dataset: "production",
  apiVersion: "2025-05-14",
  useCdn: false,
});