import { useRef, useEffect } from "react"
import webficData, { getWebficTitle } from "../webfic-data"
import { domToBlob } from "modern-screenshot"
import { toast } from "sonner"
import { t } from "./strings"
import { usePersistState } from "./hooks"

const TABLE_VERSION = "v2"

type Status = "none" | "completed" | "inprogress" | "dropped"
const STATUS_ORDER: Status[] = ["none", "completed", "inprogress", "dropped"]
const getNextStatus = (curr: Status): Status => {
  const i = STATUS_ORDER.indexOf(curr)
  return STATUS_ORDER[(i + 1) % STATUS_ORDER.length]!
}

export const App = () => {
  // versioned key so old storage isn't loaded
  const storageKey = `${TABLE_VERSION}-webficStatus`
  const [statusMap, setStatusMap] = usePersistState<Record<string, Status>>(
    storageKey,
    {}
  )

  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t("title")
  }, [t])

  const imageToBlob = async () => {
    if (!wrapper.current) return
    return domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })
  }

  const copyImage = async () => {
    const blob = await imageToBlob()
    if (!blob) return
    await navigator.clipboard.write([
      new ClipboardItem({ [blob.type]: blob }),
    ])
  }

  const downloadImage = async () => {
    const blob = await imageToBlob()
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ages-of-webfic.png"
    a.click()
    URL.revokeObjectURL(url)
  }

  // prepare title list and counts
  const allTitles = Object.values(webficData)
    .flatMap((year) => year.map((item) => getWebficTitle(item)).slice(0, 12))
  const totalWebfic = allTitles.length

  // compute read count: completed or dropped = 1, in-progress = 0.5
  const readCount = Object.values(statusMap).reduce((sum, s) => {
    if (s === "inprogress") return sum + 0.5
    if (s === "completed" || s === "dropped") return sum + 1
    return sum
  }, 0)

  // bucket webfics by year
  const bucketed: Record<string, typeof webficData[string]> = {}
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

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center">
          <div className="w-full overflow-x-auto">
            <div
              className="relative flex flex-col border bg-white w-fit mx-auto"
              ref={wrapper}
            >
              {/* Header */}
              <div className="border-b justify-between p-2 text-lg font-bold flex">
                <h1>
                  {t("title")}
                  <span className="remove"> - {t("subtitle")}</span>
                  <span className="ml-2 text-zinc-400 font-medium">
                    {t("website")}
                  </span>
                </h1>
                <span className="shrink-0 whitespace-nowrap">
                  {t("readCount", { count: readCount, total: totalWebfic })}
                </span>
              </div>

              {/* Year rows */}
              {years.map((year) => {
                const items = bucketed[year] || []
                return (
                  <div key={year} className="flex border-b">
                    {/* Year label */}
                    <div className="bg-gray-50 shrink-0 text-black flex items-center font-bold justify-center p-1 border-black h-16 md:h-20 w-16 md:w-20">
                      <span className="text-base text-sm md:text-base text-center">
                        {year}
                      </span>
                    </div>
                    {/* Webfic buttons */}
                    <div className="flex shrink-0">
                      {items.slice(0, 12).map((item) => {
                        const key = getWebficTitle(item)
                        const status = statusMap[key] ?? "none"
                        let bgClass = ""
                        if (status === "completed") bgClass = "bg-green-500"
                        else if (status === "inprogress") bgClass = "bg-yellow-500"
                        else if (status === "dropped") bgClass = "bg-red-500"

                        return (
                          <button
                            key={key}
                            className={`h-16 md:h-20 w-20 md:w-24 border-l break-words text-center shrink-0 inline-flex items-center p-1 overflow-hidden justify-center cursor-pointer text-xs ${bgClass}`}
                            title={key}
                            onClick={() => {
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
                            <span className="leading-tight w-full line-clamp-4">
                              {key}
                            </span>
                          </button>
                        )
                      })}
                      {Array.from({ length: Math.max(0, 12 - items.length) }, (_, i) => (
                        <div
                          key={i}
                          className="h-16 md:h-20 w-20 md:w-24 border-l bg-gray-50"
                        />
                      ))}
                      {/* right edge without extra border */}
                      <div className="w-0 h-16 md:h-20" />
                    </div>
                  </div>
                )
              })}

              {/* Legend footer */}
              <div className="flex w-full items-center justify-center ml-2 mt-1 p-2 text-xs">
                <span className="flex items-center space-x-1 mr-6">
                  <span className="h-3 w-3 bg-green-500 rounded-full" />
                  <span>{t("completed")}</span>
                </span>

                <span className="flex items-center space-x-1 mr-6">
                  <span className="h-3 w-3 bg-yellow-500 rounded-full" />
                  <span>{t("inProgress")}</span>
                </span>

                <span className="flex items-center space-x-1 mr-6">
                  <span className="h-3 w-3 bg-red-500 rounded-full" />
                  <span>{t("dropped")}</span>
                </span>

                <span className="flex items-center space-x-1">
                  <span className="h-3 w-3 border border-gray-400 rounded-full" />
                  <span>{t("none")}</span>
                </span>
              </div>

              {/* Version badge */}
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
            onClick={() =>
              toast.promise(copyImage(), {
                success: t("copySuccess"),
                loading: t("copying"),
                error: (e) =>
                  t("copyFailed", { error: e instanceof Error ? e.message : t("unknownError") }),
              })
            }
          >
            {t("copyImage")}
          </button>
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() =>
              toast.promise(downloadImage(), {
                success: t("downloadSuccess"),
                loading: t("downloading"),
                error: (e) =>
                  t("downloadFailed", { error: e instanceof Error ? e.message : t("unknownError") }),
              })
            }
          >
            {t("downloadImage")}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-2 text-center border-t pt-2">
          {t("footer")} Makin @{" "}
          <a href="https://recordcrash.substack.com" target="_blank" className="underline">
            Record Crash
          </a>
          {t("madeBy")}
          <a href="https://github.com/recordcrash/webfic-sedai" target="_blank" className="underline">
            {t("viewCode")}
          </a>
        </div>
      </div>
    </>
  )
}
