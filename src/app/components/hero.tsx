// components/Hero.tsx
// This will be a Client Component due to the iframe for the video background.
"use client";

interface HeroProps {
  headline: string;
  subtitle: string;
  backgroundVideoEmbedUrl: string;
  fallbackImageUrl: string;
}

export default function Hero({
  headline,
  subtitle,
  backgroundVideoEmbedUrl,
  fallbackImageUrl,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fallback image layer */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${fallbackImageUrl})` }}
      />

      {/* Vimeo iframe layer */}
      <iframe
        src={backgroundVideoEmbedUrl}
        className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.2]"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Greentube Background Video"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gt-text-light px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          {headline}
        </h2>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl drop-shadow-md">
          {subtitle}
        </p>
        <button className="btn btn-primary btn-lg rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
}

