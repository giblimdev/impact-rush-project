// components/blog-schema-documentation.tsx
'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const schemaCode = `///////////////////////
///// blog models /////
///////////////////////

// Enums
enum PostStatus {
  DRAFT
  PUBLISHED
  SCHEDULED
  ARCHIVED
}

enum PostVisibility {
  PUBLIC
  UNLISTED
  PRIVATE
}

enum MediaType {
  IMAGE
  VIDEO
  AUDIO
  FILE
  EMBED
  CODE
}

enum ReactionType {
  LIKE
  CLAP
  UPVOTE
  DOWNVOTE
  LOVE
}

enum CommentStatus {
  VISIBLE
  HIDDEN
  SPAM
  DELETED
}

// Post principal avec réponses (self-relation)
model Post {
  id            String         @id @default(cuid())
  slug          String         @unique
  title         String
  subtitle      String?
  // contenu riche stocké en JSON (ex. blocs, mdx sérialisé, structure d'éditeur)
  content       Json?
  // version texte pour SEO/recherche plein texte
  contentText   String?        @map("content_text")
  excerpt       String?
  coverImageUrl String?        @map("cover_image_url")
  canonicalUrl  String?        @map("canonical_url")
  ogImageUrl    String?        @map("og_image_url")

  status        PostStatus     @default(DRAFT)
  visibility    PostVisibility @default(PUBLIC)
  publishedAt   DateTime?      @map("published_at")
  scheduledAt   DateTime?      @map("scheduled_at")

  readingTime   Int?           @map("reading_time")
  wordCount     Int?           @map("word_count")
  language      String?

  authorId      String         @map("author_id")
  author        User           @relation(fields: [authorId], references: [id], onDelete: Cascade)

  // réponses/threads
  parentId      String?        @map("parent_id")
  parent        Post?          @relation("PostReplies", fields: [parentId], references: [id])
  children      Post[]         @relation("PostReplies")

  // médias et contenu associé
  attachments   MediaAsset[]
  codeSnippets  CodeSnippet[]

  // taxonomie
  tags          PostsOnTags[]
  categories    PostsOnCategories[]

  // interactions
  comments      Comment[]
  reactions     Reaction[]

  createdAt     DateTime       @default(now()) @map("created_at")
  updatedAt     DateTime       @updatedAt      @map("updated_at")

  @@index([authorId, status, publishedAt])
  @@index([slug])
  @@map("post")
}

// Médias attachés (images, vidéos, fichiers, embeds, code)
model MediaAsset {
  id         String    @id @default(cuid())
  postId     String    @map("post_id")
  post       Post      @relation(fields: [postId], references: [id], onDelete: Cascade)

  type       MediaType
  url        String
  provider   String?
  title      String?
  alt        String?
  caption    String?
  position   Int?

  mimeType   String?   @map("mime_type")
  sizeBytes  Int?      @map("size_bytes")
  width      Int?
  height     Int?
  durationMs Int?      @map("duration_ms")
  meta       Json?     // métadonnées libres (ex. thumbnails, codecs, palette)

  createdAt  DateTime  @default(now()) @map("created_at")
  updatedAt  DateTime  @updatedAt      @map("updated_at")

  @@index([postId, type, position])
  @@map("media_asset")
}

// Extraits de code dédiés (optionnel si tu ne veux pas tout mettre en JSON)
model CodeSnippet {
  id              String    @id @default(cuid())
  postId          String    @map("post_id")
  post            Post      @relation(fields: [postId], references: [id], onDelete: Cascade)

  title           String?
  language        String
  filename        String?
  code            String
  highlightedHtml String?   @map("highlighted_html")

  createdAt       DateTime  @default(now()) @map("created_at")
  updatedAt       DateTime  @updatedAt      @map("updated_at")

  @@index([postId, language])
  @@map("code_snippet")
}

// Tags m-n explicite
model Tag {
  id          String        @id @default(cuid())
  name        String        @unique
  slug        String        @unique
  description String?
  posts       PostsOnTags[]
  createdAt   DateTime      @default(now()) @map("created_at")
  updatedAt   DateTime      @updatedAt      @map("updated_at")
  @@map("tag")
}

model PostsOnTags {
  postId     String @map("post_id")
  tagId      String @map("tag_id")
  post       Post   @relation(fields: [postId], references: [id], onDelete: Cascade)
  tag        Tag    @relation(fields: [tagId], references: [id], onDelete: Cascade)
  assignedAt DateTime @default(now()) @map("assigned_at")
  assignedBy String?  @map("assigned_by")

  @@id([postId, tagId])
  @@map("posts_on_tags")
}

// Catégories hiérarchiques + m-n
model Category {
  id          String               @id @default(cuid())
  name        String               @unique
  slug        String               @unique
  description String?

  parentId    String?              @map("parent_id")
  parent      Category?            @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[]           @relation("CategoryHierarchy")

  posts       PostsOnCategories[]
  createdAt   DateTime             @default(now()) @map("created_at")
  updatedAt   DateTime             @updatedAt      @map("updated_at")

  @@map("category")
}

model PostsOnCategories {
  postId     String   @map("post_id")
  categoryId String   @map("category_id")
  post       Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  category   Category @relation(fields: [categoryId], references: [id], onDelete: Cascade)
  position   Int?
  assignedAt DateTime @default(now()) @map("assigned_at")

  @@id([postId, categoryId])
  @@map("posts_on_categories")
}

// Commentaires threadés (réponses de commentaires)
model Comment {
  id          String        @id @default(cuid())
  postId      String        @map("post_id")
  post        Post          @relation(fields: [postId], references: [id], onDelete: Cascade)

  authorId    String        @map("author_id")
  author      User          @relation(fields: [authorId], references: [id], onDelete: Cascade)

  content     Json?         // riche (texte, mentions, emojis)
  contentText String?       @map("content_text")
  status      CommentStatus @default(VISIBLE)

  parentId    String?       @map("parent_id")
  parent      Comment?      @relation("CommentThread", fields: [parentId], references: [id])
  children    Comment[]     @relation("CommentThread")

  createdAt   DateTime      @default(now()) @map("created_at")
  updatedAt   DateTime      @updatedAt      @map("updated_at")

  @@index([postId, parentId])
  @@map("comment")
}

