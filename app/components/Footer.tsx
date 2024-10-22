import React from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-300">&copy; 2024 Ledesma Next.js</p>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2xl" className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2xl" className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2xl" className="text-gray-300 hover:text-white" />
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="2xl" className="text-gray-300 hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}