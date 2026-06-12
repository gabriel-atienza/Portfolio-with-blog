export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-12 bg-bg text-white">
      <h1 className="text-3xl font-bold text-neon">Projects</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div className="border border-gray-700 p-4">
          <h2 className="font-bold">NetAcad Labs</h2>
          <p className="text-gray-400 text-sm">
            Cybersecurity fundamentals and networking exercises.
          </p>
        </div>

        <div className="border border-gray-700 p-4">
          <h2 className="font-bold">Python Basics</h2>
          <p className="text-gray-400 text-sm">
            Simple scripts and problem-solving practice.
          </p>
        </div>

      </div>
    </div>
  );
}