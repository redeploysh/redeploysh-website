import { Field } from "./field.js";
import { FieldsTemplate } from "../templates/fields-template.js";

const Fields = {
    template: FieldsTemplate,
    props: {
        uuid: String,
        version: String,
        name: String,
        description: String,
        submitLabel: String,
    },
    computed: {
        fields: function() {
            let mockFieldsData = {
                uuid: 'create-deployable',
                version: 1,
                fields: [
                    {
                        uuid: 'deployment-name',
                        version: 1,
                        type: 'text',
                        label: 'Name',
                        value: null,
                        is_disabled: false,
                        options: [],
                        validation_rules: [{
                            name: 'Length',
                            required: true,
                            min_length: 3,
                            max_length: 100,
                            pattern: null
                        }]
                    },
                    {
                        uuid: 'deployment-type',
                        version: 1,
                        type: 'select',
                        label: 'Type',
                        value: null,
                        is_disabled: false,
                        options: [
                            { value: 'aws', display_name: 'AWS', is_selected: true },
                            { value: 'azure', display_name: 'Azure', is_selected: false },
                            { value: 'docker', display_name: 'Docker', is_selected: false },
                            { value: 'gcp', display_name: 'GCP', is_selected: false },
                            { value: 'jenkins', display_name: 'Jenkins', is_selected: false },
                            { value: 'kubernetes', display_name: 'Kubernetes', is_selected: false },
                            { value: 'terraform', display_name: 'Terraform', is_selected: false },
                            { value: 'other', display_name: 'Other', is_selected: false }
                        ],
                        validation_rules: []
                    }
                ]
            };
            return mockFieldsData.fields;
        }
    },
    components: {
        'field': Field,
    },
    methods: {
        'submit': function() {
            // build a list of fields and values
        }
    },
    data: () => {
        return {
            fieldsData: []
        }
    }
}

export { Fields };