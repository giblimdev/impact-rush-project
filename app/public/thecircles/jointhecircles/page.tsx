"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  CreditCard,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MessageCircle,
  Video,
  FileText,
  Coins,
  Globe,
  Mail,
  User,
  MapPin,
  Clock,
  Target,
  Lightbulb,
  Eye,
  Star,
} from "lucide-react";

const etapes = [
  { id: 1, titre: "Présentation", icon: Users },
  { id: 2, titre: "Profil", icon: User },
  { id: 3, titre: "Motivations", icon: Heart },
  { id: 4, titre: "Cercles", icon: Target },
  { id: 5, titre: "Paiement", icon: CreditCard },
  { id: 6, titre: "Confirmation", icon: CheckCircle },
];

const circlesDisponibles = [
  {
    id: "ecology",
    nom: "Écologie Urbaine Lyon",
    categorie: "Environnement",
    description: "Actions concrètes pour une ville plus verte",
    membres: 24,
    mode: "synchrone",
    prochainEvent: "2025-10-22",
    niveau: "Débutant friendly",
    tags: ["Permaculture", "Urbain", "Local"],
  },
  {
    id: "tech",
    nom: "Tech for Good Paris",
    categorie: "Technologie Éthique",
    description: "Développer une tech au service de l'humain",
    membres: 18,
    mode: "asynchrone",
    prochainEvent: "2025-10-25",
    niveau: "Intermédiaire",
    tags: ["IA Éthique", "Open Source", "Innovation"],
  },
  {
    id: "social",
    nom: "Solidarité Quartier",
    categorie: "Social & Insertion",
    description: "Créer du lien social dans nos quartiers",
    membres: 31,
    mode: "synchrone",
    prochainEvent: "2025-10-20",
    niveau: "Tous niveaux",
    tags: ["Communauté", "Entraide", "Local"],
  },
  {
    id: "education",
    nom: "Éducation Alternative",
    categorie: "Éducation & Savoirs",
    description: "Repenser l'apprentissage pour tous",
    membres: 28,
    mode: "asynchrone",
    prochainEvent: "2025-10-23",
    niveau: "Avancé",
    tags: ["Pédagogie", "Innovation", "Enfance"],
  },
];

