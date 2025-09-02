let schools: any[] = [];

export async function GET() {
  return Response.json(schools);
}

export async function POST(req: Request) {
  const body = await req.json();
  schools.push(body);
  return Response.json({ message: "Added successfully" });
}