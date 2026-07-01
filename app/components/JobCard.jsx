import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-5 shadow my-5 bg-gray-300 ">
      <h2 className="text-2xl font-bold">
        {job.title}
      </h2>

      <p className="mt-2">
        Company: {job.company}
      </p>

      <p>
        Location: {job.location}
      </p>

      <p>
        Salary: {job.salary}
      </p>

      <Link
        href={`/jobs/${job._id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}