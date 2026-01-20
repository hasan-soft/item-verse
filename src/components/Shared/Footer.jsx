// components/Footer.tsx
import Link from "next/link";
import { BookOpen, Github, CircleUser, Linkedin, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Resources", href: "/resources" },
      { name: "Pricing", href: "#" },
      { name: "Updates", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Community", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="bg-purple-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
                          <img src="/logo.png" alt="ItemVerse Logo" className="h-28 w-auto" />
                        </Link>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              A curated digital library of study resources for students and developers. 
              Elevate your learning journey with structured materials.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: CircleUser , href: "#", label: "Portfolio" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-purple-800 hover:border-purple-800 transition-all duration-300 hover:shadow-md"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-purple-800 transition-colors duration-300 group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;