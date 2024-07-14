import { DeployableCreateModalTemplate } from '../templates/deployable-create-modal-template.js';
import { Fields } from "./fields.js";

const DeployableCreateModal = {
    template: DeployableCreateModalTemplate,
    components: {
        'fields': Fields,
    },
    // data: function() {
    //     return {
    //         field: {
    //             uuid: 'myuuid',
    //             version: '1.0.0',
    //             display_name: 'This ia a Field Name',
    //             type: 'input',
    //             placeholder: 'This is a placeholder',
    //             options: [],
    //             is_disabled: false,
    //             error: "This is an error message for the field",
    //             // add a validation object
    //             validation: {
    //                 required: true,
    //                 min_length: 10,
    //                 max_length: 100,
    //                 pattern: '^[a-zA-Z0-9]*$',
    //                 message: 'The field must be between 10 and 100 characters long and contain only letters and numbers.'
    //             }
    //         }
    //     }
    // }
}

export { DeployableCreateModal }