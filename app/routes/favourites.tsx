import { Outlet } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMyFavourites } from "~/models/favourites.server";
import { Favourite } from "~/types";
import CatImageDisplay from "~/components/CatImageDisplay";

export const loader:LoaderFunction = async () => {
  return getMyFavourites();
};

export default function FavouritesRoute() {
  const favourites = useLoaderData();

  return (
    <div>
      <main>
        <div className="gap-2 columns-3xs">
        {favourites.length > 0 ? 
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