import type { Status } from "../types"

export const STATUS_ORDER: Status[] = [
  "none",
  "completed",
  "inprogress",
  "dropped",
]

export function getNextStatus(curr: Status): Status {
  const i = STATUS_ORDER.indexOf(curr)
  return STATUS_ORDER[(i + 1) % STATUS_ORDER.length]!
}
