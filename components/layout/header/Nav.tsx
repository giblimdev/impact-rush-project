// Nav.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "The Circle", href: "/public/thecircles" },
  { name: "La Plateforme", href: "/public/projects" },
  { name: "mondoBlog", href: "/public/blog" },
  { name: "Notre Mission", href: "/public/comment-ca-marche" },
  { name: "FAQ", href: "/public/faq" },
  { name: "DEV", href: "/dev" },
];

export const Nav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link
            href={item.href}
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};
