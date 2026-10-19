import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import ImageWithText from "../../components/ImageWithText";
import RecommendedProducts from "../../components/RecommendedProducts";
import Newsletter from "../../components/Newsletter";

import ProductBanner from "../../assets/ProductBanner.png";
import { products } from "../../data/products";

const imageWithTextData = {
  eyebrow: "KNOW WHAT YOU WEAR",
  title: "Beautiful by nature.",
  description:
    "Linen begins with flax. Ours is grown in Europe and woven for a softness that only gets better with time. Breathable, resilient and naturally individual — just like you.",
  linkText: "Our materials & makers",
  linkUrl: "/about",
  image: ProductBanner,
  imageAlt: "Always know what you wear.",
  imagePosition: "right" as const,
};

const newsletterData = {
  eyebrow: "LETTERS FROM AUREL",
  title: "A quieter kind of inbox.",
  description:
    "New chapters, thoughtful stories and first access to our collections.",
  placeholder: "Your email address",
  privacyText:
    "By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.",
  buttonLabel: "Subscribe to newsletter",
};

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === `/products/${slug}`);

  if (!product) {
    return (
      <>
        <div className="px-5 py-20 text-center">
          <h1 className="font-serif text-3xl">Product not found</h1>
        </div>
      </>
    );
  }

  const handleSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);

    // Connect your newsletter API or email marketing service here.
  };

  return (
    <>
      <ProductDetails
        title={product.title}
        eyebrow="The Signature Collection"
        price={product.price}
        currency="€"
        description={product.subtitle}
        images={[product.image]}
        imageAlt={product.imageAlt}
        sizes={product.sizes}
        details={[
          product.subtitle,
          `Colour: ${product.color}`,
          `Material: ${product.material}`,
        ]}
        onAddToBag={(size) => {
          console.log("Add to bag:", product.id, size);
        }}
      />
      <ImageWithText {...imageWithTextData} />
      <RecommendedProducts
        products={products}
        excludeProductId={product.id}
        title="You may also like"
        limit={4}
        currency="€"
      />
      <Newsletter {...newsletterData} onSubscribe={handleSubscribe} />
    </>
  );
}
