import profilePic from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-bg text-white">

      {/* Profile Section */}
      <div className="text-center flex flex-col items-center">

        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neon shadow-[0_0_20px_#39ff88]">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        <h1 className="text-4xl font-bold mt-6">
          Gabriel Anthony Atienza
        </h1>

        <p className="text-neon mt-2 tracking-widest">
          BS IT Student at Holy Angel University // SYSTEMS & SECURITY LEARNER
        </p>

        <p className="text-gray-400 mt-4 max-w-md">
          IT student documenting projects, cybersecurity labs, and programming progress.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
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
