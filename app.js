import { AppTemplate } from './templates/app-template.js'
import { TopNavigation } from './components/top-navigation.js'
import { DeployableCreateModal }  from "./components/deployable-create-modal.js";
import { Page } from './components/page.js'

const { createApp } = Vue
createApp({
    components: {
        'top-navigation': TopNavigation,
        'page': Page,
        'deployable-create-modal': DeployableCreateModal,
    },
    template: AppTemplate,
    el: '#results-app',
}).mount('#app')
