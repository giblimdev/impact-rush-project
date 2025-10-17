"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Target,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                L'ÉCOSYSTÈME D'ACTION COLLECTIVE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight">
              Change
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                the World
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
                L'écosystème qui transforme vos{" "}
                <span className="font-semibold text-yellow-200">idées</span> en{" "}
                <span className="font-semibold text-orange-200">
                  actions concrètes
                </span>
              </p>

              {/* Description */}
              <div className="flex items-center justify-center gap-6 text-lg text-white/80 font-medium">
                <span>Réflexion</span>
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>Financement</span>
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span>Action collective</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8 space-y-4">
              <button className="group bg-white/15 backdrop-blur-md border border-white/25 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/25 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/20">
                <span className="flex items-center gap-3">
                  Rejoindre la communauté
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-white/70 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1000+ membres</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>95% de réussite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trois piliers{" "}
              <span className="text-yellow-300">interconnectés</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Un écosystème complet pour maximiser votre impact positif
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* The Blog Card */}
            <Link href="/blog" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-600/10 backdrop-blur-xl border border-white/15 p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                      📝
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                    The Blog
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-base">
                    Explorez nos réflexions sur la technologie, le développement
                    personnel, la spiritualité et les enjeux de société.{" "}
                    <span className="font-semibold text-blue-200">
                      8 rubriques
                    </span>{" "}
                    pour nourrir votre vision du monde.
                  </p>

                  {/* Features */}
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                      <span>Architecture optimisée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                      <span>Tags transversaux</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Lire les articles</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Impact Sprint Card */}
            <Link href="/projects" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 backdrop-blur-xl border border-white/15 p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-green-500/25 transition-shadow duration-300">
                      🚀
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-green-200 transition-colors duration-300">
                    Impact Sprint
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-base">
                    Révolutionnez votre soutien aux projets.{" "}
                    <span className="font-semibold text-green-200">
                      100 projets
                    </span>{" "}
                    dans 6 catégories. Pariez sur plusieurs projets
                    simultanément,{" "}
                    <span className="font-semibold text-yellow-200">
                      le premier arrivé remporte tout !
                    </span>
                  </p>

                  {/* Features */}
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                      <span>Risque limité, impact max</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                      <span>Course en temps réel</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Commencer mon Sprint</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* The Circles Card */}
            <Link href="/thecircles" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/20 to-yellow-600/10 backdrop-blur-xl border border-white/15 p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-orange-500/25 transition-shadow duration-300">
                      ⭕
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">
                    The Circles
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-base">
                    Gouvernance collaborative révolutionnaire. Participez aux
                    décisions, organisez des projets.{" "}
                    <span className="font-semibold text-orange-200">
                      Démocratie participative
                    </span>{" "}
                    où chaque voix compte.
                  </p>

                  {/* Features */}
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                      <span>Rôles tournants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                      <span>10€/mois pour agir</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Rejoindre un cercle</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="py-20 bg-black/15 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              L'impact en <span className="text-yellow-300">chiffres</span>
            </h2>
            <p className="text-white/70 text-lg">
              Une communauté qui grandit et transforme
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "1000+",
                label: "Membres actifs",
                icon: "👥",
                color: "from-blue-400 to-blue-600",
              },
              {
                number: "100",
                label: "Projets disponibles",
                icon: "🎯",
                color: "from-green-400 to-green-600",
              },
              {
                number: "50+",
                label: "Cercles thématiques",
                icon: "⭕",
                color: "from-orange-400 to-orange-600",
              },
              {
                number: "95%",
                label: "Projets réussis",
                icon: "🏆",
                color: "from-yellow-400 to-yellow-600",
              },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Footer CTA */}
      <div className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à <span className="text-yellow-300">changer le monde</span> ?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez une communauté qui unit réflexion et action pour créer
              un futur plus{" "}
              <span className="font-semibold text-green-200">éthique</span> et{" "}
              <span className="font-semibold text-blue-200">collaboratif</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              <Link
                href="/comment-ca-marche"
                className="border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Comment ça marche ?
              </Link>
            </div>

            {/* Additional trust elements */}
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-white/60">
              <span>✅ 100% transparent</span>
              <span>✅ Gouvernance éthique</span>
              <span>✅ Impact mesurable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
