// @/app/admin/page.tsx
/*
🛠️ Page d'administration - Impact Rush
Gestion des catégories, tags et types de contenu
*/

"use client";

import React, { useState } from "react";
import {
  Settings,
  BookOpen,
  Rocket,
  Users,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Tag,
  FolderOpen,
  Target,
  Shield,
} from "lucide-react";

// Données initiales basées sur votre architecture
const initialData = {
  blogCategories: [
    {
      id: 1,
      name: "Lifestyle & Bien-être",
      slug: "lifestyle",
      description: "Articles sur le mode de vie durable",
      color: "green",
    },
    {
      id: 2,
      name: "Technologie & Innovation",
      slug: "technologie",
      description: "Nouveautés technologiques pour l'impact",
      color: "blue",
    },
    {
      id: 3,
      name: "Spiritualité & Conscience",
      slug: "spiritualite",
      description: "Explorations de la conscience et de la spiritualité",
      color: "purple",
    },
    {
      id: 4,
      name: "Développement Personnel",
      slug: "developpement",
      description: "Croissance et épanouissement personnel",
      color: "orange",
    },
    {
      id: 5,
      name: "Société & Culture",
      slug: "societe",
      description: "Analyses culturelles et sociales",
      color: "indigo",
    },
    {
      id: 6,
      name: "Entrepreneuriat & Carrière",
      slug: "carriere",
      description: "Conseils pour entrepreneurs à impact",
      color: "emerald",
    },
    {
      id: 7,
      name: "Sciences & Environnement",
      slug: "sciences",
      description: "Découvertes scientifiques et enjeux environnementaux",
      color: "teal",
    },
    {
      id: 8,
      name: "Art, Voyage & Création",
      slug: "art",
      description: "Inspiration artistique et aventures créatives",
      color: "pink",
    },
  ],

  blogTags: [
    {
      id: 1,
      name: "Débutant",
      description: "Contenu adapté aux débutants",
      type: "objectif",
    },
    {
      id: 2,
      name: "GuidePratique",
      description: "Tutoriels et guides étape par étape",
      type: "objectif",
    },
    {
      id: 3,
      name: "Minimalisme",
      description: "Approche minimaliste et essentielle",
      type: "theme",
    },
    {
      id: 4,
      name: "Mindfulness",
      description: "Pleine conscience et méditation",
      type: "theme",
    },
    {
      id: 5,
      name: "Étudiants",
      description: "Contenu spécifique pour étudiants",
      type: "public",
    },
    {
      id: 6,
      name: "Entrepreneurs",
      description: "Ressources pour entrepreneurs",
      type: "public",
    },
    {
      id: 7,
      name: "5Minutes",
      description: "Actions rapides en 5 minutes",
      type: "effort",
    },
    {
      id: 8,
      name: "RoutineQuotidienne",
      description: "Habits et routines quotidiennes",
      type: "effort",
    },
  ],

  projectTypes: [
    {
      id: 1,
      name: "Don Participatif",
      status: "active",
      description: "Contribution libre avec contreparties",
    },
    {
      id: 2,
      name: "Impact Sprint",
      status: "active",
      description: "Course de financement innovante",
    },
    {
      id: 3,
      name: "Investissement (Equity)",
      status: "soon",
      description: "Participation au capital",
    },
    {
      id: 4,
      name: "Prêt Participatif",
      status: "soon",
      description: "Financement avec remboursement",
    },
    {
      id: 5,
      name: "Cagnotte (Kitty)",
      status: "draft",
      description: "Collecte simple sans contrepartie",
    },
  ],

  projectCategories: [
    {
      id: 1,
      name: "Art & Création",
      description: "Projets artistiques et créatifs",
      icon: "🎨",
      subcategories: [
        "Art visuel",
        "Photographie",
        "BD & Manga",
        "Design",
        "Mode & Stylisme",
        "Artisanat",
        "Danse & Chorégraphie",
        "Théâtre & Performance",
      ],
    },
    {
      id: 2,
      name: "Médias & Contenus",
      description: "Création et diffusion de contenus",
      icon: "🎬",
      subcategories: [
        "Cinéma & Vidéo",
        "Musique & Audio",
        "Édition & Livre",
        "Journalisme",
        "Podcast & Radio",
        "Création de contenus",
        "Spectacle vivant",
      ],
    },
    {
      id: 3,
      name: "Technologie & Innovation",
      description: "Projets tech et innovations digitales",
      icon: "💻",
      subcategories: [
        "Applications & Logiciels",
        "Jeux vidéo & eSport",
        "IA & Robotique",
        "Blockchain & Web3",
        "Objets connectés",
        "Tech durable",
      ],
    },
    {
      id: 4,
      name: "Social & Citoyen",
      description: "Initiatives sociales et solidaires",
      icon: "🤝",
      subcategories: [
        "Solidarité & Entraide",
        "Éducation & Formation",
        "Enfance & Jeunesse",
        "Inclusion & Diversité",
        "Droits humains",
        "Action citoyenne",
        "Urgence personnelle",
        "Obsèques",
        "Autre projet solidaire",
      ],
    },
    {
      id: 5,
      name: "Environnement & Écologie",
      description: "Projets écologiques et protection de la planète",
      icon: "🌱",
      subcategories: [
        "Agriculture durable",
        "Énergies renouvelables",
        "Biodiversité",
        "Recyclage & Zéro déchet",
        "Mobilité durable",
        "Conservation naturelle",
        "Protection animale",
      ],
    },
    {
      id: 6,
      name: "Culture & Patrimoine",
      description: "Valorisation culturelle et patrimoniale",
      icon: "🏛️",
      subcategories: [
        "Patrimoine historique",
        "Musées & Expositions",
        "Traditions locales",
        "Archéologie",
        "Restoration",
        "Culture populaire",
      ],
    },
    {
      id: 7,
      name: "Loisirs & Divertissement",
      description: "Projets ludiques et récréatifs",
      icon: "🎮",
      subcategories: [
        "Jeux & Jouets",
        "Sports & Activités",
        "Événements & Festivals",
        "Lieux culturels",
        "Gastronomie & Cuisine",
        "Tourisme & Découverte",
      ],
    },
    {
      id: 8,
      name: "Tourismze & Découverte",
      description: "Projets pour la santé et le bien-être",
      icon: "❤️",
      subcategories: [
        "europe",
        "asie ",
        "Fitness & Sport-santé",
        "aventure",
        "sejour romentique",
      ],
    },
    {
      id: 9,
      name: "Santé & Bien-être",
      description: "Projets pour la santé et le bien-être",
      icon: "❤️",
      subcategories: [
        "Santé mentale",
        "Médecine alternative",
        "Fitness & Sport-santé",
        "Nutrition",
        "Prévention",
        "Accompagnement",
        "Urgence médicale",
        "Soins de santé",
      ],
    },
    {
      id: 9,
      name: "Économie & Entrepreneuriat",
      description: "Projets économiques innovants",
      icon: "💼",
      subcategories: [
        "Économie circulaire",
        "Commerce local",
        "ESS & Coopératives",
        "Innovation sociale",
        "Micro-entrepreneuriat",
        "Lieux partagés",
      ],
    },
    {
      id: 10,
      name: "Éducation & Savoirs",
      description: "Projets éducatifs et de transmission",
      icon: "📚",
      subcategories: [
        "Éducation formelle",
        "Formation continue",
        "Ateliers & Workshops",
        "Pédagogie innovante",
        "Transmission de savoirs",
        "Éducation populaire",
      ],
    },
    {
      id: 11,
      name: "Animaux & Protection",
      description: "Projets pour la protection et le bien-être animal",
      icon: "🐾",
      subcategories: [
        "Protection animale",
        "Refuges & Sauvetage",
        "Bien-être animal",
        "Conservation des espèces",
        "Élevage éthique",
        "Médecine vétérinaire",
      ],
    },
    {
      id: 12,

      name: "Transhumanisme & Futur",
      description:
        "Exploration des limites humaines et technologies d'augmentation",
      icon: "🔬",
      subcategories: [
        "Longévité & Anti-aging",
        "IA & Conscience artificielle",
        "Biohacking & Enhancement",
        "Futurisme & Prospective",
        "Éthique transhumaniste",
        "Cyborg & Interfaces",
      ],
    },
    {
      id: 13,

      name: "Spiritualité & Transcendance",
      description:
        "Exploration spirituelle, méditation et développement de la conscience",
      icon: "🕊️",
      subcategories: [
        "Franc-Maçonnerie & Ordres initiatiques",
        "Méditation & Pleine conscience",
        "Philosophie spirituelle",
        "Développement intuition",
        "Rituels & Traditions",
        "Éveil de conscience",
        "Science & Spiritualité",
      ],
    },
  ],

  circleTypes: [
    {
      id: 1,
      name: "Art & Création",
      description:
        "Cercles dédiés aux arts et à la création sous toutes ses formes",
      subcategories: [
        "Arts visuels",
        "Écriture créative",
        "Musique & Composition",
        "Artisanat & Savoir-faire",
        "Design & Architecture",
        "Mode & Textile",
      ],
    },
    {
      id: 2,
      name: "Technologie & Innovation",
      description:
        "Cercles explorant les technologies émergentes et leurs impacts",
      subcategories: [
        "IA & Machine Learning",
        "Blockchain & Crypto",
        "Tech durable",
        "Open Source",
        "Cybersécurité",
        "Innovation sociale",
      ],
    },
    {
      id: 3,
      name: "Environnement & Écologie",
      description: "Cercles engagés pour la protection de l'environnement",
      subcategories: [
        "Transition écologique",
        "Biodiversité",
        "Énergies renouvelables",
        "Agriculture durable",
        "Mobilité verte",
        "Consommation responsable",
        "Protection animale",
      ],
    },
    {
      id: 4,
      name: "Social & Solidarité",
      description: "Cercles axés sur l'action sociale et la solidarité",
      subcategories: [
        "Inclusion & Diversité",
        "Précarité & Insertion",
        "Éducation populaire",
        "Santé communautaire",
        "Droits humains",
        "Médiation sociale",
        "Urgence & Entraide",
        "Soutien personnel",
      ],
    },
    {
      id: 5,
      name: "Culture & Patrimoine",
      description:
        "Cercles dédiés à la culture et à la préservation du patrimoine",
      subcategories: [
        "Patrimoine historique",
        "Cultures du monde",
        "Langues & Traditions",
        "Archéologie",
        "Mémoire collective",
        "Tourisme culturel",
      ],
    },
    {
      id: 6,
      name: "Éducation & Savoirs",
      description: "Cercles sur l'éducation et le partage des connaissances",
      subcategories: [
        "Pédagogies alternatives",
        "Formation continue",
        "Recherche & Science",
        "Éducation numérique",
        "Transmission intergénérationnelle",
        "Savoir-faire locaux",
      ],
    },
    {
      id: 7,
      name: "Économie Alternative",
      description: "Cercles explorant les modèles économiques innovants",
      subcategories: [
        "Économie circulaire",
        "Monnaies locales",
        "Coopératives",
        "Consommation collaborative",
        "Finance solidaire",
        "Circuits courts",
      ],
    },
    {
      id: 8,
      name: "Santé & Bien-être",
      description: "Cercles dédiés à la santé physique et mentale",
      subcategories: [
        "Santé holistique",
        "Prévention santé",
        "Bien-être au travail",
        "Médecines douces",
        "Sport & Activité physique",
        "Alimentation saine",
        "Urgence médicale",
        "Soutien santé",
      ],
    },
    {
      id: 9,
      name: "Médias & Communication",
      description: "Cercles sur la création médiatique et la communication",
      subcategories: [
        "Journalisme citoyen",
        "Création audiovisuelle",
        "Édition indépendante",
        "Médias libres",
        "Communication non-violente",
        "Éducation aux médias",
      ],
    },
    {
      id: 10,
      name: "Animaux & Protection",
      description: "Cercles dédiés à la protection et au bien-être animal",
      subcategories: [
        "Protection animale",
        "Bien-être animal",
        "Conservation des espèces",
        "Éthique animale",
        "Médecine vétérinaire",
        "Sauvetage animalier",
      ],
    },
  ],
};

