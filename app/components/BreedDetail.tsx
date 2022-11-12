import { Link } from '@remix-run/react';
import { Breed } from '../types'

interface BreedDetailProps {
    breed: Breed;
}

const BreedDetail = ({breed}: BreedDetailProps) => {
    const { name, description, id } = breed;

    return (
        <div className="p-6 space-y-1 pt-0">
            <div className="text-gray-400 text-xs rounded">Breed details</div>
            <Link
                to={`/breeds/${id}`}
                className="text-blue-600 underline"
            >
                {name}
            </Link>
            <div className="text-xs">
                {description}
            </div>
        </div>
    )
}

export default BreedDetail;