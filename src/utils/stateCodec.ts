import type { Status } from "../types";

const STATUS_TO_VAL: Record<Status, number> = {
  none: 0,
  completed: 1,
  inprogress: 2,
  dropped: 3,
}

const VAL_TO_STATUS = ["none", "completed", "inprogress", "dropped"] as const

/**
 * Encode a map of title→Status into a URL-safe Base64 string.
 */
export function encodeState(
  map: Record<string, Status>,
  allTitles: string[]
): string {
  const byteCount = Math.ceil((allTitles.length * 2) / 8)
  const bytes = new Uint8Array(byteCount)

  allTitles.forEach((title, i) => {
    const status = map[title] ?? "none"
    const v = STATUS_TO_VAL[status]
    const bitIndex = i * 2
    const byteIndex = bitIndex >> 3
    const offset = bitIndex & 7
    bytes[byteIndex]! |= v << offset
  })

  // convert to raw binary string
  let raw = ""
  for (const b of bytes) raw += String.fromCharCode(b)

  // Base64 URL-safe
  return btoa(raw)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

/**
 * Decode a URL-safe Base64 string back into title→Status.
 */
export function decodeState(
  code: string,
  allTitles: string[]
): Record<string, Status> {
  // restore padding & URL chars
  let str = code.replace(/-/g, "+").replace(/_/g, "/")
  while (str.length % 4) str += "="

  const raw = atob(str)
  const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0))
  const out: Record<string, Status> = {}

  allTitles.forEach((title, i) => {
    const bitIndex = i * 2
    const byteIndex = bitIndex >> 3
    const offset = bitIndex & 7
    // default to 0 if byteIndex is out of range
    const byte = bytes[byteIndex] ?? 0
    const v = (byte >> offset) & 3
    // VAL_TO_STATUS[v] is guaranteed defined, so assert with !
    out[title] = VAL_TO_STATUS[v]!
  })

  return out
}
