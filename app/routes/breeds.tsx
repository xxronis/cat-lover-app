import { Link, Outlet } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Breed} from "~/types";
import { HomeIcon } from '@heroicons/react/24/solid'
import { getAllBreeds } from "~/models/breeds.server";

export const loader:LoaderFunction = async () => {
  return getAllBreeds();
};

export default function BreedsRoute() {
  const breeds = useLoaderData();

  return (
    <div>
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