export default function RejoindreCirclesPage() {
  const [etapeActuelle, setEtapeActuelle] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 2 - Profil
    prenom: "",
    nom: "",
    email: "",
    ville: "",
    age: "",
    profession: "",

    // Étape 3 - Motivations
    motivation: "",
    valeursPrincipales: [] as string[],
    experienceCollaborative: "",
    tempsDisponible: "",

    // Étape 4 - Cercles
    circlesChoisis: [] as string[],
    modePreference: "",
    competences: "",

    // Conditions
    accepteCharte: false,
    accepteCotisation: false,
    accepteRGPD: false,
  });

  const progressPercent = (etapeActuelle / etapes.length) * 100;

  const handleNext = () => {
    if (etapeActuelle < etapes.length) {
      setEtapeActuelle(etapeActuelle + 1);
    }
  };

  const handlePrev = () => {
    if (etapeActuelle > 1) {
      setEtapeActuelle(etapeActuelle - 1);
    }
  };

  const handleCircleSelection = (circleId: string) => {
    const newSelection = formData.circlesChoisis.includes(circleId)
      ? formData.circlesChoisis.filter((id) => id !== circleId)
      : [...formData.circlesChoisis, circleId];

    setFormData({ ...formData, circlesChoisis: newSelection });
  };

  const handleValeurSelection = (valeur: string) => {
    const newSelection = formData.valeursPrincipales.includes(valeur)
      ? formData.valeursPrincipales.filter((v) => v !== valeur)
      : [...formData.valeursPrincipales, valeur];

    setFormData({ ...formData, valeursPrincipales: newSelection });
  };

  const canProceed = () => {
    switch (etapeActuelle) {
      case 2:
        return (
          formData.prenom && formData.nom && formData.email && formData.ville
        );
      case 3:
        return formData.motivation && formData.valeursPrincipales.length > 0;
      case 4:
        return formData.circlesChoisis.length > 0 && formData.modePreference;
      case 5:
        return (
          formData.accepteCharte &&
          formData.accepteCotisation &&
          formData.accepteRGPD
        );
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header avec Progress */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                Rejoindre The Circles
              </h1>
              <Badge variant="outline">
                Étape {etapeActuelle} sur {etapes.length}
              </Badge>
            </div>

            <Progress value={progressPercent} className="h-2" />

            <div className="flex items-center justify-between text-sm">
              {etapes.map((etape) => (
                <div
                  key={etape.id}
                  className={`flex items-center gap-2 ${
                    etape.id === etapeActuelle
                      ? "text-blue-600 font-semibold"
                      : etape.id < etapeActuelle
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
                >
                  <etape.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{etape.titre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Étape 1 - Présentation */}
        {etapeActuelle === 1 && (
          <Card className="border-2 border-blue-200">
            <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
              <Users className="h-16 w-16 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-3xl">
                Bienvenue dans The Circles !
              </CardTitle>
              <CardDescription className="text-lg">
                Vous êtes sur le point de rejoindre une communauté engagée pour
                un monde plus éthique et durable.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <Heart className="h-12 w-12 mx-auto text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Valeurs Partagées</h3>
                  <p className="text-sm text-gray-600">
                    Éthique, solidarité, durabilité, transparence
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Target className="h-12 w-12 mx-auto text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Action Concrète</h3>
                  <p className="text-sm text-gray-600">
                    Projets réels financés collectivement
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <Users className="h-12 w-12 mx-auto text-orange-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">
                    Gouvernance Partagée
                  </h3>
                  <p className="text-sm text-gray-600">
                    Décisions collectives, rôles tournants
                  </p>
                </div>
              </div>

              <Separator />

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  Engagement Financier
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      10€/mois
                    </div>
                    <p className="text-sm text-gray-600">
                      Cotisation transparente et accessible
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Frais de fonctionnement</span>
                      <Badge className="bg-blue-500">20%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Financement projets</span>
                      <Badge className="bg-green-500">80%</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Le processus d'inscription prend environ 5 minutes. Vous
                  pourrez annuler votre adhésion à tout moment.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 2 - Profil */}
        {etapeActuelle === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-6 w-6 text-blue-600" />
                Votre Profil
              </CardTitle>
              <CardDescription>
                Ces informations nous aident à mieux vous connaître et à
                faciliter les échanges.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) =>
                      setFormData({ ...formData, prenom: e.target.value })
                    }
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData({ ...formData, nom: e.target.value })
                    }
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ville">Ville/Région *</Label>
                  <Input
                    id="ville"
                    value={formData.ville}
                    onChange={(e) =>
                      setFormData({ ...formData, ville: e.target.value })
                    }
                    placeholder="Paris, Lyon, Toulouse..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Âge (optionnel)</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, age: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25 ans</SelectItem>
                      <SelectItem value="26-35">26-35 ans</SelectItem>
                      <SelectItem value="36-45">36-45 ans</SelectItem>
                      <SelectItem value="46-55">46-55 ans</SelectItem>
                      <SelectItem value="56+">56+ ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession">
                  Profession/Domaine (optionnel)
                </Label>
                <Input
                  id="profession"
                  value={formData.profession}
                  onChange={(e) =>
                    setFormData({ ...formData, profession: e.target.value })
                  }
                  placeholder="Votre domaine d'activité"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 3 - Motivations */}
        {etapeActuelle === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-600" />
                Vos Motivations
              </CardTitle>
              <CardDescription>
                Aidez-nous à comprendre ce qui vous anime et vos valeurs
                principales.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="motivation">
                  Qu'est-ce qui vous motive à rejoindre The Circles ? *
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) =>
                    setFormData({ ...formData, motivation: e.target.value })
                  }
                  placeholder="Partagez vos motivations, vos aspirations, ce que vous aimeriez apporter et recevoir..."
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <Label>
                  Quelles valeurs vous tiennent le plus à cœur ? (3 maximum) *
                </Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Éthique & Intégrité",
                    "Solidarité & Entraide",
                    "Durabilité & Écologie",
                    "Transparence & Ouverture",
                    "Innovation & Créativité",
                    "Justice & Équité",
                    "Coopération & Partage",
                    "Respect & Bienveillance",
                  ].map((valeur) => (
                    <div key={valeur} className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.valeursPrincipales.includes(valeur)}
                        onCheckedChange={() => handleValeurSelection(valeur)}
                        disabled={
                          formData.valeursPrincipales.length >= 3 &&
                          !formData.valeursPrincipales.includes(valeur)
                        }
                      />
                      <Label
                        className={`cursor-pointer ${
                          formData.valeursPrincipales.includes(valeur)
                            ? "font-semibold text-blue-600"
                            : ""
                        }`}
                      >
                        {valeur}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>
                  Avez-vous déjà participé à des projets collaboratifs ou
                  associatifs ?
                </Label>
                <RadioGroup
                  value={formData.experienceCollaborative}
                  onValueChange={(value) =>
                    setFormData({ ...formData, experienceCollaborative: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oui-beaucoup" id="exp-beaucoup" />
                    <Label htmlFor="exp-beaucoup">Oui, régulièrement</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oui-parfois" id="exp-parfois" />
                    <Label htmlFor="exp-parfois">Oui, occasionnellement</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="non-mais-interesse"
                      id="exp-interesse"
                    />
                    <Label htmlFor="exp-interesse">
                      Non, mais très intéressé(e)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="debutant" id="exp-debutant" />
                    <Label htmlFor="exp-debutant">
                      C'est ma première expérience
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>
                  Combien de temps pouvez-vous consacrer aux cercles par mois ?
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, tempsDisponible: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir votre disponibilité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-4h">2-4 heures</SelectItem>
                    <SelectItem value="4-8h">4-8 heures</SelectItem>
                    <SelectItem value="8-15h">8-15 heures</SelectItem>
                    <SelectItem value="15h+">Plus de 15 heures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 4 - Choix des Cercles */}
        {etapeActuelle === 4 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-purple-600" />
                Choisir Vos Cercles
              </CardTitle>
              <CardDescription>
                Sélectionnez un ou plusieurs cercles qui vous intéressent. Vous
                pourrez en rejoindre d'autres plus tard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-6">
                {circlesDisponibles.map((circle) => (
                  <Card
                    key={circle.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      formData.circlesChoisis.includes(circle.id)
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => handleCircleSelection(circle.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Checkbox
                          checked={formData.circlesChoisis.includes(circle.id)}
                          onChange={() => {}}
                          className="mt-1"
                        />
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-lg">{circle.nom}</h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{circle.niveau}</Badge>
                              <Badge
                                className={
                                  circle.mode === "synchrone"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                                }
                              >
                                {circle.mode === "synchrone" ? (
                                  <>
                                    <Video className="h-3 w-3 mr-1" /> Synchrone
                                  </>
                                ) : (
                                  <>
                                    <FileText className="h-3 w-3 mr-1" />{" "}
                                    Asynchrone
                                  </>
                                )}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-gray-600">{circle.description}</p>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4 text-blue-600" />
                                {circle.membres} membres
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-green-600" />
                                Prochain:{" "}
                                {new Date(
                                  circle.prochainEvent
                                ).toLocaleDateString("fr-FR")}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {circle.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>
                  Avez-vous une préférence pour le mode de participation ?
                </Label>
                <RadioGroup
                  value={formData.modePreference}
                  onValueChange={(value) =>
                    setFormData({ ...formData, modePreference: value })
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="synchrone" id="mode-sync" />
                    <Label
                      htmlFor="mode-sync"
                      className="flex items-center gap-2"
                    >
                      <Video className="h-4 w-4" />
                      Synchrone (réunions visio en direct)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asynchrone" id="mode-async" />
                    <Label
                      htmlFor="mode-async"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Asynchrone (échanges écrits, plus flexible)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mixte" id="mode-mixte" />
                    <Label htmlFor="mode-mixte">Les deux me conviennent</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label htmlFor="competences">
                  Compétences ou expériences que vous aimeriez partager
                  (optionnel)
                </Label>
                <Textarea
                  id="competences"
                  value={formData.competences}
                  onChange={(e) =>
                    setFormData({ ...formData, competences: e.target.value })
                  }
                  placeholder="Ex: gestion de projet, développement web, permaculture, facilitation, comptabilité..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 5 - Paiement et Conditions */}
        {etapeActuelle === 5 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-green-600" />
                Finalisation
              </CardTitle>
              <CardDescription>
                Dernière étape : acceptation des conditions et mise en place du
                paiement.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Récapitulatif */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h3 className="font-bold text-lg mb-4">
                  Récapitulatif de votre adhésion
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Profil</h4>
                    <p className="text-sm text-gray-600">
                      {formData.prenom} {formData.nom}
                      <br />
                      {formData.email}
                      <br />
                      {formData.ville}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cercles choisis</h4>
                    <div className="space-y-1">
                      {formData.circlesChoisis.map((circleId) => {
                        const circle = circlesDisponibles.find(
                          (c) => c.id === circleId
                        );
                        return (
                          <Badge
                            key={circleId}
                            variant="outline"
                            className="mr-1"
                          >
                            {circle?.nom}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cotisation */}
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Cotisation mensuelle</h3>
                  <div className="text-3xl font-bold text-green-600">10€</div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Frais de fonctionnement (20%)</span>
                    <span className="font-semibold">2€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Financement projets (80%)</span>
                    <span className="font-semibold">8€</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Paiement sécurisé par Stripe. Annulation possible à tout
                  moment.
                </p>
              </div>

              {/* Conditions */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg">
                  Acceptation des conditions
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.accepteCharte}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, accepteCharte: !!checked })
                      }
                      className="mt-1"
                    />
                    <div>
                      <Label className="cursor-pointer">
                        J'accepte la charte The Circles et m'engage à respecter
                        ses valeurs *
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">
                        <a
                          href="/charte"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                        >
                          Lire la charte complète
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.accepteCotisation}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          accepteCotisation: !!checked,
                        })
                      }
                      className="mt-1"
                    />
                    <Label className="cursor-pointer">
                      J'accepte de régler une cotisation mensuelle de 10€ et
                      comprends sa répartition *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.accepteRGPD}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, accepteRGPD: !!checked })
                      }
                      className="mt-1"
                    />
                    <div>
                      <Label className="cursor-pointer">
                        J'accepte le traitement de mes données personnelles
                        selon le RGPD *
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">
                        Vos données ne seront jamais vendues ni partagées avec
                        des tiers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 6 - Confirmation */}
        {etapeActuelle === 6 && (
          <Card className="border-2 border-green-200">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-24 w-24 mx-auto text-green-600 mb-6" />
              <h2 className="text-3xl font-bold text-green-900 mb-4">
                Félicitations ! 🎉
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Vous faites maintenant partie de The Circles !
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4">
                  Vos prochaines étapes :
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Email de confirmation envoyé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Invitation aux cercles choisis dans 24h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span>Prochaines réunions dans votre agenda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <span>Accès à la plateforme communautaire</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Accéder à Mon Espace
                </Button>
                <Button size="lg" variant="outline">
                  Découvrir la Communauté
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Un email avec tous les détails vous a été envoyé à{" "}
                {formData.email}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        {etapeActuelle < 6 && (
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={etapeActuelle === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              {etapeActuelle === 5 ? "Finaliser mon adhésion" : "Suivant"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
