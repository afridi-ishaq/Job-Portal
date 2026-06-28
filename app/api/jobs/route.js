import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("Job-Portal");

    const jobs = await db
      .collection("jobs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(jobs);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { title, company, location, salary, description } = body;

    if (
      !title ||
      !company ||
      !location ||
      !salary ||
      !description
    ) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("Job-Portal");

    const result = await db.collection("jobs").insertOne({
      title,
      company,
      location,
      salary,
      description,
      createdAt: new Date(),
    });

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
