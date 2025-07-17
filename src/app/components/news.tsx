import Image from "next/image";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  tag: string | null;
  link: string | null; // Changed to match reality - can be null on Vercel
}

interface NewsProps {
  news: NewsItem[];
  fetchError: string | null;
}

console.log("News component loaded");

export default function News({ news, fetchError }: NewsProps) {
  console.log("Rendering News component with data:", news);
  return (
    <section className="py-16 px-4 md:px-8 bg-gt-dark-blue text-gt-text-light">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          LATEST NEWS
        </h3>
        {fetchError && (
          <p className="text-center text-red-500 mb-8">{fetchError}</p>
        )}
        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="card w-full bg-base-100 shadow-xl rounded-box overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
              >
                {item.featuredImageUrl && (
                  <figure className="relative w-full h-56">
                    <Image
                      src={item.featuredImageUrl}
                      alt={item.featuredImageAlt || item.title}
                      fill
                      className="object-cover rounded-t-box"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </figure>
                )}
                <div className="card-body p-6">
                  {item.tag && (
                    <span className="badge badge-outline badge-primary text-xs font-semibold mb-2">
                      {item.tag}
                    </span>
                  )}
                  <h4 className="card-title text-xl font-semibold text-gt-text-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-primary-content text-sm mb-3">
                    {item.excerpt}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    {item.link && item.link.trim() ? (
                      <a
                        href={item.link.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm  btn-primary rounded-full"
                      >
                        Read More
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-outline btn-disabled rounded-full opacity-50 cursor-not-allowed">
                        Read More
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !fetchError && (
            <p className="text-center text-gt-text-light">
              No news articles found.
            </p>
          )
        )}
      </div>
    </section>
  );
}
