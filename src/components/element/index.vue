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

      <FormItem v-bind="{ name: 'delivery', label: '及时配送' }">
        <FormItemSwitch v-bind="{ name: 'delivery' }" />
      </FormItem>

      <FormItem v-bind="{ type: 'type', label: '活动性质' }">
        <FormItemCheckboxGroup v-bind="{ name: 'type' }" />
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
import FormItemSwitch from "./EleFormItemSwitch.vue";
import EleFormItemActions from "./EleFormItemActions.vue";
import FormItemCheckboxGroup from "./EleFormItemCheckbox.vue";

export default {
  components: {
    Form,
    FormItem,
    FormItemInput,
    FormItemSelect,
    FormItemSwitch,
    EleFormItemActions,
    FormItemCheckboxGroup,
  },
};
</script>
