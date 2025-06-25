import { t } from "../strings"

export function SiteFooter() {
  return (
    <div className="mt-2 text-center border-t pt-2">
      {t("footer")} {t("websiteAuthor")} @{" "}
      <a href="https://recordcrash.substack.com" target="_blank" className="underline">
        {t("website")}
      </a>
      {t("madeBy")}
      <a href="https://github.com/recordcrash/webfic-sedai" target="_blank" className="underline">
        {t("viewCode")}
      </a>
    </div>
  )
}
