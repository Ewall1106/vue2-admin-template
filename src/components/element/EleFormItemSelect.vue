<template>
  <Select v-model="form[name]" v-bind="$attrs">
    <Option label="区域一" value="shanghai"></Option>
    <Option label="区域二" value="beijing"></Option>
  </Select>
</template>

<script>
import { Select, Option } from "element-ui";

export default {
  name: "EleFormItemSelect",
  props: ["name"],
  components: {
    Select,
    Option,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
