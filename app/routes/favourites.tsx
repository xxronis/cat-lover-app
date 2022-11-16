import { Outlet } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Favourite } from "~/types";
import CatImageDisplay from "~/components/CatImageDisplay";

export const loader:LoaderFunction = async () => {
  return fetch(`https://api.thecatapi.com/v1/favourites/`, {
    headers: {
      'x-api-key': 'live_EQzBiK2MutfMGJLXfDsNYPGu1PBasljQLGkqmDJnVNUSZeXwRZo6398JdykFs4GL',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export default function FavouritesRoute() {
  const favourites = useLoaderData();

  return (
    <div>
      <main>
        <div className="gap-2 columns-3xs">
        {favourites && favourites.length > 0 ? 
          <ul>
            {favourites.map((favourite: Favourite) => (
              <li key={favourite.id}>
                <CatImageDisplay image={favourite.image} favouriteId={favourite.id}/>
              </li>
            ))}
          </ul>
          : <div>No favourites yet</div>
        }
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="error-container text-center flex items-center p-6 space-x-2 bg-red-700 text-white fixed top-60">
      {`There was an error loading favourites. Sorry.`}
    </div>
  );
}
