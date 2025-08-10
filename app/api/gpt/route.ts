import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "OPENAI_API_KEY missing" }), { status: 500 });
    }
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: [{ role: "user", content: prompt || "Say hello" }]
    });
    return new Response(JSON.stringify(completion), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || "Unknown error" }), { status: 500 });
  }
}
