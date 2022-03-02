<template>
  <FormItem v-bind="$attrs" :prop="name">
    <slot />
  </FormItem>
</template>

<script>
import { FormItem } from "element-ui";

export default {
  name: "EleFormItem",
  props: ["name"],
  components: {
    FormItem,
  },
};
</script>
