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
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Calendar,
  MessageCircle,
  Target,
  Zap,
  Heart,
  Globe,
  Search,
  Plus,
  ArrowRight,
  Clock,
  Video,
  FileText,
  Lightbulb,
  Shield,
  Coins,
  TreePine,
  TrendingUp,
  Award,
  BarChart3,
  CheckCircle,
  User,
  Settings,
} from "lucide-react";

// Données basées sur votre architecture The Circles
const circleCategories = [
  {
    id: "ecology",
    name: "Écologie & Environnement",
    icon: "🌱",
    description: "Agriculture durable, économie circulaire, biodiversité",
    activeCircles: 8,
    totalMembers: 156,
    monthlyBudget: 1240,
    color: "bg-green-500",
    nextMeeting: "2025-10-22",
  },
  {
    id: "social",
    name: "Social & Solidarité",
    icon: "❤️",
    description: "Insertion, éducation, santé communautaire",
    activeCircles: 12,
    totalMembers: 203,
    monthlyBudget: 2030,
    color: "bg-red-500",
    nextMeeting: "2025-10-20",
  },
  {
    id: "tech",
    name: "Tech Éthique",
    icon: "💻",
    description: "IA responsable, privacy, numérique inclusif",
    activeCircles: 6,
    totalMembers: 89,
    monthlyBudget: 890,
    color: "bg-blue-500",
    nextMeeting: "2025-10-25",
  },
  {
    id: "culture",
    name: "Culture & Patrimoine",
    icon: "🎨",
    description: "Arts, patrimoine local, transmission culturelle",
    activeCircles: 5,
    totalMembers: 67,
    monthlyBudget: 670,
    color: "bg-purple-500",
    nextMeeting: "2025-10-21",
  },
  {
    id: "economy",
    name: "Économie Alternative",
    icon: "🤝",
    description: "Coopératives, monnaies locales, ESS",
    activeCircles: 4,
    totalMembers: 78,
    monthlyBudget: 780,
    color: "bg-orange-500",
    nextMeeting: "2025-10-24",
  },
  {
    id: "education",
    name: "Éducation & Savoirs",
    icon: "📚",
    description: "Pédagogies alternatives, éducation populaire",
    activeCircles: 7,
    totalMembers: 134,
    monthlyBudget: 1340,
    color: "bg-indigo-500",
    nextMeeting: "2025-10-23",
  },
];

const featuredCircles = [
  {
    id: 1,
    name: "Écologie Urbaine Lyon",
    category: "Écologie & Environnement",
    description: "Actions concrètes pour une ville plus verte et résiliente",
    members: 24,
    currentProject: "Verger Participatif Bellecour",
    projectBudget: 5000,
    projectProgress: 78,
    meetingMode: "synchrone",
    nextMeeting: "2025-10-22",
    facilitator: "Marie Dupont",
    monthlyBudget: 240,
    tags: ["Permaculture", "Urbain", "Communauté"],
    isActive: true,
  },
  {
    id: 2,
    name: "Tech for Good Paris",
    category: "Tech Éthique",
    description: "Développer une technologie au service de l'humain",
    members: 18,
    currentProject: "App de don alimentaire local",
    projectBudget: 8000,
    projectProgress: 45,
    meetingMode: "asynchrone",
    nextSprint: "2025-10-25",
    facilitator: "Alex Chen",
    monthlyBudget: 180,
    tags: ["IA Éthique", "Open Source", "Social"],
    isActive: true,
  },
  {
    id: 3,
    name: "Éducation Alternative",
    category: "Éducation & Savoirs",
    description: "Repenser l'apprentissage pour tous les âges",
    members: 31,
    currentProject: "École démocratique rurale",
    projectBudget: 12000,
    projectProgress: 92,
    meetingMode: "synchrone",
    nextMeeting: "2025-10-23",
    facilitator: "Sophie Martin",
    monthlyBudget: 310,
    tags: ["Montessori", "Démocratique", "Rural"],
    isActive: true,
  },
];

const communityStats = {
  totalCircles: 42,
  totalMembers: 827,
  monthlyFunds: 8270,
  projectsFinanced: 156,
  averageParticipation: 89,
  newMembersThisMonth: 23,
};

