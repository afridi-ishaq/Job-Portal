import clientPromise from "@/lib/mongodb";
import JobCard from "../components/JobCard";

async function getJobs() {
  const client = await clientPromise;

  const db = client.db("Job-Portal");

  const jobs = await db
    .collection("jobs")
    .find({})
    .toArray();

  return jobs.map((job) => ({
    ...job,
    _id: job._id.toString(),
  }));
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">
        Available Jobs
      </h1>

      <div className="border text-black rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}