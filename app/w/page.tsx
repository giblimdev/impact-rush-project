import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Cookie,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center p-4">
      {/* Motif de fond décoratif */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] [mask-image:linear-gradient(180deg,#fff,rgba(255,255,255,0.8))] -z-10" />

      <main className="max-w-4xl mx-auto text-center space-y-12">
        {/* En-tête avec badge */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm">
            <Sparkles className="w-4 h-4" />
            Bienvenue sur Impact Sprint
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            Page d'<span className="text-emerald-600">Accueil</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre plateforme révolutionnaire de crowdfunding durable.
            Une nouvelle façon d'investir dans l'avenir.
          </p>
        </div>

        {/* Section principale avec cartes */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Carte principale - Projet */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                <ExternalLink className="w-8 h-8 text-emerald-600" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-800">
                  Découvrir le Projet
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Explorez notre plateforme innovante et découvrez comment
                  Impact Sprint révolutionne le financement participatif
                  durable.
                </p>
              </div>

              <Link
                href="/w/x"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Voir le projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Carte secondaire - Paramètres */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-8 space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-800">
                  Configuration
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Gérez vos préférences, autorisations et paramètres de cookies
                  pour une expérience personnalisée et sécurisée.
                </p>
              </div>

              <div className="flex items-center gap-2 text-amber-600 font-medium">
                <Cookie className="w-5 h-5" />
                <span>Prochainement disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section d'informations supplémentaires */}
        <div className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-2">
              <h3 className="text-lg font-semibold text-slate-800">
                Prêt à commencer votre voyage ?
              </h3>
              <p className="text-slate-600">
                Rejoignez la révolution du financement durable avec Impact
                Sprint.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/w/x"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                En savoir plus
              </Link>
              <button
                disabled
                className="inline-flex items-center gap-2 bg-slate-100 text-slate-400 font-semibold px-6 py-3 rounded-xl cursor-not-allowed"
              >
                <Cookie className="w-4 h-4" />
                Paramètres (bientôt)
              </button>
            </div>
          </div>
        </div>

        {/* Footer minimaliste */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            Impact Sprint - Plateforme de crowdfunding durable innovante
          </p>
        </div>
      </main>
    </div>
  );
}
