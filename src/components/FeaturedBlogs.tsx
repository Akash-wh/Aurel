import { Link } from "react-router-dom";
import type { BlogPost } from "../data/blogposts";

interface FeaturedBlogsProps {
  posts: BlogPost[];
  currentPostId: string;
  category: string;
  title?: string;
  limit?: number;
}

export default function FeaturedBlogs({
  posts,
  currentPostId,
  category,
  title = "You may also enjoy",
  limit = 3,
}: FeaturedBlogsProps) {
  const relatedPosts = posts
    .filter(
      (post) =>
        post.id !== currentPostId &&
        post.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, limit);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="bg-[#f7f5f1] px-4 py-12 text-[#292923] sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1800px]">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#646951]">
              {category}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
              {title}
            </h2>
          </div>

          <Link
            to="/journal"
            className="inline-flex w-fit items-center gap-2 border-b border-[#858873] pb-2 text-[10px] uppercase tracking-[0.15em] transition-colors hover:border-[#292923]"
          >
            Explore the journal
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
          {relatedPosts.map((post) => (
            <article key={post.id} className="group min-w-0">
              <Link
                to={post.slug}
                className="block overflow-hidden bg-[#eeece5]"
                aria-label={`Read ${post.title}`}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Link>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] uppercase tracking-[0.12em] text-[#807c74]">
                <span className="text-[#646951]">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="mt-3 font-serif text-xl font-normal leading-snug sm:text-2xl">
                <Link
                  to={post.slug}
                  className="transition-colors hover:text-[#646951]"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#807c74] sm:text-sm">
                {post.excerpt}
              </p>

              <Link
                to={post.slug}
                className="mt-4 inline-flex items-center gap-3 border-b border-[#dedbd1] pb-2 text-[10px] uppercase tracking-[0.15em] transition-colors hover:border-[#646951]"
              >
                Read the story
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}