// Réactions (likes, claps, etc.)
model Reaction {
  id        String       @id @default(cuid())
  postId    String       @map("post_id")
  post      Post         @relation(fields: [postId], references: [id], onDelete: Cascade)

  userId    String       @map("user_id")
  user      User         @relation(fields: [userId], references: [id], onDelete: Cascade)

  type      ReactionType @default(LIKE)
  createdAt DateTime     @default(now()) @map("created_at")

  @@unique([postId, userId, type])
  @@map("reaction")
}`

// Composant de surlignage de code simple
const CodeBlock = ({ code, language = 'prisma' }: { code: string; language?: string }) => {
  return (
    <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
      <code>{code}</code>
    </pre>
  )
}

// Types pour les props des composants
interface ModelField {
  name: string
  type: string
  description: string
  required: boolean
  relation?: string
  index?: boolean
  unique?: boolean
}

interface ModelData {
  name: string
  description: string
  tableName: string
  fields: ModelField[]
  indexes: string[]
  relations: string[]
}

interface BlogFeature {
  title: string
  description: string
  features: string[]
}

interface UsageScenario {
  scenario: string
  description: string
  usage: string[]
}

export default function BlogSchemaDocumentation() {
  const [activeTab, setActiveTab] = useState('overview')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modelsData: ModelData[] = [
    {
      name: "Post",
      description: "Modèle principal pour les articles de blog avec système de réponses hiérarchique",
      tableName: "post",
      indexes: ["authorId, status, publishedAt", "slug"],
      relations: ["User (author)", "Post (parent/children)", "MediaAsset", "CodeSnippet", "PostsOnTags", "PostsOnCategories", "Comment", "Reaction"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "slug", type: "String", description: "URL unique et SEO-friendly pour l'article", required: true, unique: true },
        { name: "title", type: "String", description: "Titre principal de l'article", required: true },
        { name: "subtitle", type: "String?", description: "Sous-titre optionnel pour compléter le titre", required: false },
        { name: "content", type: "Json?", description: "Contenu riche stocké en JSON (blocs éditeur, MDX sérialisé, structure complexe)", required: false },
        { name: "contentText", type: "String?", description: "Version texte brut pour SEO et recherche plein texte", required: false },
        { name: "excerpt", type: "String?", description: "Extrait ou description courte pour les previews", required: false },
        { name: "coverImageUrl", type: "String?", description: "URL de l'image de couverture principale", required: false },
        { name: "canonicalUrl", type: "String?", description: "URL canonique pour éviter le contenu dupliqué", required: false },
        { name: "ogImageUrl", type: "String?", description: "Image spécifique pour les partages sociaux", required: false },
        { name: "status", type: "PostStatus", description: "État de publication (DRAFT, PUBLISHED, SCHEDULED, ARCHIVED)", required: true },
        { name: "visibility", type: "PostVisibility", description: "Visibilité (PUBLIC, UNLISTED, PRIVATE)", required: true },
        { name: "publishedAt", type: "DateTime?", description: "Date et heure de publication effective", required: false },
        { name: "scheduledAt", type: "DateTime?", description: "Date et heure de publication programmée", required: false },
        { name: "readingTime", type: "Int?", description: "Temps de lecture estimé en minutes", required: false },
        { name: "wordCount", type: "Int?", description: "Nombre de mots dans l'article", required: false },
        { name: "language", type: "String?", description: "Langue de l'article (ex: 'fr', 'en')", required: false },
        { name: "authorId", type: "String", description: "Référence à l'auteur de l'article", required: true, relation: "User" },
        { name: "parentId", type: "String?", description: "Pour les réponses d'articles (threads)", required: false, relation: "Post" },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "MediaAsset",
      description: "Gestion complète des médias attachés aux articles avec métadonnées techniques",
      tableName: "media_asset",
      indexes: ["postId, type, position"],
      relations: ["Post"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "postId", type: "String", description: "Référence à l'article parent", required: true, relation: "Post" },
        { name: "type", type: "MediaType", description: "Type de média (IMAGE, VIDEO, AUDIO, FILE, EMBED, CODE)", required: true },
        { name: "url", type: "String", description: "URL d'accès au média", required: true },
        { name: "provider", type: "String?", description: "Fournisseur de stockage (cloudinary, s3, etc.)", required: false },
        { name: "title", type: "String?", description: "Titre du média", required: false },
        { name: "alt", type: "String?", description: "Texte alternatif pour l'accessibilité", required: false },
        { name: "caption", type: "String?", description: "Légende descriptive", required: false },
        { name: "position", type: "Int?", description: "Ordre d'affichage dans l'article", required: false },
        { name: "mimeType", type: "String?", description: "Type MIME du fichier", required: false },
        { name: "sizeBytes", type: "Int?", description: "Taille du fichier en octets", required: false },
        { name: "width", type: "Int?", description: "Largeur pour les médias visuels", required: false },
        { name: "height", type: "Int?", description: "Hauteur pour les médias visuels", required: false },
        { name: "durationMs", type: "Int?", description: "Durée en millisecondes pour audio/vidéo", required: false },
        { name: "meta", type: "Json?", description: "Métadonnées libres (thumbnails, codecs, palette de couleurs)", required: false },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "CodeSnippet",
      description: "Extraits de code dédiés avec coloration syntaxique et métadonnées",
      tableName: "code_snippet",
      indexes: ["postId, language"],
      relations: ["Post"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "postId", type: "String", description: "Référence à l'article parent", required: true, relation: "Post" },
        { name: "title", type: "String?", description: "Titre optionnel de l'extrait", required: false },
        { name: "language", type: "String", description: "Langage de programmation (javascript, python, etc.)", required: true },
        { name: "filename", type: "String?", description: "Nom de fichier source", required: false },
        { name: "code", type: "String", description: "Code source brut", required: true },
        { name: "highlightedHtml", type: "String?", description: "HTML avec coloration syntaxique appliquée", required: false },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "Tag",
      description: "Tags pour la classification flexible des articles",
      tableName: "tag",
      indexes: [],
      relations: ["PostsOnTags"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "name", type: "String", description: "Nom du tag (unique)", required: true, unique: true },
        { name: "slug", type: "String", description: "Slug unique pour les URLs", required: true, unique: true },
        { name: "description", type: "String?", description: "Description optionnelle du tag", required: false },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "PostsOnTags",
      description: "Table de liaison many-to-many entre articles et tags avec métadonnées",
      tableName: "posts_on_tags",
      indexes: [],
      relations: ["Post", "Tag"],
      fields: [
        { name: "postId", type: "String", description: "Référence à l'article", required: true, relation: "Post" },
        { name: "tagId", type: "String", description: "Référence au tag", required: true, relation: "Tag" },
        { name: "assignedAt", type: "DateTime", description: "Date d'association", required: true },
        { name: "assignedBy", type: "String?", description: "Utilisateur qui a assigné le tag", required: false }
      ]
    },
    {
      name: "Category",
      description: "Catégories hiérarchiques pour l'organisation structurée des articles",
      tableName: "category",
      indexes: [],
      relations: ["Category (parent/children)", "PostsOnCategories"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "name", type: "String", description: "Nom de la catégorie (unique)", required: true, unique: true },
        { name: "slug", type: "String", description: "Slug unique pour les URLs", required: true, unique: true },
        { name: "description", type: "String?", description: "Description optionnelle de la catégorie", required: false },
        { name: "parentId", type: "String?", description: "Catégorie parente pour l'hiérarchie", required: false, relation: "Category" },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "PostsOnCategories",
      description: "Table de liaison many-to-many entre articles et catégories avec positionnement",
      tableName: "posts_on_categories",
      indexes: [],
      relations: ["Post", "Category"],
      fields: [
        { name: "postId", type: "String", description: "Référence à l'article", required: true, relation: "Post" },
        { name: "categoryId", type: "String", description: "Référence à la catégorie", required: true, relation: "Category" },
        { name: "position", type: "Int?", description: "Position dans la catégorie pour l'ordonnancement", required: false },
        { name: "assignedAt", type: "DateTime", description: "Date d'association", required: true }
      ]
    },
    {
      name: "Comment",
      description: "Système de commentaires threadés avec modération avancée",
      tableName: "comment",
      indexes: ["postId, parentId"],
      relations: ["Post", "User", "Comment (parent/children)"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "postId", type: "String", description: "Référence à l'article commenté", required: true, relation: "Post" },
        { name: "authorId", type: "String", description: "Référence à l'auteur du commentaire", required: true, relation: "User" },
        { name: "content", type: "Json?", description: "Contenu riche avec mentions, emojis, formatage", required: false },
        { name: "contentText", type: "String?", description: "Version texte brut pour la recherche", required: false },
        { name: "status", type: "CommentStatus", description: "État de modération (VISIBLE, HIDDEN, SPAM, DELETED)", required: true },
        { name: "parentId", type: "String?", description: "Pour les réponses aux commentaires", required: false, relation: "Comment" },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true },
        { name: "updatedAt", type: "DateTime", description: "Date de dernière modification", required: true }
      ]
    },
    {
      name: "Reaction",
      description: "Réactions sociales aux articles avec contraintes d'unicité",
      tableName: "reaction",
      indexes: [],
      relations: ["Post", "User"],
      fields: [
        { name: "id", type: "String", description: "Identifiant unique généré avec cuid()", required: true, unique: true },
        { name: "postId", type: "String", description: "Référence à l'article", required: true, relation: "Post" },
        { name: "userId", type: "String", description: "Référence à l'utilisateur", required: true, relation: "User" },
        { name: "type", type: "ReactionType", description: "Type de réaction (LIKE, CLAP, UPVOTE, DOWNVOTE, LOVE)", required: true },
        { name: "createdAt", type: "DateTime", description: "Date de création", required: true }
      ]
    }
  ]

  const architectureModels = [
    { name: "Post", description: "Article principal avec système de réponses hiérarchique" },
    { name: "MediaAsset", description: "Gestion complète des médias avec métadonnées techniques" },
    { name: "CodeSnippet", description: "Extraits de code dédiés avec coloration syntaxique" },
    { name: "Tag", description: "Tags pour classification flexible" },
    { name: "Category", description: "Catégories hiérarchiques pour organisation structurée" },
    { name: "Comment", description: "Commentaires threadés avec modération avancée" },
    { name: "Reaction", description: "Réactions sociales avec contraintes d'unicité" }
  ]

  const blogFeatures: BlogFeature[] = [
    {
      title: "🎯 Contenu Structuré Avancé",
      description: "Articles avec contenu riche JSON, extraits de code dédiés, et métadonnées complètes",
      features: [
        "Contenu riche JSON pour éditeurs visuels",
        "Extraits de code avec coloration syntaxique", 
        "Métadonnées SEO complètes (canonical, OG)",
        "Temps de lecture et comptage de mots"
      ]
    },
    {
      title: "📊 Workflow de Publication Flexible",
      description: "Gestion complète du cycle de vie des articles avec statuts multiples",
      features: [
        "Brouillons, publication immédiate et programmée",
        "Archivage des anciens articles",
        "Visibilité contrôlée (public, non listé, privé)",
        "Dates de publication flexibles"
      ]
    },
    {
      title: "🏷️ Organisation Multi-niveaux",
      description: "Système combiné de tags et catégories hiérarchiques",
      features: [
        "Tags flexibles many-to-many",
        "Catégories hiérarchiques imbriquées",
        "Positionnement dans les catégories",
        "Slugs optimisés SEO"
      ]
    },
    {
      title: "🖼️ Gestion des Médias Riches",
      description: "Support complet pour tous types de médias avec métadonnées techniques",
      features: [
        "Images, vidéos, audio, fichiers, embeds",
        "Métadonnées techniques (dimensions, durée, taille)",
        "Organisation par position dans l'article",
        "Support multi-fournisseurs cloud"
      ]
    },
    {
      title: "💬 Interactions Sociales Complètes",
      description: "Système avancé d'engagement avec commentaires et réactions",
      features: [
        "Commentaires threadés illimités",
        "Modération multi-niveaux",
        "Réactions multiples sans doublons",
        "Contenu riche dans les commentaires"
      ]
    },
    {
      title: "🔍 Optimisation SEO Intégrée",
      description: "Structure conçue pour le référencement et la performance",
      features: [
        "Slugs uniques et sémantiques",
        "Balises meta dédiées (OG, canonical)",
        "Contenu texte pour la recherche",
        "URLs canoniques de contrôle"
      ]
    }
  ]

  const usageScenarios: UsageScenario[] = [
    {
      scenario: "Blog Technique/Développement",
      description: "Idéal pour les développeurs, ingénieurs et techniciens",
      usage: [
        "Utilisez CodeSnippet pour les démonstrations de code avec coloration syntaxique",
        "Organisez par tags techniques (react, nodejs, python) et catégories hiérarchiques (Frontend/Backend)",
        "Ajoutez des schémas techniques et diagrammes en MediaAsset de type EMBED",
        "Utilisez les réactions UPVOTE/DOWNVOTE pour le feedback technique"
      ]
    },
    {
      scenario: "Blog Personnel/Créatif",
      description: "Parfait pour les créateurs de contenu, écrivains et artistes",
      usage: [
        "Exploitez les réactions émotionnelles (LOVE, CLAP) pour l'engagement",
        "Utilisez UNLISTED pour le partage privé avec liens directs",
        "Rich content JSON pour des mises en page créatives et uniques",
        "Galerie média intégrée avec MediaAsset pour portfolios"
      ]
    },
    {
      scenario: "Blog d'Entreprise/Corporate",
      description: "Solution professionnelle pour les organisations et équipes",
      usage: [
        "Workflow de publication avec statuts DRAFT → SCHEDULED → PUBLISHED",
        "Commentaires modérés avec statuts HIDDEN/SPAM pour le contrôle",
        "Catégories hiérarchiques pour l'organisation départementale",
        "Analytics via les réactions et commentaires pour mesurer l'engagement"
      ]
    },
    {
      scenario: "Blog Éducatif/Formation",
      description: "Adapté pour les cours en ligne, tutoriels et documentation",
      usage: [
        "Système de réponses (threads) pour les Q/R et discussions",
        "Hiérarchie de catégories pour organiser les modules et leçons",
        "MediaAsset pour les vidéos éducatives avec durée et métadonnées",
        "CodeSnippet pour les exemples pratiques et exercices"
      ]
    }
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "Configuration et Installation",
      description: "Mise en place de Prisma et génération du client",
      code: `// package.json
{
  "dependencies": {
    "@prisma/client": "^5.0.0",
    "prisma": "^5.0.0"
  }
}

