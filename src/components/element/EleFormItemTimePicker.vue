<template>
  <TimePicker v-model="form[name]" placeholder="任意时间点"> </TimePicker>
</template>

<script>
import { TimePicker } from "element-ui";

export default {
  name: "EleFormItemTimePicker",
  props: ["name"],
  components: {
    TimePicker,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
