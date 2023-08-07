import { createApp } from 'vue'
import App from './App.vue'
import {} from "./plugins";
import SvgIcon from '@/components/LapIcon.vue'// svg component
const app = createApp(App)
// register globally
app.component('SvgIcon', SvgIcon)

app.mount('#app')
