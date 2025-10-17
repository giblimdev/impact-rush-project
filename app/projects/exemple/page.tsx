"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Filter,
  Zap,
  Users,
  Target,
  Clock,
  TrendingUp,
  ArrowRight,
  Star,
  Heart,
  Share2,
  Flame,
  Timer,
  Trophy,
} from "lucide-react";

// Données basées sur vos 100 projets organisés
const categories = [
  {
    id: "technology",
    name: "Technologie & Innovation",
    icon: "💻",
    count: 25,
    color: "bg-blue-500",
    description: "IA, robotique, apps, objets connectés",
    hotProjects: 8,
  },
  {
    id: "creative",
    name: "Création & Arts",
    icon: "🎨",
    count: 20,
    color: "bg-purple-500",
    description: "Cinéma, musique, édition, arts visuels",
    hotProjects: 6,
  },
  {
    id: "environment",
    name: "Environnement & Écologie",
    icon: "🌱",
    count: 15,
    color: "bg-green-500",
    description: "Agriculture durable, biodiversité, économie circulaire",
    hotProjects: 4,
  },
  {
    id: "social",
    name: "Social & Solidaire",
    icon: "❤️",
    count: 20,
    color: "bg-red-500",
    description: "Insertion, éducation, santé, communauté",
    hotProjects: 7,
  },
  {
    id: "culture",
    name: "Culture & Patrimoine",
    icon: "🏛️",
    count: 10,
    color: "bg-orange-500",
    description: "Patrimoine, artisanat traditionnel",
    hotProjects: 2,
  },
  {
    id: "games",
    name: "Jeux & Divertissement",
    icon: "🎮",
    count: 10,
    color: "bg-pink-500",
    description: "Jeux vidéo, événements, spectacles",
    hotProjects: 3,
  },
];

// Projets vedettes simulés d'après vos 100 projets
const featuredProjects = [
  {
    id: 1,
    title: "Robot compagnon personnes âgées",
    shortDescription: "Assistant robotique pour l'aide quotidienne aux seniors",
    category: "Technologie & Innovation",
    subCategory: "Robotique & IA",
    financialGoal: 50000,
    collectedAmount: 47250,
    sprintersCount: 89,
    timeLeft: "2 jours",
    owner: "TechCare Solutions",
    mainImage: "/api/placeholder/400/250",
    tags: ["Innovation", "Social", "IA", "Santé"],
    isHot: true,
    progress: 94.5,
    trending: true,
  },
  {
    id: 2,
    title: "Court-métrage engagé Environnement",
    shortDescription: "Film documentaire sur la biodiversité urbaine",
    category: "Création & Arts",
    subCategory: "Cinéma & Vidéo",
    financialGoal: 15000,
    collectedAmount: 12750,
    sprintersCount: 156,
    timeLeft: "8 jours",
    owner: "Collectif GreenLens",
    mainImage: "/api/placeholder/400/250",
    tags: ["Créatif", "Écologie", "Documentaire"],
    isHot: false,
    progress: 85,
    trending: true,
  },
  {
    id: 3,
    title: "Ferme urbaine hydroponie verticale",
    shortDescription: "Agriculture urbaine durable pour quartiers denses",
    category: "Environnement & Écologie",
    subCategory: "Agriculture Durable",
    financialGoal: 35000,
    collectedAmount: 31850,
    sprintersCount: 203,
    timeLeft: "5 jours",
    owner: "Urban Harvest",
    mainImage: "/api/placeholder/400/250",
    tags: ["Durable", "Innovation", "Local", "Agriculture"],
    isHot: true,
    progress: 91,
    trending: false,
  },
];

