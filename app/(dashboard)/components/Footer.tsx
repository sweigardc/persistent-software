import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from 'figma:asset/bc6198be9a6d14efebfe55ab6fe2bca78489b7f2.png';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo.src} alt="Persistent Software" className="h-8 w-8" />
              <span className="text-cyan-400">Persistent Software</span>
            </div>
            <p className="text-foreground/60">
              Rapid prototyping with AI and templates for modern software development.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  AI Development
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Prototyping
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 mb-4 md:mb-0">
            © 2025 Persistent Software. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
