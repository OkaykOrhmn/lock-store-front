'use client'; // Required for client-side interactivity in Next.js App Router

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import links from '@/constants';
import Link from 'next/link';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-surface shadow-lg z-60 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-onSurface">دسته بندی ها</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
              aria-label="بستن منو"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-start gap-5 py-5">
            {links.map((nav) => (
              <Link
                key={`${nav.title}-${nav.link}`}
                href={nav.link}
                className="text-lg text-onSurface hover:text-primary hover:border-b border-primary hover:font-bold "
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Drawer;