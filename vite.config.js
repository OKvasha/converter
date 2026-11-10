import { defineConfig } from "vite"
export default defineConfig({
    // Имя репозитория на GitHub — критично для GitHub Pages!
    base: "/converter/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
})
