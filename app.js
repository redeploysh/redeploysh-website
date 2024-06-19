import { AppTemplate } from './templates/app-template.js'
import { TopNavigation } from './components/top-navigation.js'

const { createApp } = Vue
createApp({
    components: {
        'top-navigation': TopNavigation,
    },
    template: AppTemplate,
    el: '#results-app',
}).mount('#app')
