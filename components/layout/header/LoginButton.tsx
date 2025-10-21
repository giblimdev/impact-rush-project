// components/UserMenu.tsx
"use client";

import { useState } from "react";
import { useSession, signOut } from "@/lib/auth/auth-client"; // Correction de l'import
import {
  User,
  LogOut,
  Settings,
  ChevronDown,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  if (isPending) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </Button>
    );
  }

  if (!session) {
    return (
      <Button
        onClick={() => router.push("/auth/login")}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <User className="w-4 h-4 mr-2" />
        Connexion
      </Button>
    );
  }

  const user = session.user;
  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    return email ? email.charAt(0).toUpperCase() : "U";
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200"
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-7 w-7 border-2 border-white/30">
              <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs font-medium">
                {getInitials(user?.name, user?.email)}
              </AvatarFallback>
            </Avatar>
            <span className="text-white font-medium text-sm max-w-24 truncate">
              {user?.name || user?.email?.split("@")[0]}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl p-2 mt-2"
      >
        <DropdownMenuLabel className="p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-blue-100">
              <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-medium">
                {getInitials(user?.name, user?.email)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-gray-900 truncate">
                {user?.name || "Utilisateur"}
              </span>
              <span className="text-xs text-gray-500 truncate flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {user?.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-200/50" />

        <DropdownMenuItem
          onClick={() => router.push("/profile")}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-colors duration-150"
        >
          <User className="w-4 h-4 text-blue-500" />
          <span className="font-medium">Mon profil</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:text-green-600 hover:bg-green-50/80 transition-colors duration-150"
        >
          <LayoutDashboard className="w-4 h-4 text-green-500" />
          <span className="font-medium">Mes applications</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push("/settings")}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:text-orange-600 hover:bg-orange-50/80 transition-colors duration-150"
        >
          <Settings className="w-4 h-4 text-orange-500" />
          <span className="font-medium">Paramètres</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-200/50" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50/80 transition-colors duration-150"
        >
          <LogOut className="w-4 h-4" />
          <span className="font-medium">Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
