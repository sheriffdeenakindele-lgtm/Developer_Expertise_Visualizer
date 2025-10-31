import { NextRequest, NextResponse } from 'next/server';

// In a real app, you'd save this to a database
// For now, we'll just log it and return success
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, review } = body;

    // Validate the data
    if (!name || !review) {
      return NextResponse.json(
        { error: 'Name and review are required' },
        { status: 400 }
      );
    }

    // In a real application, you would save to a database here
    // For demo purposes, we'll just log it
    console.log('New review received:', { name, review, timestamp: new Date() });

    // You could also save to a JSON file, database, or external service
    // Example: await saveReviewToDatabase({ name, review });

    return NextResponse.json(
      { message: 'Review submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing review:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests to retrieve reviews
export async function GET() {
  try {
    // In a real app, you'd fetch from a database
    // For demo, return empty array
    return NextResponse.json({ reviews: [] });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}