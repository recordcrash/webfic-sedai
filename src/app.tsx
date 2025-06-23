import { useRef, useEffect } from "react"
import webficData, { getWebficTitle } from "../webfic-data"
import { domToBlob } from "modern-screenshot"
import { toast } from "sonner"
import { t } from './strings'
import { usePersistState } from "./hooks"

export const App = () => {
  const [selectedWebfic, setSelectedWebfic] = usePersistState<string[]>(
    "selectedWebfic",
    []
  )

  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t("title")
  }, [t])

  const imageToBlob = async () => {
    if (!wrapper.current) return

    const blob = await domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })

    return blob
  }

  const copyImage = async () => {
    const blob = await imageToBlob()

    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
  }

  const downloadImage = async () => {
    if (!wrapper.current) return

    const blob = await imageToBlob()

    if (!blob) return

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "webfic-sedai.png"
    a.click()

    URL.revokeObjectURL(url)
  }

  const totalWebfic = Object.values(webficData).flatMap((year) => {
    return year.map((item) => getWebficTitle(item)).slice(0, 12)
  }).length

  const bucketed: Record<string, typeof webficData[string]> = {};
  Object.entries(webficData).forEach(([year, items]) => {
    const num = parseInt(year.replace(/\D/g, ""), 10);
    const key = num <= 2010 ? "≤2010" : year;
    if (!bucketed[key]) bucketed[key] = [];
    bucketed[key].push(...items);
  });

  // ② Sort the bucket keys however you like
  const years = Object.keys(bucketed).sort((a, b) => {
    if (a === "≤2010") return -1;
    if (b === "≤2010") return 1;
    return parseInt(a, 10) - parseInt(b, 10);
  });

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center">
          <div className="w-full overflow-x-auto">
            <div
              className="flex flex-col border border-b-0 bg-white w-fit mx-auto"
              ref={wrapper}
            >
              <div className="border-b justify-between p-2 text-lg  font-bold flex">
                <h1>
                  {t("title")}
                  <span className="remove"> - {t("subtitle")}</span>
                  <span className="ml-2 text-zinc-400 font-medium">
                    {t("website")}
                  </span>
                </h1>
                <span className="shrink-0 whitespace-nowrap">
                  {t("watchedCount", {
                    count: selectedWebfic.length,
                    total: totalWebfic,
                  })}
                </span>
              </div>
              {years.map((year) => {
                const items = bucketed[year] || []
                return (
                  <div key={year} className="flex border-b">
                    <div
                      className={`
                      bg-red-500 shrink-0 text-white flex items-center font-bold justify-center p-1 border-black
                      h-16 md:h-20 w-16 md:w-20
                    `}
                    >
                      <span
                        className="text-base text-sm md:text-base text-center"
                      >
                        {year}
                      </span>
                    </div>
                    <div className="flex shrink-0">
                      {items.slice(0, 12).map((item) => {
                        const webficKey = getWebficTitle(item)
                        const displayTitle = getWebficTitle(item)
                        const isSelected = selectedWebfic.includes(webficKey)
                        return (
                          <button
                            key={webficKey}
                            className={`
                              h-16 md:h-20 
                              w-20 md:w-24
                              border-l break-words text-center shrink-0 inline-flex items-center 
                              p-1 overflow-hidden justify-center cursor-pointer text-xs 
                              ${
                                isSelected
                                  ? "bg-green-500"
                                  : "hover:bg-zinc-100"
                              }
                              transition-colors duration-200
                            `}
                            title={displayTitle}
                            onClick={() => {
                              setSelectedWebfic((prev) => {
                                if (isSelected) {
                                  return prev.filter(
                                    (title) => title !== webficKey
                                  )
                                }
                                return [...prev, webficKey]
                              })
                            }}
                          >
                            <span
                              className="leading-tight w-full line-clamp-4"
                            >
                              {displayTitle}
                            </span>
                          </button>
                        )
                      })}
                      {Array.from(
                        { length: Math.max(0, 12 - items.length) },
                        (_, index) => (
                          <div
                            key={`empty-${index}`}
                            className="h-16 md:h-20 w-20 md:w-24 border-l bg-gray-50"
                          />
                        )
                      )}
                      <div className="w-0 h-16 md:h-20 border-r" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              setSelectedWebfic(
                Object.values(webficData).flatMap((year) => {
                  return year
                    .map((item) => getWebficTitle(item))
                    .slice(0, 12)
                })
              )
            }}
          >
            {t("selectAll")}
          </button>

          {selectedWebfic.length > 0 && (
            <button
              type="button"
              className="border rounded-md px-4 py-2 inline-flex"
              onClick={() => {
                setSelectedWebfic([])
              }}
            >
              {t("clear")}
            </button>
          )}

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(copyImage(), {
                success: t("copySuccess"),
                loading: t("copying"),
                error(error) {
                  return t("copyFailed", {
                    error:
                      error instanceof Error
                        ? error.message
                        : t("unknownError"),
                  })
                },
              })
            }}
          >
            {t("copyImage")}
          </button>

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(downloadImage(), {
                success: t("downloadSuccess"),
                loading: t("downloading"),
                error(error) {
                  return t("downloadFailed", {
                    error:
                      error instanceof Error
                        ? error.message
                        : t("unknownError"),
                  })
                },
              })
            }}
          >
            {t("downloadImage")}
          </button>
        </div>

        <div className="mt-2 text-center">
          {t("footer")}
          Makin @ <a
            href="https://recordcrash.substack.com"
            target="_blank"
            className="underline"
          >
             Record Crash
          </a>
          {t("madeBy")}
          <a
            href="https://github.com/recordcrash/webfic-sedai"
            target="_blank"
            className="underline"
          >
            {t("viewCode")}
          </a>
        </div>
      </div>
    </>
  )
}
