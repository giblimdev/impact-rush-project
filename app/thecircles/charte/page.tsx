"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Heart,
  Shield,
  TreePine,
  Lightbulb,
  Eye,
  Users,
  CheckCircle,
  FileText,
  Scale,
  Coins,
  RotateCcw,
  Calendar,
  MessageCircle,
  ArrowRight,
  Download,
  UserCheck,
  Handshake,
  Globe,
  Target,
} from "lucide-react";

const valeursFondamentales = [
  {
    icon: Shield,
    nom: "Éthique",
    description:
      "Agir de manière honnête, responsable et transparente dans toutes nos interactions.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Heart,
    nom: "Solidarité",
    description:
      "Soutenir les autres membres et favoriser la coopération plutôt que la compétition.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: TreePine,
    nom: "Durabilité",
    description:
      "Privilégier les projets et pratiques respectueux de l'environnement et du vivant.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Lightbulb,
    nom: "Ouverture d'esprit",
    description:
      "Écouter, apprendre, débattre sans juger, dans un esprit de curiosité bienveillante.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Eye,
    nom: "Transparence",
    description:
      "Partager les décisions, les actions et les fonds de manière claire et traçable.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    nom: "Participation active",
    description:
      "Contribuer à la vie collective, aux décisions et aux actions concrètes.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const roles = [
  {
    icon: "🧭",
    nom: "Facilitateur",
    mission:
      "Anime les réunions/sprints, veille au respect du cadre et du temps de parole",
    duree: "1 mois",
    color: "border-blue-200 bg-blue-50",
  },
  {
    icon: "✍️",
    nom: "Secrétaire",
    mission: "Rédige les comptes-rendus et assure la publication sur le blog",
    duree: "1 mois",
    color: "border-green-200 bg-green-50",
  },
  {
    icon: "💡",
    nom: "Référent Projet",
    mission:
      "Coordonne le projet choisi par le cercle et en suit la mise en œuvre",
    duree: "Jusqu'à réalisation",
    color: "border-orange-200 bg-orange-50",
  },
  {
    icon: "🕊️",
    nom: "Gardien du Cadre Éthique",
    mission:
      "Veille au respect des valeurs, du cadre de parole et de la bienveillance",
    duree: "1 mois",
    color: "border-purple-200 bg-purple-50",
  },
];

const engagements = [
  "Avoir pris connaissance et accepté la présente charte",
  "Respecter les valeurs, le cadre et les décisions collectives",
  "Contribuer à la communauté avec respect, bienveillance et transparence",
  "Verser ma cotisation mensuelle en conscience et selon mes moyens",
  "Participer activement à la construction d'un monde plus éthique, collectif et durable",
];

export default function ChartePage() {
  const [checkedEngagements, setCheckedEngagements] = useState<boolean[]>(
    new Array(engagements.length).fill(false)
  );
  const [allAccepted, setAllAccepted] = useState(false);

  const handleEngagementCheck = (index: number) => {
    const newChecked = [...checkedEngagements];
    newChecked[index] = !newChecked[index];
    setCheckedEngagements(newChecked);
    setAllAccepted(newChecked.every((checked) => checked));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Scale className="h-6 w-6" />
              <span className="text-lg font-semibold">CHARTE OFFICIELLE</span>
              <Scale className="h-6 w-6" />
            </div>

            <h1 className="text-5xl md:text-6xl font-black">
              Charte <span className="text-yellow-300">The Circles</span>
            </h1>

            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto">
              <blockquote className="text-xl md:text-2xl italic text-center font-light">
                "Réfléchir ensemble, décider collectivement, agir concrètement."
              </blockquote>
            </div>

            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Notre engagement commun vers une société plus juste, éthique et
              durable. Cette charte définit nos valeurs, nos droits et nos
              devoirs collectifs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Navigation Rapide */}
        <div className="mb-12">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Sommaire de la Charte
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { titre: "Valeurs", icon: Heart },
                  { titre: "Fonctionnement", icon: RotateCcw },
                  { titre: "Gouvernance", icon: Users },
                  { titre: "Engagement", icon: Handshake },
                ].map((section) => (
                  <Button
                    key={section.titre}
                    variant="outline"
                    className="flex items-center gap-2 justify-start"
                    onClick={() =>
                      document
                        .getElementById(section.titre.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <section.icon className="h-4 w-4" />
                    {section.titre}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="vision" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
            <TabsTrigger value="valeurs">Valeurs</TabsTrigger>
            <TabsTrigger value="fonctionnement">Fonctionnement</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          {/* Vision & Mission */}
          <TabsContent value="vision" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="h-8 w-8 text-blue-600" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Vision */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-xl mb-4 text-blue-900">
                    🧭 Notre Vision
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Créer une communauté en ligne où les individus peuvent
                    réfléchir ensemble au sens et à l'impact de leurs actions
                    dans la société moderne, puis agir collectivement pour bâtir
                    un monde plus humain, éthique et durable.
                  </p>
                </div>

                {/* Mission */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-xl mb-4 text-green-900">
                    💡 Notre Mission
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Favoriser des discussions profondes sur les grands thèmes de notre époque",
                      "Encourager la création de projets à impact positif",
                      "Mettre en place une gouvernance participative et transparente",
                      "Financer collectivement des initiatives éthiques et durables",
                    ].map((mission, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{mission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Valeurs */}
          <TabsContent value="valeurs" id="valeurs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="h-8 w-8 text-red-600" />
                  Nos Valeurs Fondamentales
                </CardTitle>
                <CardDescription>
                  Les principes qui guident toutes nos actions et décisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {valeursFondamentales.map((valeur) => (
                    <Card
                      key={valeur.nom}
                      className={`${valeur.bgColor} border-2 hover:shadow-lg transition-shadow`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full bg-white shadow-sm`}
                          >
                            <valeur.icon
                              className={`h-6 w-6 ${valeur.color}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">
                              {valeur.nom}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {valeur.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fonctionnement */}
          <TabsContent
            value="fonctionnement"
            id="fonctionnement"
            className="space-y-8"
          >
            {/* Rôles de Gouvernance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <RotateCcw className="h-8 w-8 text-purple-600" />
                  Rôles de Gouvernance
                </CardTitle>
                <CardDescription>
                  Rôles tournants pour favoriser l'apprentissage collectif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {roles.map((role) => (
                    <Card key={role.nom} className={`${role.color} border-2`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{role.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-lg">{role.nom}</h3>
                              <Badge variant="outline" className="text-xs">
                                {role.duree}
                              </Badge>
                            </div>
                            <p className="text-gray-700 text-sm">
                              {role.mission}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <RotateCcw className="h-5 w-5 text-purple-600" />
                    <h3 className="font-bold text-lg">Principe de Rotation</h3>
                  </div>
                  <p className="text-gray-700">
                    Les rôles sont renouvelés chaque mois pour permettre à
                    chaque membre d'acquérir de nouvelles compétences et
                    d'éviter la concentration du pouvoir. Cette rotation
                    favorise l'engagement et l'apprentissage collectif.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modes de Participation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  Modes de Participation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Mode Synchrone */}
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Mode Synchrone
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Réunions mensuelles</strong> en visioconférence
                        (60-90 min)
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Ordre du jour :</p>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Synthèse du meeting précédent</li>
                          <li>• Suivi des actions entreprises</li>
                          <li>• Exposé thématique</li>
                          <li>• Temps de parole individuel</li>
                          <li>• Décisions sur l'affectation des fonds</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Mode Asynchrone */}
                  <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      Mode Asynchrone
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Sprints mensuels</strong> sur blog collaboratif
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Processus :</p>
                        <ul className="space-y-1 text-gray-600 ml-4">
                          <li>• Bilan du sprint précédent</li>
                          <li>• Contributions thématiques</li>
                          <li>• Échanges et débats écrits</li>
                          <li>• Votes sur les décisions</li>
                          <li>• Publication synthèse finale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Coins className="h-6 w-6 text-yellow-600" />
                  Financement Transparent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Cotisation Mensuelle</h3>
                    <div className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                      <div className="text-4xl font-black text-yellow-600 mb-2">
                        10€
                      </div>
                      <div className="text-sm text-gray-600">
                        par membre et par mois
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Répartition</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm">Frais de fonctionnement</span>
                        <Badge className="bg-blue-500">20%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm">Projets collectifs</span>
                        <Badge className="bg-green-500">80%</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-sm">
                      Transparence Totale
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Toutes les décisions financières et dépenses sont publiées
                    et consultables par tous les membres.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Engagement */}
          <TabsContent value="engagement" id="engagement" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Handshake className="h-8 w-8 text-green-600" />
                  Mon Engagement de Membre
                </CardTitle>
                <CardDescription>
                  En adhérant à The Circles, je m'engage à respecter ces
                  principes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {engagements.map((engagement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg"
                    >
                      <Checkbox
                        checked={checkedEngagements[index]}
                        onCheckedChange={() => handleEngagementCheck(index)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <p
                          className={`text-sm leading-relaxed ${
                            checkedEngagements[index]
                              ? "text-green-700 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          ✅ {engagement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-8" />

                {/* Signature Numérique */}
                <div className="space-y-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-blue-600" />
                    Validation de mon Engagement
                  </h3>

                  <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <blockquote className="text-center italic text-lg text-gray-700 mb-4">
                      "Seul on va plus vite, ensemble on va plus loin et on
                      transforme vraiment le monde."
                    </blockquote>

                    <div className="text-center">
                      <Button
                        size="lg"
                        disabled={!allAccepted}
                        className={`px-8 py-4 text-lg font-bold ${
                          allAccepted
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-gray-400"
                        }`}
                      >
                        {allAccepted ? (
                          <>
                            <CheckCircle className="h-5 w-5 mr-2" />
                            J'accepte la Charte et je Rejoins The Circles
                          </>
                        ) : (
                          <>Veuillez cocher tous les engagements</>
                        )}
                      </Button>
                    </div>

                    {allAccepted && (
                      <div className="mt-4 text-center text-sm text-green-600">
                        <p>
                          🎉 Félicitations ! Vous êtes prêt(e) à rejoindre notre
                          communauté.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Actions */}
        <div className="mt-16 text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Télécharger la Charte PDF
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a
                href="/thecircles/rejoindre"
                className="flex items-center gap-2"
              >
                Rejoindre The Circles
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Cette charte constitue notre engagement mutuel vers une société plus
            juste et durable.
          </p>
        </div>
      </div>
    </div>
  );
}
