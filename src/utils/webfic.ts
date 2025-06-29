import { works } from "../constants/webfic-data"
import type { WebficItem, Data } from "../types"

export const buckets = [
  { key: "≤2010", predicate: (w: WebficItem) => w.year <= 2010 },
  {
    key: "2011-12",
    predicate: (w: WebficItem) => w.year >= 2011 && w.year <= 2012,
  },
  {
    key: "2013-14",
    predicate: (w: WebficItem) => w.year >= 2013 && w.year <= 2014,
  },
  { key: "2015", predicate: (w: WebficItem) => w.year === 2015 },
  { key: "2016", predicate: (w: WebficItem) => w.year === 2016 },
  { key: "2017", predicate: (w: WebficItem) => w.year === 2017 },
  { key: "2018", predicate: (w: WebficItem) => w.year === 2018 },
  { key: "2019", predicate: (w: WebficItem) => w.year === 2019 },
  { key: "2020", predicate: (w: WebficItem) => w.year === 2020 },
  { key: "2021", predicate: (w: WebficItem) => w.year === 2021 },
  { key: "2022", predicate: (w: WebficItem) => w.year === 2022 },
  { key: "2023", predicate: (w: WebficItem) => w.year === 2023 },
  { key: "2024", predicate: (w: WebficItem) => w.year === 2024 },
]

export const rowOrder = buckets.map((b) => b.key)

export const data: Data = rowOrder.reduce((acc, key) => {
  const { predicate } = buckets.find((b) => b.key === key)!
  acc[key] = works.filter(predicate).sort((a, b) => a.order - b.order)
  return acc
}, {} as Data)

export function getWebficTitle(item: WebficItem): string {
  return item.title
}
