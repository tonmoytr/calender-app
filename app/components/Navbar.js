"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src={img} alt="logo-img" width={120} height={120} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link href="#">
            <span className="hover:text-yellow-500">Home</span>
          </Link>
          <Link href="#">
            <span className="hover:text-yellow-500">About</span>
          </Link>
          <Link href="#">
            <span className="hover:text-yellow-500">Event Booking</span>
          </Link>
          <Link href="#contact">
            <span className="text-yellow-400 bg-black px-5 py-3 rounded-xl hover:text-red-600">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-4">
            <Link href="#">
              <span className="hover:text-blue-600">Home</span>
            </Link>
            <Link href="#">
              <span className="hover:text-blue-600">About</span>
            </Link>
            <Link href="#">
              <span className="hover:text-blue-600">Services</span>
            </Link>
            <Link href="#">
              <span className="hover:text-blue-600">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
