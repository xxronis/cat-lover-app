import { Link } from "@remix-run/react";
import { QueueListIcon } from '@heroicons/react/24/solid'
import home from "../css/home.css"
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: home }
];

export default function IndexRoute() {
  return <div className="flex justify-center align-middle items-center flex-col" style={{height: '100%'}}>
      <h1 className="text-white font-medium text-3xl drop-shadow-xl mb-8">Cat Lover</h1>
      <p className="text-white font-medium text-3sm drop-shadow-xl mb-8">You need this cat lovin' app!</p>
      <Link to="cats" className="bg-blue-200 hover:bg-blue-300 text-grey font-bold py-2 px-4 rounded inline-flex items-center">
        <QueueListIcon className="h-6 w-6 text-white-500"/>
        <span className="ml-3">Gimme random cats</span></Link>
    </div>;
}