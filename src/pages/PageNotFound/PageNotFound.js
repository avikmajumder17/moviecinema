import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found | Moviecinema`;
  });

  return (
    <main>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
                <p className="mb-4 text-lg font-light text-gray-300">Sorry, we can't find such page.</p>

              <Link to="/">
                <Button>Back To Home</Button>
              </Link>
            </div>   
        </div>
      </section>
    </main>
  )
}
