"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Zap,
  RotateCcw,
  CheckCircle,
  Play,
  DollarSign,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200/50">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-800">
                COMMENT ÇA MARCHE
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                L'écosystème
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  d'action collective
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Découvrez comment nos trois piliers interconnectés transforment
                vos idées en actions concrètes pour un monde meilleur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Globale */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Une approche{" "}
              <span className="text-indigo-600">révolutionnaire</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contrairement aux plateformes isolées, nous connectons la
              réflexion, le financement et la gouvernance pour créer un
              véritable écosystème d'impact
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Step 1: Blog */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl mx-auto mb-6">
                  📝
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Inspirez-vous
                </h3>
                <p className="text-gray-600 mb-6">
                  Explorez nos 8 rubriques thématiques pour nourrir votre
                  réflexion et découvrir de nouvelles perspectives
                </p>
                <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold">Architecture unique</span>
                  </div>
                  <ul className="text-left space-y-1">
                    <li>• Tags transversaux connectés</li>
                    <li>• Maximum 2 clics vers le contenu</li>
                    <li>• Vision holistique du monde</li>
                  </ul>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-indigo-400 hidden lg:block" />

              {/* Step 2: Projects */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl mx-auto mb-6">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Financez l'impact
                </h3>
                <p className="text-gray-600 mb-6">
                  Utilisez Impact Sprint : pariez sur plusieurs projets
                  simultanément, le premier à atteindre son objectif remporte
                  tout
                </p>
                <div className="bg-green-50 rounded-xl p-4 text-sm text-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="font-semibold">
                      Révolution du crowdfunding
                    </span>
                  </div>
                  <ul className="text-left space-y-1">
                    <li>• Risque limité, impact maximisé</li>
                    <li>• 100 projets dans 6 catégories</li>
                    <li>• Course en temps réel</li>
                  </ul>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-indigo-400 hidden lg:block" />

              {/* Step 3: Circles */}
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl mx-auto mb-6">
                  ⭕
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Gouvernez ensemble
                </h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez des cercles thématiques pour participer aux
                  décisions et organiser collectivement l'action
                </p>
                <div className="bg-orange-50 rounded-xl p-4 text-sm text-orange-800">
                  <div className="flex items-center gap-2 mb-2">
                    <RotateCcw className="w-4 h-4" />
                    <span className="font-semibold">
                      Démocratie participative
                    </span>
                  </div>
                  <ul className="text-left space-y-1">
                    <li>• Rôles tournants transparents</li>
                    <li>• 10€/mois pour agir concrètement</li>
                    <li>• Décisions par consentement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détail Impact Sprint */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact Sprint : La révolution du crowdfunding
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Transformez votre soutien aux projets en course palpitante
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Comment ça marche ?</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-green-900 font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Je place ma mise
                    </h4>
                    <p className="text-green-100">
                      Vous déposez 100€ sur la plateforme, votre investissement
                      unique
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-green-900 font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Je sélectionne mes projets
                    </h4>
                    <p className="text-green-100">
                      Choisissez 2, 5, 10 projets ou plus ! Vos 100€ sont
                      engagés virtuellement sur chacun
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-green-900 font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Je suis la course
                    </h4>
                    <p className="text-green-100">
                      Regardez vos projets progresser en temps réel, partagez
                      vos favoris
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-900 font-bold flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Un projet gagne !
                    </h4>
                    <p className="text-green-100">
                      Le premier à 100% remporte tout. Vos 100€ ne sont prélevés
                      qu'une fois
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
              <h4 className="text-2xl font-bold mb-6 text-center">
                Exemple Thomas
              </h4>
              <div className="space-y-4">
                <div className="bg-green-800/50 rounded-lg p-4">
                  <p className="font-semibold">Thomas place 100€</p>
                  <p className="text-sm text-green-200">
                    Il sélectionne 5 projets environnementaux
                  </p>
                </div>
                <div className="bg-yellow-800/50 rounded-lg p-4">
                  <p className="font-semibold">
                    Le projet "Énergies solaires" gagne
                  </p>
                  <p className="text-sm text-yellow-200">
                    Premier à atteindre 100% de financement
                  </p>
                </div>
                <div className="bg-blue-800/50 rounded-lg p-4">
                  <p className="font-semibold">
                    Résultat : 100€ → Projet gagnant
                  </p>
                  <p className="text-sm text-blue-200">
                    Les 4 autres engagements sont annulés
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/projects/exemple"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-green-900 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Voir l'exemple en action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Circles en détail */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Circles : Gouvernance{" "}
              <span className="text-orange-600">collaborative</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participez aux décisions qui façonnent l'avenir
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                🧭
              </div>
              <h3 className="text-xl font-bold mb-3">Rôles Tournants</h3>
              <p className="text-gray-600">
                Facilitateur, secrétaire, référent projet, gardien éthique.
                Chacun apprend et contribue.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold mb-3">Double Mode</h3>
              <p className="text-gray-600">
                Réunions mensuelles synchrones ou sprints asynchrones selon vos
                disponibilités.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent</h3>
              <p className="text-gray-600">
                10€/mois : 20% fonctionnement, 80% projets. Chaque euro est
                tracé publiquement.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">
              Ordre du jour type d'un cercle
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Synthèse du meeting précédent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Suivi des actions entreprises</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Exposé thématique du mois</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Temps de parole individuel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Questions diverses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                  <span>Décisions sur l'affectation des fonds</span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/cercles"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Découvrir les cercles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi ça marche */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi notre écosystème{" "}
              <span className="text-yellow-300">fonctionne</span> ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'union de la réflexion, du financement et de la gouvernance crée
              une synergie unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-bold mb-3">Engagement Maximum</h3>
              <p className="text-gray-300 text-sm">
                Les membres s'impliquent émotionnellement et suivent avidement
                les progressions
              </p>
            </div>

            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3">Efficacité Brutale</h3>
              <p className="text-gray-300 text-sm">
                Le système récompense les projets qui mobilisent le mieux leur
                communauté
              </p>
            </div>

            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3">Clarté Totale</h3>
              <p className="text-gray-300 text-sm">
                Risque limité et transparent, peu importe le nombre de projets
                soutenus
              </p>
            </div>

            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3">Viralité Naturelle</h3>
              <p className="text-gray-300 text-sm">
                La course permanente stimule un marketing créatif et authentique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à rejoindre l'écosystème ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Commencez par explorer nos contenus, puis passez à l'action avec
              Impact Sprint et la gouvernance collaborative
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Commencer par le Blog
              </Link>
              <Link
                href="/projects"
                className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Lancer un Impact Sprint
              </Link>
              <Link
                href="/cercles"
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Rejoindre un Cercle
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-indigo-200">
              <span>✅ 100% transparent</span>
              <span>✅ Gouvernance éthique</span>
              <span>✅ Impact mesurable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
