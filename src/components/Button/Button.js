export const Button = ({children}) => {
  return (
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">{children}</button>
  )
}