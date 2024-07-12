import { PageTemplate } from '../templates/page-template.js';
import { Deployable } from "./deployable.js";

const Page = {
    template: PageTemplate,
    components: {
        'deployable': Deployable
    }
}

export { Page }