import { data } from "./webfic"
import type { Status, Data, WebficItem } from "../types"

export interface BadgeDef {
  name: string
  description: string
  image: string

  /** per-item selector */
  filter?: (item: (typeof data)[string][0], globalIndex: number) => boolean

  /** full-grid test (e.g. Bingo) */
  test?: (statusMap: Record<string, Status>, data: Data) => boolean
}

// helper for Bingo logic
function bingoTest(statusMap: Record<string, Status>, data: Data): boolean {
  const grid = Object.values(data)
  const rows = grid
  const cols = grid[0]!.map((_, c) => grid.map((r) => r[c]))
  const mainDiag = rows.map((r, i) => r[i])
  const antiDiag = rows.map((r, i) => r[r.length - 1 - i])
  return [...rows, ...cols, mainDiag, antiDiag].some((line) =>
    line.every((item) => {
      const s = statusMap[item!.title]
      return s === "completed" || s === "dropped"
    })
  )
}

export function isBadgeUnlocked(
  badge: BadgeDef,
  statusMap: Record<string, Status>
): boolean {
  const allItems = Object.values(data).flat()

  // full‐grid test wins if provided
  if (badge.test) {
    return badge.test(statusMap, data)
  }

  // if no per‐item filter, cannot unlock
  if (!badge.filter) {
    return false
  }

  // pick the items via badge.filter
  const candidates = allItems.filter((item: WebficItem, idx: number) =>
    badge.filter!(item, idx)
  )

  // must have completed or dropped each one
  return candidates.every((item: WebficItem) => {
    const s = statusMap[item.title]
    return s === "completed" || s === "dropped"
  })
}

export const badgeDefinitions: BadgeDef[] = [
  {
    name: "Rationalist",
    description: "Read all works by Eliezer Yudkowsky",
    image: "yud.png",
    filter: (item) => item.tags.includes("yudkowsky"),
  },
  {
    name: "Whale",
    description: "Read all works by Alexander Wales",
    image: "wales.png",
    filter: (item) => item.tags.includes("wales"),
  },
  {
    name: "Ender of History",
    description: "Read all works by Bavitz",
    image: "bavitz.png",
    filter: (item) => item.tags.includes("bavitz"),
  },
  {
    name: "Stockholm Syndrome",
    description: "Read all works by Wildbow",
    image: "wildbow.png",
    filter: (item) => item.tags.includes("wildbow"),
  },
  {
    name: "Bingo!",
    description: "Complete a full row, column, or diagonal",
    image: "bingo.png",
    test: bingoTest,
  },
]
