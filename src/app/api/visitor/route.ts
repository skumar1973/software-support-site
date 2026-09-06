import { NextResponse } from "next/server";
import { Counter } from "counterapi";

export async function GET() {
  try {
    const workspace = 'shailendra-kumars-team-5397';
    const accessToken = 'ut_zD6joEMeSEK9h8qVSQ7hUEc2F1S564sNe06Y7GeY';

    if (!workspace || !accessToken) {
      return NextResponse.json(
        {
          error: "CounterAPI environment variables are missing",
        },
        { status: 500 }
      );
    }

    const counter = new Counter({
      workspace,
      accessToken,
    });

    const result = await counter.up("first-counter-5397");
    console.log("CounterAPI result:", result);
    return NextResponse.json({
      success: true,
        // visitors: 100,
      visitors: result.data.up_count,
    });
  } catch (error) {
    console.error("CounterAPI error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to update visitor counter",
      },
      { status: 500 }
    );
  }
}