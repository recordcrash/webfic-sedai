import { useState } from "react"
import { t } from "../constants/strings"
import { Modal } from "./Modal"

export function SiteFooter() {
  const [isChangelogOpen, setIsChangelogOpen] = useState(false)

  return (
    <>
      <div className="mt-2 text-center border-t pt-2 space-x-2">
        {t("footer")} {t("websiteAuthor")} @{" "}
        <a
          href="https://recordcrash.substack.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("website")}
        </a>{" "}
        <a
          href="https://github.com/recordcrash/webfic-sedai"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {t("viewCode")}
        </a>
        <button
          type="button"
          className="underline"
          onClick={() => setIsChangelogOpen(true)}
        >
          {t("changelog")}
        </button>
      </div>

      <Modal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">{t("changelog")}</h2>
        <div className="max-h-[60vh] overflow-y-auto space-y-6 text-left">
          <section>
            <h3 className="font-semibold">2025-06-26</h3>
            <ul className="list-disc pl-5">
              <li>Fixed inconsistent appearances with a static font</li>
              <li>Added changelog</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold">2025-06-25</h3>
            <ul className="list-disc pl-5">
              <li>Added multiple webfic states</li>
              <li>Improved webfic list (v2)</li>
              <li>Add privacy preserving analytics</li>
              <li>Add secret "written by" feature (W key)</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold">2025-06-23</h3>
            <ul className="list-disc pl-5">
              <li>Site release</li>
            </ul>
          </section>
        </div>
      </Modal>
    </>
  )
}
