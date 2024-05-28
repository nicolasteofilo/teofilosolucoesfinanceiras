import { resourcesLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <img className="h-20 w-30 mr-2" src={logo} alt="Logo" />
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">CONTATO</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-800 hover:text-blue-800"
                  target="_blank"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Copyright © 2024. Todos os direitos reservados.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
