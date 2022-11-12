export async function getRandomCats() {
    return await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
}

export async function getCat(id: string) {
    return await fetch(`https://api.thecatapi.com/v1/images/${id}`)
}