import { describe, expect, test } from "bun:test"
import { buildOptionsResponse, withCors } from "../src/routes/zen/util/modelsHandler"

describe("Zen CORS", () => {
  test("preflight allows every key header the gateway reads", async () => {
    const response = await buildOptionsResponse()
    expect(response.status).toBe(200)
    expect(response.headers.get("access-control-allow-origin")).toBe("*")
    expect(response.headers.get("access-control-allow-methods")).toContain("POST")
    const allowed = response.headers
      .get("access-control-allow-headers")!
      .split(",")
      .map((header) => header.trim().toLowerCase())
    expect(allowed).toEqual(expect.arrayContaining(["content-type", "authorization", "x-api-key", "x-goog-api-key"]))
  })

  test("adds CORS to a fetched response without disturbing status, headers, or a streamed body", async () => {
    using server = Bun.serve({
      port: 0,
      fetch: () =>
        new Response(
          new ReadableStream({
            start(controller) {
              controller.enqueue(new TextEncoder().encode("data: one\n\n"))
              controller.enqueue(new TextEncoder().encode("data: two\n\n"))
              controller.close()
            },
          }),
          { status: 429, headers: { "content-type": "text/event-stream", "retry-after": "7" } },
        ),
    })
    const fetched = await fetch(server.url)
    const response = withCors(fetched)
    // Workers fetch responses have immutable headers, so withCors must copy rather than mutate.
    expect(fetched.headers.get("access-control-allow-origin")).toBeNull()
    expect(response.status).toBe(429)
    expect(response.headers.get("access-control-allow-origin")).toBe("*")
    expect(response.headers.get("access-control-expose-headers")).toBe("retry-after")
    expect(response.headers.get("content-type")).toBe("text/event-stream")
    expect(response.headers.get("retry-after")).toBe("7")
    expect(await response.text()).toBe("data: one\n\ndata: two\n\n")
  })
})
