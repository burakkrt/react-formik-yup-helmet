import { Link, useRouteError } from "react-router-dom";

export default function NotFound404() {
  const error = useRouteError();
  return (
    <div className="grid h-screen w-full place-content-center text-center">
      <h1 className="text-4xl font-bold uppercase tracking-widest">
        404 Not Found
      </h1>
      <p className="text-lg">{error.data}</p>
      <Link
        to="/"
        className="mt-4 rounded bg-sky-400 py-2 text-lg duration-200 hover:bg-sky-500"
      >
        Homepage
      </Link>
    </div>
  );
}