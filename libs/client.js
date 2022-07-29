import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "images",
  apiKey: process.env.API_KEY,
});
