import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">
            JobFinder
          </h1>
        </Link>

        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}