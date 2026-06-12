import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center gap-6 py-6 text-sm">
      
      <Link to="/" className="hover:text-neon transition">
        Home
      </Link>

      <Link to="/projects" className="hover:text-neon transition">
        Projects
      </Link>

      <Link to="/blog" className="hover:text-neon transition">
        Blog
      </Link>

    </div>
  );
}