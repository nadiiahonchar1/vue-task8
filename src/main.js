import { createApp } from 'vue'
import App from './App.vue'
import alertMixin from './components/alertMixin'

createApp(App).mixin(alertMixin).mount('#app')
