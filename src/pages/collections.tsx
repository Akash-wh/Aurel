import ImageWithText from "../components/ImageWithText";
import CareGuide from "../components/CareGuide";
import Newsletter from "../components/Newsletter";

import CollectionBanner from "../assets/CollectionBanner.png";

const imageWithTextData = {
  eyebrow: "COLLECTION / SPRING–SUMMER 2026",
  title: "The art of ease.",
  description:
    "A study in softness, shape and everyday possibility. Eight considered pieces, designed to work beautifully together.",
  //   linkText: "Read our story",
  linkUrl: "/about",
  image: CollectionBanner,
  imageAlt: "Collection Banner Image",
  imagePosition: "right" as const,
};

const careContentData = {
  eyebrow: "WEAR WELL. KEEP LONGER.",
  title: "A little care goes a long way.",
  buttonText: "Explore our care guide",
  buttonLink: "/care-guide",
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

export default function Collections() {
  const handleSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);

    // Connect your newsletter API or email marketing service here.
  };
  return (
    <>
      <ImageWithText {...imageWithTextData} />
      <CareGuide {...careContentData} />
      <Newsletter {...newsletterData} onSubscribe={handleSubscribe} />
    </>
  );
}
