import { createApp } from 'vue'
import './assets/tailwind.css'
import './style.css'
import App from './App.vue'

import AppButton from './components/global/Button'
import AppSearchBar  from './components/global/SearchBar'
import AppToolTip from './components/global/ToolTip'
import AppTitle from './components/global/Title'
import AppParagraph from './components/global/Paragraph'

const app = createApp(App)

app.component('AppButton', AppButton)
app.component('AppSearchBar', AppSearchBar)
app.component('AppToolTip', AppToolTip)
app.component('AppTitle', AppTitle)
app.component('AppParagraph', AppParagraph)
app.mount('#app')
