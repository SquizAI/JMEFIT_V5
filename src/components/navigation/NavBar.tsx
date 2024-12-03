import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../Logo';
import Button from '../ui/Button';
import { mainNavItems } from './navItems';
import NavItem from './NavItem';
import MobileNav from './MobileNav';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <Logo className="w-24 h-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <NavItem key={item.label} item={item} currentPath={location.pathname} />
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="https://www.instagram.com/jmefit_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram className="w-5 h-5" />
              <span>@jmefit_</span>
            </motion.a>

            {user ? (
              <Button
                as={Link}
                to={user.role === 'admin' ? '/admin' : '/dashboard'}
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>{user.role === 'admin' ? 'Admin' : 'Dashboard'}</span>
              </Button>
            ) : (
              <Button
                as={Link}
                to="/login"
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-zinc-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileNav
        isOpen={isOpen}
        items={mainNavItems}
        user={user}
        currentPath={location.pathname}
      />
    </nav>
  );
};

export default NavBar;