import { useState, useEffect } from "react"

export function useKeyPress(targetKey: string) {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === targetKey.toLowerCase()) setPressed(true)
    }
    const up = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === targetKey.toLowerCase()) setPressed(false)
    }
    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)
    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }
  }, [targetKey])

  return pressed
}