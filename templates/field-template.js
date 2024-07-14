const FieldTemplate = `
    <div :data-id="'field-' + field.uuid" class="field">
        <label class="label" v-html="field.label" />
        <input v-if="field.type == 'input' || field.type == 'text'" :data-uuid="field.uuid" :data-version="field.version" :class="field.is_disabled ? 'is-disabled input': 'input'" :placeholder="field.placeholder"  />
        <select v-if="field.type == 'select'" :class="field.is_disabled ? 'select is-disabled' : 'select'">
                <option v-for="option in field.options" :value="option.value" :selected="option.is_selected ? 'selected' : false" v-html="option.display_name"></option>
        </select>
        <p v-if="field.error" class="help is-danger" v-html="field.error"></p>
    </div>

`;

export { FieldTemplate }