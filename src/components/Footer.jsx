import { Link } from "react-router-dom";
import { handleDownload } from "../utils/download";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p className="mx-auto font-worksans">
        Copyright © 2023 <strong>Bharath B</strong>. All rights reserved.
        </p>

        <div className='flex gap-6 justify-center items-center mx-auto'>
          {socialLinks.map((link , index) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`w-6 h-6 object-contain ${index === socialLinks.length - 1 ? 'block sm:hidden' : ''}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;