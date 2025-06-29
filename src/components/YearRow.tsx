import type { Status, WebficItem } from "../types"
import { WebficCell } from "./WebficCell"
import { getWebficTitle } from "../utils/webfic"

interface Props {
  yearLabel: string
  items: WebficItem[]
  statusMap: Record<string, Status>
  writtenMap: Record<string, boolean>
  wKeyPressed: boolean
  onToggleStatus: (key: string) => void
  onToggleWritten: (key: string) => void
}

export function YearRow({
  yearLabel,
  items,
  statusMap,
  writtenMap,
  wKeyPressed,
  onToggleStatus,
  onToggleWritten,
}: Props) {
  return (
    <div className="flex border-b" key={yearLabel}>
      <div className="bg-gray-50 shrink-0 flex items-center justify-center font-bold p-1 h-16 md:h-20 w-16 md:w-20 border-black">
        <span className="text-sm md:text-base text-center">{yearLabel}</span>
      </div>
      <div className="flex">
        {items.slice(0, 12).map((item) => (
          <WebficCell
            key={getWebficTitle(item)}
            item={item}
            status={statusMap[getWebficTitle(item)] ?? "none"}
            written={!!writtenMap[getWebficTitle(item)]}
            wKeyPressed={wKeyPressed}
            onToggleStatus={onToggleStatus}
            onToggleWritten={onToggleWritten}
          />
        ))}
        {Array.from({ length: Math.max(0, 12 - items.length) }).map((_, i) => (
          <div
            key={i}
            className="h-16 md:h-20 w-20 md:w-24 border-l bg-gray-50"
          />
        ))}
        <div className="w-0 h-16 md:h-20" />
      </div>
    </div>
  )
}
