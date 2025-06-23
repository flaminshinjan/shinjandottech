import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fvi1i6cr",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});