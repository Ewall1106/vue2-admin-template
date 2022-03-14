<template>
  <el-table-column align="center" type="selection" width="50"></el-table-column>
</template>

<script>
import Emitter from "element-ui/src/mixins/emitter";

export default {
  name: "EleTableColumnCheckbox",
  componentName: "EleTableColumnCheckbox",
  mixins: [Emitter],
  inject: ["tableData"],
  data() {
    return {
      checked: false,
      indeterminate: false,
    };
  },
  created() {
    this.$on("handleGroupDisabled", this.handleGroupDisabled);
  },
  methods: {
    handleGroupDisabled(val) {
      console.log(">>>>>>>>>>>>", val);
    },
    selectionChange(payload) {
      console.log(">>>>", payload);
    },
    click() {
      this.checked = true;
      this.indeterminate = true;
    },
  },
};
</script>
