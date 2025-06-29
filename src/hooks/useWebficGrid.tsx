import { useMemo } from "react"
import { data as webficData, rowOrder, getWebficTitle } from "../utils/webfic"
import { decodeState } from "../utils/stateCodec"
import type { WebficItem } from "../types"

export function useWebficGrid(searchString: string | null) {
  // build flat list of titles (max 12 per row)
  const allTitles = useMemo(() => {
    return rowOrder.flatMap((group: string) => {
      const items = webficData[group] as WebficItem[]
      return items.slice(0, 12).map((item: WebficItem) => getWebficTitle(item))
    })
  }, [])

  // initial URL state
  const initialState = useMemo(
    () => (searchString ? decodeState(searchString, allTitles) : {}),
    [searchString, allTitles]
  )

  // data and row keys are prebuilt
  const bucketed = webficData
  const years = rowOrder

  return { allTitles, initialState, bucketed, years }
}
