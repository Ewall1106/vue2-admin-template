<template>
  <FormModelItem v-bind="$attrs" :prop="name">
    <slot />
  </FormModelItem>
</template>

<script>
import { FormModel } from "ant-design-vue";

export default {
  name: "AntdFormItem",
  props: ["name"],
  components: {
    FormModelItem: FormModel.Item,
  },
};
</script>
