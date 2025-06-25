import type { Status } from "../types"
import { TABLE_VERSION } from "../config"

const getOrCreateUserId = (): string => {
  const storageKey = "umamiUserId"
  let id = localStorage.getItem(storageKey)
  if (!id) {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      id = crypto.randomUUID()
    } else {
      id = Math.random().toString(36).substring(2) + Date.now().toString(36)
    }
    localStorage.setItem(storageKey, id)
  }
  return id
}

export const identifyUser = (): void => {
  const userId = getOrCreateUserId()
  if ((window as any).umami) {
    ;(window as any).umami.identify({ unique_id: userId })
  }
}

export const trackStatusMap = (statusMap: Record<string, Status>): void => {
  if ((window as any).umami) {
    ;(window as any).umami.track("statusMapUpdate", statusMap)
  }
}
