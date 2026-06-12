export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-12 bg-bg text-white">
      <h1 className="text-3xl font-bold text-neon">Blog</h1>

      <div className="mt-6 space-y-4">

        <div className="border border-gray-700 p-4">
          <h2 className="font-bold">Week 1: Networking Basics</h2>
          <p className="text-gray-400 text-sm">
            Learned about IP addresses, routing, and basic network structure.
          </p>
        </div>

        <div className="border border-gray-700 p-4">
          <h2 className="font-bold">CompTIA Prep Notes</h2>
          <p className="text-gray-400 text-sm">
            Started reviewing IT concepts and terminology.
          </p>
        </div>

      </div>
    </div>
  );
}