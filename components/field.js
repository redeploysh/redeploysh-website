import { FieldTemplate } from '../templates/field-template.js';

const Field = {
    template: FieldTemplate,
    props: {
        field: Object,
    },
    components: {
    },
    methods: {
        'onChange': function() {
            // run update() on the parent form
            this.$parent.update();
        }
    }
}

export { Field }