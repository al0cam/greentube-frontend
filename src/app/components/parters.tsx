// components/Partners.tsx
// This can be a Server Component.
import Image from "next/image";

interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

interface PartnersProps {
  partners: PartnerItem[];
  fetchError: string | null;
}

export default function Partners({ partners, fetchError }: PartnersProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-neutral text-neutral-content">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          OUR PARTNERS
        </h3>
        {fetchError && (
          <p className="text-center text-red-500 mb-8">{fetchError}</p>
        )}
        {partners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-full h-24 flex items-center justify-center p-2"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150} // Adjust width/height as needed for logo size
                  height={80}
                  className="object-contain max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                  priority={false}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No partners found.</p>
        )}
      </div>
    </section>
  );
}
