import { LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Modal } from "~/components/Modal";
import { getCat } from "~/models/cats.server";

export const loader: LoaderFunction = async (req: { params: { catsId: string; }; }) => {
  return getCat(req.params.catsId);
};

export default function CatRoute() {
  // Just a way to test error boundary.
  // throw new Error("Error!");
  const catImage = useLoaderData();

  return (
    <Modal catImage={catImage} />
  );
}

export function ErrorBoundary() {
  return (
    <div className="error-container text-center flex items-center p-6 space-x-2 bg-red-700 text-white fixed top-60">
      {`There was an error loading this cat. Sorry.`}
    </div>
  );
}
