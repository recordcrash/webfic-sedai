import { useMemo } from "react"
import webficData, { getWebficTitle } from "../../webfic-data"
import { decodeState } from "../utils/stateCodec"

export function useWebficGrid(searchString: string | null) {
  // build flat list of titles
  const allTitles = useMemo(
    () =>
      Object.values(webficData)
        .flatMap(year => year.map(item => getWebficTitle(item)).slice(0, 12)),
    []
  )

  // initial URL state
  const initialState = useMemo(
    () => (searchString ? decodeState(searchString, allTitles) : {}),
    [searchString, allTitles]
  )

  // bucket by year, folding all ≤2010 into one group
  const { bucketed, years } = useMemo(() => {
    const b: Record<string, typeof webficData[string]> = {}
    Object.entries(webficData).forEach(([year, items]) => {
      const num = +year.replace(/\D/g, "")
      const key = num <= 2010 ? "≤2010" : year
      b[key] = (b[key] || []).concat(items)
    })
    const sortedYears = Object.keys(b).sort((a, b) => {
      if (a === "≤2010") return -1
      if (b === "≤2010") return 1
      return +a - +b
    })
    return { bucketed: b, years: sortedYears }
  }, [])

  return { allTitles, initialState, bucketed, years }
}
