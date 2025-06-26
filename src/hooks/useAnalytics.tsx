import { useEffect } from "react"
import { identifyUser, trackStatusMap } from "../utils/analytics"

export function useAnalytics(statusMap: Record<string, any>) {
  useEffect(identifyUser, [])
  return {
    track: () => trackStatusMap(statusMap),
  }
}