const recentProjects = [
  {
    id: 4,
    title: "Application de méditation personnalisée IA",
    shortDescription: "App de méditation qui s'adapte à votre état mental",
    category: "Technologie & Innovation",
    financialGoal: 25000,
    collectedAmount: 8900,
    sprintersCount: 67,
    timeLeft: "23 jours",
    progress: 35.6,
    tags: ["Bien-être", "IA", "Santé mentale"],
  },
  {
    id: 5,
    title: "Food-truck formation jeunes",
    shortDescription: "Formation culinaire mobile pour jeunes en difficulté",
    category: "Social & Solidaire",
    financialGoal: 18000,
    collectedAmount: 13400,
    sprintersCount: 112,
    timeLeft: "12 jours",
    progress: 74.4,
    tags: ["Formation", "Solidaire", "Jeunesse"],
  },
  {
    id: 6,
    title: "Jeu indépendant aventure narrative",
    shortDescription: "RPG narratif sur les légendes locales françaises",
    category: "Jeux & Divertissement",
    financialGoal: 22000,
    collectedAmount: 19800,
    sprintersCount: 89,
    timeLeft: "7 jours",
    progress: 90,
    tags: ["Gaming", "Culture", "Indépendant"],
  },
];

const platformStats = {
  totalProjects: 100,
  activeSprinters: 2847,
  totalRaised: 1247000,
  successRate: 87,
  activeRaces: 73,
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section avec Stats Temps Réel */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            {/* Badge Impact Sprint */}
            <div className="flex items-center justify-center gap-2 text-yellow-200">
              <Zap className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold">
                IMPACT SPRINT EN DIRECT
              </span>
              <Zap className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              100 Projets qui
              <span className="block text-yellow-300">Changent le Monde</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Votre impact, votre choix. Le plus rapide l'emporte.
              <br />
              <span className="font-bold text-yellow-300">
                Pariez sur l'avenir que vous voulez voir naître.
              </span>
            </p>

            {/* Stats Plateforme */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {platformStats.totalProjects}
                </div>
                <div className="text-sm opacity-90">Projets disponibles</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {platformStats.activeSprinters}
                </div>
                <div className="text-sm opacity-90">Sprinters actifs</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {platformStats.totalRaised.toLocaleString()}€
                </div>
                <div className="text-sm opacity-90">Déjà collectés</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {platformStats.successRate}%
                </div>
                <div className="text-sm opacity-90">Taux de réussite</div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 text-xl rounded-full shadow-2xl hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300"
              >
                🚀 Démarrer Mon Sprint
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filtres et Recherche */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12"
              />
            </div>

            {/* Filtres rapides */}
            <div className="flex gap-3">
              <Button
                variant={selectedStatus === "hot" ? "default" : "outline"}
                onClick={() => setSelectedStatus("hot")}
                className="flex items-center gap-2"
              >
                <Flame className="h-4 w-4" />
                🔥 HOT
              </Button>
              <Button
                variant={selectedStatus === "trending" ? "default" : "outline"}
                onClick={() => setSelectedStatus("trending")}
                className="flex items-center gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                Tendances
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Plus de filtres
              </Button>
            </div>
          </div>
        </div>

        {/* Catégories avec Races Actives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
            Catégories de Projets
            <Badge variant="secondary" className="text-orange-600">
              {platformStats.activeRaces} courses actives
            </Badge>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCategory(category.id)}
              >
                {/* Hot indicator */}
                {category.hotProjects > 3 && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      🔥 {category.hotProjects} HOT
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {category.count} projets
                      </span>
                      <div className="flex items-center gap-1 text-sm text-green-600">
                        <Target className="h-4 w-4" />
                        {Math.floor(Math.random() * 20 + 70)}% financés
                      </div>
                    </div>

                    <Progress value={Math.random() * 100} className="h-2" />

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>
                        ⚡ {Math.floor(Math.random() * 50 + 30)} sprinters
                        actifs
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${category.color} animate-pulse`}
                      ></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projets en Vedette - Course Serrée */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-red-500 to-pink-600 rounded-full"></span>
              🔥 Course Serrée - Dernière Ligne Droite
            </h2>
            <Badge className="bg-red-500 text-white animate-pulse">
              <Timer className="h-4 w-4 mr-1" />
              Derniers jours
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectSprintCard
                key={project.id}
                project={project}
                featured={true}
              />
            ))}
          </div>
        </section>

        {/* Tabs pour Explorer Plus */}
        <Tabs defaultValue="recent" className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="recent">Récents</TabsTrigger>
              <TabsTrigger value="trending">🔥 Tendances</TabsTrigger>
              <TabsTrigger value="ending">⏰ Derniers jours</TabsTrigger>
            </TabsList>

            <Button variant="outline" asChild>
              <Link href="/projects/all">
                Voir tous les projets ({platformStats.totalProjects})
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <TabsContent value="recent" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProjects.map((project) => (
                <ProjectSprintCard
                  key={project.id}
                  project={project}
                  featured={false}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="text-center py-16">
              <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Projets tendances
              </h3>
              <p className="text-gray-500">
                Les projets qui montent arrivent ici...
              </p>
            </div>
          </TabsContent>

          <TabsContent value="ending">
            <div className="text-center py-16">
              <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Derniers jours
              </h3>
              <p className="text-gray-500">
                Les projets en fin de course arrivent ici...
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Final - Rejoindre Impact Sprint */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Trophy className="h-8 w-8" />
              <span className="text-xl font-bold">REJOIGNEZ LA COURSE</span>
              <Trophy className="h-8 w-8" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Prêt à Sprinter pour l'Impact ?
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choisissez vos projets, placez votre mise, et soutenez les
              innovations qui transforment le monde. Le premier arrivé remporte
              tout !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 text-lg"
              >
                🏃‍♂️ Commencer Mon Sprint
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white px-8 py-4 text-lg"
              >
                📖 Comment ça marche ?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour les cartes de projet optimisé Impact Sprint
function ProjectSprintCard({
  project,
  featured = false,
}: {
  project: any;
  featured?: boolean;
}) {
  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-red-500";
    if (progress >= 75) return "bg-orange-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-blue-500";
  };

  const getUrgencyBadge = (progress: number, timeLeft: string) => {
    if (progress >= 90)
      return { text: "🔥 CRITIQUE", color: "bg-red-500 animate-pulse" };
    if (progress >= 75) return { text: "⚡ CHAUD", color: "bg-orange-500" };
    return { text: "🎯 EN COURSE", color: "bg-blue-500" };
  };

  const urgency = getUrgencyBadge(project.progress, project.timeLeft);

  return (
    <Card
      className={`hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${
        featured ? "ring-2 ring-orange-500 shadow-orange-500/20" : ""
      } ${project.isHot ? "animate-pulse" : ""}`}
    >
      {/* Image avec overlay */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges overlay */}
        <div className="absolute top-3 left-3 space-y-2 z-10">
          <Badge className={urgency.color + " text-white text-xs"}>
            {urgency.text}
          </Badge>
          {project.trending && (
            <Badge className="bg-purple-500 text-white text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              Tendance
            </Badge>
          )}
        </div>

        {/* Temps restant - Top Right */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
          <Clock className="h-3 w-3 inline mr-1" />
          {project.timeLeft}
        </div>

        {/* Catégorie - Bottom Left */}
        <div className="absolute bottom-3 left-3">
          <Badge
            variant="secondary"
            className="bg-white/90 text-gray-900 text-xs"
          >
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Titre et description */}
        <div>
          <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Progress avec stats */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-green-600">
              {project.collectedAmount.toLocaleString()}€
            </span>
            <span className="text-gray-500">
              sur {project.financialGoal.toLocaleString()}€
            </span>
          </div>

          <Progress value={project.progress} className="h-3" />

          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-gray-700">
              {project.progress.toFixed(1)}% financé
            </span>
            <span className="text-green-600">
              Il ne manque que {(100 - project.progress).toFixed(1)}% !
            </span>
          </div>
        </div>

        {/* Sprinters et engagement */}
        <div className="flex items-center justify-between py-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="font-semibold">
              {project.sprintersCount} sprinters
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Heart className="h-3 w-3" />
            <Share2 className="h-3 w-3" />
            <Star className="h-3 w-3" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold"
          asChild
        >
          <Link href={`/projects/${project.id}`}>🏃‍♂️ Ajouter à Mon Sprint</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
