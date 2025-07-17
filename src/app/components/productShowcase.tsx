import Image from "next/image";

interface ProductItem {
  id: string;
  name: string;
  showcaseImageUrl: string | null;
  showcaseImageAlt: string | null;
  hoverImageUrl: string | null;
  hoverImageAlt: string | null;
  link: string | null;
}

interface ProductShowcaseProps {
  productShowcaseItems: ProductItem[];
  fetchError: string | null;
}

export default function ProductShowcase({
  productShowcaseItems,
  fetchError,
}: ProductShowcaseProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-base-100 text-gt-text-dark">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          OUR PRODUCTS
        </h3>
        {fetchError && (
          <p className="text-center text-red-500 mb-8">{fetchError}</p>
        )}
        {productShowcaseItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {productShowcaseItems.map((item) => (
              <a
                href={item.link || "#"}
                key={item.id}
                className="block group card w-full bg-base-100 shadow-xl image-full rounded-box overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
              >
                <figure className="relative w-full h-48">
                  <Image
                    src={
                      item.showcaseImageUrl ||
                      "https://placehold.co/400x200/0056b3/ffffff?text=Product"
                    }
                    alt={item.showcaseImageAlt || item.name}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-t-box"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                  <Image
                    src={
                      item.hoverImageUrl ||
                      "https://placehold.co/400x200/00cc66/ffffff?text=Hover+Effect"
                    }
                    alt={item.hoverImageAlt || item.name + " hover"}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-box"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </figure>
                <div className="card-body p-4 justify-center items-center text-center">
                  <h4 className="card-title text-lg font-semibold text-gt-text-light group-hover:text-gt-green transition-colors duration-300">
                    {item.name}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        ) : (
          !fetchError && (
            <p className="text-center text-gray-600">
              No product showcase items found.
            </p>
          )
        )}
      </div>
    </section>
  );
}
