//@/app/page.tsx
/*
🌍 Page d’accueil / Présentation d’Impact Rush
Impact Rush : Penser, Décider, Agir. Ensemble.

Impact Rush est une plateforme intégrée d’innovation sociale qui relie réflexion collective, décision partagée et financement participatif.
Notre mission : transformer les idées citoyennes en actions concrètes et mesurables, grâce à un écosystème collaboratif unique.
*/

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Target,
} from "lucide-react";

// Composants d'icônes SVG personnalisées
const BlogIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 7H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V12L15 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Composant de chargement
const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
      <p className="text-white text-lg font-semibold">Chargement...</p>
    </div>
  </div>
);

// Gestionnaire d'événements analytics
const trackEvent = (category: string, action: string, label: string) => {
  // Safely access gtag with a type assertion to avoid TypeScript errors
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag("event", action, {
        event_category: category,
        event_label: label,
        page_location: window.location.href,
      });
    }
  }
  // Console log pour le développement
  console.log(`Track: ${category} - ${action} - ${label}`);
};

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulation du chargement des ressources
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Gestionnaires de clics pour le tracking
  const handleCTAClick = (section: string, action = "click") => {
    trackEvent("cta", action, `hero_${section}`);
  };

  const handleCardClick = (cardName: string) => {
    trackEvent("navigation", "card_click", cardName);
  };

  const handleStatsView = () => {
    trackEvent("engagement", "stats_view", "homepage_stats");
  };

  if (!mounted || isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        role="banner"
        aria-label="Présentation principale d'Impact Rush"
      >
        <div className="absolute inset-0 bg-black/5" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="space-y-8 md:space-y-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
              role="status"
            >
              <Sparkles
                className="w-4 h-4 md:w-5 md:h-5 text-yellow-300"
                aria-hidden="true"
              />
              <span className="text-xs md:text-sm font-semibold text-white/90 tracking-wide">
                L'ÉCOSYSTÈME D'ACTION COLLECTIVE
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
              Change
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
                the World
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light">
                L'écosystème qui transforme vos{" "}
                <span className="font-semibold text-yellow-200">idées</span> en{" "}
                <span className="font-semibold text-orange-200">
                  actions concrètes
                </span>
              </p>

              {/* Description */}
              <div
                className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-base md:text-lg text-white/80 font-medium"
                role="list"
                aria-label="Processus de transformation"
              >
                <span role="listitem">Réflexion</span>
                <div
                  className="w-2 h-2 bg-yellow-300 rounded-full"
                  aria-hidden="true"
                ></div>
                <span role="listitem">Financement</span>
                <div
                  className="w-2 h-2 bg-orange-300 rounded-full"
                  aria-hidden="true"
                ></div>
                <span role="listitem">Action collective</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 md:pt-8 space-y-4">
              <button
                onClick={() => handleCTAClick("primary")}
                className="group bg-white/15 backdrop-blur-md border border-white/25 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-white/25 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-2xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="Rejoindre la communauté Impact Rush"
              >
                <span className="flex items-center gap-2 md:gap-3">
                  Rejoindre la communauté
                  <ArrowRight
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
              </button>

              {/* Trust indicators */}
              <div
                className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/70 pt-4"
                role="list"
                aria-label="Indicateurs de confiance"
              >
                <div
                  className="flex items-center gap-1 md:gap-2"
                  role="listitem"
                >
                  <Users className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                  <span>1000+ membres</span>
                </div>
                <div
                  className="w-1 h-1 bg-white/50 rounded-full"
                  aria-hidden="true"
                ></div>
                <div
                  className="flex items-center gap-1 md:gap-2"
                  role="listitem"
                >
                  <Award className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                  <span>95% de réussite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="Les trois piliers d'Impact Rush"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Trois piliers{" "}
              <span className="text-yellow-300">interconnectés</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Un écosystème complet pour maximiser votre impact positif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* The Blog Card */}
            <Link
              href="/blog"
              className="group"
              onClick={() => handleCardClick("the_blog")}
              aria-label="Découvrir The Blog - Réflexions et articles"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-600/10 backdrop-blur-xl border border-white/15 p-6 md:p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl blur-xl"
                  aria-hidden="true"
                ></div>

                {/* Hover Effect Overlay */}
                <div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-4 md:space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                      <BlogIcon />
                    </div>
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"
                      aria-hidden="true"
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                    The Blog
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-sm md:text-base">
                    Explorez nos réflexions sur la technologie, le développement
                    personnel, la spiritualité et les enjeux de société.{" "}
                    <span className="font-semibold text-blue-200">
                      8 rubriques
                    </span>{" "}
                    pour nourrir votre vision du monde.
                  </p>

                  {/* Features */}
                  <div className="space-y-2 text-xs md:text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-blue-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>Architecture optimisée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-blue-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>Tags transversaux</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-2 md:pt-4">
                    <span className="text-sm md:text-base">
                      Lire les articles
                    </span>
                    <ArrowRight
                      className="w-4 h-4 md:w-5 md:h-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Impact Sprint Card */}
            <Link
              href="/projects"
              className="group"
              onClick={() => handleCardClick("impact_sprint")}
              aria-label="Découvrir Impact Sprint - Financement de projets"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 backdrop-blur-xl border border-white/15 p-6 md:p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl blur-xl"
                  aria-hidden="true"
                ></div>

                {/* Hover Effect Overlay */}
                <div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-4 md:space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-green-500/25 transition-shadow duration-300">
                      <RocketIcon />
                    </div>
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"
                      aria-hidden="true"
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-green-200 transition-colors duration-300">
                    Impact Sprint
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-sm md:text-base">
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
                  <div className="space-y-2 text-xs md:text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-green-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>Risque limité, impact max</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-green-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>Course en temps réel</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-2 md:pt-4">
                    <span className="text-sm md:text-base">
                      Commencer mon Sprint
                    </span>
                    <ArrowRight
                      className="w-4 h-4 md:w-5 md:h-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* The Circles Card */}
            <Link
              href="/thecircles"
              className="group"
              onClick={() => handleCardClick("the_circles")}
              aria-label="Découvrir The Circles - Gouvernance collaborative"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-500/20 to-yellow-600/10 backdrop-blur-xl border border-white/15 p-6 md:p-8 h-full hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 cursor-pointer">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl md:rounded-3xl blur-xl"
                  aria-hidden="true"
                ></div>

                {/* Hover Effect Overlay */}
                <div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-4 md:space-y-6 h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-orange-500/25 transition-shadow duration-300">
                      <CircleIcon />
                    </div>
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-600 rounded-xl md:rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"
                      aria-hidden="true"
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">
                    The Circles
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow text-sm md:text-base">
                    Gouvernance collaborative révolutionnaire. Participez aux
                    décisions, organisez des projets.{" "}
                    <span className="font-semibold text-orange-200">
                      Démocratie participative
                    </span>{" "}
                    où chaque voix compte.
                  </p>

                  {/* Features */}
                  <div className="space-y-2 text-xs md:text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-orange-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>Rôles tournants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 bg-orange-300 rounded-full"
                        aria-hidden="true"
                      ></div>
                      <span>10€/mois pour agir</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-2 md:pt-4">
                    <span className="text-sm md:text-base">
                      Rejoindre un cercle
                    </span>
                    <ArrowRight
                      className="w-4 h-4 md:w-5 md:h-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section
        className="py-12 md:py-20 bg-black/15 backdrop-blur-sm border-t border-white/10"
        role="region"
        aria-label="Chiffres clés et impact"
        onMouseEnter={handleStatsView}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              L'impact en <span className="text-yellow-300">chiffres</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Une communauté qui grandit et transforme
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
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
              <div key={index} className="group" role="listitem">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
                  <div
                    className="text-2xl md:text-4xl mb-2 md:mb-4"
                    aria-hidden="true"
                  >
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-xs md:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <section
        className="text-center py-12 md:py-20 px-4 sm:px-6 lg:px-8"
        role="region"
        aria-label="Appel à l'action final"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
              Prêt à <span className="text-yellow-300">changer le monde</span> ?
            </h2>
            <p className="text-white/80 text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez une communauté qui unit réflexion et action pour créer
              un futur plus{" "}
              <span className="font-semibold text-green-200">éthique</span> et{" "}
              <span className="font-semibold text-blue-200">collaboratif</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button
                onClick={() => handleCTAClick("footer_primary")}
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                aria-label="Commencer maintenant sur Impact Rush"
              >
                <span className="flex items-center justify-center gap-2">
                  Commencer maintenant
                  <ArrowRight
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </span>
              </button>

              <Link
                href="/comment-ca-marche"
                onClick={() => handleCTAClick("footer_secondary")}
                className="border-2 border-white/30 text-white font-semibold px-6 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
                aria-label="En savoir plus sur le fonctionnement d'Impact Rush"
              >
                Comment ça marche ?
              </Link>
            </div>

            {/* Additional trust elements */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8 text-xs md:text-sm text-white/60"
              role="list"
              aria-label="Garanties et engagements"
            >
              <span role="listitem">✅ 100% transparent</span>
              <span role="listitem">✅ Gouvernance éthique</span>
              <span role="listitem">✅ Impact mesurable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