export default function AdminPage() {
  const [data, setData] = useState(initialData);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [newItem, setNewItem] = useState<any>({});

  const handleEdit = (item: any, category: any) => {
    setEditingItem({ ...item, category });
  };

  const handleSave = () => {
    // Logique de sauvegarde à implémenter
    setEditingItem(null);
    setNewItem({});
  };

  type DataType = typeof initialData;
  type DataKey = keyof DataType;

  const handleDelete = (id: number, category: DataKey) => {
    setData((prev) => {
      const list = prev[category] as { id: number }[];
      return {
        ...prev,
        [category]: list.filter((item) => item.id !== id),
      };
    });
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      green: "bg-green-100 text-green-800 border-green-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
      emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
      teal: "bg-teal-100 text-teal-800 border-teal-200",
      pink: "bg-pink-100 text-pink-800 border-pink-200",
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Fonction corrigée pour les points de couleur
  const getColorDotClass = (color: string) => {
    const colorDots: Record<string, string> = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      indigo: "bg-indigo-500",
      emerald: "bg-emerald-500",
      teal: "bg-teal-500",
      pink: "bg-pink-500",
    };
    return colorDots[color] || "bg-gray-500";
  };

  type Status = "active" | "soon" | "draft";

  const getStatusBadge = (status: Status) => {
    const statusConfig: Record<Status, { color: string; label: string }> = {
      active: { color: "bg-green-100 text-green-800", label: "Actif" },
      soon: { color: "bg-blue-100 text-blue-800", label: "Bientôt" },
      draft: { color: "bg-yellow-100 text-yellow-800", label: "Brouillon" },
    };
    const config = statusConfig[status] || statusConfig.draft;
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Administration</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gestion des catégories, tags et types de contenu de la plateforme
            Impact Rush
          </p>
        </div>

        {/* Blog Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-blue-200">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">mondoBlog</h2>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Catégories du Blog */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Catégories du Blog
                  </h3>
                  <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
                <div className="space-y-3">
                  {data.blogCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${getColorDotClass(
                            category.color
                          )}`}
                        ></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {category.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          onClick={() =>
                            handleDelete(category.id, "blogCategories")
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags du Blog */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Tags Transversaux
                  </h3>
                  <button className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
                <div className="space-y-3">
                  {data.blogTags.map((tag) => (
                    <div
                      key={tag.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            #{tag.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {tag.description}
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getColorClass(
                            tag.type === "objectif"
                              ? "blue"
                              : tag.type === "theme"
                              ? "green"
                              : "purple"
                          )}`}
                        >
                          {tag.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          onClick={() => handleDelete(tag.id, "blogTags")}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plateforme Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-200">
              <div className="flex items-center gap-3">
                <Rocket className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  The Plateforme
                </h2>
              </div>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Types de Projets */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Types de Financement
                  </h3>
                  <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
                <div className="space-y-3">
                  {data.projectTypes.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <FolderOpen className="w-4 h-4 text-gray-400" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">
                              {project.name}
                            </span>
                            {getStatusBadge(project.status as Status)}
                          </div>
                          <p className="text-sm text-gray-500">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          onClick={() =>
                            handleDelete(project.id, "projectTypes")
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Catégories de Projets */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Catégories de Projets
                  </h3>
                  <button className="flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
                <div className="space-y-3">
                  {data.projectCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-xl">{category.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {category.description}
                          </div>
                          {category.subcategories && (
                            <div className="mt-2">
                              <div className="text-xs text-gray-400 mb-1">
                                Sous-catégories:
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {category.subcategories
                                  .slice(0, 3)
                                  .map((sub, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                    >
                                      {sub}
                                    </span>
                                  ))}
                                {category.subcategories.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-200 text-gray-500 rounded-full text-xs">
                                    +{category.subcategories.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-emerald-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          onClick={() =>
                            handleDelete(category.id, "projectCategories")
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Circles Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  The Circles
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Types de Cercles
                </h3>
                <button className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.circleTypes.map((circle) => (
                  <div
                    key={circle.id}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {circle.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-400 hover:text-orange-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          onClick={() => handleDelete(circle.id, "circleTypes")}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {circle.description}
                    </div>
                    {circle.subcategories && (
                      <div className="text-xs text-gray-400">
                        <div className="mb-1">Sous-catégories:</div>
                        <div className="flex flex-wrap gap-1">
                          {circle.subcategories
                            .slice(0, 3)
                            .map((sub, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                              >
                                {sub}
                              </span>
                            ))}
                          {circle.subcategories.length > 3 && (
                            <span className="px-2 py-1 bg-gray-200 text-gray-500 rounded-full">
                              +{circle.subcategories.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
