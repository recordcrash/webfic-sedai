import { t } from "../constants/strings"

interface HeaderProps {
  readCount: number
  total: number
  writtenCount?: number
}

export function Header({ readCount, total, writtenCount = 0 }: HeaderProps) {
  return (
    <div className="border-b justify-between p-2 text-lg font-bold flex">
      <h1>
        {t("title")}
        <span className="remove"> - {t("subtitle")}</span>
        <span className="ml-2 text-zinc-400 font-medium">{t("website")}</span>
      </h1>
      <span className="shrink-0 whitespace-nowrap">
        {t("readCount", { count: readCount, total })}
        {writtenCount > 0 && <> {t("writtenCount", { count: writtenCount })}</>}
      </span>
    </div>
  )
}
