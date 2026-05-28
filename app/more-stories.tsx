import Link from "next/link";
import Avatar from "./avatar";
import DateComponent from "./date";
import CoverImage from "./cover-image";

function PostPreview({
  title,
  featuredImage,
  publishedDate,
  shortDescription,
  author,
  slug,
}: {
  title: string;
  featuredImage: any;
  publishedDate: string;
  shortDescription: string;
  author: any;
  slug: string;
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={featuredImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={publishedDate} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{shortDescription}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            featuredImage={post.featuredImage}
            publishedDate={post.publishedDate}
            author={post.author}
            slug={post.slug}
            shortDescription={post.shortDescription}
          />
        ))}
      </div>
    </section>
  );
}
