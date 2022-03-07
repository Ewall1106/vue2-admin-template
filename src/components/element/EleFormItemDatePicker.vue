<template>
  <DatePicker
    v-model="form[name]"
    type="datetimerange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </DatePicker>
</template>

<script>
import { DatePicker } from "element-ui";

export default {
  name: "EleFormItemDatePicker",
  props: ["name"],
  components: {
    DatePicker,
  },
  inject: ["getForm"],
  data() {
    return {
      form: this.getForm(),
    };
  },
};
</script>
