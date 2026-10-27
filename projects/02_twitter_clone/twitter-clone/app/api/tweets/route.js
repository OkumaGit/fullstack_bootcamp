export async function GET() {
  const tweets = [
    {
      id: 1,
      user: "JohnDoe",
      content: "Hello Next.js!",
      timestamp: "2m ago",
    },
    {
      id: 2,
      user: "JohnDoe",
      content: "Hello Next.js!",
      timestamp: "2m ago",
    },
  ];
  return new Response(JSON.stringify(tweets), { status: 200 });
}
