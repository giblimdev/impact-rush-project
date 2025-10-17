"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Users,
  Target,
  Globe,
  Lock,
  Eye,
  Coins,
  Sparkles,
  Trophy,
  Clock,
  Leaf,
  Handshake,
  BarChart3,
  Settings,
  Shield,
  Gift,
} from "lucide-react";

export default function ImpactSprintPage() {
  const [activeTab, setActiveTab] = useState("how-it-works");

  // Données factices pour démonstration
  const projectsData = [
    {
      id: 1,
      name: "Reforestation en Amazonie",
      progress: 75,
      supporters: 243,
      goal: 50000,
    },
    {
      id: 2,
      name: "Énergie solaire pour un village",
      progress: 90,
      supporters: 312,
      goal: 35000,
    },
    {
      id: 3,
      name: "Dépollution de la Méditerranée",
      progress: 60,
      supporters: 198,
      goal: 75000,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:linear-gradient(180deg,#fff,rgba(255,255,255,0.7))] -z-10" />

        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-sm font-semibold px-4 py-1 rounded-full shadow">
              <Sparkles className="w-4 h-4 mr-1" /> Une nouvelle ère du
              financement durable
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Investissez dans{" "}
              <span className="text-emerald-600">l'avenir</span>,
              <br /> pas seulement dans un projet
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Impact Sprint est une plateforme unique de crowdfunding durable :
              vous soutenez plusieurs projets, mais seul celui qui atteint son
              objectif en premier reçoit vos fonds.
              <span className="block font-medium mt-2">
                Plus d'efficacité. Plus de transparence. Plus d'impact.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-lg rounded-xl shadow-lg"
              >
                Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 text-lg rounded-xl"
              >
                Voir les projets
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Projets en compétition</h2>
              <Badge
                variant="outline"
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full"
              >
                <Clock className="w-4 h-4 mr-1" /> En direct
              </Badge>
            </div>

            <div className="space-y-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors shadow-sm"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-7 h-7 text-emerald-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-6 mb-3 text-slate-600">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {project.supporters} soutiens
                      </div>
                      <div className="flex items-center text-sm">
                        <Target className="w-4 h-4 mr-1" />
                        Objectif : {project.goal.toLocaleString()}€
                      </div>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                      <span>{project.progress}% atteint</span>
                      <span>
                        {(
                          (project.goal * project.progress) /
                          100
                        ).toLocaleString()}
                        €
                      </span>
                    </div>
                  </div>

                  {/* Bouton "Soutenir" amélioré avec dégradé */}
                  <Button className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Soutenir
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Impact Sprint transforme le financement participatif : un modèle
              compétitif, transparent et durable.
            </p>
          </motion.div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Tabs corrigés pour éviter le débordement */}
            <TabsList className="grid w-full grid-cols-3 mb-12 rounded-xl shadow-lg bg-white border border-slate-200 p-1 h-auto">
              <TabsTrigger
                value="how-it-works"
                className="text-sm md:text-base font-semibold py-2 px-2 md:px-3 rounded-lg flex items-center justify-center gap-1 md:gap-2 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 data-[state=active]:shadow-md transition-all duration-200 min-h-[3rem] whitespace-nowrap"
              >
                <Settings className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">Le processus</span>
                <span className="sm:hidden">Processus</span>
              </TabsTrigger>
              <TabsTrigger
                value="blockchain"
                className="text-sm md:text-base font-semibold py-2 px-2 md:px-3 rounded-lg flex items-center justify-center gap-1 md:gap-2 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 data-[state=active]:shadow-md transition-all duration-200 min-h-[3rem] whitespace-nowrap"
              >
                <Shield className="w-4 h-4 flex-shrink-0" />
                <span>Blockchain</span>
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className="text-sm md:text-base font-semibold py-2 px-2 md:px-3 rounded-lg flex items-center justify-center gap-1 md:gap-2 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 data-[state=active]:shadow-md transition-all duration-200 min-h-[3rem] whitespace-nowrap"
              >
                <Gift className="w-4 h-4 flex-shrink-0" />
                <span>Avantages</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="how-it-works">
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    step: "1",
                    title: "Choisissez vos projets",
                    desc: "Parcourez une sélection rigoureuse de projets durables vérifiés et engagez-vous sur ceux qui vous inspirent.",
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-600",
                  },
                  {
                    step: "2",
                    title: "Engagez votre investissement",
                    desc: "Votre mise est promise à tous vos projets choisis, mais vous ne payez qu'une seule fois.",
                    bgColor: "bg-orange-100",
                    textColor: "text-orange-600",
                  },
                  {
                    step: "3",
                    title: "Le premier gagne tout",
                    desc: "Le projet qui atteint son objectif en premier reçoit votre financement. Les autres engagements expirent automatiquement.",
                    bgColor: "bg-green-100",
                    textColor: "text-green-600",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-6`}
                    >
                      <span className={`text-2xl font-bold ${item.textColor}`}>
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="blockchain">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Eye className="w-8 h-8 text-purple-600" />,
                    title: "Transparence absolue",
                    desc: "Toutes les transactions sont inscrites sur la blockchain, visibles et vérifiables par tous.",
                    bgColor: "bg-purple-100",
                  },
                  {
                    icon: <Lock className="w-8 h-8 text-blue-600" />,
                    title: "Sécurité garantie",
                    desc: "Des smart contracts gèrent vos engagements sans intermédiaire ni risque de fraude.",
                    bgColor: "bg-blue-100",
                  },
                  {
                    icon: <Coins className="w-8 h-8 text-green-600" />,
                    title: "Paiements flexibles",
                    desc: "Choisissez entre cryptomonnaies ou devises classiques pour vos financements.",
                    bgColor: "bg-green-100",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-6`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Trophy className="w-8 h-8 text-orange-600" />,
                    title: "Efficacité maximale",
                    desc: "Vos fonds vont au projet le plus mobilisateur et le plus prometteur.",
                    bgColor: "bg-orange-100",
                  },
                  {
                    icon: <Leaf className="w-8 h-8 text-green-600" />,
                    title: "Impact durable",
                    desc: "Chaque projet est validé pour son impact social et environnemental.",
                    bgColor: "bg-green-100",
                  },
                  {
                    icon: <Handshake className="w-8 h-8 text-blue-600" />,
                    title: "Communauté engagée",
                    desc: "Faites partie d'un mouvement mondial de citoyens et investisseurs responsables.",
                    bgColor: "bg-blue-100",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${item.bgColor} flex items-center justify-center mx-auto mb-6`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section avec dégradé amélioré */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
        {/* Effet de dégradé décoratif */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-transparent to-teal-500/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à accélérer le changement ?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-95">
              Rejoignez la communauté Impact Sprint et contribuez à bâtir un
              avenir durable, où chaque euro investi crée une différence réelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Créer un compte
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-700 hover:bg-slate-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Découvrir les projets
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
