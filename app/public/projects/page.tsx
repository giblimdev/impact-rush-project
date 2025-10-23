//@/app/projects/page.tsx

/*
💸 Page de présentation – The Plateforme
The Plateforme : le moteur de financement participatif d'impact
*/

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Target,
  Users,
  CreditCard,
  Trophy,
  ArrowRight,
  Play,
  CheckCircle,
  User,
  Lightbulb,
  DollarSign,
  Timer,
  Flame,
  AlertTriangle,
  Heart,
  TrendingUp,
  Gift,
  PlusCircle,
  FileText,
  Award,
  Shield,
  Eye,
  Share2,
  Clock,
  MapPin,
  Coins,
  BarChart3,
  Rocket,
  Sparkles,
  Crown,
  Star,
  Wallet,
  BadgeCheck,
  Lock,
  Unlock,
} from "lucide-react";

const etapesInvestisseur = [
  {
    numero: 1,
    titre: "Je dépose ma mise",
    description: "Je place 100€ sur Impact Sprint",
    details:
      "Un montant unique que je peux engager sur plusieurs projets simultanément",
    icon: CreditCard,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    duration: "2 minutes",
  },
  {
    numero: 2,
    titre: "Je sélectionne mes projets",
    description: "Je choisis 2, 5, 10 projets ou plus !",
    details:
      "Mes 100€ sont virtuellement engagés sur chacun d'eux. Plus j'en choisis, plus j'ai de chances qu'un projet gagne.",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    duration: "5 minutes",
  },
  {
    numero: 3,
    titre: "Je suis la course",
    description: "Je regarde mes projets progresser",
    details:
      "Tableaux de bord en temps réel, notifications, engagement communautaire",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    duration: "En continu",
  },
  {
    numero: 4,
    titre: "Un projet gagne !",
    description: "Le premier à 100% remporte tout",
    details:
      "Mes 100€ sont prélevés UNIQUEMENT pour ce projet gagnant. Mes autres engagements sont automatiquement annulés.",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    duration: "Automatique",
  },
];

const etapesPorteur = [
  {
    numero: 1,
    titre: "Je soumets mon projet",
    description: "Projet vérifié et validé",
    details: "Évaluation éthique, impact mesurable, faisabilité technique",
    icon: FileText,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    duration: "24-48h",
  },
  {
    numero: 2,
    titre: "Je fixe mon objectif",
    description: "Montant nécessaire défini",
    details: "Budget transparent avec répartition détaillée des coûts",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    duration: "Flexible",
  },
  {
    numero: 3,
    titre: "Je mobilise ma communauté",
    description: "Marketing viral et créatif",
    details:
      '"Ajoutez-nous à votre Impact Sprint !" - Communication axée sur l\'urgence et la compétition',
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    duration: "2-4 semaines",
  },
  {
    numero: 4,
    titre: "Je remporte la course",
    description: "Premier arrivé = financé !",
    details: "Réception des fonds dès que l'objectif est atteint",
    icon: Award,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    duration: "Immédiat",
  },
];

const avantages = [
  {
    titre: "Engagement Maximum",
    description:
      "L'investisseur s'implique émotionnellement dans une équipe de projets et suit avidement leur progression.",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
    metric: "89%",
    metricLabel: "de suivi actif",
  },
  {
    titre: "Efficacité Brutale",
    description:
      "Le système récompense le projet qui mobilise le plus rapidement sa communauté et qui est le plus convaincant.",
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    metric: "3.2x",
    metricLabel: "plus rapide",
  },
  {
    titre: "Clarté pour l'Investisseur",
    description:
      "Il sait dès le départ que son risque est strictement limité à 100€, peu importe le nombre de projets qu'il soutient.",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    metric: "100%",
    metricLabel: "risque limité",
  },
  {
    titre: "Viralité Accrue",
    description:
      "La course est permanente et visible par tous, stimulant un marketing agressif et créatif de la part des porteurs de projet.",
    icon: Share2,
    color: "text-green-600",
    bgColor: "bg-green-100",
    metric: "2.5x",
    metricLabel: "plus de partages",
  },
];

