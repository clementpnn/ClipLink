import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import router from "./routes/routes"
import "./styles/index.css"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
