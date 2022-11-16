import { Dialog } from '@headlessui/react'
import { useNavigate } from "@remix-run/react"
import { HeartIcon } from '@heroicons/react/24/outline'
import { BreedImages, Breed, CatImage, Image } from '../types'
import BreedDetail from './Breed';
import CatImageDisplay from './CatImageDisplay';
import { useState } from 'react';

interface ModalProps {
    catImage?: CatImage;
    breedImages?: BreedImages;
    breedId?: Breed["id"];
}

export function Modal({catImage, breedImages, breedId}: ModalProps) {
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  // TODO make navigation conditional so this can be used client-only as well.
  const navigate = useNavigate()

  const handleFavorite = (image_id: string) => {
    setStatus('Adding to favourites...')
    return fetch(`https://api.thecatapi.com/v1/favourites`, {
      method: 'POST',
      headers: {
        'x-api-key': 'live_EQzBiK2MutfMGJLXfDsNYPGu1PBasljQLGkqmDJnVNUSZeXwRZo6398JdykFs4GL',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image_id
      })
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
    <Dialog
      open={true}
      onClose={() => navigate(catImage ? '/cats' : '/breeds', { replace: false })}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <div className="text-xl font-semibold text-gray-900">
              {catImage &&
                <Dialog.Title>Cat #{catImage.id}</Dialog.Title>
              }
              {/* // TODO bring breed info */}
              {breedId &&
                <Dialog.Title>Breed #{breedId}</Dialog.Title>
              }
            </div>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => navigate(catImage ? '/cats' : '/breeds', { replace: false })}
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          
            {catImage &&
              <>
                <div className="p-6 space-y-6">
                    <img className="w-full" src={catImage.url}/>
                </div>
                {catImage?.breeds &&
                  catImage.breeds.map((breed: Breed) => <BreedDetail breed={breed} key={breed.id}/>)
                }
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                    <button className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2" onClick={() => handleFavorite(catImage.id)}>
                      {status !== ''
                        ? <div className="p-2 text-blue-500 text-sm">{status}</div>
                        : <HeartIcon className="h-6 w-6 text-red-500"/>
                      }
                    </button>
                </div>
                {error !== '' &&
                  <div className="p-1 text-red-500">{error}</div>
                }
              </>
            }
            {breedImages &&
              breedImages.map((breedImage: Image) => <CatImageDisplay image={breedImage} key={breedImage.id}/>)
            }
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}