// components/ui/LoginButton.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface LoginButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  onClick?: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  onClick,
}) => {
  const handleLogin = () => {
    // Logique de connexion à implémenter
    if (onClick) {
      onClick();
    } else {
      // Redirection par défaut vers la page de connexion
      window.location.href = "/auth/login";
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`}
      onClick={handleLogin}
    >
      <LogIn className="h-4 w-4" />
      Se connecter
    </Button>
  );
};
