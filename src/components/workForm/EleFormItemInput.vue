<template>
  <Input v-model="form[name]" v-bind="$attrs"></Input>
</template>

<script>
import { Input } from "element-ui";

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
