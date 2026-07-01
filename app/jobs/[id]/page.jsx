import Link from "next/link";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function getJob(id) {
  const client = await clientPromise;

  const db = client.db("Job-Portal");

  const job = await db.collection("jobs").findOne({
    _id: new ObjectId(id),
  });

  return {
    ...job,
    _id: job._id.toString(),
  };
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