//@/app/blog/page.tsx

/*
📰 Page de présentation – mondoBlog
mondoBlog : la mémoire vivante de la communauté
*/

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Search,
  Tag,
  ArrowRight,
  Lightbulb,
  Heart,
  Globe,
  Eye,
  Share2,
  Clock,
  Filter,
  Star,
  CheckCircle,
  MessageCircle,
  PenTool,
  FileText,
  Navigation,
  Link as LinkIcon,
  Layers,
  Hash,
  Lock,
  Unlock,
  Sparkles,
  Award,
  Zap,
  BarChart3,
  Users2,
  Brain,
  Coins,
  Calendar,
  ThumbsUp,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Données basées sur votre architecture blog détaillée
const rubriques = [
  {
    id: "lifestyle",
    nom: "Lifestyle & Bien-être",
    icon: "🌿",
    description: "Vie quotidienne, équilibre et plaisir de vivre",
    categories: [
      "Santé naturelle & nutrition",
      "Beauté & soins",
      "Maison & décoration",
      "Mode & style de vie",
      "Cuisine & recettes",
      "Famille & parentalité",
      "Loisirs & hobbies",
      "Minimalisme & routines",
    ],
    exemplesArticles: [
      "Mes 5 recettes healthy pour la semaine",
      "Comment organiser sa kitchenette en ville",
      "Batch cooking : mon planning du dimanche",
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    stats: { articles: 156, followers: 2340, engagement: 89 },
  },
  {
    id: "technologie",
    nom: "Technologie & Innovation",
    icon: "💻",
    description: "Progrès, outils numériques et transformation du monde",
    categories: [
      "Intelligence artificielle",
      "Startups & entrepreneuriat tech",
      "Cybersécurité",
      "Web 3.0 & blockchain",
      "Applications & outils digitaux",
      "Robotique & automatisation",
      "Tech verte & durable",
      "Culture numérique",
    ],
    exemplesArticles: [
      "ChatGPT : comment je l'utilise pour booster ma productivité",
      "Les IA génératives vont-elles remplacer les créatifs ?",
      "Midjourney : guide pour débutants",
    ],
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    stats: { articles: 203, followers: 3120, engagement: 92 },
  },
  {
    id: "spiritualite",
    nom: "Spiritualité & Conscience",
    icon: "🕊️",
    description: "Développement de l'âme, réflexion et éveil intérieur",
    categories: [
      "Méditation & pleine conscience",
      "Philosophie & sagesse",
      "Énergies & chakras",
      "Rituels & pratiques spirituelles",
      "Symbolisme & intuition",
      "Science et spiritualité",
      "Cheminement personnel",
      "Spiritualité appliquée",
    ],
    exemplesArticles: [
      "Méditation matinale : ma routine en 10 minutes",
      "5 techniques pour méditer quand on est hyperactif",
      "Méditation en nature : reconnectez-vous",
    ],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    stats: { articles: 98, followers: 1870, engagement: 95 },
  },
  {
    id: "developpement",
    nom: "Développement Personnel",
    icon: "🧠",
    description: "Croissance intérieure, productivité et équilibre",
    categories: [
      "Confiance & estime de soi",
      "Motivation & discipline",
      "Gestion du stress & santé mentale",
      "Productivité & organisation",
      "Relations humaines",
      "Finances personnelles",
      "Mindset & objectifs",
      "Épanouissement global",
    ],
    exemplesArticles: [
      "La méthode Pomodoro appliquée au travail créatif",
      "Comment dire non sans culpabiliser",
      "Gérer son énergie, pas son temps",
    ],
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    stats: { articles: 178, followers: 2890, engagement: 91 },
  },
  {
    id: "societe",
    nom: "Société & Culture",
    icon: "🌍",
    description: "Comprendre le monde, ses mutations et sa diversité",
    categories: [
      "Actualités & débats",
      "Éducation & jeunesse",
      "Politique & citoyenneté",
      "Économie & société",
      "Médias & communication",
      "Philosophie & idées",
      "Inclusion & diversité",
      "Tendances sociales & culture populaire",
    ],
    exemplesArticles: [
      "L'impact des réseaux sociaux sur notre perception du monde",
      "Génération Z : nouveaux codes, nouvelles attentes",
      "Le futur du travail en 2030",
    ],
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    stats: { articles: 145, followers: 2670, engagement: 87 },
  },
  {
    id: "carriere",
    nom: "Entrepreneuriat & Carrière",
    icon: "💼",
    description: "Monde professionnel, business et indépendance",
    categories: [
      "Création d'entreprise",
      "Freelancing & autonomie",
      "Marketing & communication",
      "Stratégie & innovation",
      "Leadership & management",
      "Finances & investissement",
      "Productivité professionnelle",
      "Études de cas & témoignages",
    ],
    exemplesArticles: [
      "Mon parcours pour créer mon entreprise à 25 ans",
      "Les 10 erreurs à éviter en freelance",
      "Comment pitcher son projet en 3 minutes",
    ],
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    stats: { articles: 134, followers: 2450, engagement: 88 },
  },
  {
    id: "sciences",
    nom: "Sciences & Environnement",
    icon: "🧬",
    description: "Savoirs, écologie et avenir durable",
    categories: [
      "Écologie & climat",
      "Énergies renouvelables",
      "Biodiversité",
      "Sciences naturelles & recherche",
      "Psychologie & neurosciences",
      "Vulgarisation scientifique",
      "Science & éthique",
      "Innovations durables",
    ],
    exemplesArticles: [
      "Les dernières découvertes sur le cerveau humain",
      "Transition énergétique : où en est-on ?",
      "Comment réduire son empreinte carbone au quotidien",
    ],
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    stats: { articles: 112, followers: 1980, engagement: 90 },
  },
  {
    id: "art",
    nom: "Art, Voyage & Création",
    icon: "🎨",
    description: "Expression, exploration et inspiration",
    categories: [
      "Art & créativité",
      "Design & photographie",
      "Littérature & cinéma",
      "Histoire & civilisations",
      "Voyage & découvertes",
      "Culture du monde",
      "Inspirations d'artistes",
      "Séries & documentaires",
    ],
    exemplesArticles: [
      "Les coulisses de ma dernière exposition",
      "Voyager seul : mes meilleures astuces",
      "Comment développer sa créativité au quotidien",
    ],
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    stats: { articles: 167, followers: 2780, engagement: 86 },
  },
];

const tagsTransversaux = {
  objectif: [
    { tag: "#Débutant", count: 234 },
    { tag: "#GuidePratique", count: 189 },
    { tag: "#Inspiration", count: 312 },
    { tag: "#Transformation", count: 156 },
    { tag: "#Challenge30Jours", count: 78 },
  ],
  public: [
    { tag: "#Étudiants", count: 145 },
    { tag: "#Entrepreneurs", count: 267 },
    { tag: "#Créatifs", count: 198 },
    { tag: "#Famille", count: 123 },
    { tag: "#Professionnels", count: 289 },
  ],
  theme: [
    { tag: "#Minimalisme", count: 167 },
    { tag: "#Mindfulness", count: 234 },
    { tag: "#Innovation", count: 278 },
    { tag: "#BienÊtre", count: 312 },
    { tag: "#Productivité", count: 245 },
  ],
  effort: [
    { tag: "#5Minutes", count: 89 },
    { tag: "#ProjetWeekend", count: 67 },
    { tag: "#RoutineQuotidienne", count: 178 },
    { tag: "#ObjectifAnnuel", count: 56 },
  ],
};

const exemplesLiensTransversaux = [
  {
    tag: "#Minimalisme",
    articles: [
      {
        rubrique: "Lifestyle",
        titre: "Capsule wardrobe : 30 pièces pour 3 mois",
        likes: 234,
        reads: 1567,
      },
      {
        rubrique: "Technologie",
        titre: "5 apps pour désencombrer sa vie digitale",
        likes: 189,
        reads: 1234,
      },
      {
        rubrique: "Spiritualité",
        titre: "Minimalisme mental : l'art du lâcher-prise",
        likes: 312,
        reads: 1987,
      },
      {
        rubrique: "Développement Perso",
        titre: "Budget minimaliste : vivre mieux avec moins",
        likes: 267,
        reads: 1678,
      },
    ],
  },
  {
    tag: "#RoutineMatin",
    articles: [
      {
        rubrique: "Lifestyle",
        titre: "Ma routine beauté du matin",
        likes: 156,
        reads: 987,
      },
      {
        rubrique: "Développement Perso",
        titre: "3 habitudes pour booster sa journée",
        likes: 278,
        reads: 1456,
      },
      {
        rubrique: "Spiritualité",
        titre: "Méditation & journaling au réveil",
        likes: 345,
        reads: 1789,
      },
      {
        rubrique: "Technologie",
        titre: "Les apps qui optimisent mes matinées",
        likes: 198,
        reads: 1123,
      },
    ],
  },
];

const avantagesArchitecture = [
  {
    titre: "UX Fluide",
    description: "Maximum 2 clics pour atteindre un article",
    icon: Navigation,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    titre: "SEO Fort",
    description: "Structure plate, siloing thématique clair",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    titre: "Éditorial Cohérent",
    description: "Rubriques distinctes mais connectées",
    icon: Layers,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    titre: "Scalable",
    description: "Évolution facile sans casser la structure",
    icon: Target,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const systemeXP = [
  {
    niveau: "Sprinter Débutant",
    xp: "0-1,000",
    avantages: [
      "Accès aux articles publics",
      "Commentaires basiques",
      "Profil personnalisé",
    ],
    icon: Zap,
    color: "from-blue-400 to-cyan-500",
  },
  {
    niveau: "Eco-Rusher",
    xp: "1,001-5,000",
    avantages: [
      "Publication d'articles",
      "Accès aux cercles",
      "Badges exclusifs",
    ],
    icon: Users2,
    color: "from-green-400 to-emerald-500",
  },
  {
    niveau: "Impact Leader",
    xp: "5,001-15,000",
    avantages: ["Modération des contenus", "Mentorat", "Accès early features"],
    icon: Crown,
    color: "from-purple-400 to-violet-500",
  },
  {
    niveau: "Legend of Impact",
    xp: "15,001+",
    avantages: [
      "Gouvernance plateforme",
      "Événements privés",
      "Statut ambassadeur",
    ],
    icon: Award,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function BlogAboutPage() {
  const [activeTab, setActiveTab] = useState("presentation");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-semibold tracking-wider">
                À PROPOS DU BLOG
              </span>
              <BookOpen className="h-6 w-6" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              mondo<span className="text-yellow-300">Blog</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              La mémoire vivante de la communauté Impact Rush
              <br />
              <span className="font-bold text-yellow-300">
                8 rubriques • Structure plate • Tags transversaux • Navigation
                optimisée
              </span>
            </p>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/10">
              <blockquote className="text-lg italic text-center leading-relaxed">
                "Explorez nos réflexions sur la technologie, le développement
                personnel, la spiritualité et les enjeux de société. Une source
                d'inspiration pour nourrir vos projets et élargir votre vision
                du monde."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
            {[
              { id: "presentation", label: "Notre Approche", icon: Lightbulb },
              { id: "rubriques", label: "8 Rubriques", icon: Layers },
              { id: "navigation", label: "Système de Tags", icon: Hash },
              { id: "communauté", label: "Communauté", icon: Users },
              { id: "avantages", label: "Avantages", icon: Star },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Présentation */}
        {activeTab === "presentation" && (
          <div className="space-y-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 border-b border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Notre Philosophie Éditoriale
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      Une approche moderne du blogging généraliste
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-8">
                {/* Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Notre Mission
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Inspiration quotidienne",
                          description:
                            "Articles pratiques pour améliorer votre quotidien",
                        },
                        {
                          title: "Réflexions approfondies",
                          description:
                            "Analyses sur les enjeux de société et l'évolution du monde",
                        },
                        {
                          title: "Guides pratiques",
                          description:
                            "Conseils actionnables pour votre développement personnel",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                    <h4 className="font-bold text-xl mb-4 text-orange-900">
                      Architecture Unique
                    </h4>
                    <div className="space-y-4 text-sm">
                      {[
                        {
                          text: "Structure plate : Maximum 2 clics pour atteindre un article",
                          highlight: true,
                        },
                        {
                          text: "8 rubriques équilibrées : Vision globale du monde",
                        },
                        {
                          text: "Tags transversaux : Connexions entre les thématiques",
                        },
                        { text: "SEO optimisé : Siloing thématique clair" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.highlight ? "bg-orange-500" : "bg-orange-300"
                            }`}
                          ></div>
                          <span
                            className={
                              item.highlight
                                ? "font-semibold text-orange-700"
                                : "text-orange-600"
                            }
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deux Espaces */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Espace Public */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Unlock className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-green-900">
                        Espace Public
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Articles et tribunes des membres",
                        "Portraits de projets réussis",
                        "Bilan d'impact et transparence financière",
                        "Inspirations et bonnes pratiques",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-green-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Espace Privé */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-purple-900">
                        Espace Privé
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Comptes-rendus de réunions",
                        "Discussions collaboratives",
                        "Suivi des projets en cours",
                        "Rédaction d'essais collectifs",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-purple-700"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Les 8 Rubriques */}
        {activeTab === "rubriques" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos 8 Rubriques Principales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une vision globale équilibrée : corps, esprit, société, futur
              </p>
            </div>

            <div className="grid gap-8">
              {rubriques.map((rubrique, index) => (
                <div
                  key={index}
                  className={`${rubrique.bgColor} rounded-3xl border-2 ${rubrique.borderColor} p-8 hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{rubrique.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {rubrique.nom}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {rubrique.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-900">
                            {rubrique.stats.articles}
                          </div>
                          <div className="text-gray-500">Articles</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">
                            {rubrique.stats.followers}
                          </div>
                          <div className="text-gray-500">Abonnés</div>
                        </div>
                      </div>
                    </div>

                    {/* Catégories */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Catégories :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rubrique.categories.map((cat, catIndex) => (
                          <span
                            key={catIndex}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Exemples d'articles */}
                    {rubrique.exemplesArticles.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Articles populaires :
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {rubrique.exemplesArticles.map(
                            (article, artIndex) => (
                              <div
                                key={artIndex}
                                className="bg-white rounded-xl p-4 border border-gray-200"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <PenTool className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm font-medium text-gray-600">
                                    Exemple
                                  </span>
                                </div>
                                <p className="text-gray-800 font-medium">
                                  "{article}"
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{rubrique.stats.engagement}% d'engagement</span>
                      </div>
                      <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                        Explorer
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Système de Navigation */}
        {activeTab === "navigation" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Hash className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Système de Tags Transversaux
                  </h2>
                  <p className="text-lg text-gray-600">
                    Navigation intelligente et exploration enrichie
                  </p>
                </div>
              </div>

              {/* Tags Transversaux */}
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(tagsTransversaux).map(([type, tags]) => (
                    <div
                      key={type}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                    >
                      <h4 className="font-bold text-lg mb-4 capitalize flex items-center gap-2 text-gray-900">
                        <Hash className="h-5 w-5 text-gray-600" />
                        Par {type}
                      </h4>
                      <div className="space-y-2">
                        {tags.map((tagObj) => (
                          <div
                            key={tagObj.tag}
                            className="flex justify-between items-center p-2 bg-white rounded-lg border border-gray-200"
                          >
                            <span className="font-medium text-gray-700">
                              {tagObj.tag}
                            </span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {tagObj.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Exemples de Liens Croisés */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Exemples de Liens Croisés
                  </h3>
                  {exemplesLiensTransversaux.map((exemple, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200"
                    >
                      <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                        <Tag className="h-6 w-6 text-indigo-600" />
                        {exemple.tag}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exemple.articles.map((article, artIndex) => (
                          <div
                            key={artIndex}
                            className="bg-white rounded-xl p-4 border border-indigo-100 hover:shadow-lg transition-shadow duration-200"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-semibold text-sm text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full">
                                {article.rubrique}
                              </span>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <ThumbsUp className="w-3 h-3" />
                                {article.likes}
                              </div>
                            </div>
                            <p className="font-medium text-gray-800 mb-2">
                              {article.titre}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {article.reads} lectures
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communauté */}
        {activeTab === "communauté" && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Système d'Impact XP
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Progressez, contribuez et soyez récompensé pour votre engagement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemeXP.map((niveau, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-r ${niveau.color} p-6 text-white`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <niveau.icon className="w-8 h-8" />
                      <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                        {niveau.xp} XP
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{niveau.niveau}</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Avantages :
                    </h4>
                    <ul className="space-y-2">
                      {niveau.avantages.map((avantage, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {avantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions qui rapportent des XP */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Comment gagner des XP ?
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { action: "Lire un article", xp: "10 XP", icon: BookOpen },
                  { action: "Commenter", xp: "25 XP", icon: MessageCircle },
                  { action: "Partager", xp: "30 XP", icon: Share2 },
                  { action: "Écrire un article", xp: "100 XP", icon: PenTool },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <item.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">
                      {item.action}
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      {item.xp}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Avantages */}
        {activeTab === "avantages" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Pourquoi Cette Architecture Fonctionne
                  </h2>
                  <p className="text-lg text-gray-600">
                    UX optimisée, SEO performant, évolutivité garantie
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {avantagesArchitecture.map((avantage, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div
                      className={`w-12 h-12 ${avantage.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <avantage.icon className={`w-6 h-6 ${avantage.color}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">
                      {avantage.titre}
                    </h3>
                    <p className="text-gray-600">{avantage.description}</p>
                  </div>
                ))}
              </div>

              {/* Recommandations */}
              <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="font-bold text-2xl mb-6 text-green-900">
                  Recommandations de Mise en Œuvre
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Commencer simple : 3-4 catégories principales au début",
                    "Ajouter les sous-catégories seulement avec 8-10 articles sur un sous-thème",
                    "Utiliser les tags avec stratégie : maximum 3-5 tags par article",
                    "Créer des pages de landing pour les tags et séries populaires",
                    "Utiliser des breadcrumbs : Accueil - Technologie - IA & Futur - Article",
                    "Analyser régulièrement les données d'engagement pour ajuster",
                  ].map((reco, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">{reco}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link href={"/blog/exemple"}>
        <Button>Voir exemple</Button>
      </Link>
      {/* CTA Final */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Prêt à Explorer Notre{" "}
              <span className="text-yellow-300">Univers</span> ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              8 rubriques, des centaines d'articles, des milliers de connexions.
              Commencez votre exploration dès maintenant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                <BookOpen className="w-5 h-5" />
                Découvrir les Articles
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200">
                <MessageCircle className="w-5 h-5" />
                S'abonner à la Newsletter
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Contenu frais quotidien
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Communauté bienveillante
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Système de récompenses
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
