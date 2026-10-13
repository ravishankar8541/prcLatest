import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const pdf = await readFile(path.join(process.cwd(), "public", "catalogue", "prc-catalogue.pdf"));
    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="PRC-Catalogue.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    return Response.json({ error: "The catalogue PDF is not available yet." }, { status: 404 });
  }
}
