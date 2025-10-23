"use client";
import React from "react";
import Link from "next/link";
import { Code, FolderGit2, Users } from "lucide-react"; // icons Lucide

export default function DevPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-20">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🚀 Page Développeur
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore mes projets, articles techniques, et la communauté <strong>The Circle</strong>.
        </p>

        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BLOG */}
          <Link
            href="/dev/blog"
            className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <Code className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Blog Technique
            </h2>
            <p className="text-gray-500 mb-4">
              Articles, tutos et réflexions sur le code, Next.js, Prisma, et bien plus.
            </p>
            <span className="text-blue-600 font-medium group-hover:underline">
              Voir le blog →
            </span>
          </Link>

          {/* PROJECTS */}
          <Link
            href="/dev/projects"
            className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <FolderGit2 className="w-10 h-10 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Projets
            </h2>
            <p className="text-gray-500 mb-4">
              Découvrez mes créations web, apps full-stack et expériences open-source.
            </p>
            <span className="text-green-600 font-medium group-hover:underline">
              Explorer les projets →
            </span>
          </Link>

          {/* THE CIRCLE */}
          <Link
            href="/dev/thecircles"
            className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <Users className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              The Circle
            </h2>
            <p className="text-gray-500 mb-4">
              Une communauté d’échange, d’entraide et d’innovation entre développeurs.
            </p>
            <span className="text-purple-600 font-medium group-hover:underline">
              Rejoindre The Circle →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} — Développement par <span className="font-medium text-gray-600">toi 🚧</span>
      </footer>
    </main>
  );
}
