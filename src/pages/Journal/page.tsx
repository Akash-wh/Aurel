import { Link, useParams } from "react-router-dom";
import SingleBlog from "../../components/SingleBlog";
import FeaturedBlogs from "../../components/FeaturedBlogs";
import Newsletter from "../../components/Newsletter";
import { allBlogPosts, getBlogPostBySlug } from "../../data/blogposts";

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

export default function JournalPost() {
  const { slug } = useParams();

  const handleSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);

    // Connect your newsletter API or email marketing service here.
  };

  const post = getBlogPostBySlug(slug ?? "");

  if (!post) {
    return (
      <main className="min-h-[60vh] bg-[#f7f5f1] px-4 py-24 text-center text-[#292923]">
        <p className="text-xs uppercase tracking-[0.2em] text-[#646951]">
          AUREL JOURNAL
        </p>

        <h1 className="mt-4 font-serif text-3xl sm:text-4xl">
          Story not found
        </h1>

        <p className="mt-4 text-sm text-[#807c74]">
          The article you are looking for may have moved.
        </p>

        <Link
          to="/journal"
          className="mt-8 inline-block border-b border-[#858873] pb-2 text-xs uppercase tracking-widest"
        >
          Back to journal
        </Link>
      </main>
    );
  }

  return (
    <>
      <SingleBlog blog={post} />
      <FeaturedBlogs
        posts={allBlogPosts}
        currentPostId={post.id}
        categories={[]}
        title="More stories in this category"
        limit={3}
      />
      <Newsletter {...newsletterData} onSubscribe={handleSubscribe} />
    </>
  );
}
