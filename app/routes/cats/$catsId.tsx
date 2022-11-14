import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Modal } from "~/components/Modal";
import { getCat } from "~/models/cats.server";
import { addToFavourites } from "~/models/favourites.server";

export const loader: LoaderFunction = async (req: { params: { catsId?: string; }; }) => {
  console.log(req.params);
  return getCat(req.params.catsId);
};

export default function CatRoute() {
  const catImage = useLoaderData();

  return (
    <Modal catImage={catImage} />
  );
}