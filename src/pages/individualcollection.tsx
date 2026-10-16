
import { useParams, Link } from "react-router-dom";

import ImageWithText from "../components/ImageWithText";
import CareGuide from "../components/CareGuide";
import Newsletter from "../components/Newsletter";
import CollectionGrid from "../components/CollectionGrid";

import {
  imageWithTextData,
  collectionData,
  careContentData,
  newsletterData,
} from "../pages/collections";


const collectionTitles: Record<string, string> = {
  linen: "The Linen Collection",
  tops: "Tops & Knitwear",
  bottoms: "Trousers & Skirts",
  dresses: "Dresses",
  accessories: "Accessories",
  everyday: "Everyday Essentials",
};

export default function IndividualCollection() {
  const { slug } = useParams<{ slug: string }>();

  const categoryTitle = slug ? collectionTitles[slug] : undefined;

  const categoryProducts = collectionData.products.filter(
    (product) => product.category === slug
  );

  const handleSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);

    // Connect your existing newsletter API here.
  };

  if (!categoryTitle || categoryProducts.length === 0) {
    return (
      <section className="min-h-[50vh] bg-[#f7f5f1] px-5 py-20 text-center text-[#292923]">
        <h1 className="font-serif text-3xl">
          Collection not found
        </h1>

        <p className="mt-3 text-sm text-[#807c74]">
          This collection is unavailable.
        </p>

        <Link
          to="/collections"
          className="mt-6 inline-block border-b border-[#646951] pb-2 text-xs uppercase tracking-wider"
        >
          Explore all collections
        </Link>
      </section>
    );
  }

  const individualCollectionData = {
    ...collectionData,
    eyebrow: categoryTitle.toUpperCase(),
    title: categoryTitle,
    description: `Explore our considered ${categoryTitle.toLowerCase()}, designed with timeless silhouettes and thoughtful details.`,
    categories: [
      { label: "All pieces", value: "all" },
    ],
    products: categoryProducts,
  };

  return (
    <>
      {/* Same introductory section */}
      <ImageWithText {...imageWithTextData} />

      {/* Same grid functionality, showing only this collection */}
      <CollectionGrid {...individualCollectionData} />

      {/* Same care guide */}
      <CareGuide {...careContentData} />

      {/* Same newsletter */}
      <Newsletter
        {...newsletterData}
        onSubscribe={handleSubscribe}
      />
    </>
  );
}
