import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow mt-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between max-sm:text-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:justify-center max-sm:justify-center">
            <li>
                <a href="/" className="hover:underline me-4 md:me-6" target="_blank">Instagram</a>
            </li>

            <li>
                <a href="/" className="hover:underline me-4 md:me-6" target="_blank">LinkedIn</a>
            </li>

            <li>
                <a href="/" className="hover:underline me-4 md:me-6" target="_blank">Youtube</a>
            </li>

            <li>
                <a href="/" className="hover:underline" target="_blank">Github</a>
            </li>
        </ul>
      </div>
    </footer>
  )
}
