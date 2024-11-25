import React from 'react';
import Link from 'next/link';
import Elephant from './symbol';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Name */}
        <div className="flex flex-col items-start">
          <Elephant />
          <h1 className="text-2xl font-bold">NJOVU</h1>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email: WORKSHEET.ZAMBIA@GMAIL.COM</p>
          <p>Phone: 
            <br />+260978412430
            <br />+260775762744
            <br />+447983651867
          </p>
        </div>

        {/* Physical Address */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Physical Address</h2>
          <p>
            PLOT NO. 503 WORKBOOK INVESTMENTS LIMITED<br />
            T2 ROAD, CHIRUNDU, CHIRUNDU, ZAMBIA
          </p>
        </div>

        {/* Working Hours and Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
          <p>Monday - Friday: 08:00 - 17:00</p>
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-white pt-4 text-center text-sm">
        <p>
          <Link href="/" className="underline hover:text-gray-300">
            WorkBook Investments
          </Link>{' '}
          All Rights Reserved | Designed by{' '}
          <Link href="https://facebook.com/your-facebook-profile" passHref>
            <span className="underline hover:text-gray-300">
              Gershom Chomba
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
