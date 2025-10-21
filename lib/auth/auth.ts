// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Si tu veux désactiver la vérification d'email
    minPasswordLength: 6, // Longueur minimale du mot de passe
    maxPasswordLength: 100, // Longueur maximale du mot de passe
  },
  user: {
    // Champs supplémentaires pour ton schéma
    additionalFields: {
      roles: {
        type: "string[]",
        required: false,
        defaultValue: ["USER"], // Correspond à ton enum Role
      },
      image: {
        type: "string",
        required: false,
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 jours en secondes
    updateAge: 60 * 60 * 24, // Mettre à jour la session toutes les 24h
  },
  secret: process.env.AUTH_SECRET as string,
  trustHost: true,
  baseURL: process.env.NEXTAUTH_URL || "http://localhost:3000",
});
