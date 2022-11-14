import { Link, useNavigate } from "@remix-run/react"
import { useState } from "react";
import { Image } from "~/types"

interface CatImageDisplayPros {
  image: Image;
  favouriteId?: number;
}

const CatImageDisplay = ({image, favouriteId}: CatImageDisplayPros) => {
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  const navigate = useNavigate()

  const handleRemoveFavorite = (favourite_id: number) => {
    setStatus('Removing from favourites...')
    return fetch(`https://api.thecatapi.com/v1/favourites/${favourite_id}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': 'live_EQzBiK2MutfMGJLXfDsNYPGu1PBasljQLGkqmDJnVNUSZeXwRZo6398JdykFs4GL',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        if (!response.ok) {
          return setError('Something went wrong')
        }
        navigate('/favourites', { replace: false })
      })
    .catch(error => console.log(error))
  }

  return (
    <>
      {favouriteId
        ? <div className="flex items-center rounded-b border-t border-gray-200 relative">
            <img className="w-full" src={image.url} />
            <button className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 absolute" onClick={() => handleRemoveFavorite(favouriteId)}>
              {status !== ''
                ? <div className="p-1 text-blue-500 text-sm">{status}</div>
                : <div className="p-1 text-blue-500 text-sm">Remove from favourites</div>
              }
            </button>
            {error !== '' &&
              <div className="p-1 text-red-500">{error}</div>
            }
            
          </div>
        : <Link
            to={`/cats/${image.id}`}
            className="text-blue-600 underline"
            key={image.id}
          >
            <img className="w-full" src={image.url} />

          </Link>
      }
    </>
  )
};

export default CatImageDisplay;