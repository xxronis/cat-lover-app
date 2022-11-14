import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  // ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import scaffold from "./css/scaffold.css"
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: scaffold },
]

// Start mock on dev mode.
// if (process.env.NODE_ENV === 'development') {
//   if (typeof window === "undefined") {
//     const { server } = require("./mocks/server");
//     server.listen();
//   } else {
//     const { worker } = require("./mocks/browser");
//     worker.start();
//   }
// }

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "A Cat Lover's App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
      <div className="text-center flex items-center p-6 space-x-2">
        <Link to="/"><HomeIcon className="h-6 w-6"/></Link>
        <Link to="/cats"><span> / CATS</span></Link>
        <Link to="/breeds"><span> / BREEDS</span></Link>
        <Link to="/favourites"><span> / MY FAVOURITES</span></Link>
      </div>
        <Outlet />
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
