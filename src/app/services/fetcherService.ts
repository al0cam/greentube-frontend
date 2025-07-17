class FetcherService {
  private static instance: FetcherService;

  private constructor() { }
  public static getInstance(): FetcherService {
    if (!FetcherService.instance) {
      FetcherService.instance = new FetcherService();
    }
    return FetcherService.instance;
  }

  async getNews() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/news`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) {
      console.error(`Failed to fetch news: ${res.status} ${res.statusText}`);
      throw new Error("Failed to fetch news");
    }
    return res.json();
  }

  async getProductShowcaseItems() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/product-showcase`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) {
      console.error(
        `Failed to fetch product showcase items: ${res.status} ${res.statusText}`,
      );
      throw new Error("Failed to fetch product showcase items");
    }
    return res.json();
  }

  async getPartners() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/partners`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) {
      console.error(
        `Failed to fetch partners: ${res.status} ${res.statusText}`,
      );
      throw new Error("Failed to fetch partners");
    }
    return res.json();
  }
}

export const fetcherService = FetcherService.getInstance();
