import IconSvg from "./IconSvg.vue";
import { App } from "vue";
export default {
    install: (app: App) => {
        app.component("IconSvg", IconSvg)
    }
}