// Terminal - Installation et setup
npm install
npx prisma generate
npx prisma db push

// Configuration du client
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()`
    },
    {
      step: 2,
      title: "Création d'Article Complet",
      description: "Créer un article avec contenu riche, métadonnées et relations",
      code: `// Création d'un article avec relations incluses
const post = await prisma.post.create({
  data: {
    slug: "mon-premier-article",
    title: "Mon Premier Article Technique",
    subtitle: "Un sous-titre attractif",
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Introduction" }]
        },
        {
          type: "paragraph", 
          content: [{ type: "text", text: "Ceci est mon premier article..." }]
        }
      ]
    },
    contentText: "Ceci est mon premier article de blog technique...",
    excerpt: "Un extrait court pour les previews...",
    status: "PUBLISHED",
    visibility: "PUBLIC",
    publishedAt: new Date(),
    readingTime: 5,
    wordCount: 1200,
    language: "fr",
    authorId: "user_123",
    // Relations many-to-many
    tags: {
      create: [
        { tag: { connect: { slug: "javascript" } } },
        { tag: { connect: { slug: "react" } } }
      ]
    },
    categories: {
      create: [
        { 
          category: { connect: { slug: "developpement-web" } },
          position: 1
        }
      ]
    }
  },
  include: {
    tags: { include: { tag: true } },
    categories: { include: { category: true } }
  }
})`
    },
    {
      step: 3,
      title: "Gestion des Médias et Extraits de Code",
      description: "Ajouter des médias et extraits de code à un article",
      code: `// Ajouter un média à un article
