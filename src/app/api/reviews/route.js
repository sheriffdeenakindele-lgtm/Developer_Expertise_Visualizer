import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const body = await req.json();
  const { name, review } = body;

  // Save reviews to a simple local file
  const filePath = path.join(process.cwd(), "data", "reviews.json");

  let existing = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  existing.push({
    name,
    review,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true });
}
