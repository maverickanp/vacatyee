import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://linkedin.com/in/artur-pedrosa/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maverickanp/vacatyee"
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Github
              </a>
            </li>
            {/* Add more footer items as needed */}
          </ul>
        </div>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Apedrosa Dev. Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}

export default Footer