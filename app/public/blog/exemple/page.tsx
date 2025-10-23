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
import {
  Search,
  Filter,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
} from "lucide-react";

// Données simulées basées sur votre architecture
const categories = [
  {
    id: "lifestyle",
    name: "Lifestyle & Bien-être",
    icon: "🌿",
    count: 24,
    color: "bg-green-500/10 text-green-700",
  },
  {
    id: "tech",
    name: "Technologie & Innovation",
    icon: "💻",
    count: 32,
    color: "bg-blue-500/10 text-blue-700",
  },
  {
    id: "spirituality",
    name: "Spiritualité & Conscience",
    icon: "🕊️",
    count: 18,
    color: "bg-purple-500/10 text-purple-700",
  },
  {
    id: "development",
    name: "Développement Personnel",
    icon: "🧠",
    count: 28,
    color: "bg-orange-500/10 text-orange-700",
  },
  {
    id: "society",
    name: "Société & Culture",
    icon: "🌍",
    count: 21,
    color: "bg-indigo-500/10 text-indigo-700",
  },
  {
    id: "business",
    name: "Entrepreneuriat & Carrière",
    icon: "💼",
    count: 19,
    color: "bg-emerald-500/10 text-emerald-700",
  },
  {
    id: "science",
    name: "Sciences & Environnement",
    icon: "🧬",
    count: 15,
    color: "bg-teal-500/10 text-teal-700",
  },
  {
    id: "art",
    name: "Art, Voyage & Création",
    icon: "🎨",
    count: 22,
    color: "bg-pink-500/10 text-pink-700",
  },
];

const featuredArticles = [
  {
    id: 1,
    title: "L'IA générative va-t-elle remplacer les créatifs ?",
    excerpt:
      "Une analyse approfondie de l'impact de l'intelligence artificielle sur les métiers créatifs et les nouvelles opportunités qui émergent.",
    category: "Technologie & Innovation",
    author: "Marie Dubois",
    readTime: "8 min",
    date: "2025-10-15",
    image: "/api/placeholder/600/300",
    tags: ["IA", "Créativité", "Futur"],
    featured: true,
  },
  {
    id: 2,
    title: "Méditation matinale : ma routine en 10 minutes",
    excerpt:
      "Découvrez une routine de méditation simple et efficace pour commencer vos journées avec sérénité et focus.",
    category: "Spiritualité & Conscience",
    author: "Thomas Martin",
    readTime: "5 min",
    date: "2025-10-14",
    image: "/api/placeholder/600/300",
    tags: ["Méditation", "Routine", "Bien-être"],
  },
  {
    id: 3,
    title: "Budget minimaliste : vivre mieux avec moins",
    excerpt:
      "Comment adopter une approche minimaliste de vos finances pour gagner en liberté et en sérénité.",
    category: "Développement Personnel",
    author: "Sophie Leroy",
    readTime: "6 min",
    date: "2025-10-13",
    image: "/api/placeholder/600/300",
    tags: ["Minimalisme", "Finances", "Liberté"],
  },
];

const recentArticles = [
  {
    id: 4,
    title: "5 apps pour désencombrer sa vie digitale",
    excerpt:
      "Les meilleures applications pour organiser votre vie numérique et retrouver la clarté mentale.",
    category: "Technologie & Innovation",
    author: "Alex Chen",
    readTime: "4 min",
    date: "2025-10-12",
    tags: ["Apps", "Productivité", "Minimalisme"],
  },
  {
    id: 5,
    title: "Batch cooking : mon planning du dimanche",
    excerpt:
      "Une méthode efficace pour préparer tous vos repas de la semaine en quelques heures.",
    category: "Lifestyle & Bien-être",
    author: "Julie Moreau",
    readTime: "7 min",
    date: "2025-10-11",
    tags: ["Cuisine", "Organisation", "Santé"],
  },
  {
    id: 6,
    title: "Comment dire non sans culpabiliser",
    excerpt:
      "Techniques pratiques pour poser ses limites de manière bienveillante et assertive.",
    category: "Développement Personnel",
    author: "Pierre Durand",
    readTime: "5 min",
    date: "2025-10-10",
    tags: ["Communication", "Limites", "Confiance"],
  },
];

const popularTags = [
  "Productivité",
  "Minimalisme",
  "IA",
  "Méditation",
  "Entrepreneur",
  "Routine",
  "Innovation",
  "Bien-être",
  "Créativité",
  "Mindfulness",
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos réflexions sur la technologie, le développement
              personnel, la spiritualité et les enjeux de société pour nourrir
              vos projets.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mt-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 h-12 px-6"
            >
              <Filter className="h-4 w-4" />
              Filtres
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Catégories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("all")}
                >
                  Tous les articles
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "ghost"
                    }
                    className="w-full justify-between text-left"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="ml-auto">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Tags populaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>
                  Recevez nos derniers articles directement dans votre boîte
                  mail.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Votre email" />
                <Button className="w-full">S'abonner</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Articles */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Articles en vedette
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-900">
                          {article.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {article.tags.map((tag) => (
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
                  </Link>
                ))}
              </div>
            </section>

            {/* Content Tabs */}
            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="recent">Récents</TabsTrigger>
                <TabsTrigger value="popular">Populaires</TabsTrigger>
                <TabsTrigger value="series">Séries</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-6">
                {recentArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-48 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0" />
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">
                                {article.category}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {article.date}
                              </span>
                            </div>
                            <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 line-clamp-2">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  {article.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {article.readTime}
                                </span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {article.tags.map((tag) => (
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
                  </Link>
                ))}
              </TabsContent>

              <TabsContent value="popular">
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">
                      Les articles populaires arrivent bientôt...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="series">
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">
                      Les séries d'articles arrivent bientôt...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="px-8">
                Charger plus d'articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez une idée d'article ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez notre communauté d'auteurs et partagez vos réflexions.
          </p>
          <Button variant="secondary" size="lg" className="px-8">
            Proposer un article
          </Button>
        </div>
      </div>
    </div>
  );
}
