import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const client = await clientPromise;

    const db = client.db("jobfinder");

    const job = await db
      .collection("jobs")
      .findOne({
        _id: new ObjectId(id),
      });

    if (!job) {
      return Response.json(
        { message: "Job not found" },
        { status: 404 }
      );
    }

    return Response.json(job);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const client = await clientPromise;

    const db = client.db("jobfinder");

    await db.collection("jobs").updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: body,
      }
    );

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const client = await clientPromise;

    const db = client.db("jobfinder");

    await db.collection("jobs").deleteOne({
      _id: new ObjectId(params.id),
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}