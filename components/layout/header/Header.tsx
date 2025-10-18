// Header.tsx
"use client";
import React from "react";
import { Nav } from "./Nav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { LoginButton } from "./LoginButton";

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Globe2 className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight text-gray-800">
            Impact Rush
          </h1>
        </motion.div>

        {/* Navigation */}
        <Nav />

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LoginButton />
        </motion.div>
      </div>
    </header>
  );
};
