<template>
  <FormModelItem
    v-bind="$attrs"
    :prop="name"
    :label-col="{ span: labelColSpan, offset: labelColOffset }"
    :wrapper-col="{ span: wrapperColSpan, offset: wrapperColOffset }"
  >
    <slot />
  </FormModelItem>
</template>

<script>
import { FormModel } from "ant-design-vue";

export default {
  name: "AntdFormItem",

  props: {
    name: String,
    labelColSpan: {
      type: Number,
      default: 4,
    },
    wrapperColSpan: {
      type: Number,
      default: 20,
    },
    labelColOffset: {
      type: Number,
      default: 0,
    },
    wrapperColOffset: {
      type: Number,
      default: 0,
    },
  },
  components: {
    FormModelItem: FormModel.Item,
  },
};
</script>