const governanceRoles = [
  {
    name: "Facilitateur",
    icon: "🧭",
    description: "Anime les réunions, veille au respect du cadre",
    duration: "1 mois",
    responsibilities: ["Animation", "Cadre temporel", "Bienveillance"],
  },
  {
    name: "Secrétaire",
    icon: "✍️",
    description: "Rédige les comptes-rendus, archive la mémoire",
    duration: "1 mois",
    responsibilities: ["Documentation", "Publication", "Suivi actions"],
  },
  {
    name: "Référent Projet",
    icon: "💡",
    description: "Coordonne le projet en cours du cercle",
    duration: "Jusqu'à réalisation",
    responsibilities: ["Coordination", "Suivi budget", "Reporting"],
  },
  {
    name: "Gardien Éthique",
    icon: "🕊️",
    description: "Veille au respect des valeurs et de la charte",
    duration: "1 mois",
    responsibilities: ["Éthique", "Médiation", "Valeurs"],
  },
];

export default function CirclesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section avec Mission */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Badge Gouvernance */}
            <div className="flex items-center justify-center gap-2 text-purple-200">
              <Users className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold">
                GOUVERNANCE COLLECTIVE
              </span>
              <Users className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              The <span className="text-yellow-300">Circles</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              L'intelligence collective au service de l'action éthique.
              <br />
              <span className="font-bold text-yellow-300">
                Réfléchir ensemble, décider collectivement, agir concrètement.
              </span>
            </p>

            {/* Stats Communauté */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {communityStats.totalCircles}
                </div>
                <div className="text-sm opacity-90">Cercles actifs</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {communityStats.totalMembers}
                </div>
                <div className="text-sm opacity-90">Membres engagés</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-yellow-300">
                  {communityStats.monthlyFunds.toLocaleString()}€
                </div>
                <div className="text-sm opacity-90">Budget mensuel</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto mt-12">
              <blockquote className="text-lg italic text-center">
                "Créer une communauté où les individus réfléchissent ensemble au
                sens de leurs actions dans la société moderne, puis agissent
                collectivement pour bâtir un monde plus humain, éthique et
                durable."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Recherche et Navigation */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Rechercher un cercle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12"
              />
            </div>

            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link
                  href="/thecircles/creer"
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Créer un Cercle
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="/thecircles/rejoindre"
                  className="flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Rejoindre (10€/mois)
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Principes de Gouvernance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></span>
            Notre Modèle de Gouvernance
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceRoles.map((role) => (
              <Card
                key={role.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{role.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{role.name}</CardTitle>
                      <CardDescription className="text-sm text-purple-600">
                        {role.duration}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    {role.description}
                  </p>
                  <div className="space-y-1">
                    {role.responsibilities.map((resp) => (
                      <Badge
                        key={resp}
                        variant="outline"
                        className="text-xs mr-1"
                      >
                        {resp}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              Principe de Rotation
            </h3>
            <p className="text-gray-700">
              Les rôles sont tournants pour favoriser l'apprentissage collectif
              et éviter la concentration du pouvoir. Chaque membre peut occuper
              tous les rôles, développant ainsi ses compétences et sa
              compréhension du fonctionnement collectif.
            </p>
          </div>
        </section>

        {/* Catégories de Cercles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></span>
            Thématiques des Cercles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {circleCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span>{category.activeCircles} cercles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-green-600" />
                        <span>{category.totalMembers} membres</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-purple-600">
                        {category.monthlyBudget}€/mois
                      </span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          Prochaine:{" "}
                          {new Date(category.nextMeeting).toLocaleDateString(
                            "fr-FR"
                          )}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-full h-2 rounded-full bg-gray-200 overflow-hidden`}
                    >
                      <div
                        className={`h-full ${category.color} transition-all duration-500`}
                        style={{
                          width: `${Math.min(
                            (category.totalMembers / 250) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cercles en Vedette */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
              Cercles en Action
            </h2>
            <Badge className="bg-green-500 text-white">
              <TrendingUp className="h-4 w-4 mr-1" />
              {communityStats.averageParticipation}% participation active
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCircles.map((circle) => (
              <CircleCard key={circle.id} circle={circle} />
            ))}
          </div>
        </section>

        {/* Modes de Fonctionnement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full"></span>
            Deux Modes de Participation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mode Synchrone */}
            <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-3">
                  <Video className="h-6 w-6 text-blue-600" />
                  Mode Synchrone
                </CardTitle>
                <CardDescription>
                  Réunions visioconférence mensuelles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Durée: 60-90 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Fréquence: 1 fois par mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">
                      Interaction directe en temps réel
                    </span>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Ordre du jour type:</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Synthèse précédente</li>
                      <li>• Suivi des actions</li>
                      <li>• Exposé thématique</li>
                      <li>• Tour de parole</li>
                      <li>• Décisions budget</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mode Asynchrone */}
            <Card className="border-2 border-green-200 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  Mode Asynchrone
                </CardTitle>
                <CardDescription>
                  Sprints mensuels via blog collaboratif
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Durée: 3 semaines d'échanges
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">
                      Contributions écrites étoffées
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Flexibilité horaire totale</span>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2">Processus sprint:</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Bilan précédent</li>
                      <li>• Contributions thématiques</li>
                      <li>• Échanges et débats</li>
                      <li>• Votes et décisions</li>
                      <li>• Synthèse finale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valeurs et Éthique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
            Nos Valeurs Fondamentales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Éthique",
                desc: "Intégrité et transparence dans toutes nos actions",
              },
              {
                icon: Heart,
                title: "Solidarité",
                desc: "Entraide et coopération entre membres",
              },
              {
                icon: TreePine,
                title: "Durabilité",
                desc: "Respect du vivant et vision long terme",
              },
              {
                icon: Lightbulb,
                title: "Ouverture",
                desc: "Curiosité et apprentissage continu",
              },
            ].map((value) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-purple-200">
              <Users className="h-8 w-8" />
              <span className="text-xl font-bold">REJOIGNEZ LA COMMUNAUTÉ</span>
              <Users className="h-8 w-8" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Prêt à Changer le Monde
              <br />
              <span className="text-yellow-300">Ensemble ?</span>
            </h2>

            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Rejoignez une communauté qui transforme la réflexion en action
              concrète. 10€/mois pour participer à la gouvernance collective et
              financer des projets éthiques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/thecircles/rejoindre">
                  <Coins className="h-5 w-5 mr-2" />
                  Adhérer - 10€/mois
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/thecircles/charte">
                  <FileText className="h-5 w-5 mr-2" />
                  Lire la Charte
                </Link>
              </Button>
            </div>

            <div className="pt-8 text-sm text-purple-200">
              <p>
                ✅ Transparence financière totale • ✅ Gouvernance démocratique
                • ✅ Impact mesurable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour les cartes de cercles
function CircleCard({ circle }: { circle: any }) {
  return (
    <Card className="hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
      {/* Badge Mode */}
      <div className="absolute top-4 right-4 z-10">
        <Badge
          className={
            circle.meetingMode === "synchrone" ? "bg-blue-500" : "bg-green-500"
          }
        >
          {circle.meetingMode === "synchrone" ? (
            <>
              <Video className="h-3 w-3 mr-1" />
              Synchrone
            </>
          ) : (
            <>
              <FileText className="h-3 w-3 mr-1" />
              Asynchrone
            </>
          )}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
              {circle.name}
            </h3>
            <Badge variant="outline" className="text-xs mb-2">
              {circle.category}
            </Badge>
            <p className="text-gray-600 text-sm">{circle.description}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <span>{circle.members} membres</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="h-4 w-4 text-green-600" />
              <span>{circle.monthlyBudget}€/mois</span>
            </div>
          </div>

          {/* Projet Actuel */}
          <div className="p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">Projet actuel</span>
              <span className="text-xs text-purple-600">
                {circle.projectProgress}% financé
              </span>
            </div>
            <h4 className="font-medium text-sm">{circle.currentProject}</h4>
            <Progress value={circle.projectProgress} className="h-2" />
            <div className="text-xs text-gray-500">
              Budget: {circle.projectBudget.toLocaleString()}€
            </div>
          </div>

          {/* Prochaine Action */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-600" />
              <span>
                {circle.meetingMode === "synchrone"
                  ? `Réunion: ${new Date(circle.nextMeeting).toLocaleDateString(
                      "fr-FR"
                    )}`
                  : `Sprint: ${new Date(circle.nextSprint).toLocaleDateString(
                      "fr-FR"
                    )}`}
              </span>
            </div>
          </div>

          {/* Facilitateur */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="h-4 w-4" />
            <span>Facilité par {circle.facilitator}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {circle.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <Button
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            asChild
          >
            <Link href={`/cercles/${circle.id}`}>
              Découvrir ce Cercle
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
