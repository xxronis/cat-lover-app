export async function getBreedImages(id: string) {
    return await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`)
}

export async function getAllBreeds() {
    return await fetch(`https://api.thecatapi.com/v1/breeds`)
}
