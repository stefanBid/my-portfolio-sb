import { defineConfig } from 'vite'
import Components from "unplugin-vue-components/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      }
    }),
    Components({
      resolvers: [IconsResolver({ componentPrefix: "Icon" })],
    }),
    Icons()
  ],
})
