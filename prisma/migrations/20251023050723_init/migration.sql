/*
  Warnings:

  - The values [AURHOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `published` on the `post` table. All the data in the column will be lost.
  - The `content` column on the `post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Circle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PostStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'SCHEDULED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."PostVisibility" AS ENUM ('PUBLIC', 'UNLISTED', 'PRIVATE');

-- CreateEnum
CREATE TYPE "public"."MediaType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'FILE', 'EMBED', 'CODE');

-- CreateEnum
CREATE TYPE "public"."ReactionType" AS ENUM ('LIKE', 'CLAP', 'UPVOTE', 'DOWNVOTE', 'LOVE');

-- CreateEnum
CREATE TYPE "public"."CommentStatus" AS ENUM ('VISIBLE', 'HIDDEN', 'SPAM', 'DELETED');

-- CreateEnum
CREATE TYPE "public"."ProjectType" AS ENUM ('DONATION', 'REWARD', 'EQUITY', 'CROWDLENDING', 'KITTY', 'IMPACT_SPRINT');

-- CreateEnum
CREATE TYPE "public"."ProjectStatus" AS ENUM ('DRAFT', 'PENDING', 'ACTIVE', 'SUCCESSFUL', 'FAILED', 'CANCELLED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "public"."ProjectCategory" AS ENUM ('ECOLOGY', 'SOCIAL', 'EDUCATION', 'TECHNOLOGY', 'HEALTH', 'CULTURE', 'INNOVATION', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."ProjectImpactType" AS ENUM ('ENVIRONMENTAL', 'SOCIAL', 'ECONOMIC');

-- CreateEnum
CREATE TYPE "public"."CircleType" AS ENUM ('THEMATIC', 'SUPPORT', 'SYNERGY');

-- CreateEnum
CREATE TYPE "public"."CircleMemberRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER', 'FACILITATOR', 'SECRETARY', 'PROJECT_REFERENT', 'ETHICS_GUARDIAN');

-- CreateEnum
CREATE TYPE "public"."CircleParticipationMode" AS ENUM ('SYNCHRONOUS', 'ASYNCHRONOUS');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Role_new" AS ENUM ('USER', 'ADMIN', 'DEV', 'AUTHOR', 'MODERATOR', 'OWNER', 'MEMBER', 'VISITOR');
ALTER TABLE "public"."user" ALTER COLUMN "roles" DROP DEFAULT;
ALTER TABLE "public"."user" ALTER COLUMN "roles" TYPE "public"."Role_new"[] USING ("roles"::text::"public"."Role_new"[]);
ALTER TYPE "public"."Role" RENAME TO "Role_old";
ALTER TYPE "public"."Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "public"."user" ALTER COLUMN "roles" SET DEFAULT ARRAY['USER']::"public"."Role"[];
COMMIT;

-- DropForeignKey
ALTER TABLE "public"."Circle" DROP CONSTRAINT "Circle_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_owner_id_fkey";

-- AlterTable
ALTER TABLE "public"."post" DROP COLUMN "published",
ADD COLUMN     "canonical_url" TEXT,
ADD COLUMN     "content_text" TEXT,
ADD COLUMN     "cover_image_url" TEXT,
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "og_image_url" TEXT,
ADD COLUMN     "parent_id" TEXT,
ADD COLUMN     "project_id" TEXT,
ADD COLUMN     "published_at" TIMESTAMP(3),
ADD COLUMN     "reading_time" INTEGER,
ADD COLUMN     "scheduled_at" TIMESTAMP(3),
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "status" "public"."PostStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "subtitle" TEXT,
ADD COLUMN     "visibility" "public"."PostVisibility" NOT NULL DEFAULT 'PUBLIC',
ADD COLUMN     "word_count" INTEGER,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB;

-- DropTable
DROP TABLE "public"."Circle";

-- DropTable
DROP TABLE "public"."Project";

-- CreateTable
CREATE TABLE "public"."media_asset" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "type" "public"."MediaType" NOT NULL,
    "url" TEXT NOT NULL,
    "provider" TEXT,
    "title" TEXT,
    "alt" TEXT,
    "caption" TEXT,
    "position" INTEGER,
    "mime_type" TEXT,
    "size_bytes" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "duration_ms" INTEGER,
    "meta" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."code_snippet" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "title" TEXT,
    "language" TEXT NOT NULL,
    "filename" TEXT,
    "code" TEXT NOT NULL,
    "highlighted_html" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "code_snippet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posts_on_tags" (
    "post_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by" TEXT,

    CONSTRAINT "posts_on_tags_pkey" PRIMARY KEY ("post_id","tag_id")
);

-- CreateTable
CREATE TABLE "public"."category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "parent_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posts_on_categories" (
    "post_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "position" INTEGER,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_on_categories_pkey" PRIMARY KEY ("post_id","category_id")
);

-- CreateTable
CREATE TABLE "public"."comment" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "content" JSONB,
    "content_text" TEXT,
    "status" "public"."CommentStatus" NOT NULL DEFAULT 'VISIBLE',
    "parent_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reaction" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" "public"."ReactionType" NOT NULL DEFAULT 'LIKE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "short_description" TEXT,
    "type" "public"."ProjectType" NOT NULL,
    "status" "public"."ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "category" "public"."ProjectCategory" NOT NULL,
    "location" TEXT,
    "funding_goal" DOUBLE PRECISION NOT NULL,
    "amount_raised" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "duration" INTEGER,
    "owner_id" TEXT NOT NULL,
    "organization" TEXT,
    "legal_status" TEXT,
    "website" TEXT,
    "social_media" JSONB,
    "contact_email" TEXT,
    "contact_phone" TEXT,
    "impact_types" "public"."ProjectImpactType"[],
    "impact_description" TEXT,
    "impact_indicators" TEXT[],
    "sdg_alignment" INTEGER[],
    "images" TEXT[],
    "videos" TEXT[],
    "documents" TEXT[],
    "visibility" "public"."PostVisibility" NOT NULL DEFAULT 'PUBLIC',
    "allow_comments" BOOLEAN NOT NULL DEFAULT true,
    "enable_impact_sprint" BOOLEAN NOT NULL DEFAULT false,
    "valuation" DOUBLE PRECISION,
    "min_investment" DOUBLE PRECISION,
    "capital_percentage" DOUBLE PRECISION,
    "expected_investors" INTEGER,
    "tax_advantages" TEXT,
    "interest_rate" DOUBLE PRECISION,
    "loan_duration" INTEGER,
    "repayment_frequency" TEXT,
    "min_loan_amount" DOUBLE PRECISION,
    "guarantees" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_member" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_update" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "images" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_update_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_reward" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "delivery_date" TIMESTAMP(3),
    "quantity" INTEGER,
    "claimed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "project_reward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_donation" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT,
    "reward_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'completed',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_investment" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "shares" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."project_loan" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."circle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "public"."CircleType" NOT NULL,
    "theme" TEXT,
    "participation_mode" "public"."CircleParticipationMode" NOT NULL,
    "max_members" INTEGER,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "monthly_fee" DOUBLE PRECISION DEFAULT 10,
    "funds" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "allocated_funds" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "circle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."circle_member" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "public"."CircleMemberRole" NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "circle_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."circle_project" (
    "id" TEXT NOT NULL,
    "circle_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "allocated_amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "support_type" TEXT NOT NULL,
    "voted_at" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "circle_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transaction" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "description" TEXT,
    "project_id" TEXT,
    "circle_id" TEXT,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_xp" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "total_xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,
    "impact_rank" TEXT,
    "donation_xp" INTEGER NOT NULL DEFAULT 0,
    "investment_xp" INTEGER NOT NULL DEFAULT 0,
    "content_xp" INTEGER NOT NULL DEFAULT 0,
    "community_xp" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_xp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."badge" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "criteria" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_badge" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "badge_id" TEXT NOT NULL,
    "earned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ProjectUpdateToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectUpdateToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ProjectRewardToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectRewardToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "media_asset_post_id_type_position_idx" ON "public"."media_asset"("post_id", "type", "position");

-- CreateIndex
CREATE INDEX "code_snippet_post_id_language_idx" ON "public"."code_snippet"("post_id", "language");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "public"."tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tag_slug_key" ON "public"."tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "public"."category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "public"."category"("slug");

-- CreateIndex
CREATE INDEX "comment_post_id_parent_id_idx" ON "public"."comment"("post_id", "parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "reaction_post_id_user_id_type_key" ON "public"."reaction"("post_id", "user_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_key" ON "public"."project"("slug");

-- CreateIndex
CREATE INDEX "project_owner_id_idx" ON "public"."project"("owner_id");

-- CreateIndex
CREATE INDEX "project_status_idx" ON "public"."project"("status");

-- CreateIndex
CREATE INDEX "project_type_idx" ON "public"."project"("type");

-- CreateIndex
CREATE INDEX "project_category_idx" ON "public"."project"("category");

-- CreateIndex
CREATE UNIQUE INDEX "project_member_project_id_user_id_key" ON "public"."project_member"("project_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "circle_slug_key" ON "public"."circle"("slug");

-- CreateIndex
CREATE INDEX "circle_type_idx" ON "public"."circle"("type");

-- CreateIndex
CREATE INDEX "circle_creator_id_idx" ON "public"."circle"("creator_id");

-- CreateIndex
CREATE UNIQUE INDEX "circle_member_circle_id_user_id_key" ON "public"."circle_member"("circle_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "circle_project_circle_id_project_id_key" ON "public"."circle_project"("circle_id", "project_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_xp_user_id_key" ON "public"."user_xp"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_badge_user_id_badge_id_key" ON "public"."user_badge"("user_id", "badge_id");

-- CreateIndex
CREATE INDEX "_ProjectUpdateToUser_B_index" ON "public"."_ProjectUpdateToUser"("B");

-- CreateIndex
CREATE INDEX "_ProjectRewardToUser_B_index" ON "public"."_ProjectRewardToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "post_slug_key" ON "public"."post"("slug");

-- CreateIndex
CREATE INDEX "post_author_id_status_published_at_idx" ON "public"."post"("author_id", "status", "published_at");

-- CreateIndex
CREATE INDEX "post_slug_idx" ON "public"."post"("slug");

-- AddForeignKey
ALTER TABLE "public"."post" ADD CONSTRAINT "post_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "public"."post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post" ADD CONSTRAINT "post_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."media_asset" ADD CONSTRAINT "media_asset_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."code_snippet" ADD CONSTRAINT "code_snippet_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts_on_tags" ADD CONSTRAINT "posts_on_tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts_on_tags" ADD CONSTRAINT "posts_on_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."category" ADD CONSTRAINT "category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "public"."category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts_on_categories" ADD CONSTRAINT "posts_on_categories_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts_on_categories" ADD CONSTRAINT "posts_on_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "public"."comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reaction" ADD CONSTRAINT "reaction_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reaction" ADD CONSTRAINT "reaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project" ADD CONSTRAINT "project_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_member" ADD CONSTRAINT "project_member_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_member" ADD CONSTRAINT "project_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_update" ADD CONSTRAINT "project_update_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_reward" ADD CONSTRAINT "project_reward_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_donation" ADD CONSTRAINT "project_donation_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_donation" ADD CONSTRAINT "project_donation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_donation" ADD CONSTRAINT "project_donation_reward_id_fkey" FOREIGN KEY ("reward_id") REFERENCES "public"."project_reward"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_investment" ADD CONSTRAINT "project_investment_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_investment" ADD CONSTRAINT "project_investment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_loan" ADD CONSTRAINT "project_loan_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."project_loan" ADD CONSTRAINT "project_loan_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle" ADD CONSTRAINT "circle_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_member" ADD CONSTRAINT "circle_member_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."circle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_member" ADD CONSTRAINT "circle_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_project" ADD CONSTRAINT "circle_project_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."circle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."circle_project" ADD CONSTRAINT "circle_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transaction" ADD CONSTRAINT "transaction_circle_id_fkey" FOREIGN KEY ("circle_id") REFERENCES "public"."circle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_xp" ADD CONSTRAINT "user_xp_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_badge" ADD CONSTRAINT "user_badge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_badge" ADD CONSTRAINT "user_badge_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "public"."badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectUpdateToUser" ADD CONSTRAINT "_ProjectUpdateToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."project_update"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectUpdateToUser" ADD CONSTRAINT "_ProjectUpdateToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectRewardToUser" ADD CONSTRAINT "_ProjectRewardToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."project_reward"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectRewardToUser" ADD CONSTRAINT "_ProjectRewardToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
