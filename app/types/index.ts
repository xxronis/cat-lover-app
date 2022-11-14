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
export type Favourite = {
  id: string;
  image: Image;
  sub_id?: string;
  user_id?: string;
  image_id: string;
}