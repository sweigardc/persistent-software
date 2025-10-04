import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from 'figma:asset/bc6198be9a6d14efebfe55ab6fe2bca78489b7f2.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo.src} alt="Persistent Software" className="h-10 w-10" />
            <span className="text-cyan-400">Persistent Software</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#services" className="text-foreground/80 hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-cyan-400 transition-colors">
              About
            </a>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground/80 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#services"
                className="text-foreground/80 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground/80 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
