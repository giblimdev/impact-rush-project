// app/authwelcom/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
// Assure-toi que ton client Better Auth exporte bien useSession
// depuis "@/lib/auth/auth-client"
import { useSession } from "@/lib/auth/auth-client";

export default function WelcomePage() {
  const router = useRouter();
  const { data, isPending } = useSession();
  // data peut contenir { user, session } selon la config client
  const user = (data as any)?.user ?? data;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Chargement...</p>
      </div>
    );
  }

  const displayName = user?.name || user?.email || "Utilisateur";
  const avatarSrc =
    user?.image ||
    "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' fill='%239ca3af'>👋</text></svg>";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt="Avatar utilisateur"
              className="w-20 h-20 object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Bienvenue, {displayName} !
          </h1>

          <p className="text-gray-600">
            Ton compte a été créé avec succès. Tu peux commencer dès maintenant.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => router.replace("/dashboard")}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Accéder au tableau de bord
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
            >
              Accueil
            </Link>
          </div>

          {!user && (
            <div className="pt-4">
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                Aucune session active, connecte-toi pour continuer.
              </p>
              <div className="pt-3">
                <Link
                  href="/auth/login"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          Page de bienvenue • ImpactRush
        </div>
      </div>
    </div>
  );
}
