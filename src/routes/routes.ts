import { RootRoute, Route, Router } from "@tanstack/react-router"
import App from "../pages/App"

const rootRoute = new RootRoute()
const indexRoute = new Route({ getParentRoute: () => rootRoute, path: "/", component: App })

const routeTree = rootRoute.addChildren([indexRoute])

const router = new Router({ routeTree })

export default router

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}