import Link from "next/link";

async function getJob(id) {
  const res = await fetch(
    `http://localhost:3000/api/jobs/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }

  return res.json();
}

export default async function JobDetailsPage({ params }) {
  const { id } = await params;

  const job = await getJob(id);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="border rounded-lg p-8 shadow">
        <h1 className="text-4xl font-bold">
          {job.title}
        </h1>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Job Description
          </h2>

          <p>{job.description}</p>
        </div>

        <Link
          href={`/apply/${job._id}`}
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}