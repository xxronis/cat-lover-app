import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Modal } from "~/components/Modal";
import { getBreedImages } from "~/models/breeds.server";

export const loader: LoaderFunction = async (req: { params: { breedsId: string; }; }) => {
  console.log(req.params);
  return getBreedImages(req.params.breedsId);
};

export default function BreedRoute() {
  const breedImages = useLoaderData();
  // TODO breedId to display.
  return (
    <Modal breedImages={breedImages} />
  );
}