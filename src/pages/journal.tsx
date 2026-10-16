import BlogsSection from "../components/BlogsSection";

import JournalBanner from "../assets/CollectionBanner.png";
import CapsuleWardrobe from "../assets/CapsuleWardrobe.png";
import FabricGuide from "../assets/FabricGuide.png";
import EverydayStyle from "../assets/EverydayStyle.png";
import GarmentCare from "../assets/GarmentCare.png";
import UnderstatedDetails from "../assets/Detailing.png";
import PersonalStyle from "../assets/PersonalStyle.png";

const journalData = {
  eyebrow: "THE AUREL JOURNAL",
  title: "A considered way of living.",
  description:
    "Thoughts on personal style, thoughtful design, timeless dressing, and the little details that make everyday life beautiful.",

  featuredPost: {
    id: "featured",
    category: "Style Notes",
    title: "The art of building a timeless wardrobe",
    excerpt:
      "Discover how thoughtful essentials, versatile silhouettes, and considered choices can help you create a wardrobe that feels distinctly your own.",
    image: JournalBanner,
    imageAlt: "Neutral-toned clothing arranged in a minimalist wardrobe",
    date: "16 October 2026",
    readTime: "5 min read",
    slug: "/journal/timeless-wardrobe",
  },

  posts: [
    {
      id: "01",
      category: "Style Notes",
      title: "Less, but better: the capsule wardrobe",
      excerpt:
        "A practical approach to choosing fewer pieces that work beautifully together.",
      image: CapsuleWardrobe,
      imageAlt: "Minimal neutral wardrobe essentials",
      date: "12 October 2026",
      readTime: "4 min read",
      slug: "/journal/capsule-wardrobe",
    },
    {
      id: "02",
      category: "Fabric & Form",
      title: "Getting to know your fabrics",
      excerpt:
        "Explore texture, drape, and the details that influence how a garment feels.",
      image: FabricGuide,
      imageAlt: "Close-up of natural fabric textures",
      date: "08 October 2026",
      readTime: "6 min read",
      slug: "/journal/fabric-guide",
    },
    {
      id: "03",
      category: "Everyday Living",
      title: "A slower approach to getting dressed",
      excerpt:
        "Create a daily dressing ritual that feels personal, simple, and effortless.",
      image: EverydayStyle,
      imageAlt: "Minimal everyday outfit in soft natural light",
      date: "04 October 2026",
      readTime: "3 min read",
      slug: "/journal/everyday-style",
    },
    {
      id: "04",
      category: "Care & Craft",
      title: "Making your favourite pieces last",
      excerpt:
        "Small, considered care habits can help preserve your clothing over time.",
      image: GarmentCare,
      imageAlt: "Carefully folded garments in neutral colours",
      date: "29 September 2026",
      readTime: "5 min read",
      slug: "/journal/garment-care",
    },
    {
      id: "05",
      category: "Style Notes",
      title: "The beauty of understated details",
      excerpt:
        "Discover how subtle shapes, finishes, and proportions can transform an outfit.",
      image: UnderstatedDetails,
      imageAlt: "Close-up of refined clothing details",
      date: "24 September 2026",
      readTime: "4 min read",
      slug: "/journal/understated-details",
    },
    {
      id: "06",
      category: "Everyday Living",
      title: "Finding your personal style",
      excerpt:
        "Build confidence in what you wear by discovering the shapes and colours you love.",
      image: PersonalStyle,
      imageAlt: "Elegant neutral outfit styled for everyday wear",
      date: "19 September 2026",
      readTime: "4 min read",
      slug: "/journal/personal-style",
    },
  ],
};

export default function Journal() {
  return (
    <>
      <BlogsSection {...journalData} />
    </>
  );
}
