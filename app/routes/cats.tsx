import { Link, Outlet } from "@remix-run/react";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRandomCats } from "~/models/cats.server";
import { Image } from "~/types";
import { HomeIcon, QueueListIcon } from '@heroicons/react/24/solid'
import cats from "../css/cats.css"
import CatImageDisplay from "~/components/CatImageDisplay";

export const loader:LoaderFunction = async () => {
  return getRandomCats();
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cats }
];

export default function CatRoute() {
  const cats = useLoaderData();

  return (
    <div>
      <div className="text-center flex items-center p-6 space-x-2">
        <Link to="/"><HomeIcon className="h-6 w-6"/></Link>
        <h1> / CATS</h1>
      </div>
      <main>
        <div className="gap-2 columns-3xs">
        {cats && 
          <ul>
            {cats.map((cat: Image) => (
              <li key={cat.id}>
                <CatImageDisplay image={cat} origin="cat" />
              </li>
            ))}
          </ul>
        }
        </div>
        <div className="justify-center flex items-center p-6 space-x-2">
          <button className="bg-blue-200 hover:bg-blue-300 text-grey font-bold py-2 px-4 rounded inline-flex items-center">
            <QueueListIcon className="h-6 w-6 text-white-500"/>
            <span className="ml-3">More random cats</span>
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}