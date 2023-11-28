import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"

import router from "./routes/routes"
import "./index.css"

ReactDOM.createRoot(document.querySelector("#root")!).render(<RouterProvider router={router} />)
