import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const today = new Date();
const isoDate = today.toISOString().slice(0, 10);

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: isoDate,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).toString();
