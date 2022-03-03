<template>
  <Input v-model="form[name]" v-bind="$attrs" />
</template>

<script>
import { Input } from "ant-design-vue";
export default {
  name: "EleFormItemInput",
  props: ["name"],
  components: {
    Input,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
