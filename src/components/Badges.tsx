import { useState } from "react"
import { badgeDefinitions } from "../../webfic-data"
import type { BadgeDef } from "../../webfic-data"
import type { Status } from "../types"

// helper to see which badges are unlocked
function isUnlocked(works: string[], statusMap: Record<string, Status>) {
  return works.every(title => {
    const s = statusMap[title]
    return s === "completed" || s === "dropped"
  })
}

export function Badges({
  statusMap,
}: {
  statusMap: Record<string, Status>
}) {
  const unlocked = badgeDefinitions.filter((b: BadgeDef) =>
    isUnlocked(b.works, statusMap)
  )
  // stack newest on top
  const stack = [...unlocked].reverse()

  return (
    <div className="flex items-center justify-end -space-x-3 mr-2">
      {stack.map(badge => (
        <BadgeWithTooltip key={badge.name} badge={badge} />
      ))}
    </div>
  )
}

function BadgeWithTooltip({ badge }: { badge: BadgeDef }) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative inline-block pointer-events-auto"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(v => !v)}
    >
      <img
        src={`/badges/${badge.image}`}
        alt={badge.name}
        className="h-10 w-10 p-1 scale-100 opacity-100 transition-transform transition-opacity duration-500 ease-out"
        style={{
          filter: [
            "drop-shadow(1px 0 0 white)",
            "drop-shadow(-1px 0 0 white)",
            "drop-shadow(0 1px 0 white)",
            "drop-shadow(0 -1px 0 white)",
            "drop-shadow(1px 1px 0 white)",
            "drop-shadow(-1px 1px 0 white)",
            "drop-shadow(1px -1px 0 white)",
            "drop-shadow(-1px -1px 0 white)",
            "drop-shadow(0 0 3px rgba(0,0,0,0.4))",
          ].join(" "),
        }}
      />

      {visible && (
        <div
          className="absolute bottom-full right-0 mb-2 w-40 bg-white text-black text-xs p-2 rounded shadow-lg z-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="font-semibold truncate">{badge.name}</div>
          <div className="mt-1 leading-tight">{badge.description}</div>
        </div>
      )}
    </div>
  )
}