await prisma.mediaAsset.create({
  data: {
    postId: post.id,
    type: "IMAGE",
    url: "/images/cover.jpg",
    provider: "cloudinary",
    alt: "Image de couverture de l'article",
    caption: "Une belle image pour illustrer l'article",
    position: 0,
    width: 1200,
    height: 630,
    mimeType: "image/jpeg",
    sizeBytes: 204800
  }
})

// Ajouter un extrait de code
await prisma.codeSnippet.create({
  data: {
    postId: post.id,
    title: "Composant React exemple",
    language: "typescript",
    filename: "Button.tsx",
    code: \`export function Button({ children }) {
  return <button className="btn">{children}</button>
}\`
  }
})`
    },
    {
      step: 4,
      title: "Gestion des Interactions Sociales",
      description: "Commentaires threadés et réactions",
      code: `// Ajouter un commentaire racine
const comment = await prisma.comment.create({
  data: {
    postId: post.id,
    authorId: "user_456",
    content: { text: "Excellent article !" },
    contentText: "Excellent article !",
    status: "VISIBLE"
  }
})

// Répondre à un commentaire (thread)
await prisma.comment.create({
  data: {
    postId: post.id,
    authorId: "user_789",
    parentId: comment.id,
    content: { text: "Merci pour ce feedback !" },
    contentText: "Merci pour ce feedback !",
    status: "VISIBLE"
  }
})

// Ajouter une réaction (unicité garantie par la contrainte)
await prisma.reaction.create({
  data: {
    postId: post.id,
    userId: "user_456",
    type: "CLAP"
  }
})`
    },
    {
      step: 5,
      title: "Requêtes Avancées et Optimisations",
      description: "Exemples de requêtes complexes avec relations",
      code: `// Récupérer un article avec toutes ses relations
const fullPost = await prisma.post.findUnique({
  where: { slug: "mon-premier-article" },
  include: {
    author: true,
    tags: { include: { tag: true } },
    categories: { include: { category: true } },
    attachments: true,
    codeSnippets: true,
    comments: {
      where: { status: "VISIBLE" },
      include: {
        author: true,
        children: {
          include: { author: true }
        }
      }
    },
    reactions: true,
    _count: {
      select: {
        comments: true,
        reactions: true
      }
    }
  }
})

// Articles publiés récents avec pagination
const recentPosts = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() }
  },
  include: {
    author: true,
    tags: { include: { tag: true } },
    categories: { include: { category: true } },
    _count: {
      select: {
        comments: true,
        reactions: true
      }
    }
  },
  orderBy: { publishedAt: "desc" },
  take: 10,
  skip: 0
})`
    }
  ]

  const bestPractices = [
    {
      category: "Performance",
      items: [
        "Utilisez les includes Prisma de façon sélective pour éviter over-fetching",
        "Profitez des index existants (slug, authorId+status+publishedAt)",
        "Utilisez pagination pour les listes d'articles et commentaires",
        "Cachez les articles fréquemment lus au niveau application"
      ]
    },
    {
      category: "Intégrité des Données",
      items: [
        "La contrainte @@unique sur Reaction empêche les doublons utilisateur+type",
        "Les onDelete: Cascade garantissent la cohérence des relations",
        "Les slugs uniques préviennent les conflits d'URL",
        "Utilisez les enums pour les statuts prédéfinis"
      ]
    },
    {
      category: "SEO et UX",
      items: [
        "Générez des slugs sémantiques et stables",
        "Utilisez contentText pour la recherche plein texte",
        "Maintenez les URLs canoniques pour éviter le duplicate content",
        "Optimisez les images avec les métadonnées MediaAsset"
      ]
    },
    {
      category: "Sécurité et Modération",
      items: [
        "Validez le contenu JSON avant stockage",
        "Utilisez les statuts de commentaires pour la modération",
        "Implémentez des rate limits pour les réactions",
        "Auditez les actions avec les champs assignedBy et timestamps"
      ]
    }
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Documentation Complète du Schéma Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Guide détaillé pour comprendre et exploiter toutes les capacités de votre schéma de base de données
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="schema">Schéma Complet</TabsTrigger>
            <TabsTrigger value="models">Modèles Détaillés</TabsTrigger>
            <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
            <TabsTrigger value="guide">Guide Complet</TabsTrigger>
            <TabsTrigger value="examples">Exemples Avancés</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DatabaseIcon className="w-5 h-5 text-blue-500" />
                    Structure Modulaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Schéma organisé avec 7 modèles principaux couvrant contenu, taxonomie, médias et interactions sociales
                  </p>
                  <div className="text-sm text-slate-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Modèles principaux:</span>
                      <span className="font-semibold">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Relations:</span>
                      <span className="font-semibold">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Index optimisés:</span>
                      <span className="font-semibold">6</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5 text-green-500" />
                    Contenu Riche Flexible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Support JSON avancé, extraits de code dédiés, médias variés avec métadonnées complètes
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">JSON Content</Badge>
                    <Badge variant="secondary">Code Snippets</Badge>
                    <Badge variant="secondary">Rich Media</Badge>
                    <Badge variant="secondary">SEO Ready</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-purple-500" />
                    Interactions Sociales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Système complet de commentaires threadés, réactions contrôlées et modération avancée
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Threaded Comments</Badge>
                    <Badge variant="secondary">Reactions</Badge>
                    <Badge variant="secondary">Moderation</Badge>
                    <Badge variant="secondary">Engagement</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Architecture du Schéma</CardTitle>
                <CardDescription>
                  Organisation hiérarchique des modèles, relations et responsabilités
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {architectureModels.map((model) => (
                    <div key={model.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{model.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {model.description}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          Modèle
                        </Badge>
                        {model.name === 'Post' && <Badge variant="outline">Principal</Badge>}
                        {model.name.includes('PostsOn') && <Badge variant="outline">Relation</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workflows Supportés</CardTitle>
                <CardDescription>
                  Flux complets couvrant création, publication, engagement et modération
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Créateur/Éditeur</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">Création</h4>
                          <p className="text-sm text-slate-600">Articles en DRAFT avec contenu riche JSON</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">Enrichissement</h4>
                          <p className="text-sm text-slate-600">Médias, extraits code, tags, catégories</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">Publication</h4>
                          <p className="text-sm text-slate-600">PUBLISHED immédiat ou SCHEDULED</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Lecteur/Communauté</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">Consommation</h4>
                          <p className="text-sm text-slate-600">Lecture articles selon visibilité</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">Engagement</h4>
                          <p className="text-sm text-slate-600">Commentaires threadés et réactions</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">Interaction</h4>
                          <p className="text-sm text-slate-600">Navigation tags/catégories hiérarchiques</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schéma Complet */}
          <TabsContent value="schema">
            <Card>
              <CardHeader>
                <CardTitle>Schéma Prisma Complet</CardTitle>
                <CardDescription>
                  Code source complet du schéma de base de données avec commentaires détaillés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Points Clés du Schéma</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Auto-relations pour threads (Post, Comment, Category)</li>
                    <li>• Relations many-to-many explicites avec métadonnées</li>
                    <li>• Contraintes d'unicité composites pour l'intégrité</li>
                    <li>• Index optimisés pour les requêtes courantes</li>
                    <li>• Cascade delete pour la cohérence des données</li>
                  </ul>
                </div>
                <CodeBlock code={schemaCode} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Modèles Détaillés */}
          <TabsContent value="models">
            <div className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {modelsData.map((model, index) => (
                  <AccordionItem key={model.name} value={`model-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-slate-900 dark:text-white hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <span>{model.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {model.tableName}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white mb-2">Description</h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            {model.description}
                          </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          {model.indexes.length > 0 && (
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Index</h4>
                              <div className="space-y-2">
                                {model.indexes.map((index, idx) => (
                                  <div key={idx} className="text-sm font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                    {index}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {model.relations.length > 0 && (
                            <div>
                              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Relations</h4>
                              <div className="space-y-2">
                                {model.relations.map((relation, idx) => (
                                  <div key={idx} className="text-sm text-slate-600 dark:text-slate-400">
                                    • {relation}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-white mb-3">Champs Détaillés</h4>
                          <div className="space-y-2">
                            {model.fields.map((field) => (
                              <div key={field.name} className="flex items-start justify-between p-3 border rounded bg-slate-50 dark:bg-slate-800/50">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-3 mb-1">
                                    <code className="font-mono text-sm bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                                      {field.name}
                                    </code>
                                    <span className={`text-sm ${field.required ? 'text-red-500 font-semibold' : 'text-slate-500'}`}>
                                      {field.type}
                                    </span>
                                    {field.unique && (
                                      <Badge variant="secondary" className="text-xs">Unique</Badge>
                                    )}
                                    {field.relation && (
                                      <Badge variant="outline" className="text-xs">Relation</Badge>
                                    )}
                                    {field.index && (
                                      <Badge variant="outline" className="text-xs">Indexé</Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {field.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Fonctionnalités */}
          <TabsContent value="features">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Capacités Complètes du Schéma
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogFeatures.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                              <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Cas d'Usage Avancés</CardTitle>
                  <CardDescription>
                    Exemples concrets d'adaptation à différents types de blogs et besoins
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {usageScenarios.map((scenario, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-800 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                          {scenario.scenario}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                          {scenario.description}
                        </p>
                        <ul className="space-y-2">
                          {scenario.usage.map((useCase, idx) => (
                            <li key={idx} className="text-sm text-slate-500 dark:text-slate-400 flex items-start">
                              <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bonnes Pratiques Recommandées</CardTitle>
                  <CardDescription>
                    Conseils d'implémentation pour optimiser les performances et maintenabilité
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="font-semibold text-slate-900 dark:text-white">{practice.category}</h4>
                        <ul className="space-y-2">
                          {practice.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Guide Complet */}
          <TabsContent value="guide">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>📖 Guide d'Implémentation Complet</CardTitle>
                  <CardDescription>
                    Apprenez à tirer le meilleur parti de votre schéma de blog avec des exemples pratiques
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Workflow de Publication */}
                  <div className="border-b pb-6">
                    <h3 className="font-semibold text-xl mb-4">Workflow de Publication Complet</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Création et Préparation</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              1
                            </div>
                            <div>
                              <h4 className="font-medium">Création du Brouillon</h4>
                              <p className="text-sm text-slate-600">Article créé avec statut DRAFT et contenu JSON riche</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              2
                            </div>
                            <div>
                              <h4 className="font-medium">Enrichissement</h4>
                              <p className="text-sm text-slate-600">Ajout médias, extraits code, tags, catégories hiérarchiques</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              3
                            </div>
                            <div>
                              <h4 className="font-medium">Optimisation SEO</h4>
                              <p className="text-sm text-slate-600">Slug sémantique, meta description, URL canonique</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Publication et Engagement</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              4
                            </div>
                            <div>
                              <h4 className="font-medium">Publication</h4>
                              <p className="text-sm text-slate-600">Changement statut vers PUBLISHED ou SCHEDULED</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              5
                            </div>
                            <div>
                              <h4 className="font-medium">Engagement</h4>
                              <p className="text-sm text-slate-600">Gestion commentaires threadés et réactions</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                              6
                            </div>
                            <div>
                              <h4 className="font-medium">Archivage</h4>
                              <p className="text-sm text-slate-600">Changement statut vers ARCHIVED pour anciens contenus</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Implémentation Pas à Pas */}
                  <div>
                    <h3 className="font-semibold text-xl mb-4">Implémentation Pas à Pas</h3>
                    <div className="space-y-6">
                      {implementationSteps.map((step) => (
                        <div key={step.step} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{step.description}</p>
                              <CodeBlock code={step.code} language="typescript" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gestion des Relations Avancées */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-xl mb-4">Gestion des Relations Avancées</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Auto-relations (Threads)</h4>
                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <p>Le schéma supporte trois types d'auto-relations :</p>
                          <ul className="space-y-1 ml-4">
                            <li>• <strong>Post → Post</strong> : Pour les réponses d'articles</li>
                            <li>• <strong>Comment → Comment</strong> : Pour les threads de commentaires</li>
                            <li>• <strong>Category → Category</strong> : Pour les hiérarchies de catégories</li>
                          </ul>
                          <p className="mt-2 text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                            Utilisez <code>parentId</code> et les relations <code>parent</code>/<code>children</code> pour naviguer
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Many-to-Many Explicites</h4>
                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <p>Les tables de jointure explicites permettent :</p>
                          <ul className="space-y-1 ml-4">
                            <li>• Métadonnées supplémentaires (assignedAt, assignedBy)</li>
                            <li>• Positionnement (position dans PostsOnCategories)</li>
                            <li>• Contrôle fin des suppressions en cascade</li>
                            <li>• Indexation optimisée</li>
                          </ul>
                          <p className="mt-2 text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded">
                            Prisma génère automatiquement les APIs pour ces relations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance et Optimisation */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-xl mb-4">Performance et Optimisation</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Index Existants</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@index([authorId, status, publishedAt])</code>
                            <Badge variant="secondary">Post</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@index([slug])</code>
                            <Badge variant="secondary">Post</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@index([postId, type, position])</code>
                            <Badge variant="secondary">MediaAsset</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@index([postId, language])</code>
                            <Badge variant="secondary">CodeSnippet</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@index([postId, parentId])</code>
                            <Badge variant="secondary">Comment</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Contraintes d'Intégrité</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@unique([postId, userId, type])</code>
                            <Badge variant="secondary">Reaction</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@id([postId, tagId])</code>
                            <Badge variant="secondary">PostsOnTags</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>@@id([postId, categoryId])</code>
                            <Badge variant="secondary">PostsOnCategories</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <code>onDelete: Cascade</code>
                            <Badge variant="secondary">Toutes relations</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Exemples Avancés */}
          <TabsContent value="examples">
            <Card>
              <CardHeader>
                <CardTitle>Exemples Avancés d'Implémentation</CardTitle>
                <CardDescription>
                  Cas concrets et patterns avancés pour exploiter toutes les capacités du schéma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Exemple Complet de Création */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Création d'Article Complet avec Relations</h3>
                  <CodeBlock 
                    code={`// Création d'un article technique complet avec toutes les relations
const technicalPost = await prisma.post.create({
  data: {
    slug: "guide-complet-react-2024",
    title: "Guide Complet React 2024",
    subtitle: "Les meilleures pratiques et nouveaux patterns",
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 1 },
          content: [{ type: "text", text: "Introduction à React 2024" }]
        },
        {
          type: "paragraph",
          content: [{ type: "text", text: "React continue d'évoluer avec de nouvelles fonctionnalités..." }]
        }
      ]
    },
    contentText: "React continue d'évoluer avec de nouvelles fonctionnalités...",
    excerpt: "Découvrez les dernières évolutions de React et les meilleures pratiques pour 2024",
    coverImageUrl: "/images/react-2024-cover.jpg",
    canonicalUrl: "https://monblog.com/guides/react-2024",
    ogImageUrl: "/images/react-2024-og.jpg",
    status: "PUBLISHED",
    visibility: "PUBLIC",
    publishedAt: new Date(),
    readingTime: 15,
    wordCount: 3500,
    language: "fr",
    authorId: "user_tech_author",
    
    // Tags techniques
    tags: {
      create: [
        { 
          tag: { 
            connectOrCreate: {
              where: { slug: "react" },
              create: { name: "React", slug: "react", description: "Bibliothèque JavaScript pour interfaces utilisateur" }
            }
          },
          assignedBy: "user_tech_author"
        },
        { 
          tag: { 
            connectOrCreate: {
              where: { slug: "javascript" },
              create: { name: "JavaScript", slug: "javascript", description: "Langage de programmation" }
            }
          },
          assignedBy: "user_tech_author"
        }
      ]
    },
    
    // Catégories hiérarchiques
    categories: {
      create: [
        { 
          category: { 
            connect: { slug: "frontend" }
          },
          position: 1
        },
        { 
          category: { 
            connect: { slug: "frameworks" }
          },
          position: 2
        }
      ]
    },
    
    // Médias associés
    attachments: {
      create: [
        {
          type: "IMAGE",
          url: "/images/react-architecture.png",
          provider: "cloudinary",
          title: "Architecture React Moderne",
          alt: "Diagramme illustrant l'architecture React avec hooks et context",
          caption: "Nouvelle architecture recommandée pour 2024",
          position: 1,
          width: 1200,
          height: 800,
          mimeType: "image/png",
          sizeBytes: 450000
        },
        {
          type: "EMBED",
          url: "https://codesandbox.io/embed/react-example",
          provider: "codesandbox",
          title: "Exemple CodeSandbox",
          position: 2
        }
      ]
    },
    
    // Extraits de code
    codeSnippets: {
      create: [
        {
          title: "Composant React avec Hooks",
          language: "typescript",
          filename: "UserProfile.tsx",
          code: \`import { useState, useEffect } from 'react';

interface UserProfileProps {
  userId: string;
}

export function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Chargement...</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}\`
        }
      ]
    }
  },
  include: {
    author: true,
    tags: { include: { tag: true } },
    categories: { include: { category: true } },
    attachments: true,
    codeSnippets: true,
    _count: {
      select: {
        comments: true,
        reactions: true
      }
    }
  }
});`} 
                  />
                </div>

                {/* Gestion des Interactions Sociales */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Système de Commentaires Threadés</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock 
                        code={`// Création d'un thread de commentaires
const rootComment = await prisma.comment.create({
  data: {
    postId: technicalPost.id,
    authorId: "user_reader_1",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: "Excellent article ! J'ai particulièrement aimé la section sur les hooks." }]
        }
      ]
    },
    contentText: "Excellent article ! J'ai particulièrement aimé la section sur les hooks.",
    status: "VISIBLE"
  }
});

// Réponse au commentaire
const replyComment = await prisma.comment.create({
  data: {
    postId: technicalPost.id,
    authorId: "user_tech_author", 
    parentId: rootComment.id,
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: "Merci ! Les hooks ont vraiment révolutionné la façon de développer avec React." }]
        }
      ]
    },
    contentText: "Merci ! Les hooks ont vraiment révolutionné la façon de développer avec React.",
    status: "VISIBLE"
  }
});

// Récupération des commentaires avec threads
const commentsWithThreads = await prisma.comment.findMany({
  where: {
    postId: technicalPost.id,
    status: "VISIBLE",
    parentId: null // Commentaires racine seulement
  },
  include: {
    author: true,
    children: {
      include: {
        author: true,
        children: { // Récursivité limitée
          include: {
            author: true
          }
        }
      }
    }
  },
  orderBy: { createdAt: "asc" }
});`}
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Gestion des Réactions et Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CodeBlock 
                        code={`// Ajout de réactions avec contrainte d'unicité
await prisma.reaction.createMany({
  data: [
    {
      postId: technicalPost.id,
      userId: "user_reader_1",
      type: "CLAP"
    },
    {
      postId: technicalPost.id, 
      userId: "user_reader_2",
      type: "LOVE"
    },
    {
      postId: technicalPost.id,
      userId: "user_reader_3", 
      type: "CLAP"
    }
  ],
  skipDuplicates: true // Important: respecte la contrainte @@unique
});

// Analytics des réactions
const reactionStats = await prisma.reaction.groupBy({
  by: ['type'],
  where: {
    postId: technicalPost.id
  },
  _count: {
    type: true
  }
});

// Résultat:
// [
//   { type: 'CLAP', _count: 2 },
//   { type: 'LOVE', _count: 1 }
// ]

// Top articles par engagement
const topPosts = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() }
  },
  include: {
    _count: {
      select: {
        comments: true,
        reactions: true
      }
    }
  },
  orderBy: {
    reactions: {
      _count: 'desc'
    }
  },
  take: 10
});`}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Requêtes Avancées */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">Requêtes Avancées et Patterns</h3>
                  <CodeBlock 
                    code={`// 1. Articles programmés à publier
const scheduledPosts = await prisma.post.findMany({
  where: {
    status: "SCHEDULED",
    scheduledAt: {
      lte: new Date() // Dépassé la date programmée
    }
  }
});

// 2. Articles avec visibilité contrôlée
const visiblePosts = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    OR: [
      { visibility: "PUBLIC" },
      { 
        visibility: "UNLISTED",
        // Logique métier supplémentaire pour UNLISTED
      }
    ],
    publishedAt: { lte: new Date() }
  }
});

// 3. Recherche avec full-text (via contentText)
const searchResults = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    OR: [
      { title: { contains: "React", mode: "insensitive" } },
      { contentText: { contains: "React", mode: "insensitive" } },
      { subtitle: { contains: "React", mode: "insensitive" } }
    ]
  },
  include: {
    tags: { include: { tag: true } },
    categories: { include: { category: true } }
  }
});

// 4. Articles populaires du mois
const popularThisMonth = await prisma.post.findMany({
  where: {
    status: "PUBLISHED",
    publishedAt: {
      gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    }
  },
  include: {
    _count: {
      select: {
        reactions: true,
        comments: true
      }
    }
  },
  orderBy: [
    { reactions: { _count: "desc" } },
    { comments: { _count: "desc" } }
  ],
  take: 5
});

// 5. Catégories avec hiérarchie et compteurs
const categoriesWithCounts = await prisma.category.findMany({
  include: {
    children: {
      include: {
        _count: {
          select: { posts: true }
        }
      }
    },
    _count: {
      select: { posts: true }
    }
  },
  where: {
    parentId: null // Catégories racine seulement
  }
});

// 6. Tags les plus utilisés
const popularTags = await prisma.tag.findMany({
  include: {
    _count: {
      select: { posts: true }
    }
  },
  orderBy: {
    posts: {
      _count: 'desc'
    }
  },
  take: 10
});`}
                  />
                </div>

                {/* Migration et Maintenance */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Migration et Évolutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        Exemples de migrations pour étendre le schéma :
                      </p>
                      <CodeBlock 
                        code={`// Ajout d'un champ de traduction
model Post {
  // ... champs existants ...
  
  // Nouveaux champs pour i18n
  translationId     String?   @map("translation_id")
  translation       Post?     @relation("PostTranslations", fields: [translationId], references: [id])
  translations      Post[]    @relation("PostTranslations")
}

// Ajout de statistiques avancées
model PostStats {
  id        String   @id @default(cuid())
  postId    String   @unique @map("post_id")
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  viewCount Int      @default(0) @map("view_count")
  shareCount Int     @default(0) @map("share_count")
  readRatio Float?   @map("read_ratio") // % de lecture moyen
  
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
  
  @@map("post_stats")
}`}
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Maintenance et Nettoyage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        Scripts de maintenance pour garder la base propre :
                      </p>
                      <CodeBlock 
                        code={`// Nettoyage des commentaires spam
await prisma.comment.updateMany({
  where: {
    status: "SPAM",
    createdAt: {
      lte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 jours
    }
  },
  data: {
    status: "DELETED"
  }
});

// Archivage des anciens articles
await prisma.post.updateMany({
  where: {
    status: "PUBLISHED",
    publishedAt: {
      lte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) // 1 an
    }
  },
  data: {
    status: "ARCHIVED"
  }
});

// Suppression des médias orphelins
const orphanedMedia = await prisma.mediaAsset.findMany({
  where: {
    post: null // Relation brisée
  }
});

// Regénération des readingTime
const postsWithoutReadingTime = await prisma.post.findMany({
  where: {
    readingTime: null,
    contentText: { not: null }
  }
});

for (const post of postsWithoutReadingTime) {
  const wordCount = post.contentText?.split(/\\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200); // 200 mots/minute
  
  await prisma.post.update({
    where: { id: post.id },
    data: { 
      readingTime,
      wordCount 
    }
  });
}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Composants d'icônes
const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 8c-3.86 0-7-1.79-7-4s3.14-4 7-4 7 1.79 7 4-3.14 4-7 4zM5 12c0 2.21 3.14 4 7 4s7-1.79 7-4M5 12v4c0 2.21 3.14 4 7 4s7-1.79 7-4v-4M5 12v4c0 2.21 3.14 4 7 4s7-1.79 7-4v-4"/>
  </svg>
)

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>
  </svg>
)

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)