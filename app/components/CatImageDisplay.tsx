import { Link } from "@remix-run/react"
import { Image } from "~/types"

interface CatImageDisplayPros {
  image: Image;
  // TODO should not be here. Routing thing.
  origin: 'breed' | 'cat';
}

const CatImageDisplay = ({image, origin}: CatImageDisplayPros) => {
  return (
    <Link
      to={origin === 'cat' ? `/cats/${image.id}` : `/breeds/${image.id}`}
      className="text-blue-600 underline"
      key={image.id}
    >
      <img className="w-full" src={image.url} />
    </Link>
  )
};

export default CatImageDisplay;