//@/app/comment-ca-marche/page.tsx
/*
Page "Notre Mission"
Notre raison d'être
*/

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
  Globe,
  Shield,
  Lightbulb,
  BarChart3,
  Eye,
  Coins,
  TreePine,
  Brain,
  Rocket,
  Star,
  Award,
  TargetIcon,
} from "lucide-react";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-12">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-lg">
              <Target className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-800 tracking-wide">
                NOTRE RAISON D'ÊTRE
              </span>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Notre
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mission
                </span>
              </h1>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  Nous croyons que la transition sociale et écologique ne se
                  fera pas seulement par les institutions, mais par{" "}
                  <span className="font-semibold text-indigo-600">
                    l'intelligence collective des citoyens
                  </span>
                  .
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100">
                  <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                    "Notre mission est de réunir réflexion, action et
                    financement dans un même espace numérique, transparent et
                    participatif."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Notre <span className="text-purple-600">Vision</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Un monde où chaque citoyen peut passer du rôle de spectateur à
                  celui d'acteur du changement.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Lightbulb,
                    title: "Idées → Projets",
                    description:
                      "Transformer l'inspiration en actions concrètes",
                  },
                  {
                    icon: Users,
                    title: "Décisions Partagées",
                    description: "Une gouvernance collective et transparente",
                  },
                  {
                    icon: BarChart3,
                    title: "Impact Mesuré",
                    description:
                      "Des résultats suivis et partagés pour inspirer",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Graphic */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full"></div>
                </div>

                <div className="relative z-10 text-center space-y-6">
                  <Globe className="w-16 h-16 mx-auto text-white/80" />
                  <h3 className="text-2xl font-bold">Écosystème Vivant</h3>
                  <p className="text-purple-100 leading-relaxed">
                    Impact Rush a été conçu comme un écosystème vivant où chaque
                    composant nourrit les autres, créant un cycle vertueux
                    d'innovation sociale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-yellow-300">Engagements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des principes fondamentaux qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation Responsable",
                description: "Technologie au service du bien commun",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Eye,
                title: "Transparence Totale",
                description: "Décisions et finances ouvertes à tous",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: TreePine,
                title: "Durabilité",
                description:
                  "Priorité aux projets à impact environnemental et social",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: Users,
                title: "Communauté Ouverte",
                description: "Diversité des profils et des compétences",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: BarChart3,
                title: "Mesure d'Impact",
                description: "Indicateurs clairs et accessibles",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Shield,
                title: "Éthique en Action",
                description: "Des valeurs qui guident nos décisions",
                color: "from-indigo-500 to-blue-500",
              },
            ].map((commitment, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${commitment.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <commitment.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Promesse */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="text-indigo-600">Promesse</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <Award className="w-16 h-16 mx-auto text-yellow-300" />
              <h3 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
                Offrir à chacun les outils pour penser collectivement, agir
                concrètement et mesurer l'impact réel de ses actions.
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: Brain,
                    title: "Penser Collectivement",
                    description: "Espaces de réflexion partagée",
                  },
                  {
                    icon: Rocket,
                    title: "Agir Concrètement",
                    description: "Passage à l'action facilité",
                  },
                  {
                    icon: TargetIcon,
                    title: "Mesurer l'Impact",
                    description: "Résultats tangibles et visibles",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-indigo-100 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg border border-gray-200">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">
                Impact Rush : la technologie au service de l'action collective.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* L'Écosystème en Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              L'Écosystème en <span className="text-green-600">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comment nos trois piliers interconnectés créent un impact maximal
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* The Blog */}
              <div className="flex-1 text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    📝
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Inspirez-vous
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explorez nos 8 rubriques thématiques pour nourrir votre
                  réflexion et découvrir de nouvelles perspectives
                </p>
                <div className="bg-blue-50 rounded-2xl p-4 text-sm text-blue-800 border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-semibold">Architecture Unique</span>
                  </div>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Tags transversaux connectés
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Maximum 2 clics vers le contenu
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Vision holistique du monde
                    </li>
                  </ul>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-indigo-400 hidden lg:block transform rotate-0 lg:rotate-0" />

              {/* Impact Sprint */}
              <div className="flex-1 text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Financez l'Impact
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Utilisez Impact Sprint : pariez sur plusieurs projets
                  simultanément, le premier à atteindre son objectif remporte
                  tout
                </p>
                <div className="bg-green-50 rounded-2xl p-4 text-sm text-green-800 border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">
                      Révolution du Crowdfunding
                    </span>
                  </div>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Risque limité, impact maximisé
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      100 projets dans 6 catégories
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Course en temps réel
                    </li>
                  </ul>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-indigo-400 hidden lg:block transform rotate-0 lg:rotate-0" />

              {/* The Circles */}
              <div className="flex-1 text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    ⭕
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gouvernez Ensemble
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rejoignez des cercles thématiques pour participer aux
                  décisions et organiser collectivement l'action
                </p>
                <div className="bg-orange-50 rounded-2xl p-4 text-sm text-orange-800 border border-orange-200">
                  <div className="flex items-center gap-2 mb-3">
                    <RotateCcw className="w-5 h-5" />
                    <span className="font-semibold">
                      Démocratie Participative
                    </span>
                  </div>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Rôles tournants transparents
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      10€/mois pour agir concrètement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      Décisions par consentement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Prêt à Rejoindre la{" "}
                <span className="text-yellow-300">Mission</span> ?
              </h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                Commencez par explorer nos contenus, puis passez à l'action avec
                Impact Sprint et la gouvernance collaborative
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Commencer par le Blog
                </Link>
                <Link
                  href="/projects"
                  className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                >
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Lancer un Impact Sprint
                </Link>
                <Link
                  href="/thecircles"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Rejoindre un Cercle
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-indigo-200">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  100% transparent
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  Gouvernance éthique
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  Impact mesurable
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
