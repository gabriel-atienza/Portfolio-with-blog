export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Gabriel Anthony Atienza
        </h1>

        <p className="text-neon mt-2 tracking-widest">
          KRYPTS // SYSTEMS & SECURITY LEARNER
        </p>

        <p className="text-gray-400 mt-4 max-w-md">
          IT student documenting projects, cybersecurity labs, and programming progress.
        </p>

        <div className="flex gap-4 mt-6 justify-center">
          <button className="border border-neon px-4 py-2 hover:bg-neon hover:text-black transition">
            Projects
          </button>

          <button className="border border-gray-600 px-4 py-2 hover:border-neon transition">
            Blog
          </button>
        </div>
      </div>

    </div>
  );
}