import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "../blogPosts";

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-white p-6">Post not found.</div>;
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-bg text-white">
      <div className="prose prose-invert max-w-3xl mx-auto py-12 prose-headings:text-neon prose-a:text-neon">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}