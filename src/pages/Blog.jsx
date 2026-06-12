import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-12 bg-bg text-white">
      <h1 className="text-3xl font-bold text-neon">Blog</h1>

      <div className="mt-6 space-y-4">

        <Link to="/blog/week-1-networking" className="block border border-gray-700 p-4 hover:border-neon transition">
          <h2 className="font-bold">Week 1: Networking Basics</h2>
          <p className="text-gray-400 text-sm">IP addresses, routing, subnetting</p>
        </Link>

        <Link to="/blog/comptia-notes" className="block border border-gray-700 p-4 hover:border-neon transition">
          <h2 className="font-bold">CompTIA Notes</h2>
          <p className="text-gray-400 text-sm">Core IT concepts summary</p>
        </Link>

      </div>
    </div>
  );
}