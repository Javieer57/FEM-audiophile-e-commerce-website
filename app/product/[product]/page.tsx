import data from "../../data.json";
import { ProductCategories } from "@/app/components/home/ProductCategories";
import { AboutAudiophile } from "@/app/components/shared/AboutAudiophile";
import { ProductSummarySection } from "@/app/components/product/ProductSummarySection";
import { ProductFeaturesSection } from "@/app/components/product/ProductFeaturesSection";
import { ProductGallerySection } from "@/app/components/product/ProductGallerySection";
import { RelatedProductsSection } from "@/app/components/product/RelatedProductsSection";

export async function generateStaticParams() {
  const products = data.map((item) => item.slug);

  return products.map((product) => ({
    product,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const filteredData = data.filter((item) => item.slug === product);
  const productData = filteredData[0];

  return (
    <main className="grid gap-40 pt-4 pb-40 md:pt-8.5 lg:pt-20">
      <article
        aria-labelledby="product-title"
        className="general-container grid gap-22 md:gap-40"
      >
        <ProductSummarySection productData={productData} />
        <ProductFeaturesSection productData={productData} />
        <ProductGallerySection productData={productData} />
      </article>
      <RelatedProductsSection productData={productData} />

      <ProductCategories />

      <AboutAudiophile />
    </main>
  );
}
