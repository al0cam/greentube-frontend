import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import News from "./components/news";
import Partners from "./components/parters";
import ProductShowcase from "./components/productShowcase";
import { fetcherService } from "./services/fetcherService";

// --- Main Page Component ---
export default async function HomePage() {
  let news = [];
  let productShowcaseItems = [];
  let fetchError = null;

  // --- Hero Section Data (Placeholder for now) ---
  const heroData = {
    headline: "NOVOMATIC Digital Gaming and Entertainment division",
    subtitle:
      "Greentube is a leading developer and supplier of iGaming solutions.",
    backgroundVideoEmbedUrl:
      "https://player.vimeo.com/video/1098133452?background=1&autoplay=1&loop=1&muted=1&playsinline=1",
    fallbackImageUrl:
      "https://placehold.co/1920x1080/0056b3/ffffff?text=Greentube+Background",
  };
  // --- End Hero Section Data ---

  // --- Placeholder for Partners Data ---
  const partners = [
    {
      id: "p1",
      name: "Partner One",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+1",
    },
    {
      id: "p2",
      name: "Partner Two",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+2",
    },
    {
      id: "p3",
      name: "Partner Three",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+3",
    },
    {
      id: "p4",
      name: "Partner Four",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+4",
    },
    {
      id: "p5",
      name: "Partner Five",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+5",
    },
    {
      id: "p6",
      name: "Partner Six",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+6",
    },
    {
      id: "p7",
      name: "Partner Seven",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+7",
    },
    {
      id: "p8",
      name: "Partner Eight",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+8",
    },
    {
      id: "p9",
      name: "Partner Nine",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+9",
    },
    {
      id: "p10",
      name: "Partner Ten",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+10",
    },
    {
      id: "p11",
      name: "Partner Eleven",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+11",
    },
    {
      id: "p12",
      name: "Partner Twelve",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+12",
    },
    {
      id: "p13",
      name: "Partner Thirteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+13",
    },
    {
      id: "p14",
      name: "Partner Fourteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+14",
    },
    {
      id: "p15",
      name: "Partner Fifteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+15",
    },
    {
      id: "p16",
      name: "Partner Sixteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+16",
    },
    {
      id: "p17",
      name: "Partner Seventeen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+17",
    },
    {
      id: "p18",
      name: "Partner Eighteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+18",
    },
    {
      id: "p19",
      name: "Partner Nineteen",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+19",
    },
    {
      id: "p20",
      name: "Partner Twenty",
      logo: "https://placehold.co/150x80/282828/ffffff?text=Partner+20",
    },
  ];
  // --- End Placeholder for Partners Data ---

  try {
    news = await fetcherService.getNews();
    productShowcaseItems = await fetcherService.getProductShowcaseItems();
  } catch (error) {
    console.error("Error fetching data for homepage:", error);
    fetchError = "Failed to load dynamic content. Please try again later.";
  }

  return (
    <div>
      {" "}
      <Hero {...heroData} />
      <About />
      <ProductShowcase
        productShowcaseItems={productShowcaseItems}
        fetchError={fetchError}
      />
      <News news={news} fetchError={fetchError} />
      <Partners partners={partners} fetchError={fetchError} />
      <Footer />
    </div>
  );
}
