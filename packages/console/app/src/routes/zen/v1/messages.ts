import type { APIEvent } from "@solidjs/start/server"
import { handler } from "~/routes/zen/util/handler"
import { buildOptionsResponse, withCors } from "~/routes/zen/util/modelsHandler"
import { parseAnthropicVariant } from "~/routes/zen/util/variant"

export async function OPTIONS(_input: APIEvent) {
  return buildOptionsResponse()
}

export function POST(input: APIEvent) {
  return handler(input, {
    format: "anthropic",
    modelList: "full",
    parseApiKey: (headers: Headers) => headers.get("x-api-key") ?? undefined,
    parseModel: (url: string, body: any) => body.model,
    parseVariant: (url: string, body: any) => parseAnthropicVariant(body),
    parseIsStream: (url: string, body: any) => !!body.stream,
  }).then(withCors)
}
