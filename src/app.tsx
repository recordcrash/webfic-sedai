// src/app.tsx
import { useRef, useEffect } from "react"
import { toast } from "sonner"
import { t } from "./strings"
import { usePersistState } from "./hooks/usePersistState"
import { useWebficGrid } from "./hooks/useWebficGrid"
import { useKeyPress } from "./hooks/useKeyPress"
import { useAnalytics } from "./hooks/useAnalytics"
import { Header } from "./components/Header"
import { LegendFooter } from "./components/LegendFooter"
import { SiteFooter } from "./components/SiteFooter"
import { YearRow } from "./components/YearRow"
import { copyImage, downloadImage } from "./utils/imageExport"
import { getNextStatus } from "./utils/status"
import type { Status } from "./types"
import { TABLE_VERSION } from "./config"

export const App = () => {
  const wrapper = useRef<HTMLDivElement>(null)
  const urlCode = new URLSearchParams(window.location.search).get("s")
  const { allTitles, initialState, bucketed, years } = useWebficGrid(urlCode)
  const storageKey = `${TABLE_VERSION}-webficStatus`
  const [statusMap, setStatusMap] = usePersistState<Record<string, Status>>(
    storageKey,
    initialState
  )
  const [writtenMap, setWrittenMap] = usePersistState<Record<string, boolean>>(
    `${TABLE_VERSION}-writtenByMe`,
    {}
  )
  const wKeyPressed = useKeyPress("w")
  const { track } = useAnalytics(statusMap)

  const totalWebfic = allTitles.length
  const readCount = Object.values(statusMap).reduce((sum, s) => {
    if (s === "inprogress") return sum + 0.5
    if (s === "completed" || s === "dropped") return sum + 1
    return sum
  }, 0)

  function handleCopy() {
    const promise = copyImage(wrapper.current!)
    toast.promise(promise, {
      loading: t("copying"),
      success: t("copySuccess"),
      error: e =>
        t("copyFailed", {
          error: e instanceof Error ? e.message : t("unknownError"),
        }),
    })
    promise.then(track)
  }

  function handleDownload() {
    const promise = downloadImage(wrapper.current!)
    toast.promise(promise, {
      loading: t("downloading"),
      success: t("downloadSuccess"),
      error: e =>
        t("downloadFailed", {
          error: e instanceof Error ? e.message : t("unknownError"),
        }),
    })
    promise.then(track)
  }

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="p-4 flex flex-col items-center">
        <div className="w-full overflow-x-auto">
          <div
            ref={wrapper}
            className="relative flex flex-col border bg-white w-fit mx-auto"
          >
            <Header readCount={readCount} total={totalWebfic} />

            {years.map(year => (
              <YearRow
                key={year}
                yearLabel={year}
                items={bucketed[year] || []}
                statusMap={statusMap}
                writtenMap={writtenMap}
                wKeyPressed={wKeyPressed}
                onToggleStatus={key =>
                  setStatusMap(prev => {
                    const next = getNextStatus(prev[key] ?? "none")
                    const m = { ...prev }
                    if (next === "none") delete m[key]
                    else m[key] = next
                    return m
                  })
                }
                onToggleWritten={key =>
                  setWrittenMap(prev => {
                    const m = { ...prev }
                    if (m[key]) delete m[key]
                    else m[key] = true
                    return m
                  })
                }
              />
            ))}

            <LegendFooter />
            <span className="absolute bottom-1 right-1 text-[8px] bg-white bg-opacity-75 px-0.5 py-px rounded">
              {TABLE_VERSION}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <button
          type="button"
          className="border rounded-md px-4 py-2 inline-flex"
          onClick={() =>
            setStatusMap(
              Object.fromEntries(
                allTitles.map(title => [title, "completed"])
              )
            )
          }
        >
          {t("selectAll")}
        </button>
        {Object.keys(statusMap).length > 0 && (
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => setStatusMap({})}
          >
            {t("clear")}
          </button>
        )}
        <button
          type="button"
          className="border rounded-md px-4 py-2 inline-flex"
          onClick={handleCopy}
        >
          {t("copyImage")}
        </button>
        <button
          type="button"
          className="border rounded-md px-4 py-2 inline-flex"
          onClick={handleDownload}
        >
          {t("downloadImage")}
        </button>
      </div>

      <SiteFooter />
    </div>
  )
}
