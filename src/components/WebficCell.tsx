import { getWebficTitle } from "../../webfic-data"
import type { WebficItem } from "../../webfic-data"
import type { Status } from "../types"

interface Props {
  item: WebficItem
  status: Status
  written: boolean
  onToggleStatus: (key: string) => void
  onToggleWritten: (key: string) => void
  wKeyPressed: boolean
}

export function WebficCell({
  item,
  status,
  written,
  onToggleStatus,
  onToggleWritten,
  wKeyPressed,
}: Props) {
  const key = getWebficTitle(item)
  let bgClass = ""
  if (status === "completed") bgClass = "bg-green-500"
  else if (status === "inprogress") bgClass = "bg-yellow-500"
  else if (status === "dropped") bgClass = "bg-red-500"

  function handleClick() {
    if (wKeyPressed) return onToggleWritten(key)
    return onToggleStatus(key)
  }

  return (
    <button
      className={[
        "relative h-16 md:h-20 w-20 md:w-24 border-l",
        "break-words text-center shrink-0 p-1 cursor-pointer text-xs",
        bgClass,
      ].join(" ")}
      title={key}
      onClick={handleClick}
    >
      <span className="leading-tight w-full whitespace-normal line-clamp-4">
        {key}
      </span>
      {written && <span className="absolute top-0 right-0 text-lg">🪶</span>}
    </button>
  )
}
