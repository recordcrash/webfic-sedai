import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
)