const categories = [
  {
    nom: "Technologie & Innovation",
    projets: 25,
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    description: "IA, blockchain, tech durable",
  },
  {
    nom: "Création & Arts",
    projets: 20,
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    description: "Artistes, créateurs, culture",
  },
  {
    nom: "Environnement & Écologie",
    projets: 15,
    icon: "🌱",
    color: "from-green-500 to-emerald-500",
    description: "Climat, biodiversité, durabilité",
  },
  {
    nom: "Social & Solidaire",
    projets: 20,
    icon: "❤️",
    color: "from-red-500 to-orange-500",
    description: "Inclusion, éducation, santé",
  },
  {
    nom: "Culture & Patrimoine",
    projets: 10,
    icon: "🏛️",
    color: "from-amber-500 to-yellow-500",
    description: "Histoire, traditions, mémoire",
  },
  {
    nom: "Jeux & Divertissement",
    projets: 10,
    icon: "🎮",
    color: "from-indigo-500 to-purple-500",
    description: "Gaming, esport, créativité",
  },
];

const modesFinancement = [
  {
    nom: "🎁 Don Participatif",
    statut: "Actif",
    description: "Contribution libre ou avec contrepartie",
    avantages: ["Défiscalisable", "Contreparties créatives", "Impact direct"],
    color: "bg-green-100 border-green-300 text-green-700",
    icon: Gift,
  },
  {
    nom: "📈 Investissement (Equity)",
    statut: "Bientôt",
    description: "Pour les entreprises à impact",
    avantages: [
      "Participation au capital",
      "Rendement potentiel",
      "Accompagnement",
    ],
    color: "bg-blue-100 border-blue-300 text-blue-700",
    icon: TrendingUp,
  },
  {
    nom: "📄 Prêt Participatif",
    statut: "Bientôt",
    description: "Pour les initiatives locales",
    avantages: ["Taux préférentiels", "Remboursement garanti", "Impact local"],
    color: "bg-purple-100 border-purple-300 text-purple-700",
    icon: Coins,
  },
];

const systemeXP = [
  {
    action: "Lire un article projet",
    xp: "+10 XP",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    action: "Soutenir un projet",
    xp: "+50 XP",
    icon: Heart,
    color: "text-red-600",
  },
  {
    action: "Partager un projet",
    xp: "+25 XP",
    icon: Share2,
    color: "text-green-600",
  },
  {
    action: "Projet financé avec succès",
    xp: "+100 XP",
    icon: Trophy,
    color: "text-yellow-600",
  },
];

