import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              Change
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                the World
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              L'écosystème qui transforme vos idées en actions concrètes
            </p>

            {/* Description */}
            <p className="text-lg text-white/70 font-light">
              Réflexion • Financement • Action collective
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                Rejoindre la communauté
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* The Blog Card */}
            <Link href="/blog" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/30 to-indigo-600/20 backdrop-blur-xl border border-white/20 p-8 h-full hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl filter drop-shadow-lg">📝</div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    The Blog
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow">
                    Explorez nos réflexions sur la technologie, le développement
                    personnel, la spiritualité et les enjeux de société. Une
                    source d'inspiration pour nourrir vos projets et élargir
                    votre vision du monde.
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Lire les articles</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Crowdfunding Card */}
            <Link href="/projects" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/30 to-emerald-600/20 backdrop-blur-xl border border-white/20 p-8 h-full hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl filter drop-shadow-lg">💰</div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Crowdfunding Éthique
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow">
                    Soutenez des projets qui changent le monde. 100 projets
                    organisés dans 6 catégories : technologie, création,
                    environnement, social, culture et jeux. Chaque contribution
                    compte pour construire un futur meilleur.
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Explorer les projets</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* The Circles Card */}
            <Link href="/thecircles" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/30 to-yellow-600/20 backdrop-blur-xl border border-white/20 p-8 h-full hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl filter drop-shadow-lg">⭕</div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    The Circles
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed flex-grow">
                    Rejoignez des cercles de gouvernance collaborative.
                    Participez aux décisions, organisez des projets et
                    construisez l'avenir ensemble. Une démocratie participative
                    où chaque voix compte.
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4">
                    <span>Rejoindre un cercle</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">
                1000+
              </div>
              <div className="text-white/70 text-sm md:text-base">
                Membres actifs
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">
                100
              </div>
              <div className="text-white/70 text-sm md:text-base">
                Projets disponibles
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">
                50+
              </div>
              <div className="text-white/70 text-sm md:text-base">
                Cercles thématiques
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-white">
                95%
              </div>
              <div className="text-white/70 text-sm md:text-base">
                Projets réussis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à changer le monde ?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Rejoignez notre communauté et participez à la création d'un futur plus
          éthique et collaboratif.
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
          Commencer maintenant
        </button>
      </div>
    </div>
  );
}
