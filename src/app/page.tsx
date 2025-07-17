import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import News from "./components/news";
import Partners from "./components/partners";
import ProductShowcase from "./components/productShowcase";
import { fetcherService } from "./services/fetcherService";

export default async function HomePage() {
  let news = [];
  let productShowcaseItems = [];
  let partners = [];
  let fetchError = null;

  const heroData = {
    headline: "NOVOMATIC Digital Gaming and Entertainment division",
    subtitle:
      "Greentube is a leading developer and supplier of iGaming solutions.",
  };

  try {
    news = await fetcherService.getNews();
    productShowcaseItems = await fetcherService.getProductShowcaseItems();
    partners = await fetcherService.getPartners();
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
