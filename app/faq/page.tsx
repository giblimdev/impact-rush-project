//@/app/faq.tsx
/*
💬 FAQ – Tout comprendre sur Impact Rush
*/

"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Target,
  BookOpen,
  Shield,
  Rocket,
} from "lucide-react";

export default function FAQ() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const faqData = [
    {
      id: "about",
      title: "🔍 À propos d'Impact Rush",
      icon: <Target className="w-5 h-5" />,
      questions: [
        {
          id: "what-is",
          question: "Qu'est-ce qu'Impact Rush ?",
          answer: `Impact Rush est une plateforme d'innovation sociale qui relie réflexion collective, décision partagée et financement participatif. C'est un écosystème complet composé de trois outils connectés :

🔄 The Circle – la communauté qui réfléchit, sélectionne et décide des projets.

💸 The Plateforme – le moteur de financement participatif (dons et Impact Sprint).

📰 mondoBlog – le média collaboratif et la mémoire vivante de la communauté.`,
        },
        {
          id: "difference",
          question:
            "Quelle est la différence entre Impact Rush et une plateforme de crowdfunding classique ?",
          answer: `Contrairement aux plateformes de dons traditionnelles, Impact Rush ne se limite pas à collecter des fonds. Nous intégrons tout le cycle de l'action collective :

Penser → Décider → Financer → Agir → Documenter.

Les projets sont issus d'une réflexion communautaire structurée et accompagnés jusqu'à leur réalisation. L'objectif : un impact durable, mesuré et transparent.`,
        },
      ],
    },
    {
      id: "circle",
      title: "🔄 The Circle – La Communauté d'Action",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          id: "what-is-circle",
          question: "Qu'est-ce qu'un 'Cercle' ?",
          answer:
            "Un Cercle est un groupe de 3 à 15 membres réunis autour d'une thématique (écologie, éducation, inclusion, culture, innovation sociale…). Chaque Cercle réfléchit, débat, sélectionne et accompagne des projets concrets liés à son sujet.",
        },
        {
          id: "join-circle",
          question: "Comment rejoindre un Cercle ?",
          answer: `📝 Inscrivez-vous sur Impact Rush.

💳 Adhérez à la communauté (10 €/mois).

🎯 Choisissez le Cercle correspondant à vos centres d'intérêt.

🤝 Participez activement aux réunions (en visio ou en ligne via mondoBlog).

Chaque membre est invité à contribuer selon ses compétences, son temps et ses moyens.`,
        },
        {
          id: "subscriptions",
          question: "Que deviennent les cotisations des membres ?",
          answer: `La cotisation est transparente et équitable :

80 % sont affectés directement au financement de projets décidés par les Cercles.

20 % couvrent les frais de fonctionnement et de plateforme.

Des bilans financiers publics sont publiés chaque mois sur mondoBlog.`,
        },
        {
          id: "values",
          question: "Quelles sont les valeurs des Cercles ?",
          answer: `Les Cercles reposent sur six valeurs fondamentales :
🧭 Éthique | 🤝 Solidarité | 🌍 Durabilité | 🌈 Ouverture | 🔍 Transparence | 🌱 Participation active.

Chaque membre s'engage à les respecter et à contribuer dans un esprit de bienveillance et de co-responsabilité.`,
        },
      ],
    },
    {
      id: "platform",
      title: "💸 The Plateforme – Le Moteur de Financement",
      icon: <Rocket className="w-5 h-5" />,
      questions: [
        {
          id: "how-funding-works",
          question:
            "Comment fonctionne le financement participatif sur Impact Rush ?",
          answer: `Impact Rush repose sur un modèle innovant appelé Impact Sprint :

• Les projets validés participent à une "course" de financement bienveillante.
• Les donateurs ("Sprinters") soutiennent plusieurs projets.
• Le premier projet à atteindre son objectif reçoit les dons réels.

Ce système crée une dynamique ludique et collective, tout en garantissant la transparence et la sécurité des fonds.`,
        },
        {
          id: "who-can-propose",
          question: "Qui peut proposer un projet ?",
          answer: `Il existe deux voies :

🟢 Proposition externe : tout porteur de projet peut soumettre une campagne.

🟣 Proposition soutenue par un Cercle : un projet validé par The Circle obtient le label "Soutenu par The Circle" et bénéficie d'une meilleure visibilité.`,
        },
        {
          id: "project-types",
          question: "Quels types de projets peuvent être financés ?",
          answer: `Les projets doivent présenter un impact positif et mesurable dans au moins un des trois domaines :

🌿 Environnemental (écologie, énergie, agriculture durable…)

🤝 Social (éducation, inclusion, solidarité…)

💶 Économique (innovation locale, économie circulaire, emploi durable…)`,
        },
        {
          id: "funding-types",
          question: "Quels sont les types de financement proposés ?",
          answer: `Impact Rush prend en charge plusieurs formes de financement participatif :

🎁 Don participatif (avec ou sans contrepartie) – modèle principal et actif.

📈 Investissement (equity crowdfunding) – en préparation.

📄 Prêt participatif (crowdlending) – en préparation.

(Actuellement, seuls les dons sont disponibles pour garantir la conformité et la simplicité d'usage.)`,
        },
        {
          id: "revenue",
          question: "Comment la plateforme se rémunère-t-elle ?",
          answer: `Impact Rush ne prend aucun frais d'inscription ni de dépôt de projet. Une commission de 5 à 7 % est prélevée uniquement sur les campagnes réussies, couvrant :

• les frais de transaction et d'hébergement,
• la maintenance et la sécurité,
• la réinjection dans les programmes de formation et de gouvernance.`,
        },
      ],
    },
    {
      id: "mondoblog",
      title: "📰 mondoBlog – La Mémoire Vivante",
      icon: <BookOpen className="w-5 h-5" />,
      questions: [
        {
          id: "purpose-blog",
          question: "À quoi sert mondoBlog ?",
          answer: `mondoBlog est le média collaboratif de la communauté Impact Rush. Il permet :

• De partager des réflexions et articles d'impact.
• De documenter les projets soutenus par les Cercles.
• D'assurer une transparence totale sur les décisions et les financements.

C'est la mémoire vivante de la communauté.`,
        },
        {
          id: "who-can-publish",
          question: "Qui peut publier sur mondoBlog ?",
          answer: `✅ Lecture : ouverte à tous les visiteurs (articles publics, bilans, transparence).

✍️ Publication : réservée aux membres inscrits ou aux Cercles.

• Les membres individuels peuvent proposer des articles.
• Les Cercles disposent d'un espace privé pour rédiger comptes-rendus et réflexions collectives.`,
        },
        {
          id: "gamification",
          question: "Pourquoi un système de gamification (XP) ?",
          answer: `Le système d'Impact Experience Points (XP) valorise la contribution des membres. Chaque action — écrire, partager, financer, inviter — génère des points. Les membres progressent selon leur niveau d'implication, jusqu'à devenir :

• Sprinter Débutant
• Eco-Rusher
• Impact Leader
• Legend of Impact

Ce mécanisme encourage la participation et la reconnaissance collective.`,
        },
      ],
    },
    {
      id: "security",
      title: "⚙️ Sécurité, transparence et cadre légal",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          id: "data-protection",
          question: "Comment mes données et mes fonds sont-ils protégés ?",
          answer:
            "Impact Rush respecte les normes européennes (RGPD) et s'appuie sur des partenaires financiers agréés pour le séquestre des fonds. Les dons ne sont transférés aux porteurs de projets qu'après validation du succès de la campagne.",
        },
        {
          id: "legal-status",
          question: "Les Cercles ont-ils une existence juridique ?",
          answer:
            "Non. Les Cercles sont des communautés d'individus (personnes physiques) sans personnalité morale. Chaque projet est porté par une entité légale distincte (association, entreprise, coopérative ou individu) responsable de sa gestion.",
        },
        {
          id: "company-type",
          question: "Impact Rush est-elle une entreprise ou une association ?",
          answer:
            "Impact Rush fonctionne sur un modèle hybride d'innovation sociale. Selon les régions, elle peut opérer sous forme d'association, de SCIC (Société Coopérative d'Intérêt Collectif) ou d'entreprise à mission. L'objectif reste le même : réinvestir les bénéfices dans les projets à impact et le développement de la communauté.",
        },
        {
          id: "impact-measurement",
          question: "Comment mesurer l'impact réel des projets ?",
          answer: `Chaque projet soutenu fait l'objet d'un bilan d'impact publié sur mondoBlog. Les indicateurs sont définis à l'avance :

• Nombre de bénéficiaires,
• Tonnes de CO₂ évitées,
• Emplois créés,
• Indicateurs sociaux ou économiques spécifiques.

Les bilans deviennent des ressources d'apprentissage pour toute la communauté.`,
        },
      ],
    },
    {
      id: "join",
      title: "🚀 Rejoindre l'aventure Impact Rush",
      icon: <Rocket className="w-5 h-5" />,
      questions: [
        {
          id: "why-join",
          question: "Pourquoi rejoindre Impact Rush ?",
          answer:
            "Parce qu'ici, vous n'êtes pas un simple spectateur : vous devenez acteur du changement, en participant à un modèle qui relie intelligence collective, action concrète et transparence.",
        },
        {
          id: "how-start",
          question: "Comment commencer ?",
          answer: `• Créez votre profil sur Impact Rush.
• Explorez les Cercles et rejoignez celui qui vous correspond.
• Contribuez à la réflexion et aux décisions collectives.
• Soutenez ou proposez des projets à impact positif.
• Suivez les résultats et partagez vos apprentissages sur mondoBlog.`,
        },
        {
          id: "contribute-without-circle",
          question: "Puis-je contribuer sans être membre d'un Cercle ?",
          answer: `Oui ✅
Vous pouvez :

• Lire mondoBlog,
• Soutenir des projets sur la Plateforme,
• Participer à des campagnes d'Impact Sprint.

Les Cercles sont réservés à ceux qui souhaitent s'impliquer activement dans la gouvernance et la co-création.`,
        },
        {
          id: "summary",
          question: "En résumé ?",
          answer:
            "Impact Rush, c'est la plateforme où l'intelligence collective devient action. Ici, la même communauté pense, décide et agit pour créer un monde plus éthique, durable et solidaire.",
        },
      ],
    },
  ];

  // Filtrer les questions basé sur la recherche
  const filteredData = faqData
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.questions.length > 0);

  const formatAnswer = (text: string) => {
    return text.split("\n").map((line, index) => {
      const content = typeof line === "string" ? line : String(line ?? "");
      if (content.trim() === "") return <br key={index} />;

      // Détecter les emojis et les listes
      const match = content.match(/^[•\-🟢🟣✅✍️🎁📈📄🌿🤝💶🎯🤝🧭🌍🌈🔍🌱]/);
      if (match) {
        return (
          <div key={index} className="flex items-start gap-2 py-1">
            <span className="flex-shrink-0">{match[0]}</span>
            <span>{content.substring(1).trim()}</span>
          </div>
        );
      }

      return (
        <p key={index} className="py-1">
          {content}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            💬 FAQ Impact Rush
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tout comprendre sur notre écosystème d'innovation sociale
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher dans la FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-6">
          {filteredData.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                {openSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Section Questions */}
              {openSections[section.id] && (
                <div className="border-t border-gray-100">
                  {section.questions.map((item, index) => (
                    <div
                      key={item.id}
                      className={`border-b border-gray-50 ${
                        index === section.questions.length - 1
                          ? "border-b-0"
                          : ""
                      }`}
                    >
                      <div className="px-6 py-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {item.question}
                        </h3>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                          {formatAnswer(item.answer)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-gray-600">
              Essayez d'autres termes de recherche
            </p>
          </div>
        )}

        {/* CTA Footer */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Notre communauté est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
              Contacter le support
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200">
              Rejoindre la communauté
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
