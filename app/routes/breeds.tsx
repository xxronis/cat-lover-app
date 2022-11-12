import { Link, Outlet } from "@remix-run/react";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Breed, Cat } from "~/types";
import { HomeIcon } from '@heroicons/react/24/solid'
import cats from "../css/cats.css"
import { getAllBreeds } from "~/models/breeds.server";

export const loader:LoaderFunction = async () => {
  return getAllBreeds();
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cats }
];

export default function BreedsRoute() {
  const breeds = useLoaderData();

  return (
    <div>
      <div className="text-center flex items-center p-6 space-x-2">
        <Link to="/"><HomeIcon className="h-6 w-6"/></Link>
        <h1> / BREEDS</h1>
      </div>
      <main>
        <div className="gap-2 columns-3xs">
          <ul>
            {breeds && breeds.map((breed: Breed) => (
              <li key={breed.id}>
                <Link
                  to={breed.id}
                  className="text-blue-600 underline"
                >
                  {breed.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Outlet />
      </main>
    </div>
  );
}