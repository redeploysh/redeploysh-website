import { TopNavigationTemplate } from '../templates/top-navigation-template.js';

const TopNavigation = {
    template: TopNavigationTemplate,
    computed: {
        'doShowSearch': function() {
            return this.showsearch;
        }
    },
    methods: {
        'showSearch': function() {
            this.showsearch = true
        },
        'hideSearch': function() {
            this.showsearch = false
        }
    },
    data: function() {
        return {
            showsearch: false
        }
    }
}

export { TopNavigation }