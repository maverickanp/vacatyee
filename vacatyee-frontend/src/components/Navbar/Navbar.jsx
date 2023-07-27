import { Link } from 'react-router-dom';


function Navbar() {
  return (
<nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand/logo */}
          <div className="text-white font-bold text-xl">Gerenciador de Ferias</div>

          {/* Navigation items */}
          <ul className="flex space-x-4">
            <li>
              <a
                href="/colaboradores"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Colaboradores
              </a>
            </li>
            <li>
              <a
                href="/ferias"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Ferias
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar