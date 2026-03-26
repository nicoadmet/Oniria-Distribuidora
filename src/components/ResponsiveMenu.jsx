import { Link } from "react-router-dom"

const ResponsiveMenu = ({openMenu, navbarLinks}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[70%] h-full bg-white shadow-md transform duration-300 z-50 md:hidden
      ${openMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Menú</h2>

        <ul className="flex flex-col gap-4">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="block text-lg font-medium text-gray-700 hover:text-blue-500"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResponsiveMenu