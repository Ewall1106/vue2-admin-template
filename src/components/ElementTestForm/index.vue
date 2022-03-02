<template>
  <Root>
    <EleForm v-bind="{ 'label-width': '100px' }">
      <EleFormItem v-bind="{ name: 'name', label: 'name' }">
        <EleFormItemInput v-bind="{ name: 'name' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem v-bind="{ name: 'age', label: 'age' }">
        <EleFormItemInput v-bind="{ name: 'age' }"> </EleFormItemInput>
      </EleFormItem>

      <EleFormItem>
        <EleFormItemActions> </EleFormItemActions>
      </EleFormItem>
    </EleForm>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import EleForm from "./EleForm.vue";
import EleFormItem from "./EleFormItem.vue";
import EleFormItemInput from "./EleFormItemInput.vue";
import EleFormItemActions from "./EleFormItemActions.vue";

export default {
  name: "ElementTestForm",
  components: {
    Root,
    EleForm,
    EleFormItem,
    EleFormItemInput,
    EleFormItemActions,
  },
};
</script>
