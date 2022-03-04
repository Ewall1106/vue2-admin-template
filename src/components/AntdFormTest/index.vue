<template>
  <Root>
    <AntdForm v-bind="{ 'label-col-span': 4, 'wrapper-col-span': 20 }">
      <AntdFormItem v-bind="{ name: 'name', label: 'name' }">
        <AntdFormItemInput v-bind="{ name: 'name' }"> </AntdFormItemInput>
      </AntdFormItem>

      <AntdFormItem v-bind="{ name: 'age', label: 'age' }">
        <AntdFormItemInput v-bind="{ name: 'age' }"> </AntdFormItemInput>
      </AntdFormItem>

      <AntdFormItem>
        <AntdFormItemActions> </AntdFormItemActions>
      </AntdFormItem>
    </AntdForm>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import AntdForm from "./AntdForm.vue";
import AntdFormItem from "./AntdFormItem.vue";
import AntdFormItemInput from "./AntdFormItemInput.vue";
import AntdFormItemActions from "./AntdFormItemActions.vue";

export default {
  name: "AntdFormTest",
  components: {
    Root,
    AntdForm,
    AntdFormItem,
    AntdFormItemInput,
    AntdFormItemActions,
  },
};
</script>
