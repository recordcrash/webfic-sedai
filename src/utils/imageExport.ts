import { domToBlob } from "modern-screenshot"

// returns a blob of the wrapper element
export async function imageToBlob(wrapper: HTMLDivElement | null) {
  if (!wrapper) return
  return domToBlob(wrapper, {
    scale: 2,
    filter(el) {
      return !(el instanceof HTMLElement && el.classList.contains("remove"))
    },
  })
}

export async function copyImage(wrapper: HTMLDivElement | null) {
  const blob = await imageToBlob(wrapper)
  if (!blob) return
  await navigator.clipboard.write([ new ClipboardItem({ [blob.type]: blob }) ])
}

export async function downloadImage(wrapper: HTMLDivElement | null) {
  const blob = await imageToBlob(wrapper)
  if (!blob) return
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "ages-of-webfic.png"
  a.click()
  URL.revokeObjectURL(url)
}
