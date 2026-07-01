import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600  text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl">
            JobFinder
          </h1>
        </Link>

        <div className="flex gap-5 bg-gray-400 p-2 px-12 text-2xl rounded-full text-cyan-200">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/jobs" className="hover:text-black transition">Jobs</Link>
          <Link href="/admin" className="hover:text-black transition">Admin</Link>
        </div>
      </div>
    </nav>
  );
}