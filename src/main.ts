import { createApp } from 'vue'
import './assets/tailwind.css'
import './style.css'
import router from './router'
import App from './App.vue'

import AppButton from './components/global/Button'
import AppSearchBar  from './components/global/SearchBar'
import AppTitle from './components/global/Title'
import AppParagraph from './components/global/Paragraph'

// Create a Vue app const
const app = createApp(App)

// Register global components
app.component('AppButton', AppButton)
app.component('AppSearchBar', AppSearchBar)
app.component('AppTitle', AppTitle)
app.component('AppParagraph', AppParagraph)

//Add external functionality setup  to the app
app.use(router)

// Mount the app to the DOM
app.mount('#app')
