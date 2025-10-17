"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";

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
    color: "bg-green-100 border-green-300 text-green-700",
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
    color: "bg-blue-100 border-blue-300 text-blue-700",
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
    color: "bg-purple-100 border-purple-300 text-purple-700",
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
    color: "bg-orange-100 border-orange-300 text-orange-700",
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
    exemplesArticles: [],
    color: "bg-indigo-100 border-indigo-300 text-indigo-700",
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
    exemplesArticles: [],
    color: "bg-emerald-100 border-emerald-300 text-emerald-700",
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
    exemplesArticles: [],
    color: "bg-teal-100 border-teal-300 text-teal-700",
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
    exemplesArticles: [],
    color: "bg-pink-100 border-pink-300 text-pink-700",
  },
];

const tagsTransversaux = {
  objectif: [
    "#Débutant",
    "#GuidePratique",
    "#Inspiration",
    "#Transformation",
    "#Challenge30Jours",
  ],
  public: [
    "#Étudiants",
    "#Entrepreneurs",
    "#Créatifs",
    "#Famille",
    "#Professionnels",
  ],
  theme: [
    "#Minimalisme",
    "#Mindfulness",
    "#Innovation",
    "#BienÊtre",
    "#Productivité",
  ],
  effort: [
    "#5Minutes",
    "#ProjetWeekend",
    "#RoutineQuotidienne",
    "#ObjectifAnnuel",
  ],
};

