// Browsers only send a header that the preflight lists, so include every key header the gateway reads
// plus the headers the Anthropic SDK adds when called from a browser.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-api-key, x-goog-api-key, anthropic-version, anthropic-beta, anthropic-dangerous-direct-browser-access",
}

export async function buildOptionsResponse() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  })
}

export function withCors(response: Response) {
  // Proxied responses come from fetch, whose headers are immutable on Workers, so copy before setting.
  const result = new Response(response.body, response)
  result.headers.set("Access-Control-Allow-Origin", corsHeaders["Access-Control-Allow-Origin"])
  result.headers.set("Access-Control-Expose-Headers", "retry-after")
  return result
}

export async function buildModelsResponse(models: string[]) {
  return new Response(
    JSON.stringify({
      object: "list",
      data: models
        .filter((id) => !id.startsWith("alpha-"))
        .map((id) => ({
          id,
          object: "model",
          created: Math.floor(Date.now() / 1000),
          owned_by: "opencode",
        })),
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
