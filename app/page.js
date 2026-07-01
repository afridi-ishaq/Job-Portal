import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Find Your Dream Job
        </h1>

        <p className="mt-4 text-gray-600">
           Discover opportunities from top companies around the world.
        </p>

        <Link
          href="/jobs"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
        >
          Browse Jobs
        </Link>
      </div>
      <div className="max-w-6xl mx-auto py-16">
  <div className="grid md:grid-cols-3 gap-6">
    
    <div className="text-center shadow p-6 rounded-xl">
      <h2 className="text-4xl font-bold text-blue-600">
        100+
      </h2>
      <p>Jobs Posted</p>
    </div>

    <div className="text-center shadow p-6 rounded-xl">
      <h2 className="text-4xl font-bold text-green-600">
        50+
      </h2>
      <p>Companies</p>
    </div>

    <div className="text-center shadow p-6 rounded-xl">
      <h2 className="text-4xl font-bold text-purple-600">
        1000+
      </h2>
      <p>Applications</p>
    </div>

  </div>
</div>
<footer className="bg-gray-900 text-white py-8 mt-20">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-xl font-bold">
      Job Portal
    </h3>

    <p className="mt-2">
      Built with Next.js and MongoDB
    </p>

    <p className="mt-4 text-gray-400">
      © 2026 All Rights Reserved
    </p>
  </div>
</footer>
    </main>

  );
}