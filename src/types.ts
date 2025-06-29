export type Status = "none" | "completed" | "inprogress" | "dropped"

export type WebficItem = {
  title: string
  year: number
  order: number
  tags: string[]
}

export type Data = Record<string, WebficItem[]>
