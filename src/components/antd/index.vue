<template>
  <div class="home">
    <Form>
      <FormItem v-bind="{ name: 'name', label: '名字' }">
        <FormItemInput v-bind="{ name: 'name' }" />
      </FormItem>

      <FormItem>
        <AntdFormItemActions />
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Form from "./AntdForm.vue";
import FormItem from "./AntdFormItem.vue";
import FormItemInput from "./AntdFormItemInput.vue";
import AntdFormItemActions from "./AntdFormItemActions.vue";

export default {
  components: {
    Form,
    FormItem,
    FormItemInput,
    AntdFormItemActions,
  },
};
</script>
