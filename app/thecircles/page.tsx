//@/app/thecircles/page.tsx
/*
🔄 Page de présentation – The Circle
The Circle : la communauté qui décide et agit
*/

"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Eye,
  Crown,
  BookOpen,
  Vote,
  RotateCcw,
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
    color: "from-green-500 to-emerald-600",
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
    color: "from-red-500 to-pink-600",
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
    color: "from-blue-500 to-cyan-600",
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
    color: "from-purple-500 to-violet-600",
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
    color: "from-orange-500 to-amber-600",
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
    color: "from-indigo-500 to-blue-600",
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
    icon: Crown,
    description: "Anime les réunions, veille au respect du cadre",
    duration: "1 mois",
    responsibilities: ["Animation", "Cadre temporel", "Bienveillance"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Secrétaire",
    icon: BookOpen,
    description: "Rédige les comptes-rendus, archive la mémoire",
    duration: "1 mois",
    responsibilities: ["Documentation", "Publication", "Suivi actions"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Référent Projet",
    icon: Target,
    description: "Coordonne le projet en cours du cercle",
    duration: "Jusqu'à réalisation",
    responsibilities: ["Coordination", "Suivi budget", "Reporting"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Gardien Éthique",
    icon: Shield,
    description: "Veille au respect des valeurs et de la charte",
    duration: "1 mois",
    responsibilities: ["Éthique", "Médiation", "Valeurs"],
    color: "from-purple-500 to-pink-500",
  },
];

const decisionProcess = [
  {
    step: 1,
    icon: Lightbulb,
    title: "Émergence",
    description: "Une idée ou un besoin collectif apparaît",
    duration: "1-2 semaines",
    color: "from-blue-100 to-blue-50",
  },
  {
    step: 2,
    icon: Zap,
    title: "Structuration",
    description: "Le Cercle construit un dossier projet",
    duration: "2-3 semaines",
    color: "from-green-100 to-green-50",
  },
  {
    step: 3,
    icon: Vote,
    title: "Sélection",
    description: "Vote collectif et validation éthique",
    duration: "1 semaine",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    step: 4,
    icon: Coins,
    title: "Financement",
    description: "Le projet est lancé sur la Plateforme",
    duration: "4-6 semaines",
    color: "from-purple-100 to-purple-50",
  },
  {
    step: 5,
    icon: BarChart3,
    title: "Suivi & Bilan",
    description: "Résultats publiés sur mondoBlog",
    duration: "Continu",
    color: "from-indigo-100 to-indigo-50",
  },
];

export default function CirclesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section avec Mission */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Badge Gouvernance */}
            <div className="flex items-center justify-center gap-2 text-purple-200">
              <Users className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold tracking-wider">
                GOUVERNANCE COLLECTIVE
              </span>
              <Users className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              The <span className="text-yellow-300">Circles</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              L'intelligence collective au service de l'action éthique.
              <br />
              <span className="font-bold text-yellow-300">
                Réfléchir ensemble, décider collectivement, agir concrètement.
              </span>
            </p>

            {/* Stats Communauté */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
              {[
                { value: communityStats.totalCircles, label: "Cercles actifs" },
                {
                  value: communityStats.totalMembers,
                  label: "Membres engagés",
                },
                {
                  value: `${communityStats.monthlyFunds.toLocaleString()}€`,
                  label: "Budget mensuel",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto mt-12 border border-white/10">
              <blockquote className="text-lg italic text-center leading-relaxed">
                "Créer une communauté où les individus réfléchissent ensemble au
                sens de leurs actions dans la société moderne, puis agissent
                collectivement pour bâtir un monde plus humain, éthique et
                durable."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Recherche et Navigation */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                placeholder="Rechercher un cercle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium">
                <Plus className="h-4 w-4" />
                Créer un Cercle
              </button>
              <Link href={"/thecircles/jointhecircles"}>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg">
                  <Users className="h-4 w-4" />
                  Rejoindre (10€/mois)
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>

        {/* Processus de Décision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-10 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></span>
            Le Processus de Décision Collective
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {decisionProcess.map((step) => (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {step.step < decisionProcess.length && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-200 z-0"></div>
                )}

                <div
                  className={`relative bg-gradient-to-br ${step.color} border border-gray-200 rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 z-10`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-xs text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Principes de Gouvernance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-10 bg-gradient-to-b from-green-500 to-blue-600 rounded-full"></span>
            Rôles Tournants & Gouvernance
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceRoles.map((role) => (
              <div
                key={role.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${role.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <role.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {role.name}
                      </h3>
                      <p className="text-white/80 text-sm">{role.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {role.description}
                  </p>
                  <div className="space-y-2">
                    {role.responsibilities.map((resp) => (
                      <div
                        key={resp}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {resp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
            <div className="flex items-start gap-4">
              <RotateCcw className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Principe de Rotation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les rôles sont tournants pour favoriser l'apprentissage
                  collectif et éviter la concentration du pouvoir. Chaque membre
                  peut occuper tous les rôles, développant ainsi ses compétences
                  et sa compréhension du fonctionnement collectif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catégories de Cercles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
            Thématiques des Cercles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {circleCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
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
                          {new Date(category.nextMeeting).toLocaleDateString(
                            "fr-FR",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${Math.min(
                            (category.totalMembers / 250) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cercles en Vedette */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-2 h-10 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></span>
              Cercles en Action
            </h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              {communityStats.averageParticipation}% participation active
            </div>
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
            <span className="w-2 h-10 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
            Deux Modes de Participation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mode Synchrone */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      Mode Synchrone
                    </h3>
                    <p className="text-blue-600">
                      Réunions visioconférence mensuelles
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "Durée: 60-90 minutes" },
                    { icon: Calendar, text: "Fréquence: 1 fois par mois" },
                    { icon: Users, text: "Interaction directe en temps réel" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Ordre du jour type:
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      {[
                        "Synthèse précédente",
                        "Suivi des actions",
                        "Exposé thématique",
                        "Tour de parole",
                        "Décisions budget",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode Asynchrone */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      Mode Asynchrone
                    </h3>
                    <p className="text-green-600">
                      Sprints mensuels via blog collaboratif
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "Durée: 3 semaines d'échanges" },
                    {
                      icon: MessageCircle,
                      text: "Contributions écrites étoffées",
                    },
                    { icon: Globe, text: "Flexibilité horaire totale" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Processus sprint:
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      {[
                        "Bilan précédent",
                        "Contributions thématiques",
                        "Échanges et débats",
                        "Votes et décisions",
                        "Synthèse finale",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs et Éthique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-10 bg-gradient-to-b from-rose-500 to-pink-600 rounded-full"></span>
            Nos Valeurs Fondamentales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Éthique",
                desc: "Intégrité et transparence dans toutes nos actions",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Heart,
                title: "Solidarité",
                desc: "Entraide et coopération entre membres",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: TreePine,
                title: "Durabilité",
                desc: "Respect du vivant et vision long terme",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Lightbulb,
                title: "Ouverture",
                desc: "Curiosité et apprentissage continu",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-purple-200">
              <Users className="h-8 w-8" />
              <span className="text-xl font-bold tracking-wider">
                REJOIGNEZ LA COMMUNAUTÉ
              </span>
              <Users className="h-8 w-8" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Prêt à Changer le Monde
              <br />
              <span className="text-yellow-300">Ensemble ?</span>
            </h2>

            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Rejoignez une communauté qui transforme la réflexion en action
              concrète. 10€/mois pour participer à la gouvernance collective et
              financer des projets éthiques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl">
                <Coins className="h-5 w-5" />
                Adhérer - 10€/mois
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-xl transition-all duration-200 text-lg">
                <FileText className="h-5 w-5" />
                Lire la Charte
              </button>
            </div>

            <div className="pt-8 text-sm text-purple-200">
              <p className="flex items-center justify-center gap-6">
                <span>✅ Transparence financière totale</span>
                <span>✅ Gouvernance démocratique</span>
                <span>✅ Impact mesurable</span>
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
  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border border-gray-100">
      {/* Badge Mode */}
      <div className="absolute top-4 right-4 z-10">
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
            circle.meetingMode === "synchrone"
              ? "bg-blue-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {circle.meetingMode === "synchrone" ? (
            <>
              <Video className="h-3 w-3" />
              Synchrone
            </>
          ) : (
            <>
              <FileText className="h-3 w-3" />
              Asynchrone
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {circle.name}
            </h3>
            <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-2">
              {circle.category}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {circle.description}
            </p>
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
          <div className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-gray-900">
                Projet actuel
              </span>
              <span className="text-xs text-purple-600 font-medium">
                {circle.projectProgress}% financé
              </span>
            </div>
            <h4 className="font-medium text-sm text-gray-900">
              {circle.currentProject}
            </h4>
            <ProgressBar progress={circle.projectProgress} />
            <div className="text-xs text-gray-500">
              Budget: {circle.projectBudget.toLocaleString()}€
            </div>
          </div>

          {/* Prochaine Action */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-purple-600" />
              <span className="text-gray-700">
                {circle.meetingMode === "synchrone"
                  ? `Réunion: ${new Date(circle.nextMeeting).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        month: "short",
                      }
                    )}`
                  : `Sprint: ${new Date(circle.nextSprint).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        month: "short",
                      }
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
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-200 font-medium group/btn">
            Découvrir ce Cercle
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
