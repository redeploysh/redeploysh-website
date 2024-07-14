const FieldsTemplate = `
    
    <div class="form">
        <div class="form-header">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
        </div>
        <div class="form-body">
            <div class="form-fields">
                <div v-for="field in fields">
                    <field :field="field"></field>
                </div>
            </div>
        </div>
        <div class="form-footer">
            <button @click="submit()">{{ submitLabel }}</button>
        </div>
        
    </div>
    
`;

export { FieldsTemplate };