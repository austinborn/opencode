import type { APIEvent } from "@solidjs/start/server"
import { handler } from "~/routes/zen/util/handler"
import { buildOptionsResponse, withCors } from "~/routes/zen/util/modelsHandler"
import { parseOpenAiVariant } from "~/routes/zen/util/variant"

export async function OPTIONS(_input: APIEvent) {
  return buildOptionsResponse()
}

export function POST(input: APIEvent) {
  return handler(input, {
    format: "oa-compat",
    modelList: "lite",
    parseApiKey: (headers: Headers) => headers.get("authorization")?.split(" ")[1],
    parseModel: (url: string, body: any) => body.model,
    parseVariant: (url: string, body: any) => parseOpenAiVariant(body),
    parseIsStream: (url: string, body: any) => !!body.stream,
  }).then(withCors)
}
