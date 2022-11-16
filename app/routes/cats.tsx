import { Outlet, useFetcher } from "@remix-run/react";
import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRandomCats } from "~/models/cats.server";
import { Image } from "~/types";
import { QueueListIcon } from '@heroicons/react/24/solid'
import cats from "../css/cats.css"
import CatImageDisplay from "~/components/CatImageDisplay";
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: cats }
];

export const loader:LoaderFunction = async () => {
  return getRandomCats();
};

export default function CatRoute() {
  const initalCats = useLoaderData();
  const [cats, setCats] = useState<Image[]>(initalCats);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const fetcher = useFetcher();

  useEffect(() => {
  
    if (fetcher.data && fetcher.data.length > 0) {
      setCats((prevCats: Image[]) => [...prevCats, ...fetcher.data]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (shouldFetch) {
      fetcher.load('/cats?index');
      setShouldFetch(false)
    }
  }, [fetcher, shouldFetch]);

  return (
    <div>
      <main>
        <div className="gap-2 columns-3xs">
        {cats && 
          <ul>
            {cats.map((cat: Image) => (
              <li key={cat.id}>
                <CatImageDisplay image={cat} />
              </li>
            ))}
          </ul>
        }
        </div>
        <div className="justify-center flex items-center p-6 space-x-2">
          <button className="bg-blue-200 hover:bg-blue-300 text-grey font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setShouldFetch(true)}
          >
            <QueueListIcon className="h-6 w-6 text-white-500"/>
            <span className="ml-3">More random cats</span>
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}