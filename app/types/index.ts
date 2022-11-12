export type Breed = {
    name: string;
    id: string;
    temperament: string;
    description: string;
}

export type BreedImages = [Image];

export type CatImage = Image;

export type Image = {
    url: string;
    width: number;
    height: number;
    id: string;
    breeds?: [Breed]
}