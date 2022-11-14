const apiKey = process.env.CAT_API_KEY || 'live_EQzBiK2MutfMGJLXfDsNYPGu1PBasljQLGkqmDJnVNUSZeXwRZo6398JdykFs4GL';

export async function getMyFavourites() {
  return await fetch(`https://api.thecatapi.com/v1/favourites`, {
    headers: { 'x-api-key': apiKey }
  })
}

export async function addToFavourites(image_id: string) {
  return await fetch(`https://api.thecatapi.com/v1/favourites`, {
    method: 'POST',
    headers: { 'x-api-key': apiKey },
    body: JSON.stringify({image_id: image_id})
  })
}