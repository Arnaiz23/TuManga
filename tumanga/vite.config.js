import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"

export default defineConfig({
  base: "/",
  plugins: [react(), jsconfigPaths()],
})
