import { useParams } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import { products } from "../../data/products";

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
    </>
  );
}
