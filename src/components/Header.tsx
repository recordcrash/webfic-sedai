import { t } from "../strings"
export function Header({ readCount, total }: { readCount: number; total: number }) {
  return (
    <div className="border-b justify-between p-2 text-lg font-bold flex">
      <h1>
        {t("title")}
        <span className="remove"> - {t("subtitle")}</span>
        <span className="ml-2 text-zinc-400 font-medium">
          {t("website")}
        </span>
      </h1>
      <span className="shrink-0 whitespace-nowrap">
        {t("readCount", { count: readCount, total })}
      </span>
    </div>
  )
}
