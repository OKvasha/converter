import { defineConfig } from 'vite'
import ViteFontsAutoPlugin from 'vite-plugin-fonts-auto'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

export default defineConfig({
    base: '/converter/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    plugins: [
        ViteFontsAutoPlugin({
            destDir: 'src/assets/fonts',
            preload: false,
            includeCss: false,
            logs: true,
            strict: true,
        }),
        VitePluginSvgSpritemap('./src/assets/images/sprite/*.svg'),
    ],
})
