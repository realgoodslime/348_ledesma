import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
    <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-orange-500">My App</span>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">
                <span className="text-gray-300 hover:text-white">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-gray-300 hover:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-300 hover:text-white">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
    );
}