export default function PlateformePage() {
  const [activeTab, setActiveTab] = useState("concept");

  const ProgressBar = ({
    progress,
    color = "from-green-500 to-emerald-500",
  }: {
    progress: number;
    color?: string;
  }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-yellow-200">
              <Zap className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold tracking-wider">
                MOTEUR DE FINANCEMENT PARTICIPATIF
              </span>
              <Zap className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              The <span className="text-yellow-300">Plateforme</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              La technologie qui transforme les décisions des Cercles en projets
              financés et réalisés
              <br />
              <span className="font-bold text-yellow-300">
                Modèle éthique • Transparence totale • Impact mesurable
              </span>
            </p>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/10">
              <blockquote className="text-lg italic text-center leading-relaxed">
                "Votre impact, votre choix. Le plus rapide l'emporte."
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
              { id: "concept", label: "Le Concept", icon: Lightbulb },
              { id: "investisseur", label: "Je Soutiens", icon: User },
              { id: "porteur", label: "Je Crée", icon: Rocket },
              { id: "exemple", label: "Exemple", icon: Play },
              { id: "modeles", label: "Modèles", icon: Coins },
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

        {/* Le Concept Révolutionnaire */}
        {activeTab === "concept" && (
          <div className="space-y-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 border-b border-orange-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Le Modèle Impact Sprint
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      Un crowdfunding éthique, transparent et participatif
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-8">
                {/* Principe de Base */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Le Principe Révolutionnaire
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Un investissement, plusieurs paris",
                          description:
                            "Vous placez 100€ et les 'pariez' sur autant de projets que vous voulez",
                        },
                        {
                          title: "Le premier gagnant rafle tout",
                          description:
                            "Seul le premier projet à atteindre 100% reçoit votre argent",
                        },
                        {
                          title: "Risque limité garanti",
                          description:
                            "Maximum 100€ prélevé, peu importe le nombre de projets sélectionnés",
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

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <h4 className="font-bold text-xl mb-4 text-blue-900">
                      🎯 Exemple Thomas
                    </h4>
                    <div className="space-y-4 text-sm">
                      {[
                        { text: "1. Thomas dépose 100€", highlight: true },
                        {
                          text: "2. Il sélectionne 5 projets environnementaux",
                        },
                        {
                          text: "3. Le projet 'Énergies solaires' gagne en premier",
                        },
                        { text: "4. Résultat : 100€ → Projet solaire" },
                        {
                          text: "Ses 4 autres engagements sont annulés automatiquement",
                          highlight: true,
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.highlight ? "bg-blue-500" : "bg-blue-300"
                            }`}
                          ></div>
                          <span
                            className={
                              item.highlight
                                ? "font-semibold text-blue-700"
                                : "text-blue-600"
                            }
                          >
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Avantages */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
                    Pourquoi Impact Sprint Révolutionne le Crowdfunding
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {avantages.map((avantage, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 ${avantage.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}
                        >
                          <avantage.icon
                            className={`w-6 h-6 ${avantage.color}`}
                          />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {avantage.metric}
                        </div>
                        <div className="text-xs text-gray-500 mb-3">
                          {avantage.metricLabel}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900">
                          {avantage.titre}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {avantage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modèle Économique */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-2xl font-bold mb-6 text-green-900">
                    💶 Modèle Économique Transparent
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Frais Justes</h4>
                      <p className="text-sm text-green-700">
                        5-7% uniquement sur les campagnes réussies
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">
                        Sécurité Totale
                      </h4>
                      <p className="text-sm text-blue-700">
                        Paiements sécurisés et séquestrés
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">
                        Réinvestissement
                      </h4>
                      <p className="text-sm text-purple-700">
                        Part des revenus réinvestie dans l'écosystème
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guide Investisseur */}
        {activeTab === "investisseur" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 border-b border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Devenir Sprinter
                    </h2>
                    <p className="text-lg text-gray-600">
                      Guide complet pour soutenir des projets et maximiser votre
                      impact
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-8">
                  {etapesInvestisseur.map((etape, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${etape.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {etape.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4">
                            <etape.icon className="h-6 w-6 text-gray-600 mt-1" />
                            <div>
                              <h3 className="font-bold text-xl text-gray-900">
                                {etape.titre}
                              </h3>
                              <p className="text-gray-600 font-medium">
                                {etape.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {etape.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 ml-10 leading-relaxed">
                          {etape.details}
                        </p>
                        {index < etapesInvestisseur.length - 1 && (
                          <div className="flex justify-center mt-6">
                            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-green-900">
                    <Target className="h-6 w-6 text-green-600" />
                    Stratégies de Sprinter Expérimenté
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        strategy: "🎯 Diversification intelligente",
                        details:
                          "Sélectionnez 5-10 projets dans différentes catégories pour maximiser vos chances",
                      },
                      {
                        strategy: "📊 Suivez les tendances",
                        details:
                          "Projets à 70-80% ont plus de chances d'atteindre l'objectif rapidement",
                      },
                      {
                        strategy: "🤝 Partagez vos favoris",
                        details:
                          "Plus un projet a de sprinters, plus il a de chances de gagner",
                      },
                      {
                        strategy: "⚡ Agissez vite",
                        details:
                          "Les projets HOT peuvent être financés en quelques heures",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 border border-green-100"
                      >
                        <div className="font-semibold text-green-800 mb-2">
                          {item.strategy}
                        </div>
                        <p className="text-sm text-green-700">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Système XP */}
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-purple-900">
                    <Award className="h-6 w-6 text-purple-600" />
                    Système d'Impact Experience Points (XP)
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {systemeXP.map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white rounded-xl border border-purple-100"
                      >
                        <item.icon
                          className={`w-8 h-8 ${item.color} mx-auto mb-2`}
                        />
                        <div className="font-semibold text-gray-900 text-sm mb-1">
                          {item.action}
                        </div>
                        <div className="text-lg font-bold text-purple-600">
                          {item.xp}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guide Porteur */}
        {activeTab === "porteur" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 border-b border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Lancer un Projet
                    </h2>
                    <p className="text-lg text-gray-600">
                      Guide pour les porteurs : maximisez vos chances de
                      remporter la course
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-8">
                  {etapesPorteur.map((etape, index) => (
                    <div key={index} className="flex gap-6 items-start group">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${etape.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {etape.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-4">
                            <etape.icon className="h-6 w-6 text-gray-600 mt-1" />
                            <div>
                              <h3 className="font-bold text-xl text-gray-900">
                                {etape.titre}
                              </h3>
                              <p className="text-gray-600 font-medium">
                                {etape.description}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {etape.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 ml-10 leading-relaxed">
                          {etape.details}
                        </p>
                        {index < etapesPorteur.length - 1 && (
                          <div className="flex justify-center mt-6">
                            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-blue-900">
                      <Shield className="h-6 w-6 text-blue-600" />
                      Critères de Validation
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Impact écologique positif et mesurable",
                        "Impact social ou communautaire fort",
                        "Viabilité économique démontrée",
                        "Équipe compétente et motivée",
                        "Budget transparent et justifié",
                      ].map((critere, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-blue-800">{critere}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-orange-900">
                      <Flame className="h-6 w-6 text-orange-600" />
                      Stratégies Marketing Gagnantes
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "🎯 'Ajoutez-nous à votre Sprint !'",
                          description:
                            "Communication axée sur la sélection plutôt que le don direct",
                        },
                        {
                          title: "📈 FOMO et urgence",
                          description:
                            "'On est à 75%, il ne manque que 25% pour gagner !'",
                        },
                        {
                          title: "🤝 Mobilisation communautaire",
                          description:
                            "Réseau, réseaux sociaux, partenaires, influenceurs",
                        },
                        {
                          title: "📊 Transparence totale",
                          description:
                            "Progression en temps réel, utilisation des fonds",
                        },
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="font-semibold text-orange-800 mb-1">
                            {item.title}
                          </div>
                          <p className="text-sm text-orange-700">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Créer Projet */}
                <div className="text-center mt-8">
                  <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                    <PlusCircle className="h-5 w-5" />
                    Soumettre Mon Projet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exemple Concret */}
        {activeTab === "exemple" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-green-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 border-b border-green-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Exemple Concret : Thomas et ses 5 Projets
                    </h2>
                    <p className="text-lg text-gray-600">
                      Suivez un cas réel d'Impact Sprint étape par étape
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-8">
                  {/* Mise en situation */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">
                      💡 Mise en Situation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Thomas, passionné d'environnement, dispose de 100€ qu'il
                      souhaite investir dans des projets durables. Au lieu de
                      choisir un seul projet, il décide d'utiliser Impact Sprint
                      pour maximiser ses chances d'impact.
                    </p>
                  </div>

                  {/* Les 5 projets */}
                  <div>
                    <h3 className="font-bold text-2xl mb-6 text-gray-900">
                      🎯 Les 5 Projets Sélectionnés par Thomas
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          nom: "Reforestation Amazonie",
                          progress: 45,
                          sprinters: 89,
                          color: "from-green-500 to-emerald-500",
                        },
                        {
                          nom: "Dépollution Méditerranée",
                          progress: 62,
                          sprinters: 134,
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          nom: "Énergies solaires village",
                          progress: 78,
                          sprinters: 203,
                          color: "from-yellow-500 to-orange-500",
                        },
                        {
                          nom: "Anti-braconnage Afrique",
                          progress: 33,
                          sprinters: 67,
                          color: "from-red-500 to-pink-500",
                        },
                        {
                          nom: "Mobilité douce ville",
                          progress: 51,
                          sprinters: 112,
                          color: "from-purple-500 to-violet-500",
                        },
                      ].map((projet, index) => (
                        <div
                          key={index}
                          className={`bg-white rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                            projet.nom === "Énergies solaires village"
                              ? "border-yellow-400 bg-yellow-50 ring-2 ring-yellow-200"
                              : "border-gray-200"
                          }`}
                        >
                          <h4 className="font-bold text-lg mb-3 text-gray-900">
                            {projet.nom}
                          </h4>
                          <ProgressBar
                            progress={projet.progress}
                            color={projet.color}
                          />
                          <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                            <span>{projet.progress}%</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {projet.sprinters}
                            </span>
                          </div>
                          {projet.nom === "Énergies solaires village" && (
                            <div className="mt-3 flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                              <Trophy className="w-4 h-4" />
                              🏆 GAGNANT !
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="font-bold text-2xl mb-6 text-gray-900">
                      ⏰ Chronologie de la Course
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          jour: "Jour 1",
                          action: "Thomas sélectionne ses 5 projets",
                          detail:
                            "Ses 100€ sont engagés virtuellement sur chacun",
                          icon: Target,
                        },
                        {
                          jour: "Jour 3",
                          action: "Mobilisation communautaire",
                          detail:
                            "Chaque projet pousse sa communauté à les ajouter dans leur Sprint",
                          icon: Users,
                        },
                        {
                          jour: "Jour 5",
                          action: "Le projet solaire prend la tête",
                          detail: "78% atteint, il ne manque plus que 22%",
                          icon: TrendingUp,
                        },
                        {
                          jour: "Jour 7",
                          action: "🏆 VICTOIRE PROJET SOLAIRE",
                          detail:
                            "100% atteint ! Le projet reçoit tous les fonds engagés",
                          icon: Trophy,
                        },
                      ].map((etape, index) => (
                        <div
                          key={index}
                          className="flex gap-6 items-start group"
                        >
                          <div className="w-20 text-center flex-shrink-0">
                            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors">
                              {etape.jour}
                            </div>
                          </div>
                          <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200 group-hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                              <etape.icon className="w-5 h-5 text-gray-600" />
                              <h4 className="font-semibold text-gray-900">
                                {etape.action}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              {etape.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Résultat */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
                    <h3 className="font-bold text-2xl mb-6 flex items-center gap-3 text-green-900">
                      <Trophy className="h-6 w-6 text-green-600" />
                      Résultat Final
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-green-800">
                          ✅ Pour Thomas (Sprinter)
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "100€ prélevés une seule fois",
                            "Versés au projet solaire gagnant",
                            "Ses 4 autres engagements annulés",
                            "Impact concret garanti",
                            "+50 XP gagnés",
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-green-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-green-800">
                          🏆 Pour le Projet Solaire
                        </h4>
                        <ul className="space-y-3">
                          {[
                            "100% financé rapidement",
                            "Fonds reçus immédiatement",
                            "Projet peut démarrer",
                            "Communauté mobilisée",
                            "Nouveaux sprinters engagés",
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-green-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modèles de Financement */}
        {activeTab === "modeles" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nos Modèles de Financement
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Différentes façons de soutenir l'impact, adaptées à chaque
                  type de projet
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {modesFinancement.map((mode, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border-2 p-6 ${mode.color} hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <mode.icon className="w-8 h-8" />
                        <h3 className="font-bold text-lg">{mode.nom}</h3>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          mode.statut === "Actif"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {mode.statut}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{mode.description}</p>
                    <div className="space-y-2">
                      {mode.avantages.map((avantage, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          {avantage}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Section Catégories */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                  100 Projets Organisés en 6 Catégories
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((cat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${cat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">
                        {cat.nom}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {cat.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        <Target className="w-4 h-4" />
                        {cat.projets} projets
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Prêt à <span className="text-yellow-300">Changer le Monde</span> ?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
              Rejoignez des milliers de Sprinters qui transforment leurs
              convictions en actions concrètes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                <Rocket className="w-5 h-5" />
                🚀 Commencer Mon Sprint
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200">
                <Lightbulb className="w-5 h-5" />
                💡 Soumettre Mon Projet
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-orange-200">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Risque limité à 100€
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Transparence totale
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                Impact mesurable
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
