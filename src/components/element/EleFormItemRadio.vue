<template>
  <RadioGroup v-model="form[name]">
    <Radio :label="1">备选项</Radio>
    <Radio :label="2">备选项</Radio>
    <Radio :label="3">备选项</Radio>
  </RadioGroup>
</template>

<script>
import { RadioGroup, Radio } from "element-ui";

export default {
  name: "EleFormItemRadio",
  props: ["name"],
  components: {
    RadioGroup,
    Radio,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