const exemplesLiensTransversaux = [
  {
    tag: "#Minimalisme",
    articles: [
      {
        rubrique: "Lifestyle",
        titre: "Capsule wardrobe : 30 pièces pour 3 mois",
      },
      {
        rubrique: "Technologie",
        titre: "5 apps pour désencombrer sa vie digitale",
      },
      {
        rubrique: "Spiritualité",
        titre: "Minimalisme mental : l'art du lâcher-prise",
      },
      {
        rubrique: "Développement Perso",
        titre: "Budget minimaliste : vivre mieux avec moins",
      },
    ],
  },
  {
    tag: "#RoutineMatin",
    articles: [
      { rubrique: "Lifestyle", titre: "Ma routine beauté du matin" },
      {
        rubrique: "Développement Perso",
        titre: "3 habitudes pour booster sa journée",
      },
      { rubrique: "Spiritualité", titre: "Méditation & journaling au réveil" },
      {
        rubrique: "Technologie",
        titre: "Les apps qui optimisent mes matinées",
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
  },
  {
    titre: "SEO Fort",
    description: "Structure plate, siloing thématique clair",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    titre: "Éditorial Cohérent",
    description: "Rubriques distinctes mais connectées",
    icon: Layers,
    color: "text-purple-600",
  },
  {
    titre: "Scalable",
    description: "Évolution facile sans casser la structure",
    icon: Target,
    color: "text-orange-600",
  },
];

export default function BlogAboutPage() {
  const [activeTab, setActiveTab] = useState("presentation");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-semibold">À PROPOS DU BLOG</span>
              <BookOpen className="h-6 w-6" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black">
              The <span className="text-yellow-300">Blog</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Une source d'inspiration pour nourrir vos projets et élargir votre
              vision du monde
              <br />
              <span className="font-bold text-yellow-300">
                8 rubriques • Structure plate • Tags transversaux • Navigation
                optimisée
              </span>
            </p>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto">
              <blockquote className="text-lg italic text-center">
                "Explorez nos réflexions sur la technologie, le développement
                personnel, la spiritualité et les enjeux de société"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="presentation">Notre Approche</TabsTrigger>
            <TabsTrigger value="rubriques">8 Rubriques</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="avantages">Avantages</TabsTrigger>
          </TabsList>

          {/* Présentation */}
          <TabsContent value="presentation" className="space-y-12">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                  Notre Philosophie Éditoriale
                </CardTitle>
                <CardDescription className="text-lg">
                  Une approche moderne du blogging généraliste
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-blue-900">
                      Notre Mission
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">
                            Inspiration quotidienne
                          </p>
                          <p className="text-sm text-gray-600">
                            Articles pratiques pour améliorer votre quotidien
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">
                            Réflexions approfondies
                          </p>
                          <p className="text-sm text-gray-600">
                            Analyses sur les enjeux de société et l'évolution du
                            monde
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">Guides pratiques</p>
                          <p className="text-sm text-gray-600">
                            Conseils actionnables pour votre développement
                            personnel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                    <h4 className="font-bold text-lg mb-4 text-orange-900">
                      Architecture Unique
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Structure plate :</strong>{" "}
                        <span className="text-green-600">Maximum 2 clics</span>{" "}
                        pour atteindre un article
                      </p>
                      <p>
                        <strong>8 rubriques équilibrées :</strong> Vision
                        globale du monde
                      </p>
                      <p>
                        <strong>Tags transversaux :</strong> Connexions entre
                        les thématiques
                      </p>
                      <p>
                        <strong>SEO optimisé :</strong> Siloing thématique clair
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Valeurs */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Nos Valeurs Éditoriales
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: Heart,
                        titre: "Authenticité",
                        desc: "Contenu sincère et vécu",
                      },
                      {
                        icon: Eye,
                        titre: "Transparence",
                        desc: "Sources citées, opinions assumées",
                      },
                      {
                        icon: Globe,
                        titre: "Ouverture",
                        desc: "Diversité des points de vue",
                      },
                      {
                        icon: Share2,
                        titre: "Partage",
                        desc: "Connaissances accessibles à tous",
                      },
                    ].map((valeur, index) => (
                      <Card
                        key={index}
                        className="text-center hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6">
                          <valeur.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                          <h4 className="font-bold text-lg mb-2">
                            {valeur.titre}
                          </h4>
                          <p className="text-sm text-gray-600">{valeur.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Les 8 Rubriques */}
          <TabsContent value="rubriques" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Layers className="h-8 w-8 text-purple-600" />
                  Nos 8 Rubriques Principales
                </CardTitle>
                <CardDescription>
                  Une vision globale équilibrée : corps, esprit, société, futur
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-8">
                  {rubriques.map((rubrique, index) => (
                    <Card
                      key={index}
                      className={`${rubrique.color} border-2 hover:shadow-lg transition-shadow`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="flex items-center gap-4">
                            <div className="text-4xl">{rubrique.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl">
                                {rubrique.nom}
                              </h3>
                              <p className="text-sm opacity-80">
                                {rubrique.description}
                              </p>
                            </div>
                            <Badge variant="outline">
                              {rubrique.categories.length} catégories
                            </Badge>
                          </div>

                          {/* Catégories */}
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">
                              Catégories :
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {rubrique.categories
                                .slice(0, 4)
                                .map((cat, catIndex) => (
                                  <Badge
                                    key={catIndex}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {cat}
                                  </Badge>
                                ))}
                              {rubrique.categories.length > 4 && (
                                <Badge variant="outline" className="text-xs">
                                  +{rubrique.categories.length - 4} autres
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Exemples d'articles */}
                          {rubrique.exemplesArticles.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">
                                Exemples d'articles :
                              </h4>
                              <ul className="text-sm space-y-1">
                                {rubrique.exemplesArticles.map(
                                  (article, artIndex) => (
                                    <li
                                      key={artIndex}
                                      className="flex items-center gap-2"
                                    >
                                      <PenTool className="h-3 w-3" />"{article}"
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Système de Navigation */}
          <TabsContent value="navigation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Navigation className="h-8 w-8 text-green-600" />
                  Système de Navigation Avancé
                </CardTitle>
                <CardDescription>
                  Tags transversaux et liens croisés pour une exploration riche
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Tags Transversaux */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Tags Transversaux</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(tagsTransversaux).map(([type, tags]) => (
                      <Card key={type} className="border border-gray-200">
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-3 capitalize flex items-center gap-2">
                            <Hash className="h-4 w-4" />
                            Par {type}
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Exemples de Liens Croisés */}
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Exemples de Liens Croisés
                  </h3>
                  <div className="space-y-6">
                    {exemplesLiensTransversaux.map((exemple, index) => (
                      <Card
                        key={index}
                        className="border border-indigo-200 bg-indigo-50"
                      >
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Tag className="h-5 w-5 text-indigo-600" />
                            {exemple.tag}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {exemple.articles.map((article, artIndex) => (
                              <div
                                key={artIndex}
                                className="flex items-start gap-3 p-3 bg-white rounded-lg"
                              >
                                <LinkIcon className="h-4 w-4 text-indigo-600 mt-1" />
                                <div>
                                  <p className="font-semibold text-sm text-indigo-700">
                                    {article.rubrique}
                                  </p>
                                  <p className="text-sm">{article.titre}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Fonctionnalités de Navigation */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Fonctionnalités de Navigation
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        Recherche Avancée
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Recherche par mot-clé</li>
                        <li>• Filtres par catégorie, tag, date</li>
                        <li>• Suggestions de contenu connexe</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Navigation Contextuelle
                      </h4>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Articles similaires</li>
                        <li>• Même catégorie/tag</li>
                        <li>• Parcours thématiques</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Avantages */}
          <TabsContent value="avantages" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-600" />
                  Pourquoi Cette Architecture Fonctionne
                </CardTitle>
                <CardDescription>
                  UX optimisée, SEO performant, évolutivité garantie
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {avantagesArchitecture.map((avantage, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6 text-center">
                        <avantage.icon
                          className={`h-12 w-12 mx-auto mb-4 ${avantage.color}`}
                        />
                        <h3 className="font-bold text-lg mb-2">
                          {avantage.titre}
                        </h3>
                        <p className="text-gray-600">{avantage.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-8" />

                {/* Recommandations */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 text-green-900">
                    Recommandations de Mise en Œuvre
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Commencer simple : 3-4 catégories principales au début
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Ajouter les sous-catégories seulement avec 8-10 articles
                        sur un sous-thème
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Utiliser les tags avec stratégie : maximum 3-5 tags par
                        article
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Créer des pages de landing pour les tags et séries
                        populaires
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>
                        Utiliser des breadcrumbs : Accueil - Technologie - IA &
                        Futur - Article
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Explorez Notre Univers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            8 rubriques, des centaines d'articles, des milliers de connexions.
            Commencez votre exploration dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4"
              asChild
            >
              <Link href="/blog">
                <BookOpen className="h-5 w-5 mr-2" />
                Découvrir les Articles
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white px-8 py-4"
              asChild
            >
              <Link href="/blog/newsletter">
                <MessageCircle className="h-5 w-5 mr-2" />
                S'abonner à la Newsletter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
