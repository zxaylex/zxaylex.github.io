import Logo from '@/public/logo.svg'; // Adjust for your setup
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./index.css";
import { Menu, X } from 'lucide-react'; // X for close icon
import { useState } from 'react';

// pages
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import AboutPage from './pages/about';

export function App() {
  const location = useLocation()
  const [navLinks] = useState([
    { href: "/", label: "Home", active: true },
    { href: "/projects", label: "Projects", active: false },
    { href: "/about", label: "About", active: false },
    { href: "/tools", label: "Tools", active: false },
    { href: "/contact", label: "Contact", active: false },
  ]);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="">
      <motion.div className="flex justify-between items-center p-4 text-white relative">
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-10" />

        {/* Hamburger menu: small screens only */}
        <button
          className="block md:hidden w-8 h-8"
          onClick={() => setMobileNavOpen(open => !open)}
          aria-label="Toggle navigation menu"
        >
          {isMobileNavOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation links: hidden on small, flex on medium+ */}
        <nav className="hidden md:flex gap-4">
          {navLinks.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className={location.pathname === link.href ? "font-bold underline" : "hover:underline"}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile nav: visible on small screens when menu is open */}
        {isMobileNavOpen && (
          <nav className="absolute left-0 top-full w-full bg-blue-900 grid text-sm grid-cols-2 text-center justify-center items-center gap-4 py-4 md:hidden z-10 transition-all duration-200">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className={location.pathname === link.href ? "underline" : "hover:underline"}
                onClick={() => setMobileNavOpen(false)} // close menu when link is clicked
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        )}
      </motion.div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </div>
  );
}

export default App;