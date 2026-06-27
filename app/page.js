import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Find Your Dream Job
        </h1>

        <p className="mt-4 text-gray-600">
          Search thousands of jobs from top companies.
        </p>

        <Link
          href="/jobs"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Browse Jobs
        </Link>
      </div>
    </main>
  );
}