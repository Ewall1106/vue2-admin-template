<template>
  <EleSwitch v-model="form[name]" v-bind="$attrs"></EleSwitch>
</template>

<script>
import { Switch as EleSwitch } from "element-ui";

export default {
  name: "EleFormItemSwitch",
  props: ["name"],
  components: {
    EleSwitch,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
