//@/app/faq.tsx
/*
💬 FAQ – Tout comprendre sur Impact Rush
*/

"use client";

import React, { JSX, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Target,
  BookOpen,
  Shield,
  Rocket,
  Heart,
  Coins,
  User,
  Clock,
  Zap,
  Eye,
  TrendingUp,
  Award,
  MessageCircle,
  Settings,
  Globe,
  Lock,
  Unlock,
  Mail,
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
      title: "À propos d'Impact Rush",
      icon: <Target className="w-5 h-5" />,
      questions: [
        {
          id: "what-is",
          question: "Qu'est-ce qu'Impact Rush ?",
          answer: `Impact Rush est une plateforme d'innovation sociale qui relie réflexion collective, décision partagée et financement participatif. C'est un écosystème complet composé de trois outils connectés :

• The Circle – la communauté qui réfléchit, sélectionne et décide des projets.
• The Plateforme – le moteur de financement participatif (dons et Impact Sprint).
• mondoBlog – le média collaboratif et la mémoire vivante de la communauté.`,
        },
        {
          id: "difference",
          question:
            "Quelle est la différence entre Impact Rush et une plateforme de crowdfunding classique ?",
          answer: `Contrairement aux plateformes de dons traditionnelles, Impact Rush ne se limite pas à collecter des fonds. Nous intégrons tout le cycle de l'action collective :

Penser → Décider → Financer → Agir → Documenter.

Les projets sont issus d'une réflexion communautaire structurée et accompagnés jusqu'à leur réalisation. L'objectif : un impact durable, mesuré et transparent.`,
        },
        {
          id: "circle-difference",
          question:
            "En quoi les Cercles d'Impact sont-ils différents d'une association classique ?",
          answer: `Nous combinons 3 dimensions uniques :

• Une communauté agile (cercles autonomes)
• Un laboratoire d'idées (blog collaboratif)
• Un accélérateur de projets (plateforme de financement)

Contrairement à une association traditionnelle, chaque membre est co-créateur et décideur.`,
        },
      ],
    },
    {
      id: "circle",
      title: "The Circle – La Communauté d'Action",
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
          answer: `• Inscrivez-vous sur Impact Rush.
• Adhérez à la communauté (10 €/mois).
• Choisissez le Cercle correspondant à vos centres d'intérêt.
• Participez activement aux réunions (en visio ou en ligne via mondoBlog).

Chaque membre est invité à contribuer selon ses compétences, son temps et ses moyens.`,
        },
        {
          id: "time-commitment",
          question: "Combien de temps dois-je consacrer par mois ?",
          answer: `Selon votre disponibilité :

• Mode léger : 1-2h/mois (participation aux votes)
• Mode actif : 3-4h/mois (réunions + contributions)
• Mode engagé : 5h+/mois (portage de projet + animation)`,
        },
        {
          id: "multiple-circles",
          question: "Puis-je appartenir à plusieurs cercles ?",
          answer: `Oui, mais avec sagesse :

• Maximum 2 cercles actifs simultanément
• Engagement clair dans chaque cercle
• Attention à la surcharge - la qualité prime sur la quantité`,
        },
        {
          id: "leave-circle",
          question: "Que faire si mon cercle ne me convient plus ?",
          answer: `Plusieurs solutions :

• Changer de cercle après un cycle complet
• Créer un nouveau cercle (avec 2 autres membres)
• Demander une médiation si conflits
• Mettre en pause temporairement`,
        },
        {
          id: "subscriptions",
          question: "Que deviennent les cotisations des membres ?",
          answer: `La cotisation est transparente et équitable :

• 80% sont affectés directement au financement de projets décidés par les Cercles.
• 20% couvrent les frais de fonctionnement et de plateforme.

Des bilans financiers publics sont publiés chaque mois sur mondoBlog.`,
        },
        {
          id: "why-10-euros",
          question: "Pourquoi 10€ par mois ?",
          answer: `Cette somme équilibre :

• Accessibilité : moins cher qu'un abonnement classique
• Impact réel : 8€/mois × 100 membres = 800€/mois pour les projets
• Pérennité : 2€ couvrent les frais techniques essentiels`,
        },
        {
          id: "cancel-subscription",
          question: "Puis-je arrêter ma cotisation à tout moment ?",
          answer: `Absolument !

• Sans engagement de durée
• Désinscription en 1 clic depuis votre compte
• Possible de revenir quand vous le souhaitez`,
        },
        {
          id: "values",
          question: "Quelles sont les valeurs des Cercles ?",
          answer: `Les Cercles reposent sur six valeurs fondamentales :
• Éthique 
• Solidarité 
• Durabilité 
• Ouverture 
• Transparence 
• Participation active

Chaque membre s'engage à les respecter et à contribuer dans un esprit de bienveillance et de co-responsabilité.`,
        },
      ],
    },
    {
      id: "platform",
      title: "The Plateforme – Le Moteur de Financement",
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

• Proposition externe : tout porteur de projet peut soumettre une campagne.
• Proposition soutenue par un Cercle : un projet validé par The Circle obtient le label "Soutenu par The Circle" et bénéficie d'une meilleure visibilité.`,
        },
        {
          id: "project-selection",
          question: "Comment sont sélectionnés les projets ?",
          answer: `Processus en 4 étapes :

1. Éligibilité : respect de la charte et critères de base
2. Discussion : amélioration collective du projet
3. Vote : décision démocratique dans le cercle
4. Validation : vérification éthique et technique`,
        },
        {
          id: "project-types",
          question: "Quels types de projets peuvent être financés ?",
          answer: `Les projets doivent présenter un impact positif et mesurable dans au moins un des trois domaines :

• Environnemental (écologie, énergie, agriculture durable…)
• Social (éducation, inclusion, solidarité…)
• Économique (innovation locale, économie circulaire, emploi durable…)`,
        },
        {
          id: "funding-failure",
          question:
            "Que se passe-t-il si mon projet ne recueille pas assez de fonds ?",
          answer: `Plusieurs options :

• Retenter le mois suivant
• Adapter le budget ou le découper en phases
• Chercher des co-financements externes
• Bénéficier d'un accompagnement pour améliorer le projet`,
        },
        {
          id: "funding-types",
          question: "Quels sont les types de financement proposés ?",
          answer: `Impact Rush prend en charge plusieurs formes de financement participatif :

• Don participatif (avec ou sans contrepartie) – modèle principal et actif.
• Investissement (equity crowdfunding) – en préparation.
• Prêt participatif (crowdlending) – en préparation.

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
        {
          id: "transparency-funds",
          question:
            "Comment garantir que 80% des fonds vont vraiment aux projets ?",
          answer: `Par une transparence radicale :

• Comptes publics mensuels accessibles à tous
• Comptes bancaires séparés : fonctionnement ≠ projets
• Audit collaboratif : chaque membre peut vérifier
• Relevés bancaires partagés (données anonymisées)`,
        },
      ],
    },
    {
      id: "mondoblog",
      title: "mondoBlog – La Mémoire Vivante",
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
          answer: `• Lecture : ouverte à tous les visiteurs (articles publics, bilans, transparence).
• Publication : réservée aux membres inscrits ou aux Cercles.

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
      title: "Sécurité, transparence et cadre légal",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          id: "data-protection",
          question: "Comment mes données et mes fonds sont-ils protégés ?",
          answer:
            "Impact Rush respecte les normes européennes (RGPD) et s'appuie sur des partenaires financiers agréés pour le séquestre des fonds. Les dons ne sont transférés aux porteurs de projets qu'après validation du succès de la campagne.",
        },
        {
          id: "privacy",
          question: "Mes données personnelles sont-elles protégées ?",
          answer: `Protection maximale :

• Conformité RGPD stricte
• Données cryptées et sécurisées
• Pseudonymat possible dans les discussions
• Pas de revente ni partage commercial`,
        },
        {
          id: "anonymity",
          question: "Puis-je participer anonymement ?",
          answer: `Oui, partiellement :

• Pseudonyme autorisé dans les échanges
• Nom réel requis pour la gestion administrative
• Respect mutuel de l'identité de chacun`,
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
          id: "conflicts",
          question: "Que se passe-t-il en cas de désaccord dans un cercle ?",
          answer: `Processus de médiation progressif :

1. Dialogue direct entre les membres
2. Intervention du Gardien Éthique
3. Médiation par le Cercle Coordinateur
4. Arbitrage collégial si nécessaire`,
        },
        {
          id: "sensitive-topics",
          question: "Comment sont gérées les discussions sensibles ?",
          answer: `Avec bienveillance et cadre clair :

• Autorisés : débats éthiques, philosophiques respectueux
• Interdits : prosélytisme, politique partisane, discours haineux
• Notre devise : "Dépasser la forme pour découvrir le fond"`,
        },
      ],
    },
    {
      id: "impact",
      title: "Impact et Mesure",
      icon: <TrendingUp className="w-5 h-5" />,
      questions: [
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
        {
          id: "impact-metrics",
          question: "Comment mesurez-vous votre impact ?",
          answer: `Par des indicateurs transparents :

• Quantitatif : projets financés, membres actifs, fonds distribués
• Qualitatif : témoignages, études de cas, retours terrain
• Amélioration continue : ajustements basés sur les résultats`,
        },
        {
          id: "past-projects",
          question: "Puis-je consulter les bilans des projets passés ?",
          answer: `Bien sûr !

• Archive complète sur le blog
• Bilans financiers détaillés
• Retours d'expérience des porteurs
• Leçons apprises partagées`,
        },
      ],
    },
    {
      id: "inspiration",
      title: "Origine et Inspiration",
      icon: <Globe className="w-5 h-5" />,
      questions: [
        {
          id: "freemasonry",
          question:
            "Les Cercles d'Impact s'inspirent-ils de la franc-maçonnerie ?",
          answer: `Non. Les Cercles d'Impact ne sont pas inspirés de la franc-maçonnerie, ni d'aucune organisation initiatique, religieuse ou politique.

Notre modèle repose sur des principes universels de coopération, de démocratie participative et de responsabilité partagée.

Ces principes existent dans de nombreuses traditions humaines, éducatives ou communautaires, sans appartenir à aucune d'entre elles.`,
        },
        {
          id: "distinctions",
          question: "Quelles sont les distinctions essentielles ?",
          answer: `| Thème | Franc-maçonnerie | Cercles d'Impact |
|-------|------------------|------------------|
| Nature | Ordre initiatique symbolique | Mouvement citoyen ouvert et transparent |
| Accès | Réservé, sur cooptation | Ouvert à toute personne partageant la charte |
| Finalité | Développement moral et spirituel | Transformation sociale, écologique et éthique |
| Rituels | Symboliques, codifiés | Fonctionnels, centrés sur l'action collective |
| Hiérarchie | Présente | Absente (rôles tournants et égalité des membres) |
| Confidentialité | Tradition du secret | Transparence totale (blog, bilans publics) |`,
        },
        {
          id: "neutrality",
          question: "Quel est le principe de neutralité ?",
          answer: `Les Cercles d'Impact respectent une neutralité stricte :

• Politique : aucun soutien ou critique de parti, mouvement ou figure politique.
• Religieuse : aucune orientation spirituelle imposée ; liberté de conviction pour tous.
• Économique : indépendance de toute entreprise ou lobby.

Chaque membre agit en conscience, dans le respect des lois et de la charte.`,
        },
      ],
    },
    {
      id: "evolution",
      title: "Évolution et Participation",
      icon: <Settings className="w-5 h-5" />,
      questions: [
        {
          id: "business-participation",
          question: "Mon entreprise peut-elle participer ?",
          answer: `Oui, de plusieurs façons :

• Salariés membres (cotisation individuelle)
• Partenariats ponctuels avec des cercles
• Financement de projets alignés avec vos valeurs
• Mécénat de compétence`,
        },
        {
          id: "charter-evolution",
          question: "La charte peut-elle évoluer ?",
          answer: `Absolument ! C'est un document vivant :

• Propositions par au moins 30% des membres
• Discussion collective ouverte
• Vote démocratique
• Communication transparente des changements`,
        },
        {
          id: "suggestions",
          question: "Que faire si j'ai une idée d'amélioration ?",
          answer: `Nous adorons les suggestions !

• Formulaire dédié sur la plateforme
• Discussion dans votre cercle
• Remontée au Cercle Coordinateur
• Reconnaissance des meilleures idées`,
        },
        {
          id: "leave-organization",
          question: "Comment quitter les Cercles d'Impact ?",
          answer: `Simple et rapide :

1. Section "Mon compte"
2. "Quitter l'organisation"
3. Questionnaire de départ (optionnel)
4. Désinscription effective immédiate`,
        },
      ],
    },
    {
      id: "join",
      title: "Rejoindre l'aventure Impact Rush",
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
          answer: `Oui !
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
    const lines = text.split("\n");
    const formattedLines: JSX.Element[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === "") {
        formattedLines.push(<br key={i} />);
        continue;
      }

      // Détecter les tableaux
      if (line.includes("|")) {
        const tableRows: string[] = [line];
        // Récupérer toutes les lignes du tableau
        while (i + 1 < lines.length && lines[i + 1].includes("|")) {
          i++;
          tableRows.push(lines[i].trim());
        }

        formattedLines.push(
          <div key={i} className="overflow-x-auto my-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
              <tbody>
                {tableRows.map((row, rowIndex) => {
                  const cells = row
                    .split("|")
                    .filter((cell) => cell.trim() !== "");
                  return (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex === 0
                          ? "bg-gray-50 font-semibold"
                          : "border-t border-gray-100"
                      }
                    >
                      {cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-2 border-r border-gray-100 last:border-r-0"
                        >
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }

      // Détecter les listes numérotées
      const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (numberedMatch) {
        formattedLines.push(
          <div key={i} className="flex items-start gap-3 py-1">
            <span className="flex-shrink-0 font-semibold bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mt-0.5">
              {numberedMatch[1]}
            </span>
            <span className="flex-1">{numberedMatch[2]}</span>
          </div>
        );
        continue;
      }

      // Détecter les listes à puces
      if (line.startsWith("•")) {
        formattedLines.push(
          <div key={i} className="flex items-start gap-3 py-1">
            <span className="flex-shrink-0 text-gray-600 mt-1.5">•</span>
            <span className="flex-1">{line.substring(1).trim()}</span>
          </div>
        );
        continue;
      }

      // Texte normal
      formattedLines.push(
        <p key={i} className="py-1 leading-relaxed">
          {line}
        </p>
      );
    }

    return formattedLines;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQ Impact Rush
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
                        <div className="text-gray-600 leading-relaxed">
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
            <button className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              Contacter le support
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200">
              <Users className="w-4 h-4" />
              Rejoindre la communauté
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Une question reste sans réponse ? Contactez-nous ou parlez-en à
            votre Gardien Éthique !
          </p>
        </div>
      </div>
    </div>
  );
}
