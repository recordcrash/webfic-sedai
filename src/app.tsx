import { useRef, useEffect, useState } from "react"
import webficData, { getWebficTitle } from "../webfic-data"
import { toast } from "sonner"
import { t } from "./strings"
import { usePersistState } from "./hooks"
import { Header } from "./components/Header"
import { LegendFooter } from "./components/LegendFooter"
import { SiteFooter } from "./components/SiteFooter"
import type { Status } from "./types"
import { copyImage, downloadImage } from "./utils/imageExport"
import { decodeState } from "./utils/stateCodec"
import { identifyUser, trackStatusMap } from "./utils/analytics"
import { TABLE_VERSION } from "./config"

const STATUS_ORDER: Status[] = ["none", "completed", "inprogress", "dropped"]
const getNextStatus = (curr: Status): Status => {
  const i = STATUS_ORDER.indexOf(curr)
  return STATUS_ORDER[(i + 1) % STATUS_ORDER.length]!
}

export const App = () => {
  const wrapper = useRef<HTMLDivElement>(null)

  // build title list
  const allTitles = Object.values(webficData).flatMap((year) =>
    year.map((item) => getWebficTitle(item)).slice(0, 12)
  )
  const totalWebfic = allTitles.length

  // URL state
  const urlCode = new URLSearchParams(window.location.search).get("s")
  const initialState = urlCode ? decodeState(urlCode, allTitles) : {}

  // persisted state
  const storageKey = `${TABLE_VERSION}-webficStatus`
  const [statusMap, setStatusMap] = usePersistState<Record<string, Status>>(
    storageKey,
    initialState
  )

  const [writtenByMeMap, setWrittenByMeMap] = useState<Record<string, boolean>>({})
  const [wKeyPressed, setWKeyPressed] = useState(false)

  // document title
  useEffect(() => {
    document.title = t("title")
  }, [t])

  // initialize umami user
  useEffect(() => {
    identifyUser()
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "W") setWKeyPressed(true)
    }
    const up = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "W") setWKeyPressed(false)
    }
    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)
    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }
  }, [])

  // count read
  const readCount = Object.values(statusMap).reduce((sum, s) => {
    if (s === "inprogress") return sum + 0.5
    if (s === "completed" || s === "dropped") return sum + 1
    return sum
  }, 0)

  // bucket by year
  const bucketed: Record<string, (typeof webficData)[string]> = {}
  Object.entries(webficData).forEach(([year, items]) => {
    const num = parseInt(year.replace(/\D/g, ""), 10)
    const key = num <= 2010 ? "≤2010" : year
    if (!bucketed[key]) bucketed[key] = []
    bucketed[key].push(...items)
  })
  const years = Object.keys(bucketed).sort((a, b) => {
    if (a === "≤2010") return -1
    if (b === "≤2010") return 1
    return parseInt(a, 10) - parseInt(b, 10)
  })

  const handleCopy = () => {
    const promise = copyImage(wrapper.current!)
    toast.promise(promise, {
      success: t("copySuccess"),
      loading: t("copying"),
      error: (e) =>
        t("copyFailed", {
          error: e instanceof Error ? e.message : t("unknownError"),
        }),
    })
    promise.then(() => trackStatusMap(statusMap))
  }

  const handleDownload = () => {
    const promise = downloadImage(wrapper.current!)
    toast.promise(promise, {
      success: t("downloadSuccess"),
      loading: t("downloading"),
      error: (e) =>
        t("downloadFailed", {
          error: e instanceof Error ? e.message : t("unknownError"),
        }),
    })
    promise.then(() => trackStatusMap(statusMap))
  }

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="p-4 flex flex-col md:items-center">
        <div className="w-full overflow-x-auto">
          <div
            className="relative flex flex-col border bg-white w-fit mx-auto"
            ref={wrapper}
          >
            <Header readCount={readCount} total={totalWebfic} />

            {/* Year rows */}
            {years.map((year) => {
              const items = bucketed[year] || []
              return (
                <div key={year} className="flex border-b">
                  <div className="bg-gray-50 shrink-0 text-black flex items-center font-bold justify-center p-1 border-black h-16 md:h-20 w-16 md:w-20">
                    <span className="text-base text-sm md:text-base text-center">
                      {year}
                    </span>
                  </div>
                  <div className="flex shrink-0">
                    {items.slice(0, 12).map((item) => {
                      const key = getWebficTitle(item)
                      const status = statusMap[key] ?? "none"
                      const written = writtenByMeMap[key]
                      let bgClass = ""
                      if (status === "completed") bgClass = "bg-green-500"
                      else if (status === "inprogress")
                        bgClass = "bg-yellow-500"
                      else if (status === "dropped") bgClass = "bg-red-500"

                      return (
                        <button
                          key={key}
                          className={`relative h-16 md:h-20 w-20 md:w-24 border-l break-words text-center shrink-0 flex-col justify-center p-1 overflow-hidden cursor-pointer text-xs ${bgClass}`}
                          title={key}
                          onClick={() => {
                            if (wKeyPressed) {
                              setWrittenByMeMap((prev) => {
                                const next = { ...prev }
                                if (next[key]) delete next[key]
                                else next[key] = true
                                return next
                              })
                              return
                            }
                            setStatusMap((prev) => {
                              const curr = prev[key] ?? "none"
                              const next = getNextStatus(curr)
                              const nextMap = { ...prev }
                              if (next === "none") delete nextMap[key]
                              else nextMap[key] = next
                              return nextMap
                            })
                          }}
                        >
                          <span className="leading-tight w-full break-words whitespace-normal line-clamp-4">
                            {key}
                          </span>
                          {written && (
                            <span className="absolute top-0 right-0 text-lg pointer-events-none">
                              🪶
                            </span>
                          )}
                        </button>
                      )
                    })}
                    {Array.from(
                      { length: Math.max(0, 12 - items.length) },
                      (_, i) => (
                        <div
                          key={i}
                          className="h-16 md:h-20 w-20 md:w-24 border-l bg-gray-50"
                        />
                      )
                    )}
                    <div className="w-0 h-16 md:h-20" />
                  </div>
                </div>
              )
            })}

            <LegendFooter />
            <span className="absolute bottom-1 right-1 text-[8px] text-black bg-white bg-opacity-75 px-0.5 py-px rounded select-none pointer-events-none">
              {TABLE_VERSION}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 justify-center">
        <button
          type="button"
          className="border rounded-md px-4 py-2 inline-flex"
          onClick={() => {
            const all = allTitles.reduce((acc, t) => {
              acc[t] = "completed"
              return acc
            }, {} as Record<string, Status>)
            setStatusMap(all)
          }}
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
