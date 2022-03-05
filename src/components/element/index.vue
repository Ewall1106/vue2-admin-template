<template>
  <div class="home">
    <Form v-bind="{ 'label-width': '100px' }">
      <FormItem v-bind="{ name: 'name', label: '名字' }">
        <FormItemInput v-bind="{ name: 'name' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'age', label: 'age' }">
        <FormItemInput v-bind="{ name: 'age' }" />
      </FormItem>

      <FormItem v-bind="{ name: 'city', label: 'city' }">
        <FormItemSelect v-bind="{ name: 'city' }" />
      </FormItem>

      <FormItem>
        <EleFormItemActions />
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from "./EleForm.vue";
import FormItem from "./EleFormItem.vue";
import FormItemInput from "./EleFormItemInput.vue";
import FormItemSelect from "./EleFormItemSelect.vue";
import EleFormItemActions from "./EleFormItemActions.vue";

export default {
  components: {
    Form,
    FormItem,
    FormItemInput,
    FormItemSelect,
    EleFormItemActions,
  },
};
</script>
