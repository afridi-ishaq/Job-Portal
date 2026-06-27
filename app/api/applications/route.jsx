import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      resumeLink,
      jobId,
    } = body;

    if (
      !name ||
      !email ||
      !resumeLink ||
      !jobId
    ) {
      return Response.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const client = await clientPromise;

    const db = client.db("jobfinder");

    const result = await db
      .collection("applications")
      .insertOne({
        name,
        email,
        resumeLink,
        jobId,
        createdAt: new Date(),
      });

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}