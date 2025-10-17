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
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";

const etapesInvestisseur = [
  {
    numero: 1,
    titre: "Je dépose ma mise",
    description: "Je place 100€ sur Impact Sprint",
    details:
      "Un montant unique que je peux engager sur plusieurs projets simultanément",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    numero: 2,
    titre: "Je sélectionne mes projets",
    description: "Je choisis 2, 5, 10 projets ou plus !",
    details:
      "Mes 100€ sont virtuellement engagés sur chacun d'eux. Plus j'en choisis, plus j'ai de chances qu'un projet gagne.",
    icon: Target,
    color: "bg-green-500",
  },
  {
    numero: 3,
    titre: "Je suis la course",
    description: "Je regarde mes projets progresser",
    details:
      "Tableaux de bord en temps réel, notifications, engagement communautaire",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
  {
    numero: 4,
    titre: "Un projet gagne !",
    description: "Le premier à 100% remporte tout",
    details:
      "Mes 100€ sont prélevés UNIQUEMENT pour ce projet gagnant. Mes autres engagements sont automatiquement annulés.",
    icon: Trophy,
    color: "bg-yellow-500",
  },
];

const etapesPorteur = [
  {
    numero: 1,
    titre: "Je soumets mon projet",
    description: "Projet vérifié et validé",
    details: "Évaluation éthique, impact mesurable, faisabilité technique",
    icon: FileText,
    color: "bg-indigo-500",
  },
  {
    numero: 2,
    titre: "Je fixe mon objectif",
    description: "Montant nécessaire défini",
    details: "Budget transparent avec répartition détaillée des coûts",
    icon: Target,
    color: "bg-green-500",
  },
  {
    numero: 3,
    titre: "Je mobilise ma communauté",
    description: "Marketing viral et créatif",
    details:
      '"Ajoutez-nous à votre Impact Sprint !" - Communication axée sur l\'urgence et la compétition',
    icon: Users,
    color: "bg-orange-500",
  },
  {
    numero: 4,
    titre: "Je remporte la course",
    description: "Premier arrivé = financé !",
    details: "Réception des fonds dès que l'objectif est atteint",
    icon: Award,
    color: "bg-red-500",
  },
];

const avantages = [
  {
    titre: "Engagement Maximum",
    description:
      "L'investisseur s'implique émotionnellement dans une équipe de projets et suit avidement leur progression.",
    icon: Heart,
    color: "text-red-600",
  },
  {
    titre: "Efficacité Brutale",
    description:
      "Le système récompense le projet qui mobilise le plus rapidement sa communauté et qui est le plus convaincant.",
    icon: Zap,
    color: "text-orange-600",
  },
  {
    titre: "Clarté pour l'Investisseur",
    description:
      "Il sait dès le départ que son risque est strictement limité à 100€, peu importe le nombre de projets qu'il soutient.",
    icon: Shield,
    color: "text-blue-600",
  },
  {
    titre: "Viralité Accrue",
    description:
      "La course est permanente et visible par tous, stimulant un marketing agressif et créatif de la part des porteurs de projet.",
    icon: Share2,
    color: "text-green-600",
  },
];

const categories = [
  { nom: "Technologie & Innovation", projets: 25, icon: "💻" },
  { nom: "Création & Arts", projets: 20, icon: "🎨" },
  { nom: "Environnement & Écologie", projets: 15, icon: "🌱" },
  { nom: "Social & Solidaire", projets: 20, icon: "❤️" },
  { nom: "Culture & Patrimoine", projets: 10, icon: "🏛️" },
  { nom: "Jeux & Divertissement", projets: 10, icon: "🎮" },
];

export default function CommentCaMarchePage() {
  const [activeTab, setActiveTab] = useState("concept");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-yellow-200">
              <Lightbulb className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold">COMMENT ÇA MARCHE</span>
              <Lightbulb className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              Impact <span className="text-yellow-300">Sprint</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              La révolution du crowdfunding : transformez le don en course
              palpitante !<br />
              <span className="font-bold text-yellow-300">
                Le plus rapide l'emporte, votre risque est limité.
              </span>
            </p>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto">
              <blockquote className="text-lg italic text-center">
                "Votre impact, votre choix. Le plus rapide l'emporte."
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
            <TabsTrigger value="concept">Le Concept</TabsTrigger>
            <TabsTrigger value="investisseur">Je Soutiens</TabsTrigger>
            <TabsTrigger value="porteur">Je Crée</TabsTrigger>
            <TabsTrigger value="exemple">Exemple</TabsTrigger>
          </TabsList>

          {/* Le Concept Révolutionnaire */}
          <TabsContent value="concept" className="space-y-12">
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Zap className="h-8 w-8 text-orange-600" />
                  Le Concept Révolutionnaire
                </CardTitle>
                <CardDescription className="text-lg">
                  Impact Sprint transforme le financement participatif en course
                  palpitante
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Principe de Base */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-orange-900">
                      Le Principe de Base
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">
                            Un investissement, plusieurs paris
                          </p>
                          <p className="text-sm text-gray-600">
                            Vous placez 100€ et les "pariez" sur autant de
                            projets que vous voulez
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">
                            Le premier gagnant rafle tout
                          </p>
                          <p className="text-sm text-gray-600">
                            Seul le premier projet à atteindre 100% reçoit votre
                            argent
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-semibold">Risque limité garanti</p>
                          <p className="text-sm text-gray-600">
                            Maximum 100€ prélevé, peu importe le nombre de
                            projets sélectionnés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-lg mb-4 text-blue-900">
                      Exemple Thomas
                    </h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>1.</strong> Thomas dépose{" "}
                        <span className="font-bold text-green-600">100€</span>
                      </p>
                      <p>
                        <strong>2.</strong> Il sélectionne{" "}
                        <span className="font-bold text-blue-600">
                          5 projets
                        </span>{" "}
                        environnementaux
                      </p>
                      <p>
                        <strong>3.</strong> Le projet "Énergies solaires" gagne
                        en premier
                      </p>
                      <p>
                        <strong>4.</strong> Résultat :{" "}
                        <span className="font-bold text-orange-600">
                          100€ → Projet solaire
                        </span>
                      </p>
                      <p className="text-gray-600">
                        Ses 4 autres engagements sont annulés automatiquement
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Avantages */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Pourquoi Impact Sprint Révolutionne le Crowdfunding
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {avantages.map((avantage, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-6 text-center">
                          <avantage.icon
                            className={`h-12 w-12 mx-auto mb-4 ${avantage.color}`}
                          />
                          <h4 className="font-bold text-lg mb-2">
                            {avantage.titre}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {avantage.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guide Investisseur */}
          <TabsContent value="investisseur" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <User className="h-8 w-8 text-blue-600" />
                  Comment Soutenir des Projets
                </CardTitle>
                <CardDescription>
                  Guide complet pour devenir un "Sprinter" et maximiser votre
                  impact
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {etapesInvestisseur.map((etape, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div
                        className={`w-12 h-12 rounded-full ${etape.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {etape.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <etape.icon className="h-6 w-6 text-gray-600 mt-1" />
                          <div>
                            <h3 className="font-bold text-xl">{etape.titre}</h3>
                            <p className="text-gray-600 font-medium">
                              {etape.description}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 ml-10">{etape.details}</p>
                        {index < etapesInvestisseur.length - 1 && (
                          <div className="flex justify-center mt-6">
                            <ArrowRight className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                {/* Stratégies Investisseur */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Stratégies de Sprinter Expérimenté
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">
                        🎯 Diversification intelligente
                      </h4>
                      <p>
                        Sélectionnez 5-10 projets dans différentes catégories
                        pour maximiser vos chances
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        📊 Suivez les tendances
                      </h4>
                      <p>
                        Projets à 70-80% ont plus de chances d'atteindre
                        l'objectif rapidement
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        🤝 Partagez vos favoris
                      </h4>
                      <p>
                        Plus un projet a de sprinters, plus il a de chances de
                        gagner
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">⚡ Agissez vite</h4>
                      <p>
                        Les projets HOT peuvent être financés en quelques heures
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guide Porteur */}
          <TabsContent value="porteur" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                  Comment Créer un Projet
                </CardTitle>
                <CardDescription>
                  Guide pour les "Coureurs" : maximisez vos chances de remporter
                  la course
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {etapesPorteur.map((etape, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div
                        className={`w-12 h-12 rounded-full ${etape.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                      >
                        {etape.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <etape.icon className="h-6 w-6 text-gray-600 mt-1" />
                          <div>
                            <h3 className="font-bold text-xl">{etape.titre}</h3>
                            <p className="text-gray-600 font-medium">
                              {etape.description}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 ml-10">{etape.details}</p>
                        {index < etapesPorteur.length - 1 && (
                          <div className="flex justify-center mt-6">
                            <ArrowRight className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                {/* Critères de Validation */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Critères de Validation
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Impact écologique positif et mesurable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Impact social ou communautaire fort</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Viabilité économique démontrée</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Équipe compétente et motivée</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Budget transparent et justifié</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-600" />
                      Stratégies Marketing Gagnantes
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">
                          🎯 "Ajoutez-nous à votre Sprint !"
                        </p>
                        <p>
                          Communication axée sur la sélection plutôt que le don
                          direct
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">📈 FOMO et urgence</p>
                        <p>
                          "On est à 75%, il ne manque que 25% pour gagner !"
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          🤝 Mobilisation communautaire
                        </p>
                        <p>
                          Réseau, réseaux sociaux, partenaires, influenceurs
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">
                          📊 Transparence totale
                        </p>
                        <p>Progression en temps réel, utilisation des fonds</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Créer Projet */}
                <div className="text-center mt-8">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 px-8 py-4"
                  >
                    <PlusCircle className="h-5 w-5 mr-2" />
                    Soumettre Mon Projet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Exemple Concret */}
          <TabsContent value="exemple" className="space-y-8">
            <Card className="border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Play className="h-8 w-8 text-green-600" />
                  Exemple Concret : Thomas et ses 5 Projets
                </CardTitle>
                <CardDescription className="text-lg">
                  Suivez un cas réel d'Impact Sprint étape par étape
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Mise en situation */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4">
                      💡 Mise en Situation
                    </h3>
                    <p className="text-gray-700">
                      Thomas, passionné d'environnement, dispose de 100€ qu'il
                      souhaite investir dans des projets durables. Au lieu de
                      choisir un seul projet, il décide d'utiliser Impact Sprint
                      pour maximiser ses chances d'impact.
                    </p>
                  </div>

                  {/* Les 5 projets */}
                  <div>
                    <h3 className="font-bold text-xl mb-6">
                      🎯 Les 5 Projets Sélectionnés par Thomas
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          nom: "Reforestation Amazonie",
                          progress: 45,
                          sprinters: 89,
                        },
                        {
                          nom: "Dépollution Méditerranée",
                          progress: 62,
                          sprinters: 134,
                        },
                        {
                          nom: "Énergies solaires village",
                          progress: 78,
                          sprinters: 203,
                        },
                        {
                          nom: "Anti-braconnage Afrique",
                          progress: 33,
                          sprinters: 67,
                        },
                        {
                          nom: "Mobilité douce ville",
                          progress: 51,
                          sprinters: 112,
                        },
                      ].map((projet, index) => (
                        <Card
                          key={index}
                          className={`hover:shadow-md transition-shadow ${
                            projet.nom === "Énergies solaires village"
                              ? "ring-2 ring-green-500 bg-green-50"
                              : ""
                          }`}
                        >
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-sm mb-2">
                              {projet.nom}
                            </h4>
                            <Progress
                              value={projet.progress}
                              className="h-2 mb-2"
                            />
                            <div className="flex justify-between text-xs text-gray-600">
                              <span>{projet.progress}%</span>
                              <span>{projet.sprinters} sprinters</span>
                            </div>
                            {projet.nom === "Énergies solaires village" && (
                              <Badge className="bg-green-500 text-white mt-2 text-xs">
                                🏆 GAGNANT !
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="font-bold text-xl mb-6">
                      ⏰ Chronologie de la Course
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          jour: "Jour 1",
                          action: "Thomas sélectionne ses 5 projets",
                          detail:
                            "Ses 100€ sont engagés virtuellement sur chacun",
                        },
                        {
                          jour: "Jour 3",
                          action: "Mobilisation communautaire",
                          detail:
                            "Chaque projet pousse sa communauté à les ajouter dans leur Sprint",
                        },
                        {
                          jour: "Jour 5",
                          action: "Le projet solaire prend la tête",
                          detail: "78% atteint, il ne manque plus que 22%",
                        },
                        {
                          jour: "Jour 7",
                          action: "🏆 VICTOIRE PROJET SOLAIRE",
                          detail:
                            "100% atteint ! Le projet reçoit tous les fonds engagés",
                        },
                      ].map((etape, index) => (
                        <div key={index} className="flex gap-4 items-start">
                          <div className="w-20 text-center">
                            <Badge variant="outline" className="text-xs">
                              {etape.jour}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{etape.action}</h4>
                            <p className="text-sm text-gray-600">
                              {etape.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Résultat */}
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-green-600" />
                      Résultat Final
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          ✅ Pour Thomas (Sprinter)
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>
                            • <strong>100€ prélevés</strong> une seule fois
                          </li>
                          <li>• Versés au projet solaire gagnant</li>
                          <li>• Ses 4 autres engagements annulés</li>
                          <li>• Impact concret garanti</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          🏆 Pour le Projet Solaire
                        </h4>
                        <ul className="text-sm space-y-1">
                          <li>
                            • <strong>100% financé</strong> rapidement
                          </li>
                          <li>• Fonds reçus immédiatement</li>
                          <li>• Projet peut démarrer</li>
                          <li>• Communauté mobilisée</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Lien vers exemple détaillé */}
                  <div className="text-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Link href="/projects/exemple">
                        <Eye className="h-5 w-5 mr-2" />
                        Voir l'Exemple Détaillé en Action
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Section Catégories */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              100 Projets Organisés en 6 Catégories
            </CardTitle>
            <CardDescription className="text-center">
              Tous les projets sont filtrés pour leur impact positif mesurable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{cat.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{cat.nom}</h3>
                    <Badge className="bg-blue-500">{cat.projets} projets</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  Découvrir Tous les Projets
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Prêt à Changer le Monde ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de Sprinters qui transforment leurs
            convictions en actions concrètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4"
            >
              🚀 Commencer Mon Sprint
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white px-8 py-4"
            >
              💡 Soumettre Mon Projet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
