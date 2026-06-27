import ApplyForm from "./ApplyForm";

export default async function ApplyPage({
  params,
}) {
  const { id } = await params;

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">
        Apply For Job
      </h1>

      <ApplyForm jobId={id} />
    </div>
  );
}